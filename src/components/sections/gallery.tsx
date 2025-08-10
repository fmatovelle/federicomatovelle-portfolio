import Image from 'next/image';
import NeonBorder from '@/components/visual/neon-border';
import { GALLERY } from '@/lib/content';

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">MISCELANEA GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {GALLERY.map((g, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative w-full aspect-square">
              <Image src={g.image} alt={g.alt} fill className="object-cover" />
            </div>
            <NeonBorder subtle />
          </div>
        ))}
      </div>
    </section>
  );
}
