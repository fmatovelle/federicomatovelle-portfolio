import { SITE } from '@/lib/content';

export default function JsonLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE.owner ?? SITE.name ?? "Federico Matovelle",
    "url": SITE.siteUrl ?? "https://federicomatovelle.com",
    "email": `mailto:${SITE.email}`,
    "sameAs": [SITE.github, SITE.linkedin, SITE.instagram].filter(Boolean),
    "jobTitle": "Full-Stack Developer",
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
