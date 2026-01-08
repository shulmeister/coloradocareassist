import Layout from '@/components/Layout';

export default function Hipaa() {
  return (
    <Layout title="HIPAA & Data Security - Colorado CareAssist" description="Information on HIPAA, portal security, and Business Associate Agreements.">
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
        <h1>HIPAA & Data Security</h1>

        <p>Colorado CareAssist works with third-party vendors to provide our Digital Family Room and client services. We take privacy and security seriously.</p>

        <h2>Business Associate Agreement (BAA)</h2>
        <p>We will sign a BAA with organizations and estate managers when required. A sample BAA is available for download in our <a href="/docs/sample_baa.txt">downloads</a>.</p>

        <h2>Portal Security</h2>
        <p>The Digital Family Room (ClearCare) uses HTTPS and standard authentication controls. For high-security clients we recommend using a dedicated POA account and requesting audit logs; contact us to arrange enhanced access controls.</p>

        <h2>Encryption & Transport</h2>
        <p>All web traffic to our site and portal is protected with TLS. Data at rest is protected by our vendors' security practices; please contact us for specific encryption or compliance documentation.</p>

        <h2>Requests & Incident Reporting</h2>
        <p>To request a BAA, access logs, or report a security concern, email <a href="mailto:care@coloradocareassist.com">care@coloradocareassist.com</a> and include the term "Security/Compliance Request" in the subject line.</p>
      </div>
    </Layout>
  );
}
