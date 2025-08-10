import { SITE } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="py-12 text-xs text-white/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>BARCELONA, SPAIN</p>
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email.toUpperCase()}</a>
      </div>
    </footer>
  );
}
