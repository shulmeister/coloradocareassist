# ⚡ Quick Start Guide - Colorado CareAssist

Get your site running locally in 5 minutes.

## 🚀 Fast Track

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp env.example .env.local

# 3. Edit .env.local with your values
# (At minimum, set BREVO_API_KEY for contact form to work)

# 4. Start development server
npm run dev

# 5. Open browser
# Visit: http://localhost:3000
```

## 📝 Minimum Required Setup

For local testing, you only need:

1. **Brevo API Key** (for contact form)
   - Sign up: https://www.brevo.com
   - Get API key: Settings → API Keys
   - Add to `.env.local`: `BREVO_API_KEY=your_key_here`

2. **Email addresses** (already in env.example)
   - `CONTACT_TO_EMAIL=care@coloradocareassist.com`
   - `CONTACT_FROM_EMAIL=noreply@coloradocareassist.com`

All other integrations (Tawk.to, Trustpilot, Analytics) are optional and will gracefully disable if not configured.

## 🧪 Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check email at `care@coloradocareassist.com`

## 📱 Test Integrations

### Tawk.to (Optional)
- Set `NEXT_PUBLIC_TAWK_ENABLED=true`
- Add Property ID and Widget ID
- Widget appears in bottom-right corner

### Analytics (Optional)
- Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true`
- Add GTM ID or GA4 ID
- Accept cookie consent banner
- Use Tag Assistant to verify

### Trustpilot (Optional)
- Set `NEXT_PUBLIC_TRUSTPILOT_ENABLED=true`
- Add Business Unit ID
- Widget appears in Reviews section

## 🚢 Deploy to Heroku

```bash
# 1. Login to Heroku
heroku login

# 2. Create app
heroku create coloradocareassist

# 3. Set environment variables
heroku config:set BREVO_API_KEY=your_key
heroku config:set CONTACT_TO_EMAIL=care@coloradocareassist.com
# ... (set all other vars)

# 4. Deploy
git push heroku main

# 5. Open app
heroku open
```

See [README.md](README.md) for detailed deployment instructions.

## 🆘 Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Dependencies won't install:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
# Check for TypeScript errors
npm run build
```

**Contact form not working:**
- Check Brevo API key is correct
- Verify sender email is verified in Brevo
- Check browser console for errors

## 📚 Next Steps

1. Review [README.md](README.md) for full documentation
2. Follow [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for production deployment
3. Customize content in page files
4. Add your own images to `/public` directory
5. Update phone numbers and email addresses

## 🎯 Key Files

- **Pages**: `pages/*.tsx` - All page content
- **Components**: `components/*.tsx` - Reusable components
- **Styles**: `styles/*.css` - All styling
- **API**: `pages/api/contact.ts` - Contact form endpoint
- **Config**: `next.config.js` - Next.js configuration
- **Env**: `.env.local` - Environment variables (create from env.example)

---

**Need help?** See [README.md](README.md) for detailed documentation.

