// Fixed, page-wide background: fading grid + soft violet/cyan glows.
// Stays behind every section so the whole site shares the hero's look.
export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 right-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.30),transparent_65%)] blur-2xl" />
      <div className="absolute bottom-[-30%] left-[-15%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.14),transparent_65%)] blur-2xl" />
      <div className="absolute top-[45%] right-[20%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.10),transparent_65%)] blur-2xl" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, #000 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, #000 25%, transparent 80%)',
        }}
      />
    </div>
  );
}
