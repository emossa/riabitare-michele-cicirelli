import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import ChatWidget from "@/components/ui/chat-widget";
import { Footer } from "@/components/ui/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@/components/ui/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Riabitare Ristrutturazioni",
  description: "Trasformiamo la tua casa senza stress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <header className="">
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
