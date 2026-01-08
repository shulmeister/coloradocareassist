import Layout from '@/components/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy - Colorado CareAssist" description="Privacy, data handling, and retention policy for Colorado CareAssist.">
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Privacy Policy</h1>
        <p>Colorado CareAssist respects your privacy and is committed to protecting personal information. This page summarizes how we collect, use, and protect data submitted through our website and client portal.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Contact information (name, phone, email, location)</li>
          <li>Care-related notes submitted by families</li>
          <li>Usage information (IP address, device, browser)</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>We use collected information to respond to inquiries, coordinate care, provide access to the Digital Family Room, and for operational purposes such as scheduling and billing.</p>

        <h2>Data Sharing</h2>
        <p>We do not sell personal data. We may share information with vendors necessary to provide services (for example, ClearCare for the family portal) under contractual protections including Business Associate Agreements where applicable.</p>

        <h2>Data Retention & Deletion</h2>
        <p>Contact form submissions are retained for a limited operational period. Clients may request deletion or export of personal data by contacting us at <a href="mailto:care@coloradocareassist.com">care@coloradocareassist.com</a>.</p>

        <h2>Security</h2>
        <p>We use industry-standard safeguards (TLS, access controls) to protect data in transit and at rest. For portal access, we recommend using a strong password and an authorized account for POAs and estate managers.</p>

        <h2>Contact</h2>
        <p>Questions about this policy or data requests can be sent to <a href="mailto:care@coloradocareassist.com">care@coloradocareassist.com</a> or via mail to our corporate office.</p>
      </div>
    </Layout>
  );
}
