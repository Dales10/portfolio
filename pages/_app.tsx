import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialMedia from './../components/SocialMedia';
import { DataProvider } from './../components/Context/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SocialMedia />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      <Footer />
    </>
  );
};
