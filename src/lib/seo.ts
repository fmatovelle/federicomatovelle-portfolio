import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Federico Matovelle — Portfolio',
  description: 'Visual Artist / VJ — Barcelona, Spain. Generative and audio-reactive visuals for festivals and clubs.',
  metadataBase: new URL('https://example.com'), // cámbialo al desplegar
  openGraph: {
    title: 'Federico Matovelle — Portfolio',
    description: 'Visual Artist / VJ — Barcelona, Spain.',
    type: 'website',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};
