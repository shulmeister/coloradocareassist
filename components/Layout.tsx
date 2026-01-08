import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({ 
  children, 
  title = 'Colorado CareAssist - Complete Home Care in Colorado',
  description = 'Premium home care services in Boulder, Broomfield, Denver, Adams, Jefferson, Douglas, Arapahoe, El Paso, Pueblo. Complete care including ADL support, housekeeping, meal prep, handyman services & more. Family-owned since 2012.',
  ogImage = '/og-image.jpg',
  noIndex = false
}: LayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradocareassist.com';
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${ogImage}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Colorado CareAssist" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
        
        {/* SEO */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

