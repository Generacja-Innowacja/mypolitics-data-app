import "normalize.css";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "700"],
});

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={roboto.className}>
      <Script
        id="gtm-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'personalization_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
            });
          `,
        }}
      />
      <GoogleTagManager gtmId="GTM-T765V9Z5" />
      <body className="p-0">
        <div className="flex flex-col gap-4 w-full justify-center md:gap-6 min-h-screen">
          <div className="flex flex-col gap-4 w-full mx-auto">
            <Header />
            {children}
          </div>
          <div className="w-full mx-auto mt-auto">
            <Footer />
          </div>
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
