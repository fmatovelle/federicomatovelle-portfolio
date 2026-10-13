'use client';

// Page-wide background: fading grid, slowly drifting violet/cyan glows,
// and (on mouse/trackpad devices) a spotlight that follows the cursor
// and lights up the grid around it. All motion is disabled for users
// who prefer reduced motion (see globals.css).
import { useEffect, useRef } from 'react';

const GRID =
  'linear-gradient(rgba(255,255,255,VAR) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,VAR) 1px, transparent 1px)';

export default function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        el.dataset.spotlight = 'on';
      });
    };
    const onLeave = () => {
      el.dataset.spotlight = 'off';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-spotlight="off"
      className="site-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting glows */}
      <div className="glow-drift-a absolute -top-48 right-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.30),transparent_65%)]" />
      <div className="glow-drift-b absolute bottom-[-30%] left-[-15%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.14),transparent_65%)]" />
      <div className="glow-drift-c absolute top-[45%] right-[20%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.10),transparent_65%)]" />

      {/* Base grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: GRID.replaceAll('VAR', '0.045'),
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, #000 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 60% 40%, #000 25%, transparent 80%)',
        }}
      />

      {/* Cursor spotlight: soft glow + brighter grid around the pointer */}
      <div
        className="spotlight-layer absolute inset-0"
        style={{
          background:
            'radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(124,92,255,0.12), transparent 60%)',
        }}
      />
      <div
        className="spotlight-layer absolute inset-0"
        style={{
          backgroundImage: GRID.replaceAll('VAR', '0.14'),
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), #000, transparent 75%)',
        }}
      />
    </div>
  );
}
