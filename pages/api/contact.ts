import type { NextApiRequest, NextApiResponse } from 'next';
const SibApiV3Sdk = require('sib-api-v3-sdk');
import { captureException } from '@/lib/sentry';

// Rate limiting: attempt Redis-backed limiter when REDIS_URL is provided,
// otherwise fall back to a simple in-memory store (single dyno only).
let redisClient: any = null;
try {
  if (process.env.REDIS_URL) {
    // Require dynamically so absence of package doesn't crash local dev
    // Install `ioredis` in production environment (Heroku) for Redis support.
    // If not available, we'll catch and keep redisClient null.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const IORedis = require('ioredis');
    redisClient = new IORedis(process.env.REDIS_URL, {
      tls: { rejectUnauthorized: false }
    });
  }
} catch (e) {
  redisClient = null;
}

// In-memory fallback
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
async function checkRateLimit(ip: string): Promise<boolean> {
  // Redis-backed rate limiting
  try {
    if (redisClient) {
      const key = `rl:${ip}`;
      // INCR and set expiry if first
      const count = await redisClient.incr(key);
      if (count === 1) {
        await redisClient.pexpire(key, RATE_LIMIT_WINDOW);
      }
      return count <= RATE_LIMIT_MAX_REQUESTS;
    }
  } catch (err) {
    // Redis error -> fall through to in-memory fallback
    console.error('Redis rate limit error, falling back to memory limiter', (err as any)?.message || err);
  }

  // In-memory fallback (works only for single-process dev / small Heroku apps)
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
  try {
    const allowed = await checkRateLimit(ip);
    if (!allowed) {
      return res.status(429).json({ 
        error: 'Too many requests', 
        details: 'Please wait a minute before submitting again' 
      });
    }
  } catch (err) {
    // If rate limit check fails unexpectedly, log and allow (fail open)
    console.error('Rate limit check failed:', (err as any)?.message || err);
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

    // Send Auto-Reply to the user
    try {
      const autoReplyHtml = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #2563eb;">We received your request</h2>
              <p>Dear ${formData.name},</p>
              <p>Thank you for contacting Colorado CareAssist. We have received your request for a care plan.</p>
              <p>One of our care managers will review your information and contact you shortly (usually within 24 hours) to discuss your needs.</p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0;"><strong>If this is an urgent matter, please call us directly:</strong></p>
                <p style="margin: 10px 0 0 0; font-size: 18px; font-weight: bold;">(303) 757-1777</p>
              </div>
              <p>Best regards,</p>
              <p><strong>The Colorado CareAssist Team</strong><br>
              <a href="https://coloradocareassist.com" style="color: #2563eb; text-decoration: none;">coloradocareassist.com</a></p>
            </div>
          </body>
        </html>
      `;

      const sendAutoReply = {
        sender: { email: fromEmail, name: fromName },
        to: [{ email: formData.email, name: formData.name }],
        subject: "We received your request - Colorado CareAssist",
        htmlContent: autoReplyHtml,
        textContent: `Dear ${formData.name},\n\nThank you for contacting Colorado CareAssist. We have received your request for a care plan.\n\nOne of our care managers will review your information and contact you shortly.\n\nIf this is an urgent matter, please call us directly at (303) 757-1777.\n\nBest regards,\nThe Colorado CareAssist Team`
      };

      await apiInstance.sendTransacEmail(sendAutoReply);
    } catch (autoReplyError) {
      console.error('Failed to send auto-reply:', autoReplyError);
      // Don't fail the request if auto-reply fails, as the lead was already captured
    }

    // Send SMS Notification (RingCentral)
    const rcClientId = process.env.RINGCENTRAL_CLIENT_ID;
    const rcClientSecret = process.env.RINGCENTRAL_CLIENT_SECRET;
    const rcServer = process.env.RINGCENTRAL_SERVER || 'https://platform.ringcentral.com';
    const rcJwt = process.env.RINGCENTRAL_JWT;
    const rcFrom = process.env.RINGCENTRAL_FROM_NUMBER;
    const rcTo = process.env.RINGCENTRAL_TO_NUMBER;

    if (rcClientId && rcClientSecret && rcJwt && rcFrom && rcTo) {
      console.log('Sending SMS notification via RingCentral...');
      try {
        const RingCentral = require('@ringcentral/sdk').SDK;
        const rcsdk = new RingCentral({
          server: rcServer,
          clientId: rcClientId,
          clientSecret: rcClientSecret
        });
        const platform = rcsdk.platform();

        await platform.login({ jwt: rcJwt });

        const smsText = `New Lead: ${formData.name} (${formData.phone}) in ${formData.location}. Needs: ${formData.care_needs.substring(0, 50)}...`;

        // Dynamically find a valid 'from' number for the logged-in user
        // to avoid 'Resource not found' errors if the configured number doesn't belong to the extension.
        const phoneNumbersResponse = await platform.get('/restapi/v1.0/account/~/extension/~/phone-number');
        const phoneNumbers = await phoneNumbersResponse.json();
        
        const validSender = phoneNumbers.records.find((record: any) => 
          record.features && record.features.includes('SmsSender')
        );

        if (!validSender) {
          throw new Error('No SMS-capable phone number found for this extension.');
        }

        const fromNumber = validSender.phoneNumber;
        console.log(`Sending RingCentral SMS from: ${fromNumber}`);

        const response = await platform.post('/restapi/v1.0/account/~/extension/~/sms', {
          from: { phoneNumber: fromNumber },
          to: [{ phoneNumber: rcTo }],
          text: smsText
        });

        const data = await response.json();
        console.log('RingCentral SMS sent. Status:', data.messageStatus);
      } catch (rcError: any) {
        console.error('Failed to send RingCentral SMS:', rcError?.message || rcError);
      }
    } else {
        console.log('Skipping SMS notification: Missing RingCentral environment variables');
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! We received your request and will contact you shortly.'
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    captureException(error);
    
    // Log error details without exposing sensitive information
    if (error.response) {
      console.error('Brevo API error:', error.response.body);
      try { captureException(error.response.body); } catch (e) { /* ignore */ }
    }

    return res.status(500).json({
      error: 'Failed to send your request',
      details: 'Please try again or call us directly at (303) 757-1777'
    });
  }
}

