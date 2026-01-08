import os
import csv
import time
import logging
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException

# Configure logging
logging.basicConfig(
    level=logging.INFO, 
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)

def main():
    # 1. Connect to Brevo API
    api_key = os.getenv('BREVO_API_KEY')
    if not api_key:
        logging.error("BREVO_API_KEY not found in environment variables.")
        print("Please set BREVO_API_KEY in your environment.")
        return

    # Configure API key authorization: api-key
    configuration = sib_api_v3_sdk.Configuration()
    configuration.api_key['api-key'] = api_key

    # Create instances of API classes
    contacts_api = sib_api_v3_sdk.ContactsApi(sib_api_v3_sdk.ApiClient(configuration))
    transactional_api = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))

    # 2. Read 'Master_Lead_List.csv'
    # Try local path first, then scripts/ path
    csv_candidates = ['Master_Lead_List.csv', 'scripts/Master_Lead_List.csv']
    csv_file = None
    for path in csv_candidates:
        if os.path.exists(path):
            csv_file = path
            break
            
    if not csv_file:
        logging.error("Master_Lead_List.csv not found.")
        return

    logging.info(f"Processing lead list: {csv_file}")

    try:
        with open(csv_file, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                process_contact(row, contacts_api, transactional_api)
                
                # Rate limiting: Brevo allows ~60/min. 
                # We perform up to 2 API calls per contact (Create/Update + Send).
                # Sleeping 2 seconds guarantees we stay well under the limit.
                time.sleep(2) 
                
    except Exception as e:
        logging.error(f"An unexpected error occurred: {e}")

def process_contact(row, contacts_api, transactional_api):
    email = row.get('Email')
    first_name = row.get('FirstName', '')
    last_name = row.get('LastName', '')
    coi_type = row.get('COI_TYPE', '')
    county = row.get('COUNTY', 'Denver') # Default to Denver if missing
    last_event = row.get('LAST_EVENT', '')

    if not email:
        logging.warning("Skipping row with missing email.")
        return

    # 3. Update/Create Contact in Brevo
    try:
        # Prepare attributes payload
        attributes = {
            'COI_TYPE': coi_type,
            'COUNTY': county,
            'LAST_EVENT': last_event,
            'FIRSTNAME': first_name,
            'LASTNAME': last_name
        }
        
        # Clean up empty attributes to avoid API errors if field isn't defined in Brevo
        attributes = {k: v for k, v in attributes.items() if v}

        create_contact = sib_api_v3_sdk.CreateContact(
            email=email,
            attributes=attributes,
            update_enabled=True
        )
        contacts_api.create_contact(create_contact)
        logging.info(f"Contact synced: {email}")
    except ApiException as e:
        # If error is not 400 (Bad Request - e.g. already exists but update_enabled=True should handle it), log it
        logging.error(f"Error syncing contact {email}: {e}")

    # 4. Generate 'Transactional Email' (Logic Branch)
    subject = "Jan 8th Meeting Follow-up" # Default fallback
    if coi_type == 'Attorney':
        subject = "Probate Efficiency"
    elif coi_type == 'Banker':
        subject = "UHNW Retention"

    # 5. Institutional-Chic Voice
    # "One-breath" rule: short, punchy, human.
    # No "Hope this finds you well".
    
    sender_name = os.getenv('SENDER_NAME') or os.getenv('CONTACT_FROM_NAME') or 'Colorado CareAssist'
    sender_email = os.getenv('SENDER_EMAIL') or os.getenv('CONTACT_FROM_EMAIL') or 'admin@coloradocareassist.com'
    my_name = os.getenv('MY_NAME', 'Partner')

    html_content = f"""
<html>
<body>
    <p>I was reviewing the {county} registration list for the Jan 8th meeting and noted your firm's participation.</p>
    
    <p>Given the complexity of your cases, I wanted to flag a resource for the non-clinical logistics that often drag out timelines.</p>
    
    <p>We handle the care transitions so you can focus on the estate and financial strategy.</p>
    
    <p>Best,<br>
    {my_name}</p>
</body>
</html>
    """
    
    # Send
    try:
        send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(
            to=[{"email": email, "name": f"{first_name} {last_name}"}],
            sender={"email": sender_email, "name": sender_name},
            subject=subject,
            html_content=html_content,
            tags=["drip_stage_1", "coi_outreach"]
        )
        
        transactional_api.send_transac_email(send_smtp_email)
        logging.info(f"Email 1 sent to {email} | Subject: {subject}")
        
    except ApiException as e:
        logging.error(f"Error sending email to {email}: {e}")

if __name__ == "__main__":
    main()
