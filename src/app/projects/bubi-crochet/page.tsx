import Image from 'next/image';

export default function ProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Bubi Crochet</h1>
      <p className="text-white/60 mb-6">2023 · HTML5, CSS3, JavaScript, Static site</p>
      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden rounded-3xl border border-white/10">
        <Image src="/bubi.jpg" alt="Bubi Crochet" fill className="object-cover" />
      </div>
      <p className="text-lg text-white/80">
        Sitio web para la marca de artesanías Bubi Crochet. Muestra productos y contacto para pedidos.
      </p>
      <a href="https://github.com/fmatovelle/BubiCrochet" target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30">
        Ver código en GitHub
      </a>
    </main>
  );
}
