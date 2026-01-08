import { useState } from 'react';
import Link from 'next/link';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'What does "Complete Home Care" mean?',
    answer: 'One team handles daily living support, housekeeping, meal prep, errands, transportation, handyman work, and pet care. No need to coordinate multiple providers.'
  },
  {
    question: 'How does pricing work?',
    answer: (
      <>
        <p>Our pricing is simple and transparent:</p>
        <ul>
          <li><strong>Colorado Springs / Pueblo:</strong> $40/hour</li>
          <li><strong>Denver / Boulder:</strong> $43/hour</li>
          <li><strong>24-Hour Live-In:</strong> $650/day (one caregiver)</li>
        </ul>
        <p>We have a 3-hour minimum per visit. We accept all forms of payment, including credit cards, ACH, and Bitcoin.</p>
      </>
    )
  },
  {
    question: 'How reliable is scheduling?',
    answer: 'We pay caregivers more and offer benefits, resulting in lower turnover and higher reliability. Backup coverage is standard.'
  },
  {
    question: 'What background checks do you perform?',
    answer: 'CBI background checks, CAPS verification, DMV checks, and random drug testing throughout the year. Every caregiver is screened.'
  },
  {
    question: 'Are you insured and bonded?',
    answer: 'Yes. $3 million in liability insurance and honesty bonds protect you and your home.'
  },
  {
    question: 'Do you provide dementia care training?',
    answer: 'Yes. All caregivers receive specialized dementia care training. We understand memory care needs.'
  },
  {
    question: 'Do you work with veterans?',
    answer: 'Yes. Veteran care training is standard. We assist with VA benefits navigation when applicable.'
  },
  {
    question: 'Do you offer private client services?',
    answer: (
      <>
        Yes. Our <Link href="/private-client" style={{ color: 'var(--color-leaf-dark)', textDecoration: 'underline' }}>Private Client Concierge</Link> offers dedicated account management, priority scheduling, and direct coordination with estate planners and fiduciaries.
      </>
    )
  },
  {
    question: 'What is the Family Room portal?',
    answer: 'A secure digital portal for authorized family members, POAs, and estate managers. View care notes, schedules, and billing in real time.'
  },
  {
    question: 'Are you a franchise?',
    answer: 'No. Family-owned and Colorado-based since 2012. Independent operation, not corporate policies.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo, and surrounding areas along the Front Range.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <div className={styles.accordion}>
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <div className={styles.icon} aria-hidden="true"></div>
              </button>
              <div className={styles.answer}>
                <div className={styles.answerContent}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
