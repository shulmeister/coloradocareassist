import { GetServerSideProps } from 'next';

function generateSiteMap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradocareassist.com';
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/veterans', priority: '0.8', changefreq: 'monthly' },
    { url: '/dementia-care', priority: '0.8', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'monthly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(({ url, priority, changefreq }) => {
      return `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;

