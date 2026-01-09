import Head from 'next/head';
import { useRouter } from 'next/router';

interface StructuredDataProps {
  type?: 'home' | 'about' | 'contact' | 'veterans' | 'dementia' | 'service' | 'faq' | 'careers' | 'blog';
  title?: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export default function StructuredData({
  type = 'home',
  title,
  description,
  datePublished,
  dateModified,
  author
}: StructuredDataProps) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradocareassist.com';
  const currentUrl = `${siteUrl}${router.asPath.split('?')[0]}`;

  // Organization Schema - Used on all pages
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Colorado CareAssist',
    legalName: 'Colorado CareAssist LLC',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.png`,
      width: '300',
      height: '100'
    },
    description: 'Premium home care services in Colorado providing ADL support, housekeeping, meal preparation, transportation, handyman services, and pet care. Family-owned since 2012.',
    foundingDate: '2012',
    telephone: [
      '+1-303-757-1777',
      '+1-719-428-3999'
    ],
    email: 'info@coloradocareassist.com',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        addressCountry: 'US',
        areaServed: [
          'Boulder County',
          'Broomfield County',
          'Denver County',
          'Adams County',
          'Jefferson County',
          'Douglas County',
          'Arapahoe County'
        ]
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Colorado Springs',
        addressRegion: 'CO',
        addressCountry: 'US',
        areaServed: [
          'El Paso County',
          'Pueblo County'
        ]
      }
    ],
    sameAs: [
      'https://www.facebook.com/ColoradoCareAssist',
      'https://www.bbb.org/us/co/colorado-springs/profile/senior-home-care/colorado-careassist-0785-87351007'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1'
    }
  };

  // LocalBusiness Schema - Used on home and contact pages
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'Colorado CareAssist',
    image: `${siteUrl}/images/hero.jpg`,
    url: siteUrl,
    telephone: '+1-303-757-1777',
    priceRange: '$$',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        addressCountry: 'US'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Colorado Springs',
        addressRegion: 'CO',
        addressCountry: 'US'
      }
    ],
    geo: [
      {
        '@type': 'GeoCoordinates',
        latitude: '39.7392',
        longitude: '-104.9903'
      },
      {
        '@type': 'GeoCoordinates',
        latitude: '38.8339',
        longitude: '-104.8214'
      }
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Boulder'
      },
      {
        '@type': 'City',
        name: 'Broomfield'
      },
      {
        '@type': 'City',
        name: 'Denver'
      },
      {
        '@type': 'City',
        name: 'Colorado Springs'
      },
      {
        '@type': 'City',
        name: 'Pueblo'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ADL Support',
            description: 'Activities of Daily Living support including bathing, dressing, mobility assistance, toileting, transfers, and medication reminders.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Housekeeping',
            description: 'Light housekeeping, laundry, vacuuming, mopping, and home organization services.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Meal Preparation',
            description: 'Nutritious meal planning and preparation with dietary accommodation.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transportation & Errands',
            description: 'Transportation to appointments, grocery shopping, pharmacy runs, and accompaniment.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Handyman Services',
            description: 'Light home maintenance, safety modifications, grab bar installation, and repairs.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pet Care',
            description: 'Feeding, walking, and basic pet care as part of complete home support.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Veterans Home Care',
            description: 'Specialized care for veterans with VA benefits assistance and PTSD-aware caregiving.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dementia & Memory Care',
            description: 'Specialized dementia care with formal training in cognitive impairment support.'
          }
        }
      ]
    }
  };

  // Service Schema - For service-specific pages
  const serviceSchemas = {
    veterans: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${siteUrl}/veterans#service`,
      name: 'Veterans Home Care',
      description: 'Specialized home care services for veterans with VA benefits assistance, PTSD-aware caregiving, and military culture understanding.',
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      areaServed: [
        'Boulder County',
        'Broomfield County',
        'Denver County',
        'Adams County',
        'Jefferson County',
        'Douglas County',
        'Arapahoe County',
        'El Paso County',
        'Pueblo County'
      ],
      serviceType: 'Veterans Home Care',
      category: 'Home Health Care',
      audience: {
        '@type': 'Audience',
        name: 'Military Veterans'
      }
    },
    dementia: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${siteUrl}/dementia-care#service`,
      name: 'Dementia & Memory Care',
      description: 'Specialized dementia and memory care services with formal caregiver training in cognitive impairment support.',
      provider: {
        '@id': `${siteUrl}/#organization`
      },
      areaServed: [
        'Boulder County',
        'Broomfield County',
        'Denver County',
        'Adams County',
        'Jefferson County',
        'Douglas County',
        'Arapahoe County',
        'El Paso County',
        'Pueblo County'
      ],
      serviceType: 'Dementia Care',
      category: 'Memory Care'
    }
  };

  // BreadcrumbList Schema
  const getBreadcrumbSchema = () => {
    const pathSegments = router.asPath.split('/').filter(segment => segment && !segment.includes('?'));

    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        }
      ]
    };

    let currentPath = siteUrl;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbList.itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: name,
        item: currentPath
      });
    });

    return breadcrumbList;
  };

  // WebPage Schema - For all pages
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    name: title || 'Colorado CareAssist - Complete Home Care in Colorado',
    description: description || 'Premium home care services in Colorado',
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@id': `${siteUrl}/#organization`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/hero.jpg`
    }
  };

  // WebSite Schema - For home page
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Colorado CareAssist',
    description: 'Complete home care services in Colorado',
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Article Schema - For blog posts
  const articleSchema = type === 'blog' && datePublished ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${currentUrl}#article`,
    headline: title,
    description: description,
    image: `${siteUrl}/images/hero.jpg`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || 'Colorado CareAssist Team'
    },
    publisher: {
      '@id': `${siteUrl}/#organization`
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  } : null;

  // Compile schemas based on page type
  const schemas: any[] = [organizationSchema, webPageSchema];

  if (type === 'home') {
    schemas.push(websiteSchema, localBusinessSchema);
  }

  if (type === 'contact') {
    schemas.push(localBusinessSchema);
  }

  if (type === 'veterans' && serviceSchemas.veterans) {
    schemas.push(serviceSchemas.veterans);
  }

  if (type === 'dementia' && serviceSchemas.dementia) {
    schemas.push(serviceSchemas.dementia);
  }

  if (articleSchema) {
    schemas.push(articleSchema);
  }

  // Add breadcrumbs for all non-home pages
  if (router.asPath !== '/' && router.asPath !== '') {
    schemas.push(getBreadcrumbSchema());
  }

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
