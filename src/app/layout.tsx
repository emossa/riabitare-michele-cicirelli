import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import ChatWidget from "@/components/ui/chat-widget";
import { Footer } from "@/components/ui/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@/components/ui/analytics";
import { Toaster } from "@/components/ui/toaster";
import MetaPixel from "@/components/meta-pixel";
import { Suspense } from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Suspense>
          <MetaPixel />
        </Suspense>
        <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/009e1f0b0f787c3ebedfa325/script.js" />
        <Script id="hotjar" type="text/javascript" >
          {`
          (function (c, s, q, u, a, r, e) {
        c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
        c._hjSettings = { hjid: a };
        r = s.getElementsByTagName('head')[0];
        e = s.createElement('script');
        e.async = true;
        e.src = q + c._hjSettings.hjid + u;
        r.appendChild(e);
    })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5324218);
        `}
        </Script>
      </head>
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
        <VercelAnalytics />
        <Toaster />
      </body>
    </html>
  );
}
