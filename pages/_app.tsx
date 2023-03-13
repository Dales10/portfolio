import type { AppProps } from 'next/app'
import '@/styles/globals.scss'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialMedia from './../components/SocialMedia/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-y-hidden'>
      <Header />
      <SocialMedia />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};
