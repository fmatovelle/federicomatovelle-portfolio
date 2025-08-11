import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/content';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${SITE.name} — Portfolio`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg,#0b0b0b,#121212)',
          color: 'white',
          padding: '64px',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ opacity: 0.6, fontSize: 28, letterSpacing: 4 }}>{SITE.tagline}</div>
          <div style={{ fontSize: 86, fontWeight: 900, lineHeight: 1 }}>{SITE.name}</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', opacity: 0.85 }}>
            {SITE.roles.map((r: string) => (
              <div key={r} style={{ border: '1px solid #3a3a3a', borderRadius: 999, padding: '6px 12px', fontSize: 22 }}>
                {r}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            width: 180, height: 180, borderRadius: 28,
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 10px 60px rgba(0,255,200,.15) inset',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
