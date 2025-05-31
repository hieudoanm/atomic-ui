import '@atomic/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const BASE_PATH = NODE_ENV === 'development' ? '' : '/atomic';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>atomic</title>
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} type="image/x-icon" />
      </Head>
      <div className={`${geistSans.className} ${geistMono.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
