import { useState, FormEvent } from 'react';
import Layout from '@/components/Layout';
import { trackFormSubmission } from '@/components/integrations/Analytics';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    care_needs: '',
    timeframe: '',
    preferred_contact_method: '',
    sms_consent: false,
    honeypot: '' // Spam protection
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        trackFormSubmission('Contact Form');
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          care_needs: '',
          timeframe: '',
          preferred_contact_method: '',
          honeypot: '',
          sms_consent: false
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    });
  };

  return (
    <Layout
      title="Contact Us - Colorado CareAssist"
      description="Request a care plan or talk to a care manager. Serving Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo. Call (303) 757-1777 or (719) 428-3999."
    >
      <div className={styles.contactPage}>
        <div className="container">
          <div className={styles.header}>
            <h1>Request a Care Plan</h1>
            <p>
              Fill out the form below and a care manager will contact you within 24 hours. 
              Or call us directly for immediate assistance.
            </p>
          </div>

          <div className={styles.content}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2>📞 Call or Text Us</h2>
                <div className={styles.phoneNumbers}>
                  <div>
                    <strong>Denver/Boulder</strong>
                    <a href="tel:+13037571777">(303) 757-1777</a>
                  </div>
                  <div>
                    <strong>Colorado Springs/Pueblo</strong>
                    <a href="tel:+17194283999">(719) 428-3999</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h2>✉️ Email Us</h2>
                <a href="mailto:care@coloradocareassist.com">
                  care@coloradocareassist.com
                </a>
              </div>

              <div className={styles.infoCard}>
                <h2>📍 Service Areas</h2>
                <ul>
                  <li>Boulder</li>
                  <li>Broomfield</li>
                  <li>Denver</li>
                  <li>Adams</li>
                  <li>Jefferson</li>
                  <li>Douglas</li>
                  <li>Arapahoe</li>
                  <li>El Paso</li>
                  <li>Pueblo</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h2>⏰ Response Time</h2>
                <p>
                  We typically respond within 24 hours on business days. 
                  For urgent needs, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              {status === 'success' ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h2>Thank You!</h2>
                  <p>
                    We received your request and will contact you shortly. 
                    A care manager will reach out within 24 hours.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className={styles.resetButton}
                    >
                      Submit Another Request
                    </button>

                    <a
                      href="mailto:private@coloradocareassist.com?subject=Private%20Concierge%20Request"
                      className={styles.resetButton}
                      style={{ backgroundColor: '#7A9631', color: '#fff', textDecoration: 'none' }}
                    >
                      Request Concierge Callback
                    </a>

                    <a href="/private-client" className={styles.resetButton} style={{ textDecoration: 'none' }}>
                      Learn About Private Concierge
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2>Care Plan Request Form</h2>

                  {status === 'error' && (
                    <div className={styles.errorMessage}>
                      {errorMessage}
                    </div>
                  )}

                  {/* Honeypot field (hidden from users) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="location">City/Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Denver, Arapahoe, El Paso"
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="care_needs">Describe Your Care Needs *</label>
                    <textarea
                      id="care_needs"
                      name="care_needs"
                      value={formData.care_needs}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about the type of care needed, any special requirements, medical conditions, etc."
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="timeframe">When do you need care? *</label>
                      <select
                        id="timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      >
                        <option value="">Select timeframe</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1 week">Within 1 week</option>
                        <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="Just researching">Just researching</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="preferred_contact_method">Preferred Contact Method *</label>
                      <select
                        id="preferred_contact_method"
                        name="preferred_contact_method"
                        value={formData.preferred_contact_method}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      >
                        <option value="">Select method</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="Either">Either</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Request Care Plan'}
                  </button>

                  <p className={styles.formNote}>
                    * Required fields. We respect your privacy and will never share your information.
                  </p>

                  <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        name="sms_consent"
                        checked={formData.sms_consent}
                        onChange={handleChange}
                        style={{ width: 'auto', marginTop: '4px' }}
                      />
                      <span>
                        I agree to receive text messages from Colorado CareAssist at the phone number provided above. Message and data rates may apply. Reply STOP to opt out.
                      </span>
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

