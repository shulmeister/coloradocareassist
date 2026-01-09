import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import '@/styles/globals.css';
import FacebookMessenger from '@/components/integrations/FacebookMessenger';
import Analytics from '@/components/integrations/Analytics';
import CookieConsent from '@/components/CookieConsent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <main>
        <Component {...pageProps} />
        <FacebookMessenger />
        <Analytics />
        <CookieConsent />
        {/* Brevo (Sendinblue) SDK */}
        <Script 
          src="https://cdn.brevo.com/js/sdk-loader.js" 
          strategy="lazyOnload" 
        />
        <Script id="brevo-init" strategy="lazyOnload">
          {`
            window.Brevo = window.Brevo || [];
            Brevo.push([
                "init",
                {
                client_key: "zohlf9pja1k6du3epy2j415y",
                }
            ]);
          `}
        </Script>
      </main>
    </SWRConfig>
  );
}

async function fetchJson<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init);

  // if the server replies, there's always some data in json
  // if there's a network error, it will throw at the previous line
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new Error(data.message || response.statusText);
}
