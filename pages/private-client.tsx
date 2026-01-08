import Layout from '@/components/Layout';
import Link from 'next/link';

export default function PrivateClient() {
  return (
    <Layout title="Private Client Concierge - Colorado CareAssist" description="Dedicated private client and estate manager services for high-net-worth families.">
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Private Client Concierge</h1>
        <p>Colorado CareAssist offers a dedicated concierge service for private clients, estate managers, and attorneys handling high-acuity placements. Our private-client offering includes:</p>
        <ul>
          <li>Dedicated onboarding manager and prioritized callback (2-hour business SLA)</li>
          <li>Priority scheduling and guaranteed caregiver continuity</li>
          <li>Custom clinical plan with RN oversight when required</li>
          <li>Downloadable vendor documents (COI, BAA, Sample Service Agreement)</li>
          <li>Direct coordination with estate counsel and POAs</li>
        </ul>

        <h2>Request Private Concierge</h2>
        <p>To request private-client onboarding, email our concierge team at <a href="mailto:private@coloradocareassist.com">private@coloradocareassist.com</a> or <Link href="/contact">submit a care plan request</Link> and choose the "Immediately" timeframe while noting "Private Concierge" in the description.</p>

        <h2>Downloads</h2>
        <ul>
          <li><a href="/docs/coi.txt" download>Certificate of Insurance (placeholder)</a></li>
          <li><a href="/docs/sample_service_agreement.txt" download>Sample Service Agreement (placeholder)</a></li>
          <li><a href="/docs/sample_baa.txt" download>Sample BAA (placeholder)</a></li>
          <li><a href="/docs/sample_pricing.txt" download>Sample Pricing Guide (example ranges)</a></li>
        </ul>
      </div>
    </Layout>
  );
}
