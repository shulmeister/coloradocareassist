import Head from 'next/head';
import AdminLayout from '@/components/AdminLayout';
import styles from '@/styles/Admin.module.css';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <AdminLayout>
      <Head>
        <title>Dashboard - CareAssist Admin</title>
      </Head>
      
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className={styles.card}>
        <h2>Welcome to your CMS</h2>
        <p>Select an option from the sidebar to manage your content.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <Link href="/admin/posts/new" style={{ textDecoration: 'none' }}>
            <div style={{ 
              padding: '20px', 
              background: '#f0fdf4', 
              border: '1px solid #86efac', 
              borderRadius: '8px', 
              color: '#166534',
              cursor: 'pointer'
            }}>
              <h3 style={{ margin: '0 0 10px 0' }}>✍️ Write New Post</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Create and publish a new blog article.</p>
            </div>
          </Link>

          <Link href="/admin/contacts" style={{ textDecoration: 'none' }}>
            <div style={{ 
              padding: '20px', 
              background: '#eff6ff', 
              border: '1px solid #93c5fd', 
              borderRadius: '8px', 
              color: '#1e40af',
              cursor: 'pointer'
            }}>
              <h3 style={{ margin: '0 0 10px 0' }}>👥 View Contacts</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>See recent leads from Brevo.</p>
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
