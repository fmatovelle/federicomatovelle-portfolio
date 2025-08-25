'use client';

import Link from 'next/link';
import { SITE } from '@/lib/content';

export default function Header() {
  // rutas ABSOLUTAS a la home para que funcionen desde /projects/lo-que-sea
  const items = [
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'GALLERY',  href: '/#gallery' },
    { label: 'VIDEO',    href: '/#video' },
    { label: 'BIO',      href: '/#bio' },
    { label: 'CONTACT',  href: '/#contact' },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Marca: vuelve siempre a la home y al top */}
        <Link href="/#top" className="font-bold tracking-widest text-xs">
          {SITE.name}
        </Link>

        <nav className="hidden md:flex gap-6 text-xs">
          {items.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className="hover:text-white/90 text-white/60 transition"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        {/* Externo: se queda como <a> */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>INSTAGRAM</span>
        </a>
      </div>
    </div>
  );
}
