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
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: "OpenMind",
//   description: "Showcase and discover remarkable developer projects",
//   icon: '/public/logo.png'
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang='en'>
     
      <Providers>
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
       
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
          <Chat />
          <main>
            {children}
          </main>
          </div>
        </ThemeProvider>
    
      </body>
      </Providers>
    </html>
    </ClerkProvider>
  );
}
