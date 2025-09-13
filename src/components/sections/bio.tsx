// src/components/sections/bio.tsx
import Image from 'next/image';
import { SITE } from '@/lib/content';

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-2">
      <span className="tracking-widest text-white/50">{label}</span>
      <span className="text-white/80">{value}</span>
    </div>
  );
}

export default function Bio() {
  const avatar = SITE.avatar ?? '/profile/federico.jpg';

  return (
    <section id="bio" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">BIO</h2>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Columna 1: Avatar */}
        <div className="md:order-1 order-2">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/10 mx-auto md:mx-0">
            <Image
              src={avatar}
              alt={`Foto de ${SITE.owner ?? SITE.name ?? 'autor'}`}
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15"
              style={{ boxShadow: '0 0 40px rgba(0,255,200,0.08) inset' }}
            />
          </div>
        </div>

        {/* Columna 2: Tu texto */}
        <div className="md:col-span-2 text-sm leading-7 text-white/80 order-1 md:order-2">
          <p>
            I am a Website Designer - Full-Stack Developer crafting websites with passion.
            My work blends with my Graphic Designer and 3D to deliver creative websites, professional
            looking reactive experiences.
          </p>
          <p className="mt-4">Selected clients</p>
        </div>

        {/* Columna 3: Datos rápidos */}
        <div className="space-y-3 text-xs text-white/60 order-3">
          <InfoRow label="BASE" value="Barcelona, Spain" />
          <InfoRow label="AVAILABLE" value="Worldwide" />
          <InfoRow label="ROLES" value="Full Stack Developer · Graphic Design · 3D & VFX" />
        </div>
      </div>
    </section>
  );
}