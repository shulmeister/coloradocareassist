import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Trustpilot from '@/components/integrations/Trustpilot';
import FAQ from '@/components/FAQ';
import styles from '@/styles/Home.module.css';

interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  summary: string;
  expanded: {
    sections?: {
      heading?: string;
      items: string[];
    }[];
    footer?: string;
  };
}

const services: Service[] = [
  {
    id: 'adl',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'ADL Support',
    summary: 'Bathing, dressing, mobility, toileting, transfers, medication reminders.',
    expanded: {
      sections: [
        {
          heading: 'Basic ADLs',
          items: [
            'Toileting and continence support',
            'Transfers and mobility assistance',
            'Bathing, showering, grooming, and hygiene',
            'Dressing and personal care'
          ]
        },
        {
          heading: 'Intermediate ADLs',
          items: [
            'Protective supervision and safety oversight',
            'Medication reminders and routine adherence',
            'Mobility monitoring and fall prevention'
          ]
        }
      ],
      footer: 'Care is matched to functional ability and adjusted as needs change.'
    }
  },
  {
    id: 'housekeeping',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Housekeeping',
    summary: 'Laundry, vacuuming, mopping, tidying. Maintain a clean, organized home.',
    expanded: {
      sections: [
        {
          items: [
            'Light housekeeping and home upkeep',
            'Laundry, linens, and organization',
            'Kitchen and bathroom maintenance',
            'Safety-focused tidying to reduce fall risk'
          ]
        }
      ],
      footer: 'Services are performed in support of independent living — not as standalone cleaning.'
    }
  },
  {
    id: 'mealprep',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    title: 'Meal Preparation',
    summary: 'Nutritious meals prepared in your home. Dietary needs accommodated.',
    expanded: {
      sections: [
        {
          items: [
            'Meal planning and in-home preparation',
            'Dietary and medical considerations respected',
            'Hydration and nutrition monitoring',
            'Assistance with feeding when required'
          ]
        }
      ],
      footer: 'Supports both physical health and daily routine stability.'
    }
  },
  {
    id: 'errands',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Errands & Transportation',
    summary: 'Appointments, groceries, pharmacy runs. Reliable transportation when needed.',
    expanded: {
      sections: [
        {
          items: [
            'Transportation to medical and personal appointments',
            'Grocery and pharmacy coordination',
            'Accompaniment and advocacy during outings',
            'Errands completed with safety and accountability'
          ]
        }
      ],
      footer: 'Designed to reduce isolation while maintaining independence.'
    }
  },
  {
    id: 'handyman',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Handyman Services',
    summary: 'Light home maintenance and repairs. Handymen on staff, not contractors.',
    expanded: {
      sections: [
        {
          items: [
            'Minor home maintenance and safety repairs',
            'Grab bars, lighting, and fall-risk mitigation',
            'Trusted in-house staff — not third-party contractors'
          ]
        }
      ],
      footer: 'Focused on home safety, not remodeling or construction.'
    }
  },
  {
    id: 'petcare',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.5 3.5c0 1.5-2 3-2 4.5 0 2.5 2 4 4 4s4-1.5 4-4c0-1.5-2-3-2-4.5"/>
        <path d="M12.5 12v8.5"/>
        <path d="M8 16l4.5 4.5L17 16"/>
      </svg>
    ),
    title: 'Pet Care',
    summary: 'Feeding, walks, companionship for your pets. Part of complete home support.',
    expanded: {
      sections: [
        {
          items: [
            'Feeding, walking, and basic pet care',
            'Support for routines clients may struggle to manage',
            'Companionship that maintains normal daily life'
          ]
        }
      ],
      footer: 'Because continuity matters — even for pets.'
    }
  },
  {
    id: 'concierge',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
        <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1z"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Private Client Concierge',
    summary: 'Dedicated management for estate planners, fiduciaries, and high-net-worth families.',
    expanded: {
      sections: [
        {
          items: [
            'Dedicated account and care management',
            'Priority scheduling and caregiver continuity',
            'Direct coordination with POAs, trustees, and attorneys',
            'Documentation suitable for fiduciary oversight'
          ]
        }
      ],
      footer: 'Built for complex care environments where accountability matters.'
    }
  }
];

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.jpg"
            alt="Complete home care in Colorado"
            className={styles.heroImg}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Complete Home Care
            </h1>
            <p className={styles.heroSubtitle}>
              Daily living support. Home management. Handyman services. Pet care.
            </p>
            <p className={styles.heroConcierge}>
              One plan. One rate. No gaps.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.primaryCta}>
                Request a Care Plan
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                Contact Us
              </Link>
            </div>
            <Link href="/private-client" className={styles.heroConciergeLink}>
              Looking for Private Client Concierge?
            </Link>
          </div>
          
          {/* Trust Wrapper */}
          <div className={styles.trustWrapper}>
            {/* Left: VA Badge */}
            <div className={styles.trustBadge}>
              <Image 
                src="/images/Stacked-Full-Color-on-Light.png" 
                alt="VA Community Care Network Provider"
                width={200}
                height={200}
                style={{ width: 'auto', height: '60px', borderRadius: '4px' }}
              />
            </div>

            {/* Center: Trust Row (White Box) */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span>Family-owned since 2012</span>
              </div>
              
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span>Insured & bonded</span>
              </div>
              
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <polyline points="17 11 19 13 23 9"/>
                  </svg>
                </div>
                <span>Background checked</span>
              </div>

              <div className={styles.trustItem}>
                <Trustpilot />
              </div>
            </div>

            {/* Right: BBB Badge */}
            <div className={styles.trustBadge}>
              <a 
                href="https://www.bbb.org/us/co/colorado-springs/profile/senior-home-care/colorado-careassist-0785-87351007/#sealclick" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                style={{ display: 'block', height: '50px' }}
              >
                <Image 
                  src="https://seal-southerncolorado.bbb.org/seals/blue-seal-293-61-bbb-87351007.png" 
                  alt="Colorado CareAssist BBB Business Review"
                  width={293}
                  height={61}
                  style={{ border: 0, height: '100%', width: 'auto' }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Complete Home Care Grid */}
      <section id="services" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              Complete home care under one hourly rate. No service tiers or hidden fees.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div 
                key={service.id}
                className={`${styles.serviceCard} ${activeService === service.id ? styles.expanded : ''}`}
                onClick={() => toggleService(service.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleService(service.id);
                    e.preventDefault();
                  }
                }}
                aria-expanded={activeService === service.id}
              >
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  
                  <div className={styles.serviceExpanded}>
                    {service.expanded.sections?.map((section, idx) => (
                      <div key={idx}>
                        {section.heading && <h4>{section.heading}</h4>}
                        <ul>
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {service.expanded.footer && (
                      <p className={styles.serviceFooter}>{service.expanded.footer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section id="standards" className={styles.differentiators}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why We're Different</h2>
          </div>
          
          <div className={styles.diffGrid}>
            <div className={styles.diffColumn}>
              <h3>Better Caregivers</h3>
              <ul>
                <li>Paid above market rate</li>
                <li>Benefits provided</li>
                <li>Lower turnover, higher reliability</li>
                <li>Dementia care training</li>
                <li>Veteran care training</li>
                <li>Ongoing professional development</li>
              </ul>
            </div>

            <div className={styles.diffColumn}>
              <h3>Safer Process</h3>
              <ul>
                <li>CBI background checks</li>
                <li>CAPS verification</li>
                <li>DMV checks</li>
                <li>Random drug testing year-round</li>
                <li>$3 million liability insurance</li>
                <li>Honesty bonds</li>
              </ul>
            </div>

            <div className={styles.diffColumn}>
              <h3>Total Transparency</h3>
              <ul>
                <li>Digital Family Room portal</li>
                <li>Real-time care notes</li>
                <li>Schedule access for POA/estate managers</li>
                <li>Billing transparency</li>
                <li>Direct communication with care team</li>
                <li>Private client concierge options</li>
                <li>No surprises, no hidden fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
          </div>
          
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Call</h3>
              <p>Speak with a care manager. No sales pitch. Operational discussion.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Care Plan</h3>
              <p>We build a plan around your needs. One rate covers everything.</p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start Fast, Adjust Anytime</h3>
              <p>Begin within days. Modify services as needs change. No contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className={styles.reviews}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Client Reviews</h2>
            <div className={styles.googleRating}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.ratingText}>5.0 on Google</span>
            </div>
          </div>
          
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInitial} style={{ backgroundColor: '#2D7D9A' }}>R</div>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerName}>Rob Mirpuri</div>
                  <div className={styles.reviewDate}>9 weeks ago</div>
                </div>
                <div className={styles.googleIcon}>G</div>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>
                Jason was great. He answered all my questions and provided great service when picking me up from the hospital after surgery. I will use his services again.
              </p>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInitial} style={{ backgroundColor: '#D9436A' }}>L</div>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerName}>Lilah Parks</div>
                  <div className={styles.reviewDate}>10 weeks ago</div>
                </div>
                <div className={styles.googleIcon}>G</div>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>
                Colorado Care Assist has been such a blessing for my grandma. Living far away I’m not able to give her the attention and care she deserves, but knowing she is in good hands puts my mind at ease.
              </p>
            </div>

            <div className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerInitial} style={{ backgroundColor: '#1C5B38' }}>J</div>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerName}>Joanne Jones</div>
                  <div className={styles.reviewDate}>5 days ago</div>
                </div>
                <div className={styles.googleIcon}>G</div>
              </div>
              <div className={styles.reviewStars}>★★★★★</div>
              <p className={styles.reviewText}>
                Awesome services, I have a lady named Jean that helps me with whatever I need. She is always so kind and caring and so helpful. CO Care Assist Is a great company and very timely! J. Jones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to Start?</h2>
          <p>Speak with a care manager. No sales pitch. Operational discussion.</p>
          <div className={styles.finalCtaButtons}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Care Plan
            </Link>
            <a href="tel:+13037571777" className={styles.secondaryCta}>
              Call/Text Denver: (303) 757-1777
            </a>
            <a href="tel:+17194283999" className={styles.secondaryCta}>
              Call/Text Springs: (719) 428-3999
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className={styles.mobileStickyBar}>
        <a href="tel:+13037571777" className={styles.mobileCallBtn}>
          Call/Text
        </a>
        <Link href="/contact" className={styles.mobileRequestBtn}>
          Request Care Plan
        </Link>
      </div>
    </Layout>
  );
}
