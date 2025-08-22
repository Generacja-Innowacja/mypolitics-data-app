import './globals.css';

import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ["500", "700"]
});

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={roboto.className}>
      <body className="p-4 pb-0">
        <div className="flex flex-col gap-4 w-full justify-center md:gap-6 min-h-screen">
          <div className="flex gap-4 max-w-screen-xl w-full mx-auto">
            <Header />
          </div>
          {children}
          <div className="max-w-screen-xl w-full mx-auto mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
