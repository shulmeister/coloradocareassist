import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);

    // Dispatch custom event to notify Analytics component
    const event = new CustomEvent('consentChange', { detail: { accepted: true } });
    window.dispatchEvent(event);

    // Initialize analytics scripts dynamically without reload
    if (typeof window !== 'undefined') {
      // Trigger GTM
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WZXV765S';
      const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || 'G-PNPKTPZ49H';
      const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-16672094756';

      // Load GTM
      if (gtmId) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        document.head.appendChild(script);
      }

      // Load GA4
      if (ga4Id || googleAdsId) {
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id || googleAdsId}`;
        document.head.appendChild(gtagScript);

        gtagScript.onload = () => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
          }
          gtag('js', new Date());
          if (ga4Id) gtag('config', ga4Id, { page_path: window.location.pathname });
          if (googleAdsId) gtag('config', googleAdsId);
        };
      }

      // Load Meta Pixel if configured
      const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
      if (metaPixelId) {
        !(function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        (window as any).fbq('init', metaPixelId);
        (window as any).fbq('track', 'PageView');
      }
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Dispatch custom event
    const event = new CustomEvent('consentChange', { detail: { accepted: false } });
    window.dispatchEvent(event);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.title}>We Value Your Privacy</p>
          <p className={styles.description}>
            We use cookies and similar technologies to improve your experience, analyze site traffic, 
            and personalize content. By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleDecline} className={styles.declineButton}>
            Decline
          </button>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

