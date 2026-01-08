# Colorado CareAssist - Marketing Website

Premium home care agency marketing site built with Next.js, designed for deployment on Heroku with DNS managed through Hostinger.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: CSS Modules (no Tailwind)
- **Email**: Brevo (Sendinblue) Transactional API
- **Deployment**: Heroku
- **DNS**: Hostinger
- **Analytics**: Google Tag Manager / GA4 + Meta Pixel
- **Chat**: Facebook Messenger
- **Reviews**: Trustpilot

## 📋 Table of Contents

- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Heroku Deployment](#heroku-deployment)
- [DNS Configuration (Hostinger)](#dns-configuration-hostinger)
- [Integration Setup](#integration-setup)
- [Testing & Verification](#testing--verification)
- [Content Customization](#content-customization)
- [Troubleshooting](#troubleshooting)

---

## 🏠 Local Development

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coloradocareassist.git
   cd coloradocareassist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values (see [Environment Variables](#environment-variables) section).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

---

## 🔐 Environment Variables

### Required Variables

#### Brevo Email (Contact Form)
```env
BREVO_API_KEY=your_brevo_api_key_here
CONTACT_TO_EMAIL=care@coloradocareassist.com
CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
CONTACT_FROM_NAME=Colorado CareAssist Website
```

**How to get Brevo API Key:**
1. Sign up at [Brevo](https://www.brevo.com)
2. Go to Settings → API Keys
3. Create a new API key
4. Verify your sender email address (`CONTACT_FROM_EMAIL`)

#### Facebook Messenger (Chat)
```env
NEXT_PUBLIC_FACEBOOK_PAGE_ID=532744706873716
```

#### Trustpilot Reviews
```env
NEXT_PUBLIC_TRUSTPILOT_ENABLED=true
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=your_business_unit_id
```

**How to get Trustpilot Business Unit ID:**
1. Sign up at [Trustpilot](https://www.trustpilot.com)
2. Go to Business Tools → TrustBox
3. Your Business Unit ID is in the widget embed code

#### Analytics & Tracking
```env
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id
```

**Google Tag Manager (Recommended):**
1. Create account at [Google Tag Manager](https://tagmanager.google.com)
2. Create a container for your website
3. Copy the GTM ID (format: GTM-XXXXXXX)

**OR Google Analytics 4 (Alternative):**
```env
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

**Meta (Facebook) Pixel:**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create a pixel
3. Copy the Pixel ID

#### Site Configuration
```env
NEXT_PUBLIC_SITE_URL=https://coloradocareassist.com
```

---

## 🚀 Heroku Deployment

### Step 1: Create Heroku App

```bash
# Install Heroku CLI if you haven't
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create a new Heroku app
heroku create coloradocareassist

# Or use a specific name
heroku create your-app-name
```

### Step 2: Set Environment Variables

Set all required environment variables as Config Vars:

```bash
# Brevo Email
heroku config:set BREVO_API_KEY=your_actual_api_key
heroku config:set CONTACT_TO_EMAIL=care@coloradocareassist.com
heroku config:set CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
heroku config:set CONTACT_FROM_NAME="Colorado CareAssist Website"

# Facebook Messenger
heroku config:set NEXT_PUBLIC_FACEBOOK_PAGE_ID=532744706873716

# Trustpilot
heroku config:set NEXT_PUBLIC_TRUSTPILOT_ENABLED=true
heroku config:set NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=your_business_unit_id

# Analytics
heroku config:set NEXT_PUBLIC_ANALYTICS_ENABLED=true
heroku config:set NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
heroku config:set NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Site URL
heroku config:set NEXT_PUBLIC_SITE_URL=https://coloradocareassist.com
```

**Or set them via Heroku Dashboard:**
1. Go to your app in [Heroku Dashboard](https://dashboard.heroku.com)
2. Navigate to Settings → Config Vars
3. Click "Reveal Config Vars"
4. Add each variable

### Step 3: Deploy to Heroku

```bash
# Add Heroku remote (if not already added)
heroku git:remote -a your-app-name

# Push to Heroku
git push heroku main

# Or if your branch is named master
git push heroku master

# Open your app
heroku open

# View logs
heroku logs --tail
```

### Step 4: Verify Deployment

1. Visit your Heroku app URL (e.g., `https://your-app-name.herokuapp.com`)
2. Check that all pages load correctly
3. Test the contact form
4. Verify Tawk.to widget appears
5. Check browser console for any errors

---

## 🌐 DNS Configuration (Hostinger)

### Point Your Domain to Heroku

1. **Get your Heroku DNS target**
   ```bash
   heroku domains:add coloradocareassist.com
   heroku domains:add www.coloradocareassist.com
   ```
   
   This will output DNS targets like:
   ```
   coloradocareassist.com → xxx-xxx-xxxxx.herokudns.com
   www.coloradocareassist.com → www-xxx-xxx-xxxxx.herokudns.com
   ```

2. **Configure DNS in Hostinger**
   
   Login to [Hostinger](https://hpanel.hostinger.com) and navigate to:
   Domains → Your Domain → DNS / Name Servers → DNS Records

3. **Add/Update DNS Records**

   **For root domain (coloradocareassist.com):**
   - Type: `CNAME` or `ALIAS`
   - Name: `@`
   - Target: `xxx-xxx-xxxxx.herokudns.com` (from Heroku)
   - TTL: `3600` (or default)

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Target: `www-xxx-xxx-xxxxx.herokudns.com` (from Heroku)
   - TTL: `3600` (or default)

   **Note:** Some DNS providers don't support CNAME for root domains. If Hostinger doesn't allow it:
   - Use `ALIAS` record if available
   - Or use Cloudflare as DNS provider (free)
   - Or contact Hostinger support for guidance

4. **Wait for DNS Propagation**
   
   DNS changes can take 1-48 hours to propagate globally. Check status:
   ```bash
   # Check DNS propagation
   nslookup coloradocareassist.com
   
   # Or use online tools
   # https://www.whatsmydns.net
   ```

5. **Enable SSL (Automatic with Heroku)**
   
   Once DNS is configured, Heroku automatically provisions SSL certificates:
   ```bash
   heroku certs:auto:enable
   ```
   
   Verify SSL status:
   ```bash
   heroku certs:auto
   ```

---

## 🔧 Integration Setup

### Brevo (Sendinblue) Email

1. **Create Account**: [Brevo](https://www.brevo.com)
2. **Verify Sender Email**: Settings → Senders & IP → Add a sender
3. **Get API Key**: Settings → SMTP & API → API Keys → Create a new API key
4. **Set Environment Variables** (see above)
5. **Test**: Submit contact form and check email delivery

### Facebook Messenger

**Status**: Enabled via Environment Variable

**Configuration**:
1. Set `NEXT_PUBLIC_FACEBOOK_PAGE_ID` in Heroku Config Vars.
2. The chat plugin will automatically appear on all pages.

### Trustpilot Reviews

1. **Create Business Account**: [Trustpilot](https://www.trustpilot.com)
2. **Get Business Unit ID**: Business Tools → TrustBox → Copy from widget code
3. **Set Environment Variables**
4. **Alternative**: If no Business Unit ID, the site shows a fallback with link to Trustpilot

### Google Tag Manager

**Recommended approach for managing all tracking:**

1. **Create Account**: [Google Tag Manager](https://tagmanager.google.com)
2. **Create Container**: Web → Create Container
3. **Get GTM ID**: Format `GTM-XXXXXXX`
4. **Configure Tags in GTM**:
   - Google Analytics 4
   - Meta Pixel (if needed)
   - Any other tracking pixels
5. **Set Environment Variable**: `NEXT_PUBLIC_GTM_ID`

**Benefits of GTM:**
- Manage all tracking in one place
- Add/remove tags without code changes
- Test tags before publishing
- Version control for tags

### Meta (Facebook) Pixel

1. **Create Pixel**: [Meta Events Manager](https://business.facebook.com/events_manager)
2. **Copy Pixel ID**
3. **Set Environment Variable**: `NEXT_PUBLIC_META_PIXEL_ID`
4. **Verify**: Use Meta Pixel Helper browser extension

---

## ✅ Testing & Verification

### Contact Form Testing

1. **Fill out form** at `/contact`
2. **Check for success message**
3. **Verify email received** at `care@coloradocareassist.com`
4. **Check Heroku logs** for any errors:
   ```bash
   heroku logs --tail
   ```

### Analytics Verification

**Google Tag Manager:**
1. Install [Tag Assistant](https://tagassistant.google.com)
2. Visit your site
3. Verify GTM container loads
4. Check that tags fire correctly

**Meta Pixel:**
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper)
2. Visit your site
3. Verify pixel loads and fires PageView event
4. Submit contact form → verify Lead event fires

### Facebook Messenger Verification

1. Visit any page on your site
2. Chat widget should appear in bottom-right corner
3. Test sending a message (requires logging into Facebook)
4. Check Facebook Page Inbox for received messages

### Trustpilot Verification

1. Visit homepage
2. Scroll to Reviews section
3. Verify Trustpilot widget loads or fallback displays
4. Check browser console for any errors

### Cookie Consent Testing

1. Visit site in incognito/private window
2. Cookie consent banner should appear after 1 second
3. Click "Decline" → analytics should NOT load
4. Refresh page → banner should not appear again
5. Clear localStorage and refresh
6. Click "Accept" → analytics should load (check with Tag Assistant)

---

## 🎨 Content Customization

### Updating Copy

All content is in the page files:
- `pages/index.tsx` - Homepage
- `pages/veterans.tsx` - Veterans page
- `pages/dementia-care.tsx` - Dementia care page
- `pages/about.tsx` - About page
- `pages/contact.tsx` - Contact page
- `pages/careers.tsx` - Careers page

### Adding Images

1. Place images in `public/` directory
2. Reference in code: `/image-name.jpg`
3. Example:
   ```jsx
   <img src="/hero-image.jpg" alt="Description" />
   ```

### Updating Phone Numbers

Phone numbers are in:
- `components/Header.tsx`
- `components/Footer.tsx`
- All page files

Search for `(303) 757-1777` and `(719) 428-3999` to find all instances.

### Updating Email

Search for `care@coloradocareassist.com` to find all instances.

### Styling Changes

- Global styles: `styles/globals.css`
- Component styles: `components/*.module.css`
- Page styles: `styles/*.module.css`

CSS variables are defined in `styles/globals.css` for easy theme customization.

---

## 🐛 Troubleshooting

### Contact Form Not Sending Emails

**Check:**
1. Brevo API key is correct: `heroku config:get BREVO_API_KEY`
2. Sender email is verified in Brevo
3. Check Heroku logs: `heroku logs --tail`
4. Test API key with Brevo's API explorer

**Common Issues:**
- Invalid API key → verify in Brevo dashboard
- Unverified sender email → verify in Brevo
- Rate limiting → wait a minute and try again

### Analytics Not Loading

**Check:**
1. Cookie consent accepted (check localStorage: `cookieConsent`)
2. Environment variables set: `heroku config`
3. GTM/GA4 ID format correct (GTM-XXXXXXX or G-XXXXXXXXXX)
4. Use Tag Assistant to debug

**Common Issues:**
- Analytics disabled until cookie consent accepted (by design)
- Wrong ID format
- `NEXT_PUBLIC_ANALYTICS_ENABLED` not set to `true`

### Facebook Messenger Widget Not Appearing

**Check:**
1. `NEXT_PUBLIC_FACEBOOK_PAGE_ID` is set correctly
2. Check browser console for errors
3. Ensure domain is whitelisted in Facebook Page settings (Advanced Messaging)

### DNS Not Resolving

**Check:**
1. DNS records configured correctly in Hostinger
2. Wait 24-48 hours for propagation
3. Use `nslookup coloradocareassist.com` to check
4. Verify Heroku domains: `heroku domains`

**Common Issues:**
- CNAME not supported for root domain → use ALIAS or Cloudflare
- Typo in DNS target
- DNS not propagated yet → wait

### Build Failing on Heroku

**Check:**
1. `package.json` has correct Node version
2. All dependencies installed
3. Check build logs: `heroku logs --tail`
4. Test build locally: `npm run build`

**Common Issues:**
- Missing dependencies → run `npm install`
- TypeScript errors → fix and commit
- Environment variables missing → set in Heroku

### SSL Certificate Issues

**Check:**
1. DNS configured and propagated
2. SSL auto-enabled: `heroku certs:auto:enable`
3. Check status: `heroku certs:auto`

**Common Issues:**
- DNS not propagated → wait
- Domain not added to Heroku → `heroku domains:add yourdomain.com`

---

## 📞 Support

For issues with:
- **Heroku**: [Heroku Support](https://help.heroku.com)
- **Hostinger**: [Hostinger Support](https://www.hostinger.com/contact)
- **Brevo**: [Brevo Support](https://help.brevo.com)
- **Tawk.to**: [Tawk.to Support](https://help.tawk.to)

---

## 📝 License

Proprietary - Colorado CareAssist © 2024

---

## 🎯 Quick Reference

### Essential Commands

```bash
# Local development
npm run dev

# Deploy to Heroku
git push heroku main

# View logs
heroku logs --tail

# Set environment variable
heroku config:set VAR_NAME=value

# Check environment variables
heroku config

# Restart app
heroku restart

# Open app in browser
heroku open
```

### Important URLs

- **Production Site**: https://coloradocareassist.com
- **Heroku Dashboard**: https://dashboard.heroku.com
- **Hostinger Panel**: https://hpanel.hostinger.com
- **Brevo Dashboard**: https://app.brevo.com
- **Tawk.to Dashboard**: https://dashboard.tawk.to
- **Google Tag Manager**: https://tagmanager.google.com
- **Meta Events Manager**: https://business.facebook.com/events_manager

---

**Built with ❤️ for Colorado CareAssist**
