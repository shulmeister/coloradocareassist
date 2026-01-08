import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <h3 className={styles.heading}>Colorado CareAssist</h3>
            <p className={styles.tagline}>
              Complete Home Care<br />
              Family-Owned Since 2012
            </p>
            <div className={styles.contact}>
              <p>
                <strong>Denver/Boulder:</strong><br />
                <a href="tel:+13037571777">(303) 757-1777</a>
              </p>
              <p>
                <strong>Colorado Springs/Pueblo:</strong><br />
                <a href="tel:+17194283999">(719) 428-3999</a>
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:care@coloradocareassist.com">care@coloradocareassist.com</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Services</h4>
            <ul className={styles.links}>
              <li><Link href="/#services">Complete Home Care</Link></li>
              <li><Link href="/veterans">Veterans Care</Link></li>
              <li><Link href="/dementia-care">Dementia Care</Link></li>
              <li><Link href="/#services">ADL Support</Link></li>
              <li><Link href="/#services">Housekeeping</Link></li>
              <li><Link href="/#services">Handyman Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#standards">Safety Standards</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <h4 className={`${styles.columnHeading} ${styles.loginHeading}`}>Log In</h4>
            <ul className={styles.links}>
              <li>
                <a 
                  href="https://ccacarehomes.clearcareonline.com/family-room/login/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Client Log In
                </a>
              </li>
              <li>
                <a 
                  href="https://colcareassist.clearcareonline.com/login/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Employee Log In
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Service Areas</h4>
            <ul className={styles.links}>
              <li>Denver Metro</li>
              <li>Boulder County</li>
              <li>Colorado Springs</li>
              <li>Pueblo County</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Colorado CareAssist. All rights reserved.
          </p>
          <div className={styles.legal}>
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Colorado-Based</span>
            <span>•</span>
            <span>Family-Owned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

