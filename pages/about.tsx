import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/Page.module.css';

export default function About() {
  return (
    <Layout
      title="About Us - Colorado CareAssist"
      description="Family-owned home care agency serving Colorado since 2012. Independent, not a franchise. Premium care with the highest safety standards. Denver, Boulder, Colorado Springs & Pueblo."
    >
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className="container">
            <h1>About Colorado CareAssist</h1>
            <p className={styles.heroSubtitle}>
              Family-owned. Colorado-based. Committed to exceptional home care since 2012.
            </p>
          </div>
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>Our Story</h2>
            <p className={styles.lead}>
              Colorado CareAssist was founded in 2012 with a simple mission: provide the kind of home care 
              we would want for our own family members. As a family-owned, independent agency, we're not 
              bound by franchise rules or corporate mandates. This freedom allows us to focus on what truly 
              matters—delivering exceptional, personalized care to every client.
            </p>
            <p>
              Over the past 12+ years, we've built our reputation on trust, quality, and innovation. We were 
              among the first agencies in Colorado to offer comprehensive services under one rate—including 
              handyman services with on-staff handymen—and to provide families with transparent, real-time 
              access to care information through our Digital Family Room.
            </p>
          </section>

          <section className={styles.highlightSection}>
            <h2>What Makes Us Different</h2>
            <div className={styles.differentiators}>
              <div className={styles.differentiator}>
                <h3>🏠 Family-Owned, Not a Franchise</h3>
                <p>
                  We're an independent Colorado company, not a national franchise. This means we make 
                  decisions based on what's best for our clients and caregivers, not corporate profit margins.
                </p>
              </div>

              <div className={styles.differentiator}>
                <h3>💰 We Pay Caregivers More</h3>
                <p>
                  Unlike Medicaid-focused agencies, we pay competitive wages and offer benefits to our 
                  caregivers. Better pay means better retention, which means more consistent, reliable 
                  care for your loved one.
                </p>
              </div>

              <div className={styles.differentiator}>
                <h3>🔧 Handyman Services Included</h3>
                <p>
                  We have handymen on staff—not contractors. Light home maintenance, safety modifications, 
                  and repairs are included in our care services. No need to coordinate with multiple vendors.
                </p>
              </div>

              <div className={styles.differentiator}>
                <h3>📱 Digital Family Room</h3>
                <p>
                  Our proprietary Family Portal gives authorized family members, POA, and estate managers 
                  24/7 access to care notes, schedules, and billing information. Complete transparency.
                </p>
              </div>

              <div className={styles.differentiator}>
                <h3>✓ Uncompromising Safety Standards</h3>
                <p>
                  CBI background checks, CAPS verification, DMV checks, random drug testing throughout the 
                  year, $3 million in liability insurance, and honesty bonds. We don't cut corners on safety.
                </p>
              </div>

              <div className={styles.differentiator}>
                <h3>🎓 Specialized Training</h3>
                <p>
                  All caregivers receive dementia care training and veterans care training—not just those 
                  assigned to specialized cases. Every caregiver is prepared to provide expert care.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Our Service Philosophy</h2>
            <div className={styles.philosophy}>
              <div className={styles.philosophyItem}>
                <h3>Complete Care</h3>
                <p>
                  We believe in comprehensive care under one simple rate. Whether your loved one needs 
                  help with bathing, meal prep, housekeeping, transportation, or light home repairs, 
                  it's all included. No hidden fees, no service tiers, no surprises.
                </p>
              </div>

              <div className={styles.philosophyItem}>
                <h3>Dignity & Respect</h3>
                <p>
                  Every client deserves to be treated with dignity and respect. Our caregivers are trained 
                  to support independence while providing the assistance needed, always honoring personal 
                  preferences and maintaining privacy.
                </p>
              </div>

              <div className={styles.philosophyItem}>
                <h3>Transparency</h3>
                <p>
                  We believe families have the right to know exactly what care is being provided. Our 
                  Digital Family Room provides real-time access to care notes, schedules, and billing—no 
                  waiting for monthly reports or playing phone tag.
                </p>
              </div>

              <div className={styles.philosophyItem}>
                <h3>Reliability</h3>
                <p>
                  By paying our caregivers well and offering benefits, we maintain low turnover rates. 
                  This means your loved one gets consistent care from familiar faces they trust, not a 
                  revolving door of strangers.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Service Areas</h2>
            <p>
              We proudly serve families throughout Colorado's Front Range:
            </p>
            <div className={styles.serviceAreas}>
              <div className={styles.serviceArea}>
                <h3>Denver Metro & Northern Colorado</h3>
                <p>Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe</p>
                <a href="tel:+13037571777" className={styles.areaPhone}>(303) 757-1777</a>
              </div>

              <div className={styles.serviceArea}>
                <h3>Southern Colorado</h3>
                <p>El Paso, Pueblo</p>
                <a href="tel:+17194283999" className={styles.areaPhone}>(719) 428-3999</a>
              </div>
            </div>
            <p className={styles.note}>
              Not sure if we serve your area? Give us a call—we're always looking to expand our reach 
              to help more Colorado families.
            </p>
          </section>

          <section className={styles.highlightSection}>
            <h2>Our Commitment to You</h2>
            <ul className={styles.commitmentList}>
              <li>Respond to inquiries within 24 hours on business days</li>
              <li>Provide a free, no-obligation in-home assessment</li>
              <li>Match you with a caregiver who fits your needs and personality</li>
              <li>Allow you to meet your caregiver before care begins</li>
              <li>Maintain consistent caregivers for continuity of care</li>
              <li>Provide 24/7 access to care information via our Digital Family Room</li>
              <li>Conduct ongoing quality assurance and caregiver supervision</li>
              <li>Adapt care plans as needs change—no bureaucracy, just action</li>
            </ul>
          </section>

          <section className={styles.ctaSection}>
            <h2>Experience the Colorado CareAssist Difference</h2>
            <p>
              We invite you to learn more about how we can help your family. Contact us today for 
              a free consultation and discover why Colorado families have trusted us for over a decade.
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
              Family-owned. Colorado-based. Here for you since 2012.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

