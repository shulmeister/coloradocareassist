import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException
import csv
import os
import time
import logging
from datetime import datetime, timedelta, timezone

# Configure logging
logging.basicConfig(
    level=logging.INFO, 
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# Configuration
API_KEY = os.getenv('BREVO_API_KEY')
if not API_KEY:
    raise ValueError("BREVO_API_KEY not found in environment")

configuration = sib_api_v3_sdk.Configuration()
configuration.api_key['api-key'] = API_KEY
api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))

SENDER_NAME = os.getenv('SENDER_NAME') or os.getenv('CONTACT_FROM_NAME') or 'Colorado CareAssist'
SENDER_EMAIL = os.getenv('SENDER_EMAIL') or os.getenv('CONTACT_FROM_EMAIL') or 'care@coloradocareassist.com'
MY_NAME = os.getenv('MY_NAME', 'Partner')

def send_goldman_outreach(row):
    # Logic Branching for Personalization
    # Defaulting to "Boulder" or similar if County is missing to avoid "None probate trends"
    county = row.get('County', 'Colorado')
    firm = row.get('Firm', 'your firm')
    firstname = row.get('Firstname', 'Partner')
    lastname = row.get('Lastname', '')
    email = row.get('Email')
    coi_type = row.get('COI_TYPE', 'Partner')

    # --- EMAIL 1: IMMEDIATE ---
    subject_map = {
        "Attorney": f"Question regarding {county} probate trends",
        "Banker": f"UHNW Client Retention in {county}",
        "CPA": f"Tax Efficiency for {county} Families"
    }
    
    # "Institutional-Chic" body
    body_1 = f"""
    <p>Hi {firstname},</p>
    
    <p>I've been following {firm}'s work in the {county} estate community.</p>
    
    <p>I am looking to connect with a few select partners who specialize in end-of-life roadmap management for UHNW families. Specifically, I have some insights on liquidity preservation that may benefit your current planning process.</p>
    
    <p>Are you open to a brief, peer-level sync next Tuesday?</p>
    
    <p>Best,<br>
    {MY_NAME}</p>
    """

    send_smtp_1 = sib_api_v3_sdk.SendSmtpEmail(
        to=[{"email": email, "name": f"{firstname} {lastname}"}],
        subject=subject_map.get(coi_type, "Strategic Partnership"),
        html_content=f"<html><body>{body_1}</body></html>",
        sender={"name": SENDER_NAME, "email": SENDER_EMAIL},
        tags=["drip_stage_1", "coi_outreach"]
    )

    # --- EMAIL 2: THE NURTURE (96 HOUR DELAY) ---
    # Logic: If no reply in 4 days, trigger Email 2.
    # Implemented via 'scheduled_at' API parameter.
    
    scheduled_time = (datetime.now(timezone.utc) + timedelta(hours=96)).strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + "Z"
    
    body_2 = f"""
    <p>Hi {firstname},</p>
    
    <p>I’m following up on my previous note. I’ll be attending the EPC Southeast Denver Roundtable on January 21st (or following the briefing closely) specifically to hear the consensus on the 'One Big Beautiful Act' implementation.</p>
    
    <p>Now that the $15M exemption is permanent, many of the HNW families I'm speaking with in {county} are shifting from "scramble mode" to long-term legacy governance. I'm curious if you're seeing a similar shift in your practice at {firm}.</p>
    
    <p>If you're going to be at the Roundtable, I'd enjoy grabbing a coffee afterward to compare notes on how this changes the roadmap for the next 10 years.</p>
    
    <p>Best,<br>
    {MY_NAME}</p>
    """

    send_smtp_2 = sib_api_v3_sdk.SendSmtpEmail(
        to=[{"email": email, "name": f"{firstname} {lastname}"}],
        subject=f"Re: {county} legacy planning / Jan 21st Roundtable",
        html_content=f"<html><body>{body_2}</body></html>",
        sender={"name": SENDER_NAME, "email": SENDER_EMAIL},
        scheduled_at=scheduled_time,
        tags=["drip_stage_2", "nurture"]
    )

    try:
        # Step 1: Send Immediate Hook
        api_instance.send_transac_email(send_smtp_1)
        logging.info(f"✅ Email 1 Sent to {email} ({coi_type})")
        
        # Step 2: Schedule Nurture (Logic Check handled by Brevo Scheduler)
        api_instance.send_transac_email(send_smtp_2)
        logging.info(f"🕒 Email 2 Scheduled for {email} at {scheduled_time} (Trigger: +96h)")

    except ApiException as e:
        logging.error(f"❌ Error for {email}: {e}")

# Run Deployment
def main():
    csv_path = 'scripts/Master_Lead_List.csv'
    if not os.path.exists(csv_path):
        logging.error(f"File not found: {csv_path}")
        return

    logging.info(f"Starting campaign run for {csv_path}...")
    
    with open(csv_path, mode='r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        count = 0
        for row in reader:
            send_goldman_outreach(row)
            count += 1
            # Rate limiting: Brevo allows ~60/min.
            time.sleep(1.5) 
            
    logging.info(f"Campaign complete. Processed {count} contacts.")

if __name__ == "__main__":
    main()
