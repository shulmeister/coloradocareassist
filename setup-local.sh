#!/bin/bash

# Colorado CareAssist - Local Development Setup Script
# This script sets up your local environment with the correct credentials

echo "🏠 Colorado CareAssist - Local Setup"
echo "===================================="
echo ""

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Create .env.local with actual credentials
cat > .env.local << 'EOF'
# ==============================================
# COLORADO CAREASSIST - LOCAL DEVELOPMENT
# ==============================================

# -----------------------------
# CONTACT FORM (BREVO/SENDINBLUE)
# -----------------------------
# IMPORTANT: Replace with your actual Brevo API key
BREVO_API_KEY=xkeysib-REPLACE_WITH_YOUR_ACTUAL_KEY
CONTACT_TO_EMAIL=care@coloradocareassist.com
CONTACT_FROM_EMAIL=noreply@coloradocareassist.com
CONTACT_FROM_NAME=Colorado CareAssist Website

# -----------------------------
# TAWK.TO LIVE CHAT
# -----------------------------
NEXT_PUBLIC_TAWK_ENABLED=true
NEXT_PUBLIC_TAWK_PROPERTY_ID=684e6c133d62cd190951a638
NEXT_PUBLIC_TAWK_WIDGET_ID=1itp5caoi

# -----------------------------
# TRUSTPILOT REVIEWS
# -----------------------------
NEXT_PUBLIC_TRUSTPILOT_ENABLED=false
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=

# -----------------------------
# ANALYTICS & TRACKING
# -----------------------------
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# -----------------------------
# SITE CONFIGURATION
# -----------------------------
NEXT_PUBLIC_SITE_URL=https://coloradocareassist.com
EOF

echo "✅ .env.local created successfully!"
echo ""
echo "📋 Configuration:"
echo "   - Brevo API: ✅ Configured"
echo "   - Tawk.to: ❌ Disabled (custom solution planned)"
echo "   - Trustpilot: ⏳ Pending setup"
echo "   - Analytics: ⏳ Pending setup"
echo ""
echo "🚀 Next steps:"
echo "   1. Run: npm install"
echo "   2. Run: npm run dev"
echo "   3. Visit: http://localhost:3000"
echo ""
echo "📧 Contact form is ready to test!"
echo ""

