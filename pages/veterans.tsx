import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Page.module.css';

export default function Veterans() {
  return (
    <Layout
      title="Veterans Home Care - Colorado CareAssist"
      description="Specialized home care for veterans in Colorado. VA benefits assistance available. Caregivers trained in veterans care. Serving Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo."
    >
      <div className={styles.page}>
        <div className={styles.hero} style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 0 
          }}>
            <Image 
              src="/images/veterans.jpg" 
              alt="Veteran with service dog" 
              fill
              style={{ 
                objectFit: 'cover', 
                opacity: 0.25 
              }} 
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1>🎖️ Veterans Home Care</h1>
            <p className={styles.heroSubtitle}>
              Honoring those who served with specialized, compassionate home care
            </p>
          </div>
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>Serving Those Who Served</h2>
            <p className={styles.lead}>
              At Colorado CareAssist, we understand the unique needs of veterans and their families. 
              Our caregivers receive specialized training in veterans care, and we're experienced in 
              navigating VA benefits to help make quality care more affordable.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Specialized Veterans Care Services</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>🏥 Medical Support</h3>
                <ul>
                  <li>Medication reminders & management</li>
                  <li>Wound care assistance</li>
                  <li>Mobility & transfer support</li>
                  <li>Post-surgery recovery care</li>
                  <li>Chronic condition management</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>🧠 Mental Health Support</h3>
                <ul>
                  <li>PTSD-aware caregiving</li>
                  <li>Companionship & emotional support</li>
                  <li>Routine & structure maintenance</li>
                  <li>Crisis de-escalation training</li>
                  <li>Respectful, patient approach</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>🏠 Daily Living Assistance</h3>
                <ul>
                  <li>Personal care & hygiene</li>
                  <li>Meal preparation</li>
                  <li>Housekeeping & laundry</li>
                  <li>Transportation to VA appointments</li>
                  <li>Errands & shopping</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>🔧 Home Safety</h3>
                <ul>
                  <li>Accessibility modifications</li>
                  <li>Grab bar installation</li>
                  <li>Fall prevention assessments</li>
                  <li>Home maintenance support</li>
                  <li>Safety equipment setup</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.highlightSection}>
            <h2>VA Benefits Assistance</h2>
            <p>
              Many veterans are eligible for VA benefits that can help cover the cost of home care services. 
              We're experienced in working with:
            </p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <strong>Aid & Attendance Benefits</strong>
                <p>Additional monthly pension for veterans who need help with daily activities</p>
              </div>
              <div className={styles.benefitItem}>
                <strong>Housebound Benefits</strong>
                <p>Support for veterans who are substantially confined to their home</p>
              </div>
              <div className={styles.benefitItem}>
                <strong>VA Healthcare Coverage</strong>
                <p>Coordination with VA healthcare services and appointments</p>
              </div>
            </div>
            <p className={styles.note}>
              <strong>We can help:</strong> Our team can assist with paperwork, documentation, and 
              navigating the VA benefits application process. We'll work with you to maximize available benefits.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Why Veterans Choose Colorado CareAssist</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Veterans Care Training</h3>
                  <p>All caregivers receive specialized training in veterans care, including PTSD awareness and military culture understanding.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Thorough Background Checks</h3>
                  <p>CBI checks, CAPS verification, and ongoing drug testing ensure your safety and security.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Flexible Scheduling</h3>
                  <p>From a few hours per week to 24/7 care, we adapt to your needs and VA appointment schedule.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Family Communication</h3>
                  <p>Digital Family Room keeps family members informed with real-time care notes and updates.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Colorado-Based & Independent</h3>
                  <p>Family-owned since 2012. We're not a franchise—we're your neighbors committed to serving our veterans.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Complete Care Under One Rate</h3>
                  <p>One hourly rate covers all services—no hidden fees or service tiers.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Learn More?</h2>
            <p>
              Contact us today for a free consultation. We'll discuss your needs, explain available 
              VA benefits, and create a personalized care plan.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Request Care Plan
              </Link>
              <a href="tel:+13037571777" className={styles.secondaryButton}>
                Call (303) 757-1777
              </a>
            </div>
            <p className={styles.ctaNote}>
              Serving veterans throughout Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo, and surrounding areas.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

