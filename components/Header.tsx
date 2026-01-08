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
      const headerOffset = 80;
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
                Services
              </button>
              <button onClick={() => scrollToSection('standards')} className={styles.navLink}>
                Standards
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={styles.navLink}>
                How It Works
              </button>
              <button onClick={() => scrollToSection('reviews')} className={styles.navLink}>
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className={styles.navLink}>
                FAQ
              </button>
            </>
          ) : (
            <>
              <Link href="/#services" className={styles.navLink}>Services</Link>
              <Link href="/#standards" className={styles.navLink}>Standards</Link>
              <Link href="/#how-it-works" className={styles.navLink}>How It Works</Link>
            </>
          )}
          
          <Link href="/veterans" className={styles.navLink}>Veterans</Link>
          <Link href="/dementia-care" className={styles.navLink}>Dementia Care</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/careers" className={styles.navLink}>Careers</Link>
        </nav>

        {/* Phone Numbers */}
        <div className={styles.phones}>
          <a href="tel:+13037571777" className={styles.phone}>
            <span className={styles.phoneLabel}>Denver/Boulder</span>
            <span className={styles.phoneNumber}>(303) 757-1777</span>
          </a>
          <a href="tel:+17194283999" className={styles.phone}>
            <span className={styles.phoneLabel}>Colo Springs/Pueblo</span>
            <span className={styles.phoneNumber}>(719) 428-3999</span>
          </a>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className={styles.ctaButton}>
          Request Care Plan
        </Link>

        {/* Login Links */}
        <div className={styles.loginLinks}>
          <a 
            href="https://ccacarehomes.clearcareonline.com/family-room/login/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.loginLink}
          >
            Client Log In
          </a>
          <a 
            href="https://colcareassist.clearcareonline.com/login/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.loginLink}
          >
            Employee Log In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                Services
              </button>
              <button onClick={() => scrollToSection('standards')} className={styles.mobileNavLink}>
                Standards
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={styles.mobileNavLink}>
                How It Works
              </button>
              <button onClick={() => scrollToSection('reviews')} className={styles.mobileNavLink}>
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className={styles.mobileNavLink}>
                FAQ
              </button>
            </>
          ) : (
            <>
              <Link href="/#services" className={styles.mobileNavLink}>Services</Link>
              <Link href="/#standards" className={styles.mobileNavLink}>Standards</Link>
              <Link href="/#how-it-works" className={styles.mobileNavLink}>How It Works</Link>
            </>
          )}
          
          <Link href="/veterans" className={styles.mobileNavLink}>Veterans</Link>
          <Link href="/dementia-care" className={styles.mobileNavLink}>Dementia Care</Link>
          <Link href="/about" className={styles.mobileNavLink}>About</Link>
          <Link href="/careers" className={styles.mobileNavLink}>Careers</Link>
          
          <div className={styles.mobilePhones}>
            <a href="tel:+13037571777" className={styles.mobilePhone}>
              Denver/Boulder: (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.mobilePhone}>
              Colo Springs/Pueblo: (719) 428-3999
            </a>
          </div>
          
          <Link href="/contact" className={styles.mobileCtaButton}>
            Request Care Plan
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

