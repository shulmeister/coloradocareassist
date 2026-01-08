import Layout from '@/components/Layout';
import Link from 'next/link';
import Trustpilot from '@/components/integrations/Trustpilot';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Complete Home Care<br />
              <span className={styles.heroTitleAccent}>You Can Trust</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Premium, independent home care services in Colorado. From ADL support to handyman services, 
              we provide comprehensive care with the highest safety standards.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>12+</span>
                <span className={styles.heroStatLabel}>Years Serving Colorado</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>100%</span>
                <span className={styles.heroStatLabel}>Background Checked</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>24/7</span>
                <span className={styles.heroStatLabel}>Family Portal Access</span>
              </div>
            </div>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.primaryCta}>
                Request a Care Plan
              </Link>
              <a href="tel:+13037571777" className={styles.secondaryCta}>
                Call Denver: (303) 757-1777
              </a>
            </div>
            <p className={styles.heroNote}>
              <strong>Family-owned</strong> • Not a franchise • Colorado-based since 2012
            </p>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&auto=format&fit=crop"
              alt="Warm, calm home setting in Colorado"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Trust Marks Section */}
      <section className={styles.trustMarks}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <a 
                href="https://www.bbb.org/us/co/colorado-springs/profile/senior-home-care/colorado-careassist-0785-87351007/#sealclick" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className={styles.bbbBadge}
              >
                <img 
                  src="https://seal-southerncolorado.bbb.org/seals/blue-seal-293-61-bbb-87351007.png" 
                  alt="Colorado CareAssist BBB Business Review" 
                />
              </a>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>✓</div>
              <div className={styles.trustText}>
                <strong>Background Checked</strong>
                <span>CBI, CAPS & DMV verified</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🛡️</div>
              <div className={styles.trustText}>
                <strong>Fully Insured & Bonded</strong>
                <span>Millions in liability coverage</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🏔️</div>
              <div className={styles.trustText}>
                <strong>Colorado-Based Since 2012</strong>
                <span>Family-owned, not a franchise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Complete Home Care Services</h2>
            <p className={styles.sectionSubtitle}>
              One hourly rate. Complete care. No hidden fees or service tiers.
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛁</div>
              <h3>ADL Support</h3>
              <ul className={styles.serviceList}>
                <li>Bathing & personal hygiene</li>
                <li>Dressing assistance</li>
                <li>Mobility & transfers</li>
                <li>Toileting support</li>
                <li>Medication reminders</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏠</div>
              <h3>Housekeeping</h3>
              <ul className={styles.serviceList}>
                <li>Laundry & linens</li>
                <li>Vacuuming & mopping</li>
                <li>Kitchen cleaning</li>
                <li>Bathroom sanitizing</li>
                <li>General tidying</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🍳</div>
              <h3>Meal Preparation</h3>
              <ul className={styles.serviceList}>
                <li>Custom meal planning</li>
                <li>Dietary accommodations</li>
                <li>Grocery shopping</li>
                <li>Cooking & cleanup</li>
                <li>Nutrition monitoring</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚗</div>
              <h3>Transportation</h3>
              <ul className={styles.serviceList}>
                <li>Medical appointments</li>
                <li>Errands & shopping</li>
                <li>Social activities</li>
                <li>Pharmacy visits</li>
                <li>Safe, reliable drivers</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Handyman Services</h3>
              <ul className={styles.serviceList}>
                <li>Light home maintenance</li>
                <li>Safety modifications</li>
                <li>Grab bar installation</li>
                <li>Minor repairs</li>
                <li>On-staff handymen</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🐕</div>
              <h3>Pet Care</h3>
              <ul className={styles.serviceList}>
                <li>Feeding & watering</li>
                <li>Dog walking</li>
                <li>Litter box cleaning</li>
                <li>Companionship</li>
                <li>Vet appointment transport</li>
              </ul>
            </div>
          </div>

          <div className={styles.specialtyServices}>
            <h3>Specialized Care Programs</h3>
            <div className={styles.specialtyGrid}>
              <Link href="/veterans" className={styles.specialtyCard}>
                <h4>🎖️ Veterans Care</h4>
                <p>Specialized training for veterans. VA benefits assistance available.</p>
              </Link>
              <Link href="/dementia-care" className={styles.specialtyCard}>
                <h4>🧠 Dementia Care</h4>
                <p>Expert dementia & Alzheimer's care with specialized training.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section id="standards" className={styles.standardsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Uncompromising Safety Standards</h2>
            <p className={styles.sectionSubtitle}>
              Your loved one's safety is our top priority. Every caregiver undergoes rigorous screening.
            </p>
          </div>

          <div className={styles.standardsGrid}>
            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>CBI Background Checks</h3>
              <p>Comprehensive Colorado Bureau of Investigation criminal background screening for all caregivers.</p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>CAPS Verification</h3>
              <p>Colorado Adult Protective Services registry checks to ensure caregiver integrity.</p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>DMV Checks</h3>
              <p>Motor vehicle record verification for all caregivers providing transportation services.</p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>Random Drug Testing</h3>
              <p>Ongoing random drug screening throughout the year to maintain safety standards.</p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>Liability Insurance</h3>
              <p>Millions of dollars in liability coverage and honesty bonds for your protection.</p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardBadge}>✓</div>
              <h3>Specialized Training</h3>
              <p>Dementia care and veterans care training for all caregivers.</p>
            </div>
          </div>

          <div className={styles.standardsNote}>
            <p>
              <strong>Why it matters:</strong> We pay our caregivers more than Medicaid-focused agencies 
              and offer benefits to improve retention and reliability. Better pay = better care.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
            <p className={styles.sectionSubtitle}>
              Getting started with Colorado CareAssist is simple and transparent.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Free Consultation</h3>
              <p>
                Call us or request a care plan online. We'll discuss your loved one's needs, 
                preferences, and schedule a complimentary in-home assessment.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Custom Care Plan</h3>
              <p>
                Our care manager creates a personalized care plan tailored to your specific needs. 
                One hourly rate covers all services - no hidden fees.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Caregiver Match</h3>
              <p>
                We match you with a carefully screened caregiver who fits your needs and personality. 
                Meet them before care begins.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Care Begins</h3>
              <p>
                Your caregiver starts on your schedule. Access our Digital Family Room 24/7 to view 
                care notes, schedules, and billing.
              </p>
            </div>
          </div>

          <div className={styles.familyPortal}>
            <h3>📱 Digital Family Room</h3>
            <p>
              Stay connected with transparent, real-time access to care information. Perfect for 
              family members, POA, and estate managers.
            </p>
            <ul className={styles.portalFeatures}>
              <li>Real-time care notes & updates</li>
              <li>Schedule management</li>
              <li>Billing & invoicing</li>
              <li>Caregiver communication</li>
              <li>Multi-user access for family</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Band - Care in Action */}
      <section className={styles.imageBand}>
        <div className={styles.imageBandContainer}>
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop"
            alt="Colorado landscape, calm and natural"
            className={styles.imageBandImg}
          />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Trusted by Colorado Families</h2>
            <p className={styles.sectionSubtitle}>
              See what families across Colorado are saying about our care.
            </p>
          </div>
          
          <Trustpilot />
          
          <div className={styles.reviewsNote}>
            <p>
              Family-owned and operated since 2012. We're not a franchise - we're your neighbors, 
              committed to providing the best home care in Colorado.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>What areas do you serve?</h3>
              <p>
                We provide home care services throughout the Denver metro area, Boulder County, 
                Colorado Springs, Pueblo County, and surrounding areas. Call us to confirm service 
                in your specific location.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How is pricing structured?</h3>
              <p>
                We offer one simple hourly or day rate that covers all services - ADL support, 
                housekeeping, meal prep, errands, transportation, and even handyman services. 
                No hidden fees or service tiers. Contact us for current rates.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Are you licensed and insured?</h3>
              <p>
                Yes. Colorado CareAssist is fully licensed and carries millions of dollars in 
                liability insurance and honesty bonds to protect our clients and their families.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Can I use insurance or VA benefits?</h3>
              <p>
                We can assist with VA benefits paperwork and work with long-term care insurance 
                providers. Contact us to discuss your specific situation and coverage options.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What makes you different from other agencies?</h3>
              <p>
                We're family-owned (not a franchise), pay caregivers more to ensure quality and 
                retention, include handyman services on staff, provide a Digital Family Room for 
                transparency, and maintain the highest safety standards in Colorado.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>How quickly can care start?</h3>
              <p>
                In many cases, we can begin care within 24-48 hours of your initial consultation, 
                depending on your schedule and care needs. We also accommodate planned start dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Talk to a care manager today. We'll answer your questions and create a custom care plan 
            for your loved one.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href="/contact" className={styles.primaryCta}>
              Request a Care Plan
            </Link>
            <div className={styles.finalCtaPhones}>
              <a href="tel:+13037571777" className={styles.phoneButton}>
                Denver/Boulder: (303) 757-1777
              </a>
              <a href="tel:+17194283999" className={styles.phoneButton}>
                Colo Springs/Pueblo: (719) 428-3999
              </a>
            </div>
          </div>
          <p className={styles.finalCtaEmail}>
            Or email us: <a href="mailto:care@coloradocareassist.com">care@coloradocareassist.com</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

