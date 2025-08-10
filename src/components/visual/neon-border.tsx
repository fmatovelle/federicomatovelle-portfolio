export default function NeonBorder({ subtle = false }: { subtle?: boolean }) {
  return (
    <span
      aria-hidden
      className={
        'pointer-events-none absolute inset-0 rounded-[1rem] ring-1 ring-inset ' +
        (subtle ? 'ring-white/10' : 'ring-white/15 group-hover:ring-white/25')
      }
      style={{ boxShadow: '0 0 30px rgba(0,255,200,0.06) inset' }}
    />
  );
}
