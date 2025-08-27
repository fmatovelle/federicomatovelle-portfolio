import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PROJECTS } from '@/lib/content';
import CloseBar from '@/components/ui/close-bar';

// Pre-render de todas las páginas de proyectos
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Metadatos por proyecto (mejora SEO/OG)
export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${new Date(p.year).getFullYear?.() || p.year}`,
    description: p.description || `${p.title} project`,
    openGraph: {
      title: p.title,
      description: p.description || `${p.title} project`,
      type: 'article',
      images: [{ url: p.cover }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* Botón “X” + soporte ESC para volver */}
      <CloseBar />

      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-white/60 mb-6">
        {project.year} · {project.tags.join(' · ')}
      </p>

      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 896px, 100vw"
          priority
        />
      </div>

      {project.description && (
        <p className="text-lg text-white/80 mb-6">{project.description}</p>
      )}

      <div className="flex flex-wrap gap-3">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
          >
            View code on GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
          >
            View live site
          </a>
        )}
      </div>
    </main>
  );
}
