import Head from 'next/head';
import useSWR from 'swr';
import AdminLayout from '@/components/AdminLayout';
import styles from '@/styles/Admin.module.css';

export default function ContactsList() {
  const { data: contacts, error } = useSWR('/api/admin/contacts');

  return (
    <AdminLayout>
      <Head>
        <title>Contacts - CareAssist Admin</title>
      </Head>
      
      <div className={styles.header}>
        <h1 className={styles.title}>Contacts (Brevo)</h1>
      </div>

      <div className={styles.card}>
        {!contacts && !error && <p>Loading contacts...</p>}
        
        {contacts && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee', background: '#f9fafb' }}>
                  <th style={{ padding: '12px' }}>Email</th>
                  <th style={{ padding: '12px' }}>Name</th>
                  <th style={{ padding: '12px' }}>Phone</th>
                  <th style={{ padding: '12px' }}>Added</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact: any) => {
                  const attrs = contact.attributes || {};
                  const name = `${attrs.FIRSTNAME || ''} ${attrs.LASTNAME || ''}`.trim();
                  
                  return (
                    <tr key={contact.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>{contact.email}</td>
                      <td style={{ padding: '12px' }}>{name || '-'}</td>
                      <td style={{ padding: '12px' }}>{attrs.PHONE || attrs.SMS || '-'}</td>
                      <td style={{ padding: '12px' }}>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
