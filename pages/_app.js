import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Librery</title>
        <meta name="description" content="Free library, free forum" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
