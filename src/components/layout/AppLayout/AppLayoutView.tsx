import 'normalize.css';
import './globals.css';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ["400", "700"]
});

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={roboto.className}>
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
      </body>
    </html>
  );
}
