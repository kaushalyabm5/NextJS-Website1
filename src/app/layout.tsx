import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

import Footer from "@/components/common/Footer";

// Correct path from src/app/layout.tsx to public/fonts/
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CosmoQ — Recreated",
  description: "Modern web platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${satoshi.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-black dark:text-white transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
         
        </ThemeProvider>
      </body>
    </html>
  );
}