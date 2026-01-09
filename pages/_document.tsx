import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        {/* Preload critical hero image for LCP - mobile first with AVIF */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/_next/image?url=%2Fimages%2Fhero.jpg&w=640&q=55"
          media="(max-width: 640px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/_next/image?url=%2Fimages%2Fhero.jpg&w=828&q=55"
          media="(min-width: 641px) and (max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/_next/image?url=%2Fimages%2Fhero.jpg&w=1920&q=55"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}