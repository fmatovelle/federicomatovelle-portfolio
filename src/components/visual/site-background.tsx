// Page-wide background: fading grid + violet/cyan glows that drift around.
// Motion is disabled for users who prefer reduced motion (see globals.css).
export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="glow-drift-a absolute -top-48 right-[-12%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.38),transparent_65%)]" />
      <div className="glow-drift-b absolute bottom-[-30%] left-[-15%] h-[660px] w-[660px] rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.20),transparent_65%)]" />
      <div className="glow-drift-c absolute top-[40%] right-[25%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(150,92,255,0.18),transparent_65%)]" />
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
