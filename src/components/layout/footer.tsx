import { SITE } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 text-xs text-white/50 mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/10 pt-12">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p>BARCELONA, SPAIN</p>
        <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 break-all">{SITE.email.toUpperCase()}</a>
      </div>
    </footer>
  );
}
