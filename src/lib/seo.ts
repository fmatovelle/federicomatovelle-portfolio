import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Federico Matovelle — Portfolio',
  description: 'Front-end Developer — React/Next.js. Crafting modern web experiences with passion.',
  metadataBase: new URL('https://federicomatovelle-portfolio.web.app'),
  openGraph: {
    title: 'Federico Matovelle — Portfolio',
    description: 'Front-end Developer — React/Next.js',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Federico Matovelle — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federico Matovelle — Portfolio',
    description: 'Front-end Developer — React/Next.js',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};