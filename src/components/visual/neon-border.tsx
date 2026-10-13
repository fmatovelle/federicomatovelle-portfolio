// Card border. With `spotlight`, the border and a soft inner glow light up
// where the cursor is (the parent sets --cx/--cy via spotlightHandlers).
import type { PointerEvent } from 'react';

export function spotlightHandlers() {
  return {
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--cx', `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty('--cy', `${e.clientY - r.top}px`);
    },
  };
}

export default function NeonBorder({
  subtle = false,
  spotlight = false,
}: {
  subtle?: boolean;
  spotlight?: boolean;
}) {
  return (
    <>
      {spotlight && (
        <>
          <span aria-hidden className="card-spotlight-fill pointer-events-none absolute inset-0 rounded-[1rem]" />
          <span aria-hidden className="card-spotlight pointer-events-none absolute inset-0 rounded-[1rem]" />
        </>
      )}
      <span
        aria-hidden
        className={
          'pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ' +
          (subtle ? 'ring-white/10' : 'ring-white/15 group-hover:ring-white/25')
        }
        style={{ boxShadow: '0 0 30px rgba(0,255,200,0.06) inset' }}
      />
    </>
  );
}
