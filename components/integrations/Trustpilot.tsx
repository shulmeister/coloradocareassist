import Script from 'next/script';
import styles from './Trustpilot.module.css';

export default function Trustpilot() {
  const trustpilotEnabled = process.env.NEXT_PUBLIC_TRUSTPILOT_ENABLED === 'true';
  const businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;

  if (!trustpilotEnabled) {
    return null;
  }

  // If no business unit ID, show fallback
  if (!businessUnitId) {
    return (
      <div className={styles.fallback}>
        <div className={styles.fallbackContent}>
          <h3>Trusted by Families Across Colorado</h3>
          <p>Read our reviews and see why families choose Colorado CareAssist for their home care needs.</p>
          <a 
            href="https://www.trustpilot.com/review/coloradocareassist.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.fallbackButton}
          >
            Read Reviews on Trustpilot
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <Script 
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
        strategy="lazyOnload" 
      />
      {/* Trustpilot TrustBox widget */}
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id={businessUnitId}
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
      >
        <a 
          href={`https://www.trustpilot.com/review/coloradocareassist.com`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
}

