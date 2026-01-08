import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import styles from '@/styles/Blog.module.css';
import { parseISO, format } from 'date-fns';

interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
}

interface BlogIndexProps {
  allPostsData: PostData[];
}

export default function BlogIndex({ allPostsData }: BlogIndexProps) {
  return (
    <Layout
      title="Expert Home Care Advice & Resources - Colorado CareAssist"
      description="Articles on senior care, dementia support, veterans benefits, and home health management. Expert advice from Colorado's trusted home care agency."
    >
      <div className={styles.blogContainer}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Care Resources & Insights</h1>
            <p className={styles.subtitle}>
              Expert advice for families navigating home care, dementia support, and aging in place.
            </p>
          </header>

          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <Link href={`/blog/${id}`} key={id} style={{ textDecoration: 'none' }}>
                <article className={styles.card}>
                  <div className={styles.cardContent}>
                    <time className={styles.cardDate} dateTime={date}>
                      {format(parseISO(date), 'MMMM d, yyyy')}
                    </time>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardExcerpt}>{excerpt}</p>
                    <span className={styles.readMore}>
                      Read Article 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
