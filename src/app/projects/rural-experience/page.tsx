import Image from 'next/image';

export default function ProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Rural Experience</h1>
      <p className="text-white/60 mb-6">2023 · React, Flask (Python), API REST, Full-stack</p>
      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-3xl border border-white/10">
        <Image src="/rural.jpg" alt="Rural Experience" fill className="object-cover" />
      </div>
      <p className="text-lg text-white/80">
        Plataforma para descubrir experiencias turísticas en entornos rurales. Frontend en React y backend con Flask para gestión de datos.
      </p>
      <a href="https://github.com/fmatovelle/RuralExperience" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30">
        Ver código en GitHub
      </a>
    </main>
  );
}
