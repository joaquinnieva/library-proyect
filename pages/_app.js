import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import en from '../utils/translations/en/global.json';
import es from '../utils/translations/es/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: en,
    },
    es: {
      global: es,
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Librery</title>
        <meta name="description" content="Free library, free forum" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <I18nextProvider i18n={i18next}>
          <SessionProvider session={session}>
            <Navbar />
            <Component {...pageProps} />
          </SessionProvider>
        </I18nextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
