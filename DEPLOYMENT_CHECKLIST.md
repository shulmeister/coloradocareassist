# 🚀 Colorado CareAssist - Deployment Checklist

Use this checklist to ensure a smooth deployment from development to production.

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup

- [ ] Brevo API key obtained and verified
- [ ] Brevo sender email verified
- [ ] Tawk.to account created and Property/Widget IDs obtained
- [ ] Trustpilot Business Unit ID obtained (or confirmed fallback is acceptable)
- [ ] Google Tag Manager container created and GTM ID obtained
- [ ] Meta Pixel created and Pixel ID obtained
- [ ] All environment variables documented in `.env.local` for testing

### 2. Local Testing

- [ ] `npm install` runs without errors
- [ ] `npm run dev` starts successfully
- [ ] All pages load correctly:
  - [ ] Homepage (/)
  - [ ] Veterans (/veterans)
  - [ ] Dementia Care (/dementia-care)
  - [ ] About (/about)
  - [ ] Contact (/contact)
  - [ ] Careers (/careers)
- [ ] Contact form submits successfully
- [ ] Email received at test address
- [ ] Tawk.to widget appears and functions
- [ ] Cookie consent banner appears and works
- [ ] Analytics loads after accepting cookies
- [ ] Mobile responsive design verified
- [ ] All links work correctly
- [ ] No console errors in browser

### 3. Content Review

- [ ] Phone numbers correct: (303) 757-1777 and (719) 428-3999
- [ ] Email address correct: care@coloradocareassist.com
- [ ] All copy reviewed and approved
- [ ] Brand positioning accurate
- [ ] Service descriptions complete
- [ ] FAQ answers accurate
- [ ] Meta descriptions written for all pages
- [ ] Page titles optimized for SEO

### 4. Heroku Setup

- [ ] Heroku account created
- [ ] Heroku CLI installed
- [ ] New Heroku app created
- [ ] All environment variables set in Heroku Config Vars
- [ ] Git repository initialized and committed

### 5. Initial Deployment

- [ ] Code pushed to GitHub
- [ ] Code pushed to Heroku: `git push heroku main`
- [ ] Build completed successfully
- [ ] App opens without errors: `heroku open`
- [ ] Check logs for any issues: `heroku logs --tail`

### 6. Post-Deployment Testing

- [ ] Visit Heroku app URL
- [ ] Test all pages load
- [ ] Submit contact form with test data
- [ ] Verify email received
- [ ] Check Tawk.to widget loads
- [ ] Verify cookie consent works
- [ ] Test analytics with Tag Assistant
- [ ] Test Meta Pixel with Pixel Helper
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### 7. DNS Configuration

- [ ] Add domain to Heroku: `heroku domains:add coloradocareassist.com`
- [ ] Add www subdomain: `heroku domains:add www.coloradocareassist.com`
- [ ] Note DNS targets from Heroku
- [ ] Login to Hostinger DNS management
- [ ] Add/update CNAME records for root domain
- [ ] Add/update CNAME records for www subdomain
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test DNS resolution: `nslookup coloradocareassist.com`
- [ ] Enable SSL: `heroku certs:auto:enable`
- [ ] Verify SSL certificate issued

### 8. Final Verification (After DNS Propagation)

- [ ] Visit https://coloradocareassist.com
- [ ] Verify SSL certificate (green padlock)
- [ ] Test all pages on production domain
- [ ] Submit real contact form test
- [ ] Verify email delivery
- [ ] Check analytics tracking on production domain
- [ ] Verify Meta Pixel fires on production domain
- [ ] Test Tawk.to on production domain
- [ ] Test on multiple devices and browsers

### 9. Integration Verification

#### Google Tag Manager
- [ ] GTM container loads
- [ ] Tags fire correctly
- [ ] Use Tag Assistant to verify
- [ ] Check GTM dashboard for real-time data

#### Meta Pixel
- [ ] Pixel loads on all pages
- [ ] PageView events fire
- [ ] Lead event fires on form submission
- [ ] Use Meta Pixel Helper to verify
- [ ] Check Events Manager for data

#### Tawk.to
- [ ] Widget appears on all pages
- [ ] Can send test messages
- [ ] Messages appear in Tawk.to dashboard
- [ ] Widget customization applied

#### Trustpilot
- [ ] Widget loads or fallback displays
- [ ] Link to Trustpilot works
- [ ] No console errors

#### Brevo Email
- [ ] Test form submission
- [ ] Email received promptly
- [ ] Email formatting correct
- [ ] Reply-to address works
- [ ] Check Brevo dashboard for statistics

### 10. Performance & SEO

- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Verify robots.txt accessible: /robots.txt
- [ ] Verify sitemap accessible: /sitemap.xml
- [ ] Submit sitemap to Google Search Console
- [ ] Check meta tags with SEO tools
- [ ] Verify OpenGraph tags with Facebook Debugger
- [ ] Test social media sharing

### 11. Monitoring Setup

- [ ] Set up Heroku metrics monitoring
- [ ] Configure error tracking (if using Sentry/similar)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Configure email alerts for downtime
- [ ] Add site to Google Search Console
- [ ] Add site to Bing Webmaster Tools

### 12. Documentation

- [ ] README.md reviewed and accurate
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Team members trained on updating content
- [ ] Emergency contact procedures documented
- [ ] Backup procedures documented

### 13. Go-Live

- [ ] Announce to team
- [ ] Update any marketing materials with new URL
- [ ] Update Google My Business listing
- [ ] Update social media profiles
- [ ] Update email signatures
- [ ] Update business cards (if applicable)
- [ ] Monitor for first 24 hours

### 14. Post-Launch (First Week)

- [ ] Monitor form submissions daily
- [ ] Check analytics data
- [ ] Review Tawk.to conversations
- [ ] Check for any error reports
- [ ] Monitor Heroku logs
- [ ] Gather user feedback
- [ ] Make any necessary adjustments

---

## 🆘 Emergency Contacts

**Heroku Issues:**
- Support: https://help.heroku.com
- Status: https://status.heroku.com

**Hostinger Issues:**
- Support: https://www.hostinger.com/contact
- Login: https://hpanel.hostinger.com

**Brevo Issues:**
- Support: https://help.brevo.com
- Login: https://app.brevo.com

**Developer:**
- [Your contact information here]

---

## 📊 Success Metrics to Track

After launch, monitor these metrics:

- **Contact Form Submissions**: Track in Brevo and via form analytics
- **Page Views**: Google Analytics
- **Bounce Rate**: Google Analytics
- **Time on Site**: Google Analytics
- **Tawk.to Conversations**: Tawk.to dashboard
- **Lead Conversions**: Meta Pixel events
- **Phone Calls**: Track manually or with call tracking
- **Site Uptime**: Uptime monitoring service
- **Page Load Speed**: Lighthouse / GTmetrix

---

## 🔄 Regular Maintenance

**Weekly:**
- Check form submissions are being received
- Review Tawk.to conversations
- Monitor analytics for anomalies

**Monthly:**
- Review and update content as needed
- Check for any broken links
- Review analytics reports
- Update dependencies: `npm update`

**Quarterly:**
- Run full Lighthouse audit
- Review and optimize SEO
- Update any outdated information
- Review and renew SSL certificates (auto with Heroku)

---

**Last Updated:** [Date]
**Deployed By:** [Name]
**Deployment Date:** [Date]

