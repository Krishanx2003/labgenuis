// Import necessary components and modules
"use client"
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "../style/globals.css"
import Chat from "@/components/chatbox/Chat";
import Providers from "@/components/chatbox/Providers";
import Header from "@/components/nav/Header";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "OpenMind",
//   description: "Showcase and discover remarkable developer projects",
//   icon: '/public/logo.png'
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Providers>
      <body className={inter.className}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Chat />
          <main>
            {children}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
      </Providers>
    </html>
  );
}
