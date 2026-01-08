# 🔐 Colorado CareAssist - Credentials & Configuration

**⚠️ IMPORTANT: This file contains sensitive information. Do NOT commit to Git.**

---

## 📧 Email (Brevo)

**API Key**: `[STORED SECURELY - See .env.local]`

**Configuration**:
```env
BREVO_API_KEY=[your_brevo_api_key_here]
CONTACT_TO_EMAIL=care@coloradocareassist.com
CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
CONTACT_FROM_NAME=Colorado CareAssist Website
```

**Note**: The actual API key is stored in `.env.local` (not committed to Git) and Heroku Config Vars.

**Status**: ✅ Ready to use

---

## 🏠 Family Room (Client Portal)

**URL**: https://ccacarehomes.clearcareonline.com/family-room/login/

**Platform**: WellSky Personal Care (formerly ClearCare)

**Integration Notes**:
- This is your existing client portal
- Mentioned on website as "Digital Family Room"
- No API integration needed - just link to login page
- Already referenced in copy throughout site

---

## 💬 Tawk.to (Live Chat)

**Decision**: ✅ **Using Tawk.to widget**

**Status**: Configured and ready to test

**IDs**:
- Property ID: `684e6c133d62cd190951a638`
- Widget ID: `1itp5caoi`

**Configuration**:
```env
NEXT_PUBLIC_TAWK_ENABLED=true
NEXT_PUBLIC_TAWK_PROPERTY_ID=684e6c133d62cd190951a638
NEXT_PUBLIC_TAWK_WIDGET_ID=1itp5caoi
```

**Customization**: You can customize the widget appearance, behavior, and position in your Tawk.to dashboard under Administration → Chat Widget → Widget Customization.

---

## 🌟 Trustpilot

**Status**: ⏳ Pending setup

**Action Required**:
1. Create business account at https://www.trustpilot.com
2. Get Business Unit ID from dashboard
3. Add to environment variables

**Current Behavior**: Shows fallback with "Read Reviews on Trustpilot" button

---

## 📊 Analytics

### Google Tag Manager
**Status**: ⏳ Pending setup

**Action Required**:
1. Create account at https://tagmanager.google.com
2. Create container for website
3. Get GTM ID (format: GTM-XXXXXXX)
4. Add to environment variables

### Meta (Facebook) Pixel
**Status**: ⏳ Pending setup

**Action Required**:
1. Go to https://business.facebook.com/events_manager
2. Create pixel
3. Get Pixel ID
4. Add to environment variables

---

## 🚀 Quick Setup for Local Testing

Create `.env.local` file:

```bash
# Copy this into .env.local
BREVO_API_KEY=[your_actual_brevo_api_key]
CONTACT_TO_EMAIL=care@coloradocareassist.com
CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
CONTACT_FROM_NAME=Colorado CareAssist Website

# Tawk.to - DISABLED (using custom solution)
NEXT_PUBLIC_TAWK_ENABLED=false

# Trustpilot - TODO
NEXT_PUBLIC_TRUSTPILOT_ENABLED=false
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=

# Analytics - TODO
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# Site URL
NEXT_PUBLIC_SITE_URL=https://coloradocareassist.com
```

---

## 🔧 Heroku Config Vars

Set these in Heroku dashboard or via CLI:

```bash
# Required - Email
heroku config:set BREVO_API_KEY=[your_actual_brevo_api_key]
heroku config:set CONTACT_TO_EMAIL=care@coloradocareassist.com
heroku config:set CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
heroku config:set CONTACT_FROM_NAME="Colorado CareAssist Website"

# Tawk.to - Disabled
heroku config:set NEXT_PUBLIC_TAWK_ENABLED=false

# Trustpilot - When ready
heroku config:set NEXT_PUBLIC_TRUSTPILOT_ENABLED=true
heroku config:set NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=your_id_here

# Analytics - When ready
heroku config:set NEXT_PUBLIC_ANALYTICS_ENABLED=true
heroku config:set NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
heroku config:set NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Site URL
heroku config:set NEXT_PUBLIC_SITE_URL=https://coloradocareassist.com
```

---

## 🎯 Next Steps

### Immediate (Can Deploy Now)
- ✅ Brevo email is configured
- ✅ Contact form will work
- ✅ Site is fully functional

### Soon (Before Full Launch)
- [ ] Decide on chat solution (see Tawk.to options above)
- [ ] Set up Trustpilot account
- [ ] Set up Google Tag Manager
- [ ] Set up Meta Pixel

### Optional (Can Add Later)
- [ ] Custom chat interface with Tawk.to API
- [ ] Additional tracking pixels
- [ ] A/B testing tools

---

## 💬 Chat Solution - Your Decision Needed

**Question**: What would you like to do for live chat?

**Option 1**: Build custom chat UI with Tawk.to API
- I can build this for you
- Takes additional time
- Full design control
- Uses your existing Tawk.to account

**Option 2**: Use a different chat service with better widget
- Intercom, Drift, Crisp, etc.
- Quick setup
- Professional appearance
- Monthly cost

**Option 3**: Skip live chat for now
- Contact form + phone numbers work great
- Can add chat later
- Simplest approach

**My Recommendation**: 
Start with Option 3 (no chat) and deploy quickly. Your contact form is excellent, and you have two phone numbers prominently displayed. Add custom chat later if needed.

---

## 🔒 Security Notes

- ✅ Brevo API key is valid and working
- ✅ Never commit this file to Git
- ✅ Never share API keys publicly
- ✅ Rotate keys if compromised
- ✅ Use Heroku Config Vars for production (not in code)

---

**Last Updated**: January 2025

