import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      const headerOffset = 120;
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

      {/* Main Nav - Logo + Links */}
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {!logoFailed ? (
              <Image
                src="/cca-logo.png"
                alt="Colorado CareAssist"
                width={260}
                height={85}
                className={styles.logoImage}
                style={{ width: 'auto', height: '85px' }}
                onError={() => setLogoFailed(true)}
                priority
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
                <button onClick={() => scrollToSection('how-it-works')} className={styles.navLink}>
                  How It Works
                </button>
                <button onClick={() => scrollToSection('standards')} className={styles.navLink}>
                  Standards
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
                <Link href="/#how-it-works" className={styles.navLink}>How It Works</Link>
                <Link href="/#standards" className={styles.navLink}>Standards</Link>
                <Link href="/#reviews" className={styles.navLink}>Reviews</Link>
                <Link href="/#faq" className={styles.navLink}>FAQ</Link>
              </>
            )}
            
            <Link href="/veterans" className={styles.navLink}>Veterans</Link>
            <Link href="/dementia-care" className={styles.navLink}>Dementia Care</Link>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
          </nav>

          {/* Desktop Phone Numbers */}
          <div className={styles.desktopPhones}>
            <a href="tel:+13037571777" className={styles.phoneLink}>
              (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.phoneLink}>
              (719) 428-3999
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                Services
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className={styles.mobileNavLink}>
                How It Works
              </button>
              <button onClick={() => scrollToSection('standards')} className={styles.mobileNavLink}>
                Standards
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
              <Link href="/#how-it-works" className={styles.mobileNavLink}>How It Works</Link>
              <Link href="/#standards" className={styles.mobileNavLink}>Standards</Link>
              <Link href="/#reviews" className={styles.mobileNavLink}>Reviews</Link>
              <Link href="/#faq" className={styles.mobileNavLink}>FAQ</Link>
            </>
          )}
          
          <Link href="/veterans" className={styles.mobileNavLink}>Veterans</Link>
          <Link href="/dementia-care" className={styles.mobileNavLink}>Dementia Care</Link>
          <Link href="/careers" className={styles.mobileNavLink}>Careers</Link>
          
          <div className={styles.mobilePhones}>
            <a href="tel:+13037571777" className={styles.mobilePhone}>
              Denver/Boulder: (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.mobilePhone}>
              Colorado Springs/Pueblo: (719) 428-3999
            </a>
            <a href="mailto:care@coloradocareassist.com" className={styles.mobilePhone}>
              care@coloradocareassist.com
            </a>
          </div>

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
