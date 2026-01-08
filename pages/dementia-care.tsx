import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function DementiaCare() {
  return (
    <Layout
      title="Dementia & Alzheimer's Care - Colorado CareAssist"
      description="Expert dementia and Alzheimer's home care in Colorado. Specialized training, compassionate caregivers. Serving Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo."
    >
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className="container">
            <h1>🧠 Dementia & Alzheimer's Care</h1>
            <p className={styles.heroSubtitle}>
              Compassionate, specialized care for individuals living with memory loss
            </p>
          </div>
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>Expert Memory Care at Home</h2>
            <p className={styles.lead}>
              Caring for a loved one with dementia or Alzheimer's requires patience, understanding, 
              and specialized knowledge. At Colorado CareAssist, all our caregivers receive comprehensive 
              dementia care training to provide the highest quality support for your family.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Our Dementia Care Approach</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>🤝 Person-Centered Care</h3>
                <ul>
                  <li>Respecting individuality & dignity</li>
                  <li>Maintaining familiar routines</li>
                  <li>Encouraging independence</li>
                  <li>Adapting to changing needs</li>
                  <li>Honoring life history & preferences</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>🧩 Memory Support</h3>
                <ul>
                  <li>Cognitive stimulation activities</li>
                  <li>Memory-friendly communication</li>
                  <li>Orientation assistance</li>
                  <li>Familiar environment maintenance</li>
                  <li>Gentle redirection techniques</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>🏠 Safety & Security</h3>
                <ul>
                  <li>Wandering prevention strategies</li>
                  <li>Home safety assessments</li>
                  <li>Medication management</li>
                  <li>Fall prevention measures</li>
                  <li>24/7 supervision options</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>❤️ Behavioral Support</h3>
                <ul>
                  <li>De-escalation techniques</li>
                  <li>Sundowning management</li>
                  <li>Anxiety & agitation reduction</li>
                  <li>Positive engagement strategies</li>
                  <li>Calm, patient approach</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.highlightSection}>
            <h2>Specialized Dementia Training</h2>
            <p>
              Every Colorado CareAssist caregiver completes comprehensive dementia care training covering:
            </p>
            <div className={styles.trainingList}>
              <div className={styles.trainingItem}>
                <strong>Understanding Dementia</strong>
                <p>Types of dementia, progression stages, and how they affect daily life</p>
              </div>
              <div className={styles.trainingItem}>
                <strong>Communication Techniques</strong>
                <p>Effective strategies for connecting with individuals experiencing memory loss</p>
              </div>
              <div className={styles.trainingItem}>
                <strong>Behavioral Management</strong>
                <p>Recognizing triggers and responding appropriately to challenging behaviors</p>
              </div>
              <div className={styles.trainingItem}>
                <strong>Safety Protocols</strong>
                <p>Creating secure environments and preventing common hazards</p>
              </div>
              <div className={styles.trainingItem}>
                <strong>Family Support</strong>
                <p>Working with families and providing respite care for caregivers</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Services for All Stages of Dementia</h2>
            <div className={styles.stages}>
              <div className={styles.stage}>
                <h3>Early Stage</h3>
                <p>
                  Light assistance with daily tasks, medication reminders, companionship, 
                  transportation to appointments, and cognitive stimulation activities.
                </p>
              </div>
              <div className={styles.stage}>
                <h3>Middle Stage</h3>
                <p>
                  Increased support with personal care, meal preparation, housekeeping, 
                  behavioral management, and more structured daily routines.
                </p>
              </div>
              <div className={styles.stage}>
                <h3>Late Stage</h3>
                <p>
                  Comprehensive personal care, feeding assistance, mobility support, 
                  comfort measures, and 24/7 care options as needed.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Supporting the Whole Family</h2>
            <p>
              We understand that dementia affects the entire family. Our services include:
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Respite Care</h3>
                  <p>Give family caregivers a break while ensuring your loved one receives quality care.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Family Education</h3>
                  <p>Guidance on dementia progression, communication strategies, and care techniques.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Digital Family Room</h3>
                  <p>Keep all family members informed with real-time care notes and updates.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Flexible Scheduling</h3>
                  <p>From a few hours per week to 24/7 care, we adapt to your changing needs.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Consistent Caregivers</h3>
                  <p>Familiar faces reduce confusion and build trust for better care outcomes.</p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3>Complete Care</h3>
                  <p>One rate covers all services—personal care, housekeeping, meals, and more.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.highlightSection}>
            <h2>Why Choose Colorado CareAssist for Memory Care?</h2>
            <ul className={styles.whyList}>
              <li><strong>All caregivers trained in dementia care</strong> — not just some, all of them</li>
              <li><strong>Family-owned & Colorado-based</strong> — we're not a franchise</li>
              <li><strong>Thorough background screening</strong> — CBI checks, CAPS verification, drug testing</li>
              <li><strong>Better caregiver retention</strong> — we pay more and offer benefits for consistency</li>
              <li><strong>12+ years of experience</strong> — serving Colorado families since 2012</li>
              <li><strong>Transparent communication</strong> — Digital Family Room keeps everyone informed</li>
            </ul>
          </section>

          <section className={styles.ctaSection}>
            <h2>Let's Talk About Your Needs</h2>
            <p>
              Schedule a free consultation to discuss your loved one's care needs. We'll create 
              a personalized care plan that provides safety, dignity, and quality of life.
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
              Serving families throughout Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo, and surrounding areas.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

