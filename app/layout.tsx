import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "OpenMind",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
       <Navbar />
       <ThemeProvider
          attribute="class"
          defaultTheme="system">
        <main>
          {children}
        </main>
        </ThemeProvider>
       <Footer />
      </body>
    </html>
  );
}
