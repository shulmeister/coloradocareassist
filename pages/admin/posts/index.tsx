import Head from 'next/head';
import useSWR from 'swr';
import AdminLayout from '@/components/AdminLayout';
import styles from '@/styles/Admin.module.css';
import Link from 'next/link';

export default function PostsList() {
  const { data: posts, error } = useSWR('/api/admin/posts');

  return (
    <AdminLayout>
      <Head>
        <title>Blog Posts - CareAssist Admin</title>
      </Head>
      
      <div className={styles.header}>
        <h1 className={styles.title}>Blog Posts</h1>
        <Link href="/admin/posts/new">
          <button style={{ 
            padding: '10px 20px', 
            background: '#2563eb', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer' 
          }}>
            + New Post
          </button>
        </Link>
      </div>

      <div className={styles.card}>
        {!posts && !error && <p>Loading posts...</p>}
        
        {posts && (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '10px' }}>Filename</th>
                <th style={{ padding: '10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post: any) => {
                const slug = post.name.replace('.md', '');
                const liveUrl = `https://coloradocareassist.com/blog/${slug}`;
                const shareText = `Check out our new article: ${liveUrl}`;
                
                return (
                  <tr key={post.sha} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px 10px' }}>{post.name}</td>
                    <td style={{ padding: '15px 10px', display: 'flex', gap: '10px' }}>
                      <a href={liveUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>View Live</a>
                      <span>|</span>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(liveUrl)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ color: '#1877f2', textDecoration: 'none' }}
                      >
                        Share FB
                      </a>
                      <span>|</span>
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(liveUrl)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ color: '#0a66c2', textDecoration: 'none' }}
                      >
                        Share LI
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}
