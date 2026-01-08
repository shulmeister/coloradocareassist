/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Optimize for production
  swcMinify: true,
  
  // Environment variables validation
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://coloradocareassist.com',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  images: {
    domains: ['seal-southerncolorado.bbb.org'],
  }
};

module.exports = nextConfig;

