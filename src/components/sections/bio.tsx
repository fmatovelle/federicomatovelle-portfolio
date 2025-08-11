function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-2">
      <span className="tracking-widest text-white/50">{label}</span>
      <span className="text-white/80">{value}</span>
    </div>
  );
}

export default function Bio() {
  return (
    <section id="bio" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">BIO</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-sm leading-7 text-white/80">
          <p>
            I am a Website Designer - Full-Stack Developer crafting websites with passion.
            My work blends with my Graphic Designer and 3D to deliver creative websites, professional looking reactive experiences.
          </p>
          <p className="mt-4">
            Selected clients
          </p>
        </div>
        <div className="space-y-3 text-xs text-white/60">
          <InfoRow label="BASE" value="Barcelona, Spain" />
          <InfoRow label="AVAILABLE" value="Worldwide" />
          <InfoRow label="ROLES" value="Full Stack Developer · Graphic Design · 3D & VJ " />
        </div>
      </div>
    </section>
  );
}
