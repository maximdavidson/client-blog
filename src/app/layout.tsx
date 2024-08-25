import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Client Blog</title>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
