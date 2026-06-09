/**
 * tunnel.js — Expone StepStore en internet mediante ngrok
 *
 * Uso:
 *   node tunnel.js
 *   node tunnel.js --authtoken TU_TOKEN
 *   node tunnel.js --domain trusting-iguana-helped.ngrok-free.app
 *   node tunnel.js --authtoken TU_TOKEN --domain tu-dominio.ngrok-free.app
 *
 * Con .env (recomendado — no tienes que escribir nada cada vez):
 *   Crea .env con NGROK_AUTHTOKEN y NGROK_DOMAIN, luego simplemente:
 *   node tunnel.js
 *
 * Prioridad de resolución:
 *   --authtoken  >  NGROK_AUTHTOKEN (.env / shell)
 *   --domain     >  NGROK_DOMAIN    (.env / shell)
 */

// Cargar .env antes de leer process.env
require('dotenv').config();

const ngrok   = require('@ngrok/ngrok');
const express = require('express');
const path    = require('path');

const PORT      = parseInt(process.env.PORT || '3000', 10);
const ROOT      = __dirname;
const NGROK_AUTHTOKEN = parseArg('--authtoken') || process.env.NGROK_AUTHTOKEN || null;

// ── Servidor Express ──────────────────────────────────────────────────────────
const app = express();
app.use(express.static(ROOT, { extensions: ['html'], index: 'index.html' }));

['catalogo', 'producto', 'carrito', 'wishlist', 'checkout'].forEach(page => {
  app.get(`/${page}`, (req, res) => res.sendFile(path.join(ROOT, `${page}.html`)));
});
app.get('/', (_req, res) => res.sendFile(path.join(ROOT, 'index.html')));
app.use((_req, res) => res.status(404).sendFile(path.join(ROOT, 'index.html')));

// ── Arranque ──────────────────────────────────────────────────────────────────
async function start() {
  // 1. Servidor local
  await new Promise(resolve => app.listen(PORT, resolve));
  console.log(`\n  ✅ Servidor local en http://localhost:${PORT}`);

  // 2. Resumen de configuración antes de conectar
  console.log(`  🌐 Dominio estático : estate-surplus-regulate.ngrok-free.dev`);
  if (NGROK_AUTHTOKEN) console.log(`  🔑 Authtoken        : ${NGROK_AUTHTOKEN.slice(0, 6)}${'*'.repeat(10)}`);
  console.log('  ⏳ Abriendo túnel ngrok...\n');

  // 3. Túnel con dominio estático fijo
  let listener;
  try {
    listener = await ngrok.forward({
      addr: 3000,
      authtoken: NGROK_AUTHTOKEN,
      domain: "estate-surplus-regulate.ngrok-free.dev"
    });
  } catch (err) {
    console.error('  ❌ Error al conectar con ngrok:');
    console.error(`     ${err.message}\n`);
    printHint(err.message);
    process.exit(1);
  }

  const publicUrl = listener.url();
  printBanner(publicUrl, true);

  // 4. Mantener vivo
  process.on('SIGINT',  () => shutdown(listener));
  process.on('SIGTERM', () => shutdown(listener));
}

// ── Banner ────────────────────────────────────────────────────────────────────
function printBanner(url, isStatic) {
  const MIN_W   = 52;
  const urlLine = `URL: ${url}`;
  const w       = Math.max(MIN_W, urlLine.length + 2);

  const pad  = str => str + ' '.repeat(Math.max(0, w - str.length));
  const rule = '─'.repeat(w);
  const box  = '═'.repeat(w + 2);
  const flag = isStatic ? '  [dominio estatico]' : '';

  console.log(`\n  ╔${box}╗`);
  console.log(`  ║ ${pad(` STEPSTORE esta LIVE${flag}`)} ║`);
  console.log(`  ║ ${pad(rule)} ║`);
  console.log(`  ║ ${pad(` ${url}`)} ║`);
  console.log(`  ║ ${pad(rule)} ║`);
  console.log(`  ║ ${pad('  Abrela en cualquier dispositivo')} ║`);
  console.log(`  ║ ${pad('  Compartela con quien quieras')} ║`);
  console.log(`  ║ ${pad('  Presiona Ctrl+C para cerrar el tunel')} ║`);
  console.log(`  ╚${box}╝\n`);
  // URL en texto plano para copiar fácil
  console.log(`  ${url}\n`);
}

// ── Ayuda contextual según el error ──────────────────────────────────────────
function printHint(msg) {
  if (msg.includes('authtoken') || msg.includes('authentication')) {
    console.log('  💡 Falta el authtoken. Opciones:');
    console.log('     a) node tunnel.js --authtoken TU_TOKEN');
    console.log('     b) Agrega  NGROK_AUTHTOKEN=TU_TOKEN  en el archivo .env\n');
  } else if (msg.includes('domain') || msg.includes('hostname')) {
    console.log('  💡 Problema con el dominio. Verifica que:');
    console.log('     • El dominio existe en tu panel de ngrok (ngrok.com/domains)');
    console.log('     • Tu authtoken tiene permiso sobre ese dominio\n');
  }
}

// ── Cierre limpio ─────────────────────────────────────────────────────────────
async function shutdown(listener) {
  console.log('\n  🛑 Cerrando túnel ngrok...');
  try { await listener.close(); } catch (_) {}
  console.log('  👋 ¡Hasta pronto!\n');
  process.exit(0);
}

// ── Utilidad: leer argumento CLI ──────────────────────────────────────────────
function parseArg(flag) {
  const idx = process.argv.indexOf(flag);
  return idx > -1 && process.argv[idx + 1] ? process.argv[idx + 1] : null;
}

start().catch(err => {
  console.error('\n❌ Error inesperado:', err.message);
  process.exit(1);
});
