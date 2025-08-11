import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const JSON_PATH = 'src/data/profile.json';
const OUT_DIR = 'public/projects';
fs.mkdirSync(OUT_DIR, { recursive: true });

const data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
let changed = false;

for (const p of data.projects) {
  if (!p.slug) continue;
  const dest = `/projects/${p.slug}.jpg`;
  if (p.cover !== dest) { p.cover = dest; changed = true; }

  const abs = path.join('public', p.cover);
  if (!fs.existsSync(abs)) {
    // Placeholder SVG -> JPG
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0b0b0b"/>
          <stop offset="1" stop-color="#171717"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <g fill="#d4d4d8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">
        <text x="50%" y="54%" font-size="72" font-weight="800">${p.title || p.slug}</text>
        <text x="50%" y="60%" font-size="26" opacity=".7">${(p.tags||[]).slice(0,4).join(' · ')}</text>
      </g>
    </svg>`;
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(abs);
    console.log('→ placeholder', p.cover);
  }
}

if (changed) {
  fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2));
  console.log('✔ profile.json actualizado con covers por slug');
} else {
  console.log('✔ covers por slug ya configurados');
}
