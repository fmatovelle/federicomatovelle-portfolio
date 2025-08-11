import { ImageResponse } from 'next/og';
import { PROJECTS } from '@/lib/content';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Project — Open Graph';

export default async function Image({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  const title = p?.title ?? 'Project';
  const subtitle = p ? `${p.year} · ${p.tags.join(', ')}` : '—';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex',
          background: 'linear-gradient(135deg,#0b0b0b,#121212)',
          color: 'white', padding: '64px',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
          justifyContent: 'space-between', alignItems: 'flex-end'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 840 }}>
          <div style={{ opacity: 0.65, fontSize: 28 }}>{subtitle}</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>{title}</div>
          {p && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', opacity: 0.9 }}>
              {p.tags.slice(0, 4).map((t) => (
                <div key={t} style={{ border: '1px solid #3a3a3a', borderRadius: 999, padding: '6px 12px', fontSize: 22 }}>
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            width: 220, height: 220, borderRadius: 28,
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 10px 60px rgba(0,255,200,.15) inset',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
