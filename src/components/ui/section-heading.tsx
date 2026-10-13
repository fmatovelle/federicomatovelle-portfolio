// Section title with a small monospace kicker, matching the hero style
export default function SectionHeading({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs text-violet-300/90 mb-2">
        <span className="text-white/40">//</span> {index}
      </p>
      <h2 className="text-xl font-semibold tracking-widest">{label}</h2>
    </div>
  );
}
