import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/content';
import NeonBorder from '@/components/visual/neon-border';

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">LATEST PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative w-full aspect-[16/10]">
              <Image src={p.cover} alt={p.title} fill className="object-cover transition scale-100 group-hover:scale-[1.02]" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full border border-white/15 text-white/70">{t}</span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-white/60 flex items-center gap-2">
                {p.year}<ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </span>
            </div>
            <NeonBorder />
          </Link>
        ))}
      </div>
    </section>
  );
}
