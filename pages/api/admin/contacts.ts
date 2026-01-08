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

  try {
    // List contacts from all lists (or specific list if preferred)
    // limit: 50, sort: desc
    const data = await contactsApi.getContacts({ limit: 50, sort: 'desc' });
    
    return res.json(data.contacts);
  } catch (error: any) {
    console.error('Brevo API Error:', error);
    return res.status(500).json({ message: error.message });
  }
}, sessionOptions);
