import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Federico Matovelle — Portfolio',
  description: 'Full-Stack Developer in Barcelona — React, Next.js, TypeScript and NestJS. Web products designed and built end to end.',
  metadataBase: new URL('https://federicomatovelle.com'),
  openGraph: {
    title: 'Federico Matovelle — Portfolio',
    description: 'Full-Stack Developer — React, Next.js, TypeScript, NestJS',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 2400,
        height: 1254,
        alt: 'Federico Matovelle — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federico Matovelle — Portfolio',
    description: 'Full-Stack Developer — React, Next.js, TypeScript, NestJS',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};