import React from 'react';
import Head from 'next/head';
import "../style/globals.css"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} | Openmind` : 'openmind'}</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <main>
            {children}
          </main>
        </ThemeProvider>
      <Footer />
    </div>
  );
};

export default Layout;

