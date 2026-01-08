# 🧪 Test Your Site Right Now!

Everything is configured with your actual credentials. Let's test it!

---

## ⚡ Quick Test (5 Minutes)

```bash
# 1. Run the setup script (includes all your credentials)
./setup-local.sh

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

**Then open**: http://localhost:3000

---

## ✅ What to Test

### 1. **Tawk.to Chat Widget** 
- Look in the **bottom-right corner**
- You should see the Tawk.to chat bubble
- Click it to open the chat
- Send a test message
- Check your Tawk.to dashboard to see the message

**If you don't see it**:
- Check browser console for errors (F12)
- Make sure `.env.local` was created by the setup script
- Verify `NEXT_PUBLIC_TAWK_ENABLED=true`

### 2. **Contact Form**
- Go to http://localhost:3000/contact
- Fill out the form with test data
- Submit it
- Check **care@coloradocareassist.com** for the email
- Should arrive within seconds

### 3. **All Pages**
- ✅ Homepage: http://localhost:3000
- ✅ Veterans: http://localhost:3000/veterans
- ✅ Dementia Care: http://localhost:3000/dementia-care
- ✅ About: http://localhost:3000/about
- ✅ Contact: http://localhost:3000/contact
- ✅ Careers: http://localhost:3000/careers

### 4. **Mobile View**
- Open Chrome DevTools (F12)
- Click the device toggle icon (or Ctrl+Shift+M)
- Test on iPhone and iPad sizes
- Everything should look perfect

### 5. **Navigation**
- Click all links in header
- Test jump links on homepage (Services, Standards, etc.)
- Verify phone numbers are clickable
- Check footer links

---

## 🎨 Customize Tawk.to Widget

If you want to change the widget appearance:

1. Go to your **Tawk.to Dashboard**
2. Navigate to: **Administration → Chat Widget → Widget Customization**
3. You can change:
   - **Color** - Match your brand blue (#2563eb)
   - **Position** - Bottom right, left, etc.
   - **Size** - Bubble size
   - **Text** - Welcome message
   - **Behavior** - Auto-open, hide on mobile, etc.

Changes apply immediately - just refresh your site to see them.

---

## 🔍 Check Browser Console

Open DevTools (F12) and check the Console tab:
- ✅ Should see: "Tawk.to script loaded" or similar
- ❌ Should NOT see: Any red errors

---

## 📧 Test Email Delivery

**Send a test contact form**:
1. Go to /contact
2. Fill out:
   - Name: Test User
   - Phone: (303) 555-1234
   - Email: your-test-email@example.com
   - Location: Denver
   - Care Needs: This is a test submission
   - Timeframe: Immediately
   - Contact Method: Email

3. Submit
4. Check **care@coloradocareassist.com** inbox
5. Should receive formatted email with all details

---

## 🎯 What You Should See

### Homepage
- ✅ Blue hero section with "Complete Home Care"
- ✅ Stats: "12+ Years", "100% Background Checked", "24/7 Family Portal"
- ✅ Services grid (6 services with icons)
- ✅ Safety standards (6 badges)
- ✅ How it works (4 steps)
- ✅ Reviews section (Trustpilot fallback for now)
- ✅ FAQ section
- ✅ Tawk.to widget in bottom-right corner

### Header
- ✅ Sticky navigation
- ✅ Two phone numbers visible
- ✅ "Request Care Plan" CTA button
- ✅ Mobile menu (hamburger on small screens)

### Footer
- ✅ Company info
- ✅ Service links
- ✅ Contact information
- ✅ Service areas

---

## 🐛 Troubleshooting

### Tawk.to Widget Not Showing?

**Check 1**: `.env.local` exists and has correct values
```bash
cat .env.local | grep TAWK
```
Should show:
```
NEXT_PUBLIC_TAWK_ENABLED=true
NEXT_PUBLIC_TAWK_PROPERTY_ID=684e6c133d62cd190951a638
NEXT_PUBLIC_TAWK_WIDGET_ID=1itp5caoi
```

**Check 2**: Browser console (F12)
- Look for Tawk.to script loading
- Check for any JavaScript errors

**Check 3**: Restart dev server
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Contact Form Not Working?

**Check**: Brevo API key is set
```bash
cat .env.local | grep BREVO_API_KEY
```

**Check**: Browser console for errors

**Check**: Terminal output for server errors

### Port 3000 Already in Use?

```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Then restart
npm run dev
```

---

## ✅ Success Criteria

If you can do all of these, you're ready to deploy:

- [ ] See Tawk.to widget in bottom-right corner
- [ ] Chat widget opens when clicked
- [ ] Contact form submits successfully
- [ ] Email received at care@coloradocareassist.com
- [ ] All 6 pages load without errors
- [ ] Mobile view looks good
- [ ] No console errors
- [ ] Phone numbers are clickable
- [ ] All navigation works

---

## 🚀 Next Step: Deploy to Heroku

Once everything works locally, you're ready to deploy!

See **QUICK_DEPLOY.md** for deployment instructions.

---

## 💡 Tips

**Tawk.to Widget Customization**:
- Change the color to match your brand blue (#2563eb)
- Set a friendly welcome message
- Consider hiding on mobile if it covers important content
- Test the auto-open behavior

**Contact Form**:
- Test with real email addresses
- Check spam folder if emails don't arrive
- Verify sender email is verified in Brevo

**Performance**:
- Site should load fast (< 2 seconds)
- No layout shift when Tawk.to loads
- Smooth scrolling and animations

---

**Ready to test? Run `./setup-local.sh` and `npm run dev`!** 🚀

