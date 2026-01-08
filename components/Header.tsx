import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Updated for two-tier header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Bar - Contact Info + Logins */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="tel:+13037571777" className={styles.topBarLink}>
              (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.topBarLink}>
              (719) 428-3999
            </a>
            <a href="mailto:care@coloradocareassist.com" className={styles.topBarLink}>
              care@coloradocareassist.com
            </a>
          </div>
          <div className={styles.loginLinks}>
            <a 
              href="https://ccacarehomes.clearcareonline.com/family-room/login/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.loginLink}
            >
              Client Log In
            </a>
            <span className={styles.loginSeparator}>|</span>
            <a 
              href="https://colcareassist.clearcareonline.com/login/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.loginLink}
            >
              Employee Log In
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav - Logo + Links + CTA */}
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {!logoFailed ? (
              <img
                src="/cca-logo.png"
                alt="Colorado CareAssist"
                className={styles.logoImage}
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span className={styles.logoText}>Colorado CareAssist</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('services')} className={styles.navLink}>
                  What Do We Do?
                </button>
                <button onClick={() => scrollToSection('how-it-works')} className={styles.navLink}>
                  How Do We Do It?
                </button>
              </>
            ) : (
              <>
                <Link href="/#services" className={styles.navLink}>What Do We Do?</Link>
                <Link href="/#how-it-works" className={styles.navLink}>How Do We Do It?</Link>
              </>
            )}
            
            <Link href="/about" className={styles.navLink}>Financing Care</Link>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact" className={styles.ctaButton}>
            Support
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                What Do We Do?
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={styles.mobileNavLink}>
                How Do We Do It?
              </button>
            </>
          ) : (
            <>
              <Link href="/#services" className={styles.mobileNavLink}>What Do We Do?</Link>
              <Link href="/#how-it-works" className={styles.mobileNavLink}>How Do We Do It?</Link>
            </>
          )}
          
          <Link href="/about" className={styles.mobileNavLink}>Financing Care</Link>
          <Link href="/careers" className={styles.mobileNavLink}>Careers</Link>
          <Link href="/contact" className={styles.mobileNavLink}>Contact Us</Link>
          
          <div className={styles.mobilePhones}>
            <a href="tel:+13037571777" className={styles.mobilePhone}>
              (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.mobilePhone}>
              (719) 428-3999
            </a>
            <a href="mailto:care@coloradocareassist.com" className={styles.mobilePhone}>
              care@coloradocareassist.com
            </a>
          </div>
          
          <Link href="/contact" className={styles.mobileCtaButton}>
            Support
          </Link>

          <div className={styles.mobileLoginLinks}>
            <a 
              href="https://ccacarehomes.clearcareonline.com/family-room/login/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileLoginLink}
            >
              Client Log In
            </a>
            <a 
              href="https://colcareassist.clearcareonline.com/login/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileLoginLink}
            >
              Employee Log In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
