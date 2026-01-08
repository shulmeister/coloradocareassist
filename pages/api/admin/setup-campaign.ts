import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';
const SibApiV3Sdk = require('sib-api-v3-sdk');

export default withIronSessionApiRoute(async function handler(req, res) {
  if (!req.session.user || !req.session.user.admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const contactsApi = new SibApiV3Sdk.ContactsApi();
  const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

  try {
    // 1. Create the List
    let listId;
    try {
      const createList = new SibApiV3Sdk.CreateList();
      createList.name = "Wealth Managers & Attorneys (Drip)";
      createList.folderId = 1; // Default folder, usually exists
      const listData = await contactsApi.createList(createList);
      listId = listData.id;
      console.log(`Created List: ${listId}`);
    } catch (e) {
      console.log('List might already exist or folder ID 1 issue. Proceeding with templates.');
    }

    // 2. Define Email Templates
    const sender = { name: "Jason Shulmeister", email: process.env.CONTACT_FROM_EMAIL || "care@coloradocareassist.com" };
    
    const templates = [
      {
        name: "Partner Drip 1: Introduction",
        subject: "Enhancing your client service with reliable home care",
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <p>Hi {{contact.FIRSTNAME}},</p>
              
              <p>As a trusted advisor, you work hard to protect your clients' assets and future. But when their health or independence begins to decline, the complexity of managing their care can quickly overwhelm even the best financial plans.</p>
              
              <p><strong>Colorado CareAssist</strong> partners with wealth managers and elder law attorneys to provide the "care management" piece of the puzzle.</p>
              
              <p>We specialize in:</p>
              <ul>
                <li><strong>Complex Care:</strong> Dementia, Alzheimer's, and post-surgical support.</li>
                <li><strong>Veterans Benefits:</strong> Navigating the VA system to unlock care funding.</li>
                <li><strong>Crisis Response:</strong> We can have a care manager on-site within hours, not days.</li>
              </ul>
              
              <p>We aren't just a staffing agency; we are care partners who ensure your clients' funds are used efficiently to maintain their quality of life.</p>
              
              <p>I'd love to connect briefly to share how we can support your practice.</p>
              
              <p>Best regards,</p>
              
              <p><strong>Jason Shulmeister</strong><br>
              Colorado CareAssist<br>
              <a href="https://coloradocareassist.com">coloradocareassist.com</a><br>
              (303) 757-1777</p>
            </body>
          </html>`
      },
      {
        name: "Partner Drip 2: Crisis Management",
        subject: "The resource you need when a client calls in crisis",
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <p>Hi {{contact.FIRSTNAME}},</p>
              
              <p>It's the call every advisor dreads: A client's adult child calls you in a panic. Mom had a fall, Dad's dementia is worsening, and they don't know what to do.</p>
              
              <p>Instead of scrambling for referrals, you can give them one reliable number: <strong>Colorado CareAssist</strong>.</p>
              
              <p>We act as the "Easy Button" for families in crisis:</p>
              <ul>
                <li><strong>Immediate Assessment:</strong> We assess safety and needs instantly.</li>
                <li><strong>24/7 Availability:</strong> We answer phones and texts live.</li>
                <li><strong>Licensed & Insured:</strong> Fully compliant protection for peace of mind.</li>
              </ul>
              
              <p>Next time a family needs help, you can look like a hero by having the solution ready.</p>
              
              <p>Best regards,</p>
              
              <p><strong>Jason Shulmeister</strong><br>
              Colorado CareAssist<br>
              (303) 757-1777</p>
            </body>
          </html>`
      },
      {
        name: "Partner Drip 3: Trust & Transparency",
        subject: "Why top attorneys trust Colorado CareAssist",
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <p>Hi {{contact.FIRSTNAME}},</p>
              
              <p>Transparency is the currency of trust. When you refer a client to a home care agency, your reputation is on the line.</p>
              
              <p>At <strong>Colorado CareAssist</strong>, we operate with a level of transparency that fiduciaries and attorneys appreciate:</p>
              <ul>
                <li><strong>Clear Pricing:</strong> No hidden fees or surprise surcharges.</li>
                <li><strong>Consistent Communication:</strong> You and the family are kept in the loop.</li>
                <li><strong>Professional Caregivers:</strong> Rigorously vetted, trained, and employed by us (never 1099 contractors).</li>
              </ul>
              
              <p>Are you open to a quick coffee or call next week? I'd like to learn more about your firm and see if we're a good fit for your referral network.</p>
              
              <p>Best regards,</p>
              
              <p><strong>Jason Shulmeister</strong><br>
              Colorado CareAssist<br>
              (303) 757-1777</p>
            </body>
          </html>`
      }
    ];

    const createdTemplates = [];
    for (const t of templates) {
      const template = new SibApiV3Sdk.CreateSmtpTemplate();
      template.sender = sender;
      template.templateName = t.name;
      template.subject = t.subject;
      template.htmlContent = t.htmlContent;
      template.isActive = true;

      const res = await transactionalEmailsApi.createSmtpTemplate(template);
      createdTemplates.push({ name: t.name, id: res.id });
    }

    return res.json({ 
      success: true, 
      message: "Assets created in Brevo", 
      listId, 
      templates: createdTemplates 
    });

  } catch (error: any) {
    console.error('Brevo Setup Error:', error);
    return res.status(500).json({ message: error.message, details: error.response?.body });
  }
}, sessionOptions);
