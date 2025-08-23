import Image from 'next/image';
import { PROJECTS } from '@/lib/content';
import { notFound } from 'next/navigation';

// Generate static paths for all projects
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-white/60 mb-6">
        {project.year} · {project.tags.join(', ')}
      </p>
      
      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-3xl border border-white/10">
        <Image 
          src={project.cover} 
          alt={project.title} 
          fill 
          className="object-cover" 
        />
      </div>
      
      <p className="text-lg text-white/80 mb-6">
        {project.description || `Project: ${project.title}`}
      </p>
      
      {project.repo && (
        <a 
          href={project.repo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex mr-4 mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
        >
          View Code on GitHub
        </a>
      )}
      
      {project.live && (
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
        >
          View Live Site
        </a>
      )}
    </main>
  );
}