import Head from 'next/head';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import styles from '@/styles/Blog.module.css';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  contentHtml: string;
}

interface BlogPostProps {
  postData: PostData;
}

export default function BlogPost({ postData }: BlogPostProps) {
  return (
    <Layout
      title={`${postData.title} - Colorado CareAssist Blog`}
      description={postData.excerpt}
      ogImage="/images/hero.jpg" // Fallback, could be dynamic per post
      pageType="blog"
      datePublished={postData.date}
      dateModified={postData.date}
      author={postData.author}
    >
      <div style={{ backgroundColor: 'var(--color-off-white)', paddingBottom: 'var(--s7)' }}>
        {/* Simple decorative header background */}
        <div style={{ 
          height: '300px', 
          backgroundColor: 'var(--color-leaf-dark)', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            opacity: 0.2,
            backgroundImage: 'url(/images/hero.jpg)', // Reusing hero image texture
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>

        <div className="container">
          <article className={styles.postArticle}>
            <header className={styles.postHeader}>
              <div className={styles.postMeta}>
                <time dateTime={postData.date}>
                  {format(parseISO(postData.date), 'MMMM d, yyyy')}
                </time>
                {postData.author && (
                  <span> • By {postData.author}</span>
                )}
              </div>
              <h1 className={styles.postTitle}>{postData.title}</h1>
            </header>

            <div 
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />

            <div style={{ textAlign: 'center', marginTop: 'var(--s7)' }}>
              <Link href="/blog" className={styles.backLink}>
                ← Back to Articles
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
