// Import necessary components and modules
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "../style/globals.css"
import Chat from "@/components/chatbox/Chat";

export const metadata = {
  title: "OpenMind",
  description: "Showcase and discover remarkable developer projects",
  icon: '/public/logo.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <Chat />
          <main>
            {children}
          </main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
