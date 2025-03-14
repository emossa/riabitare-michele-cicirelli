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
        <Script id="clarity" type="text/javascript" >
          {`
            <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qo1asoghz0");
</script>
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
