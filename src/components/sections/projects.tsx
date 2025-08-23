'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import NeonBorder from '@/components/visual/neon-border';
import { PROJECTS } from '@/lib/content';

// Chip reutilizable
function TagChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        'rounded-full border px-3 py-1 text-xs transition ' +
        (active
          ? 'border-white/40 bg-white/10 text-white'
          : 'border-white/15 text-white/70 hover:border-white/30')
      }
    >
      {label}
    </button>
  );
}

export default function Projects() {
  // --- Estado del UI ---
  const [q, setQ] = useState(''); // query de búsqueda
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<'year-desc' | 'year-asc'>('year-desc');

  // --- Tags únicos (ordenados) ---
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p: any) => (p.tags ?? []).forEach((t: string) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  // --- Filtro + búsqueda + orden ---
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    const res = PROJECTS.filter((p: any) => {
      // filtro por tags (si hay alguno activo)
      if (activeTags.size) {
        const ok = (p.tags ?? []).some((t: string) => activeTags.has(t));
        if (!ok) return false;
      }

      // búsqueda por título / descripción / tags
      if (query.length) {
        const hay = (s?: string) => s?.toLowerCase().includes(query);
        const inTags = (p.tags ?? []).some((t: string) => hay(t));
        if (!(hay(p.title) || hay(p.description) || inTags)) return false;
      }

      return true;
    });

    // orden
    res.sort((a: any, b: any) =>
      sort === 'year-desc' ? (b.year ?? 0) - (a.year ?? 0) : (a.year ?? 0) - (b.year ?? 0)
    );

    return res;
  }, [q, activeTags, sort]);

  // helpers
  const toggleTag = (t: string) =>
    setActiveTags((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });

  const clearFilters = () => {
    setQ('');
    setActiveTags(new Set());
    setSort('year-desc');
  };

  return (
    <section id="projects" className="py-10 sm:py-16">
      <h2 className="text-xl font-semibold mb-6 tracking-widest">LATEST PROJECTS</h2>

      {/* Toolbar: búsqueda + tags + orden + contador */}
      <div className="mb-6 flex flex-col gap-3">
        {/* fila 1: búsqueda y orden */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título, tag o descripción…"
            className="w-full sm:max-w-md rounded-xl border border-white/15 bg-transparent px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30"
          />
          <div className="flex items-center gap-2">
            <label className="text-xs text-white/60">Orden:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="rounded-lg border border-white/15 bg-transparent px-2 py-1 text-xs"
            >
              <option value="year-desc">Más nuevo</option>
              <option value="year-asc">Más antiguo</option>
            </select>
          </div>
          <div className="ml-auto text-xs text-white/60">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* fila 2: chips de tags */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <TagChip
              key={t}
              label={t}
              active={activeTags.has(t)}
              onClick={() => toggleTag(t)}
            />
          ))}
          {(q || activeTags.size) && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-white/30"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p: any, i: number) => (
          <Link
            key={p.slug ?? p.title}
            href={`/projects/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black"
          >
            {/* Cover con gradiente y fix sub-pixeles */}
            <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 transform-gpu will-change-transform group-hover:scale-[1.02]"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-black/80 pointer-events-none" />
              {p.live && (
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] tracking-widest text-white/80">
                  LIVE
                </span>
              )}
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(p.tags ?? []).slice(0, 4).map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-full border border-white/15 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-white/60 flex items-center gap-2">
                {p.year}
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </span>
            </div>

            <NeonBorder />
          </Link>
        ))}
      </div>
    </section>
  );
}
