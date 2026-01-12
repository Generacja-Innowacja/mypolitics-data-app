import "normalize.css";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "700"],
});

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={roboto.className}>
      <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T765V9Z5');</script>
        <!-- End Google Tag Manager -->
      </head>
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
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T765V9Z5"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
      </body>
    </html>
  );
}
