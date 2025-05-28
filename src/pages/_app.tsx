import '@atomic-ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

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
        <title>atomic/ui</title>
      </Head>
      <div className={`${geistSans.className} ${geistMono.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
