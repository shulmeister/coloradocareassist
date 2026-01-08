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
    
    // Reload to initialize analytics
    window.location.reload();
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

