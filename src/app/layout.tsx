import type { Metadata } from 'next';

import { AppLayout } from '@/components/layout/AppLayout';
import { SITE_METADATA } from '@/constants/common';

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
