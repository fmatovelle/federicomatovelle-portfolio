import NeonBorder from '@/components/visual/neon-border';

export default function Video() {
  return (
    <section id="video" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">VIDEO</h2>
      <div className="relative rounded-2xl overflow-hidden border border-white/10">
        {/* Reemplaza el src con tu Vimeo/YouTube */}
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube-nocookie.com/embed/u4xWH7tjCLM?rel=0&modestbranding=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Showreel"
        />
        <NeonBorder />
      </div>
    </section>
  );
}
