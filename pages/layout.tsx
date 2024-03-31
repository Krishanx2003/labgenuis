import React, { ReactNode } from 'react';
import Head from 'next/head';
import "../style/globals.css"; // Assuming this file contains your global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/nav/Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
      </Head>
      <Header />
      <ThemeProvider attribute="class" defaultTheme="system">
        <main>
          {children}
        </main>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Layout;
