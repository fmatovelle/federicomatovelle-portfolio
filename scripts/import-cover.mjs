import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const [,, slug, src] = process.argv;
if (!slug || !src) {
  console.error('Uso: node scripts/import-cover.mjs <slug> <ruta-imagen>');
  process.exit(1);
}
const dest = path.join('public/projects', `${slug}.jpg`);

await sharp(src)
  .resize({ width: 1600, height: 1000, fit: 'cover', position: 'entropy' })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(dest);

console.log('✔ cover generado:', dest);
