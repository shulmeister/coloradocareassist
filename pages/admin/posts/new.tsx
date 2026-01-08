import Head from 'next/head';
import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import styles from '@/styles/Admin.module.css';
import { useRouter } from 'next/router';

export default function NewPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    author: 'Jason Shulmeister',
    excerpt: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate slug from title
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const date = new Date().toISOString().split('T')[0];

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          slug,
          date
        }),
      });

      if (res.ok) {
        alert('Post published! Changes will be live in a few minutes.');
        router.push('/admin/posts');
      } else {
        alert('Failed to publish post');
      }
    } catch (error) {
      console.error(error);
      alert('Error publishing post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <Head>
        <title>New Post - CareAssist Admin</title>
      </Head>

      <div className={styles.header}>
        <h1 className={styles.title}>Write New Post</h1>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title</label>
            <input 
              type="text" 
              required
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Author</label>
            <input 
              type="text" 
              required
              value={formData.author}
              onChange={e => setFormData({...formData, author: e.target.value})}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Excerpt (Short Summary)</label>
            <textarea 
              required
              rows={3}
              value={formData.excerpt}
              onChange={e => setFormData({...formData, excerpt: e.target.value})}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Content (Markdown)</label>
            <textarea 
              required
              rows={15}
              value={formData.content}
              onChange={e => setFormData({...formData, content: e.target.value})}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'monospace' }}
              placeholder="# Heading&#10;&#10;Write your content here..."
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ 
              padding: '12px 24px', 
              background: '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              alignSelf: 'flex-start'
            }}
          >
            {isSubmitting ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
