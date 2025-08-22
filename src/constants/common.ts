import { Metadata } from 'next';

export const SITE_METADATA: Metadata = {
  title: 'Site Name',
  description: '',
  keywords: [],
  creator: 'Generacja Innowacja',
  openGraph: {
    type: 'website',
    url: 'https://domain.pl/',
    title: 'Site Name',
    description: '',
    siteName: 'site-name',
    images: [
      {
        url: 'https://domain.pl/thumbnail.png',
      },
    ],
  },
};
