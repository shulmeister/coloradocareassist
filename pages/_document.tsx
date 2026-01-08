import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&family=Montserrat:wght@500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Version: 2.0
              window.Brevo = window.Brevo || [];
              Brevo.push([
                  "init",
                  {
                  client_key: "zohlf9pja1k6du3epy2j415y",
                  // Optional: Add other initialization options, see documentation
                  }
              ]);
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}