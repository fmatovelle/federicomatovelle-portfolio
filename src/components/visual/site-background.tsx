'use client';

// Page-wide background: fading grid + violet/cyan glows.
// - Each glow wanders on a slow elliptical loop (CSS, see globals.css).
// - Scrolling moves the glows gently through the page (parallax), driven by
//   the scroll progress in --p (0 at the top, 1 at the bottom).
// Both are disabled for users who prefer reduced motion.
import { useEffect, useRef } from 'react';

export default function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Outer layer: scroll parallax. Inner layer: continuous drift. */}
      <div className="glow-scroll-a absolute -top-48 right-[-12%] h-[640px] w-[640px]">
        <div className="glow-drift-a h-full w-full rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.38),transparent_65%)]" />
      </div>
      <div className="glow-scroll-b absolute bottom-[-30%] left-[-15%] h-[660px] w-[660px]">
        <div className="glow-drift-b h-full w-full rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.20),transparent_65%)]" />
      </div>
      <div className="glow-scroll-c absolute top-[40%] right-[25%] h-[460px] w-[460px]">
        <div className="glow-drift-c h-full w-full rounded-full bg-[radial-gradient(circle,rgba(150,92,255,0.18),transparent_65%)]" />
      </div>
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
