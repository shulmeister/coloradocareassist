import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import StructuredData from './StructuredData';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
  pageType?: 'home' | 'about' | 'contact' | 'veterans' | 'dementia' | 'service' | 'faq' | 'careers' | 'blog';
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export default function Layout({
  children,
  title = 'Colorado CareAssist - Complete Home Care in Colorado',
  description = 'Premium home care services in Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo. Complete care including ADL support, housekeeping, meal prep, handyman services & more. Family-owned since 2012.',
  ogImage = '/og-image.jpg',
  noIndex = false,
  pageType = 'home',
  datePublished,
  dateModified,
  author
}: LayoutProps) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradocareassist.com';
  // Canonical URL: Apex domain + path (without query params)
  const canonicalUrl = `${siteUrl}${router.asPath.split('?')[0]}`;
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Colorado CareAssist" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

        {/* SEO */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        {!noIndex && <meta name="robots" content="index, follow" />}
      </Head>

      <StructuredData
        type={pageType}
        title={title}
        description={description}
        datePublished={datePublished}
        dateModified={dateModified}
        author={author}
      />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
