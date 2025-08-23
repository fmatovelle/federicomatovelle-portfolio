'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NeonBorder from '@/components/visual/neon-border';
import { GALLERY } from '@/lib/content';

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev  = useCallback(() => setOpen((i) => i === null ? null : (i + GALLERY.length - 1) % GALLERY.length), []);
  const next  = useCallback(() => setOpen((i) => i === null ? null : (i + 1) % GALLERY.length), []);

  // ESC / ← →
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    // bloquear scroll del body
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">MISCELANEA GALLERY</h2>

      {/* Thumbs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {GALLERY.map((g, i) => (
          <button
            key={g.image}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-xl border border-white/10"
            aria-label={`Abrir imagen ${g.alt}`}
          >
            <div className="relative w-full aspect-square bg-black overflow-hidden">
              <Image
                src={g.image}
                alt={g.alt}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <NeonBorder subtle />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:p-8 grid place-items-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-6xl aspect-[3/2] md:aspect-[16/9] bg-black rounded-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY[open].image}
              alt={GALLERY[open].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* Cerrar */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev/Next */}
            {GALLERY.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={next}
                  aria-label="Siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
