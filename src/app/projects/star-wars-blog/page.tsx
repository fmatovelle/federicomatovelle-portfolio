import Image from 'next/image';

export default function ProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Star Wars Blog</h1>
      <p className="text-white/60 mb-6">2023 · React, Bootstrap, API REST, Front-end</p>
      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-3xl border border-white/10">
        <Image src="/starwars.jpg" alt="Star Wars Blog" fill className="object-cover" />
      </div>
      <p className="text-lg text-white/80">
        Aplicación web tipo blog con información del universo de Star Wars (personajes, planetas, vehículos) obtenida de una API pública y opción de favoritos.
      </p>
      <a href="https://github.com/fmatovelle/StarWarsBlog" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30">
        Ver código en GitHub
      </a>
    </main>
  );
}
