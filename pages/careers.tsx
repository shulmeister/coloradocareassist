import Layout from '@/components/Layout';
import styles from '@/styles/Page.module.css';

export default function Careers() {
  return (
    <Layout
      title="Careers - Colorado CareAssist"
      description="Join our team of compassionate caregivers. Competitive pay, benefits, flexible schedules. Now hiring in Denver, Boulder, Colorado Springs & Pueblo."
    >
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Join Our Team</h1>
            <p className={styles.heroSubtitle}>
              Make a difference in people's lives while building a rewarding career
            </p>
          </div>
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>Why Work at Colorado CareAssist?</h2>
            <p className={styles.lead}>
              We believe that great care starts with great caregivers. That's why we invest in our team 
              with competitive pay, comprehensive benefits, ongoing training, and a supportive work environment.
            </p>
          </section>

          <section className={styles.highlightSection}>
            <h2>What We Offer</h2>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <h3>💰 Competitive Pay</h3>
                <p>
                  We pay more than Medicaid-focused agencies because we value quality caregivers. 
                  Your experience and dedication deserve fair compensation.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>🏥 Benefits Package</h3>
                <p>
                  Health benefits, paid time off, and other perks available for eligible employees. 
                  We invest in our team's well-being.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>📅 Flexible Scheduling</h3>
                <p>
                  Choose shifts that work with your life. Full-time, part-time, and weekend options 
                  available. We work with your schedule.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>🎓 Ongoing Training</h3>
                <p>
                  Comprehensive training in dementia care, veterans care, and more. Grow your skills 
                  and advance your career with us.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>🤝 Supportive Team</h3>
                <p>
                  You're never alone. Our care managers provide ongoing support, guidance, and 
                  appreciation for the important work you do.
                </p>
              </div>

              <div className={styles.benefit}>
                <h3>🏠 Family-Owned Culture</h3>
                <p>
                  We're not a corporate franchise. You're part of a close-knit team where your 
                  contributions are valued and recognized.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Available Positions</h2>
            <div className={styles.positions}>
              <div className={styles.position}>
                <h3>Certified Nursing Assistant (CNA)</h3>
                <p>
                  Provide personal care, medication reminders, and companionship to clients in their homes. 
                  CNA certification required. Experience with dementia care or veterans care a plus.
                </p>
                <ul>
                  <li>Competitive hourly rate</li>
                  <li>Flexible scheduling options</li>
                  <li>Benefits for full-time employees</li>
                  <li>Ongoing training and support</li>
                </ul>
              </div>

              <div className={styles.position}>
                <h3>Home Care Aide</h3>
                <p>
                  Assist clients with activities of daily living, light housekeeping, meal preparation, 
                  and companionship. No certification required—we provide training.
                </p>
                <ul>
                  <li>No experience necessary</li>
                  <li>Paid training provided</li>
                  <li>Flexible part-time or full-time hours</li>
                  <li>Opportunity for advancement</li>
                </ul>
              </div>

              <div className={styles.position}>
                <h3>Companion Caregiver</h3>
                <p>
                  Provide companionship, light housekeeping, meal prep, and transportation for clients. 
                  Perfect for those who enjoy helping others and building meaningful relationships.
                </p>
                <ul>
                  <li>Great for career changers</li>
                  <li>Flexible scheduling</li>
                  <li>Training provided</li>
                  <li>Rewarding work environment</li>
                </ul>
              </div>

              <div className={styles.position}>
                <h3>Handyman / Maintenance Specialist</h3>
                <p>
                  Provide light home maintenance, safety modifications, and repairs for our clients. 
                  Experience in general handyman work required. Must pass background checks.
                </p>
                <ul>
                  <li>Competitive pay</li>
                  <li>Consistent work schedule</li>
                  <li>Company vehicle provided for work</li>
                  <li>Benefits available</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Requirements</h2>
            <p>All positions require:</p>
            <ul className={styles.requirementsList}>
              <li>Pass comprehensive CBI background check</li>
              <li>Pass CAPS (Colorado Adult Protective Services) verification</li>
              <li>Pass DMV check (for positions involving transportation)</li>
              <li>Pass drug screening and ongoing random drug tests</li>
              <li>Reliable transportation</li>
              <li>Valid Colorado driver's license and auto insurance</li>
              <li>Ability to lift up to 50 lbs (for caregiver positions)</li>
              <li>Compassionate, patient, and professional demeanor</li>
              <li>Excellent communication skills</li>
              <li>Commitment to client safety and dignity</li>
            </ul>
          </section>

          <section className={styles.highlightSection}>
            <h2>Our Training Program</h2>
            <p>
              When you join Colorado CareAssist, you'll receive comprehensive training including:
            </p>
            <div className={styles.trainingProgram}>
              <div className={styles.trainingModule}>
                <strong>Orientation & Safety</strong>
                <p>Company policies, safety protocols, emergency procedures, and client rights</p>
              </div>
              <div className={styles.trainingModule}>
                <strong>Dementia Care</strong>
                <p>Understanding memory loss, communication strategies, and behavioral management</p>
              </div>
              <div className={styles.trainingModule}>
                <strong>Veterans Care</strong>
                <p>PTSD awareness, military culture, and specialized needs of veterans</p>
              </div>
              <div className={styles.trainingModule}>
                <strong>Personal Care Skills</strong>
                <p>ADL assistance, mobility support, medication reminders, and infection control</p>
              </div>
              <div className={styles.trainingModule}>
                <strong>Communication</strong>
                <p>Working with families, documentation, and using our Digital Family Room system</p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Make a Difference?</h2>
            <p>
              Join a team that values your contribution and invests in your success. We're hiring 
              compassionate caregivers throughout Colorado.
            </p>
            <div className={styles.applicationInfo}>
              <h3>How to Apply</h3>
              <p>
                Ready to start your journey with us? The fastest way to apply is through our secure online portal.
              </p>
              
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <a 
                  href="https://colcareassist.clearcareonline.com/apply/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                  style={{ display: 'inline-block', fontSize: '1.1rem', padding: '1rem 2rem' }}
                >
                  Start Online Application
                </a>
              </div>

              <p>
                You can also email your resume to:
              </p>
              <p className={styles.applicationEmail}>
                <strong>Email:</strong> <a href="mailto:careers@coloradocareassist.com">careers@coloradocareassist.com</a>
              </p>
              <p>
                Or call us to learn more about current openings:
              </p>
              <div className={styles.applicationPhones}>
                <a href="tel:+13037571777" className={styles.phoneButton}>
                  Denver/Boulder: (303) 757-1777
                </a>
                <a href="tel:+17194283999" className={styles.phoneButton}>
                  Colo Springs/Pueblo: (719) 428-3999
                </a>
              </div>
            </div>
            <p className={styles.ctaNote}>
              Colorado CareAssist is an equal opportunity employer. We celebrate diversity and are 
              committed to creating an inclusive environment for all employees.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

