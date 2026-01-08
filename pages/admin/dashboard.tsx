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

          <div onClick={async () => {
            if(!confirm('This will create a new List and 3 Email Templates in your Brevo account. Continue?')) return;
            const btn = document.getElementById('setup-btn');
            if(btn) btn.innerText = 'Installing...';
            try {
              const res = await fetch('/api/admin/setup-campaign');
              const data = await res.json();
              alert(JSON.stringify(data, null, 2));
            } catch(e) { alert('Error'); }
            if(btn) btn.innerText = '🚀 Setup Partner Drip';
          }} style={{ textDecoration: 'none' }}>
            <div style={{ 
              padding: '20px', 
              background: '#fff7ed', 
              border: '1px solid #fdba74', 
              borderRadius: '8px', 
              color: '#c2410c',
              cursor: 'pointer'
            }}>
              <h3 id="setup-btn" style={{ margin: '0 0 10px 0' }}>🚀 Setup Partner Drip</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>One-click install: Wealth Manager email campaign.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
