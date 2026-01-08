import type { NextApiRequest, NextApiResponse } from 'next';
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Rate limiting (simple in-memory store - use Redis in production for multiple instances)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute per IP

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  care_needs: string;
  timeframe: string;
  preferred_contact_method: string;
  honeypot?: string; // Spam protection
}

interface ErrorResponse {
  error: string;
  details?: string;
}

interface SuccessResponse {
  success: boolean;
  message: string;
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Input validation
function validateInput(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Name is required and must be at least 2 characters';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Valid email is required';
  }

  if (!data.phone || !/^[\d\s\-\(\)]+$/.test(data.phone)) {
    return 'Valid phone number is required';
  }

  if (!data.location || data.location.trim().length < 2) {
    return 'Location is required';
  }

  if (!data.care_needs || data.care_needs.trim().length < 5) {
    return 'Please describe your care needs';
  }

  if (!data.timeframe) {
    return 'Timeframe is required';
  }

  if (!data.preferred_contact_method) {
    return 'Preferred contact method is required';
  }

  // Check honeypot (should be empty)
  if (data.honeypot && data.honeypot.trim() !== '') {
    return 'Invalid submission';
  }

  return null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
              req.socket.remoteAddress || 
              'unknown';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ 
      error: 'Too many requests', 
      details: 'Please wait a minute before submitting again' 
    });
  }

  // Validate environment variables
  const brevoApiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const fromName = process.env.CONTACT_FROM_NAME || 'Colorado CareAssist Website';

  if (!brevoApiKey || !toEmail || !fromEmail) {
    console.error('Missing required environment variables for email service');
    return res.status(500).json({ 
      error: 'Email service configuration error',
      details: 'Please contact support'
    });
  }

  // Parse and validate input
  const formData: ContactFormData = req.body;
  const validationError = validateInput(formData);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    // Initialize Brevo API client
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = brevoApiKey;
    
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Prepare email content
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Care Plan Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${formData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${formData.location}</div>
              </div>
              <div class="field">
                <div class="label">Care Needs:</div>
                <div class="value">${formData.care_needs}</div>
              </div>
              <div class="field">
                <div class="label">Timeframe:</div>
                <div class="value">${formData.timeframe}</div>
              </div>
              <div class="field">
                <div class="label">Preferred Contact Method:</div>
                <div class="value">${formData.preferred_contact_method}</div>
              </div>
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })} MT</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Colorado CareAssist website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Care Plan Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Care Needs: ${formData.care_needs}
Timeframe: ${formData.timeframe}
Preferred Contact Method: ${formData.preferred_contact_method}
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })} MT
    `;

    // Send email via Brevo
    const sendSmtpEmail = {
      sender: { email: fromEmail, name: fromName },
      to: [{ email: toEmail, name: 'Colorado CareAssist' }],
      replyTo: { email: formData.email, name: formData.name },
      subject: `New Care Plan Request from ${formData.name}`,
      htmlContent: emailHtml,
      textContent: emailText
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! We received your request and will contact you shortly.'
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Log error details without exposing sensitive information
    if (error.response) {
      console.error('Brevo API error:', error.response.body);
    }

    return res.status(500).json({
      error: 'Failed to send your request',
      details: 'Please try again or call us directly at (303) 757-1777'
    });
  }
}

