// Import necessary components and modules
"use client"
import { ThemeProvider } from "@/components/theme-provider";
import "../styles/globals.css"
import Chat from "@/components/chatbox/Chat";
import Providers from "@/components/chatbox/Providers";
import Header from "@/components/nav/Header";
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts"

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
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Chat />
          <main>
            {children}
          </main>
        </ThemeProvider>
    
      </body>
      </Providers>
    </html>
  );
}
