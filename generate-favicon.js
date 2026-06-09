/**
 * generate-favicon.js
 * Genera los PNGs del favicon de StepStore a partir del diseño SVG.
 * Requiere: npm install canvas
 * Uso: node generate-favicon.js
 */

const fs = require('fs');
const path = require('path');

let createCanvas;
try {
  ({ createCanvas } = require('canvas'));
} catch (e) {
  console.error('\n❌ El módulo "canvas" no está instalado.');
  console.error('   Ejecuta: npm install canvas\n');
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, 'img', 'icons');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

/**
 * Dibuja el logo SS sobre un canvas del tamaño dado.
 */
function drawLogo(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // — Fondo negro con esquinas redondeadas —
  const r = size * 0.20;
  ctx.fillStyle = '#0A0A0A';
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.arcTo(size, 0, size, r, r);
  ctx.lineTo(size, size - r);
  ctx.arcTo(size, size, size - r, size, r);
  ctx.lineTo(r, size);
  ctx.arcTo(0, size, 0, size - r, r);
  ctx.lineTo(0, r);
  ctx.arcTo(0, 0, r, 0, r);
  ctx.closePath();
  ctx.fill();

  // — Letras SS —
  const fontSize = Math.round(size * 0.54);
  const fontFace = `900 ${fontSize}px "Arial Black", Arial, sans-serif`;
  ctx.font = fontFace;
  ctx.textBaseline = 'alphabetic';

  const baselineY = size * 0.70;
  const leftX    = size * 0.06;
  const rightX   = size * 0.50;

  // Primera S — blanca
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('S', leftX, baselineY);

  // Segunda S — neón verde
  ctx.fillStyle = '#39FF14';
  ctx.fillText('S', rightX, baselineY);

  // — Suela minimalista (arco neón) —
  const soleY   = size * 0.86;
  const soleGap = size * 0.08;
  const midX    = size * 0.50;
  const heelX   = size * 0.91;

  ctx.strokeStyle = '#39FF14';
  ctx.lineWidth   = Math.max(2, size * 0.055);
  ctx.lineCap     = 'round';

  ctx.beginPath();
  ctx.moveTo(soleGap, soleY);
  ctx.quadraticCurveTo(midX, soleY + size * 0.09, heelX, soleY);
  ctx.stroke();

  // Pequeño taco al final de la suela
  ctx.fillStyle = '#39FF14';
  ctx.beginPath();
  ctx.arc(heelX, soleY, Math.max(2, size * 0.038), 0, Math.PI * 2);
  ctx.fill();

  return canvas;
}

const SIZES = [
  { name: 'favicon-16x16.png',  size: 16  },
  { name: 'favicon-32x32.png',  size: 32  },
  { name: 'favicon-180x180.png',size: 180 },
];

console.log('\n🎨 Generando favicons de StepStore...\n');

SIZES.forEach(({ name, size }) => {
  const canvas = drawLogo(size);
  const outPath = path.join(OUT_DIR, name);
  const buf = canvas.toBuffer('image/png');
  fs.writeFileSync(outPath, buf);
  console.log(`  ✅ ${name.padEnd(22)} (${size}×${size}px)  →  ${outPath}`);
});

console.log('\n✨ Todos los favicons generados en img/icons/\n');
