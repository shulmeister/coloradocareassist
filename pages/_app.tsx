import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { Montserrat, Lato } from 'next/font/google';
import '@/styles/globals.css';
import FacebookMessenger from '@/components/integrations/FacebookMessenger';
import Analytics from '@/components/integrations/Analytics';
import CookieConsent from '@/components/CookieConsent';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

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
      <main className={`${montserrat.variable} ${lato.variable}`}>
        <Component {...pageProps} />
        <FacebookMessenger />
        <Analytics />
        <CookieConsent />
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
