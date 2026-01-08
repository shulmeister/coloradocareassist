import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function PrivateClient() {
  return (
    <Layout 
      title="Private Client Concierge - Colorado CareAssist" 
      description="Dedicated private client and estate manager services for high-net-worth families, fiduciaries, and trustees."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Private Client Concierge</h1>
          <p className={styles.heroSubtitle}>
            A Home Care Model Designed for Complex Family, Estate, and Fiduciary Needs
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className="container">
          <p className={styles.lead} style={{ textAlign: 'center' }}>
            Colorado CareAssist’s Private Client Concierge service is purpose-built for situations where home care is not simply a service — but a managed responsibility.
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-brown)' }}>This offering is designed for:</h3>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <strong>Estate Planners & Managers</strong>
                <p>Seamless coordination for complex estates.</p>
              </div>
              <div className={styles.benefitItem}>
                <strong>Attorneys & Fiduciaries</strong>
                <p>Risk management and documentation compliance.</p>
              </div>
              <div className={styles.benefitItem}>
                <strong>Trustees, Conservators & POAs</strong>
                <p>Accountable oversight and transparency.</p>
              </div>
              <div className={styles.benefitItem}>
                <strong>High-Net-Worth Families</strong>
                <p>Managing complex, multi-faceted care needs.</p>
              </div>
            </div>
            
            <div className={styles.note} style={{ marginTop: '3rem' }}>
              <p style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: 500 }}>
                We understand that in these situations, the true risks are not just care gaps — but liability, documentation, continuity, and oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className={styles.highlightSection}>
        <div className="container">
          <h2>What Makes Private Client Concierge Different</h2>
          <p>
            Private Client Concierge is not "priority scheduling."<br />
            It is a higher standard of operational accountability.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Dedicated Onboarding & Case Ownership</h3>
              <p style={{ marginBottom: '1rem' }}>Each private client is assigned:</p>
              <ul>
                <li>A dedicated onboarding manager</li>
                <li>A single point of accountability for care coordination</li>
                <li>A 2-hour business-hour response SLA</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>No call centers. No rotating contacts. No "we'll get back to you."</p>
            </div>

            <div className={styles.card}>
              <h3>Caregiver Continuity & Priority Scheduling</h3>
              <p style={{ marginBottom: '1rem' }}>We prioritize:</p>
              <ul>
                <li>Consistent caregiver assignment</li>
                <li>Reduced rotation and handoffs</li>
                <li>Proactive backup planning to avoid last-minute disruptions</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>This matters not just for quality of care, but for client stability, safety, and trust.</p>
            </div>

            <div className={styles.card}>
              <h3>Clinical Oversight When Required</h3>
              <p style={{ marginBottom: '1rem' }}>When client needs warrant it, we provide:</p>
              <ul>
                <li>RN oversight and care plan review</li>
                <li>Coordination with medical providers when appropriate</li>
                <li>Documentation suitable for fiduciary and professional review</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>This is particularly relevant in dementia care, post-hospital transitions, and high-acuity cases.</p>
            </div>

            <div className={styles.card}>
              <h3>Transparent Documentation & Fiduciary-Ready Records</h3>
              <p style={{ marginBottom: '1rem' }}>We maintain clear, auditable records including:</p>
              <ul>
                <li>Care notes and visit summaries</li>
                <li>Schedules and service verification</li>
                <li>Invoices and billing documentation</li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Records are structured to support estate administration, trust accounting, and conservatorship oversight.</p>
            </div>

            <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
              <h3>Direct Coordination with Attorneys, Trustees, and POAs</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <p style={{ marginBottom: '0.5rem' }}><strong>We routinely work directly with:</strong></p>
                  <ul>
                    <li>Estate counsel</li>
                    <li>Family offices</li>
                    <li>Trustees and conservators</li>
                  </ul>
                </div>
                <div>
                  <p style={{ marginBottom: '0.5rem' }}><strong>This includes:</strong></p>
                  <ul>
                    <li>Aligning care plans with legal authority</li>
                    <li>Clear communication boundaries</li>
                    <li>Prompt documentation when decisions or changes are made</li>
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>We understand the professional obligations fiduciaries carry — and we operate accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.section}>
        <div className="container">
          <h2>Veteran & Dementia Expertise Within Concierge Care</h2>
          
          <div className={styles.grid}>
            <div className={styles.card} style={{ borderLeftColor: 'var(--color-secondary)' }}>
              <h3>Veterans & VA Coordination</h3>
              <p style={{ marginBottom: '1rem' }}>For private clients who are also veterans, our concierge team:</p>
              <ul>
                <li>Assists with VA eligibility assessment</li>
                <li>Guides families and fiduciaries through the VA Community Care authorization process</li>
                <li>Coordinates authorized hours alongside private-pay care when needed</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>Caregivers complete VA-developed training covering veteran-specific care needs, documentation standards, and trauma-informed care.</p>
              <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>This avoids one of the most common failures families encounter: knowing benefits exist, but not knowing how to activate them.</p>
            </div>

            <div className={styles.card} style={{ borderLeftColor: 'var(--color-secondary)' }}>
              <h3>Dementia & Memory Care Specialization</h3>
              <p>Dementia care within Private Client Concierge is structured and intentional.</p>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Caregivers receive formal dementia-specific education focused on:</p>
              <ul>
                <li>Cognitive decline stages and progression</li>
                <li>Communication techniques that reduce agitation</li>
                <li>Safety and fall-risk management</li>
                <li>Routine-based care that supports dignity and familiarity</li>
              </ul>
              <p style={{ marginTop: '1rem', fontWeight: 500 }}>This approach reduces unnecessary escalation, caregiver churn, and family distress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal & Transparency Section */}
      <section className={styles.highlightSection} style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <h2>The Family Room Portal</h2>
              <p>All Private Client Concierge cases include access to the Family Room — a secure digital portal for authorized parties.</p>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>Through the portal, families and fiduciaries can:</strong></p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Review real-time care notes
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Monitor schedules and service delivery
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Access invoices and billing history
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Maintain visibility without constant phone calls
                </li>
              </ul>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Especially valuable for out-of-state family members, professional fiduciaries managing multiple responsibilities, and attorneys requiring documentation.</p>
            </div>

            <div>
              <h2>Transparency & Due Diligence</h2>
              <p>We believe transparency is foundational to trust — especially in fiduciary relationships.</p>
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}><strong>We proactively provide:</strong></p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  State licensing documentation
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Certificates of insurance
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Honesty bond confirmation
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Sample service agreements
                </li>
                <li style={{ padding: '0.25rem 0', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-leaf-dark)', fontWeight: 'bold' }}>✓</span>
                  Business associate agreements (when applicable)
                </li>
              </ul>
              <p style={{ marginTop: '1rem', fontWeight: 500 }}>No surprises. No delays. No resistance to scrutiny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Request Private Client Concierge</h2>
          <p>Private Client Concierge onboarding is handled directly by our senior team.</p>
          
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Request Care Plan
            </Link>
            <a href="mailto:care@coloradocareassist.com" className={styles.secondaryButton}>
              Email Care Team
            </a>
          </div>
          
          <p className={styles.ctaNote}>
            <strong>To initiate:</strong> Email care@coloradocareassist.com, or submit a care plan request and select “Immediately”, noting Private Client Concierge in the description.<br />
            We will respond within two business hours.
          </p>
        </div>
      </section>

      {/* Footer Quote */}
      <section style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--color-off-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: '1.6', color: 'var(--color-brown)' }}>
            "Private Client Concierge exists because some care situations demand more than availability — they demand accountability. Colorado CareAssist is built to support not just clients, but the professionals entrusted with their care."
          </p>
        </div>
      </section>
    </Layout>
  );
}
