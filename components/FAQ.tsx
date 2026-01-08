import { useState } from 'react';
import Link from 'next/link';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'What kind of background checks and ongoing screening do your caregivers undergo?',
    answer: (
      <>
        <p>We treat caregiver vetting as a continuous risk-management process, not a one-time checkbox.</p>
        <p>Every caregiver is required to pass:</p>
        <ul>
          <li>Comprehensive criminal background screening</li>
          <li>Identity and driving record verification</li>
          <li>Employment and reference verification</li>
          <li>Ongoing performance monitoring and random drug testing</li>
        </ul>
        <p>Caregivers are re-evaluated throughout their employment. If concerns arise, action is immediate. This approach protects clients, families, estates, and fiduciaries from avoidable exposure.</p>
      </>
    )
  },
  {
    question: 'Are you insured and bonded?',
    answer: (
      <>
        <p>Yes. Colorado CareAssist maintains $3 million in liability insurance along with honesty bonding.</p>
        <p>This coverage is structured to protect:</p>
        <ul>
          <li>Clients and their homes</li>
          <li>Family members</li>
          <li>Trusts and estates</li>
          <li>POAs, guardians, and conservators</li>
        </ul>
        <p>In short: liability stays with us — not the family or fiduciary.</p>
      </>
    )
  },
  {
    question: 'Do you work with veterans and VA benefits?',
    answer: (
      <>
        <p>Yes — and this is a core specialization, not a side offering.</p>
        <p>Colorado CareAssist caregivers complete VA-specific training developed by the U.S. Department of Veterans Affairs, including coursework hosted through the VA’s national training platform. This training covers:</p>
        <ul>
          <li>Understanding VA Community Care programs</li>
          <li>Veteran-specific health and functional needs</li>
          <li>Trauma-informed care principles</li>
          <li>Documentation and compliance expectations</li>
          <li>Communication standards when working alongside VA-authorized services</li>
        </ul>
        <p>Beyond caregiver training, our office team actively assists families, POAs, and estate managers with:</p>
        <ul>
          <li>Determining VA eligibility</li>
          <li>Navigating the VA Community Care authorization process</li>
          <li>Coordinating approved hours with care delivery</li>
          <li>Preventing coverage gaps and billing surprises</li>
        </ul>
        <p>Many families know VA benefits exist — far fewer know how to actually access them. We bridge that gap.</p>
      </>
    )
  },
  {
    question: 'Do you provide specialized dementia and memory care?',
    answer: (
      <>
        <p>Yes — dementia care is a structured discipline, not general companionship with a different label.</p>
        <p>Our caregivers complete formal dementia and memory care education through nationally recognized caregiver training programs focused exclusively on cognitive impairment. Training emphasizes:</p>
        <ul>
          <li>Understanding different types and stages of dementia</li>
          <li>Communication techniques that reduce agitation and confusion</li>
          <li>Safety and fall-prevention strategies</li>
          <li>Routine-based care to support familiarity and dignity</li>
          <li>Responding appropriately to behavioral changes</li>
        </ul>
        <p>This training equips caregivers to support not just daily tasks, but the emotional and cognitive realities of memory loss — which significantly reduces stress for both clients and families.</p>
      </>
    )
  },
  {
    question: 'Do you offer services tailored to private clients, estates, and trusts?',
    answer: (
      <>
        <p>Yes. We offer a Private Client Concierge model designed specifically for complex family and fiduciary situations.</p>
        <p>This includes:</p>
        <ul>
          <li>Dedicated account management</li>
          <li>Priority scheduling and caregiver continuity</li>
          <li>Clear documentation suitable for fiduciary review</li>
          <li>Direct coordination with attorneys, trustees, and POAs</li>
          <li>Proactive communication — not reactive updates</li>
        </ul>
        <p>We are accustomed to environments where oversight, transparency, and defensibility matter.</p>
      </>
    )
  },
  {
    question: 'What is the Family Room portal?',
    answer: (
      <>
        <p>The Family Room is a secure, role-based digital portal designed for authorized family members, POAs, guardians, and estate managers.</p>
        <p>Through the portal, users can:</p>
        <ul>
          <li>Review care notes and visit summaries</li>
          <li>Monitor schedules and service delivery</li>
          <li>Access billing and invoices</li>
          <li>Maintain visibility without daily phone calls or emails</li>
        </ul>
        <p>It’s built to reduce friction, improve accountability, and keep everyone aligned.</p>
      </>
    )
  },
  {
    question: 'Are you a franchise or part of a national chain?',
    answer: (
      <>
        <p>No.</p>
        <p>Colorado CareAssist is locally owned and Colorado-based. We are not bound by corporate call centers, rigid policies, or out-of-state decision makers.</p>
        <p>That independence allows us to:</p>
        <ul>
          <li>Customize care plans</li>
          <li>Respond quickly to changes</li>
          <li>Coordinate directly with families and professionals</li>
        </ul>
      </>
    )
  },
  {
    question: 'What areas do you serve?',
    answer: (
      <>
        <p>We serve clients throughout the Colorado Front Range, including:</p>
        <ul>
          <li>Boulder and Broomfield</li>
          <li>Denver Metro</li>
          <li>Adams, Jefferson, Douglas, and Arapahoe Counties</li>
          <li>Colorado Springs, El Paso County, and Pueblo</li>
        </ul>
        <p>If a location falls outside our service area, we’ll say so directly.</p>
      </>
    )
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

        <div className={styles.footerNote}>
          <p>Home care decisions involve more than schedules and tasks — they involve trust, liability, and long-term outcomes.</p>
          <p>Colorado CareAssist is built to support clients and the professionals responsible for them.</p>
        </div>
      </div>
    </section>
  );
}
