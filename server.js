const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Suprimir la advertencia de ngrok en todas las respuestas
app.use((req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
});

// Archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(ROOT, {
  extensions: ['html'],
  index: 'index.html'
}));

// Rutas limpias — sin .html
const PAGES = ['catalogo', 'producto', 'carrito', 'wishlist', 'checkout'];

PAGES.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(ROOT, `${page}.html`));
  });
});

// Raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT, 'index.html'));
});

app.listen(PORT, () => {
  const line = '─'.repeat(42);
  console.log(`\n┌${line}┐`);
  console.log(`│  ✅  StepStore corriendo localmente          │`);
  console.log(`│  🌐  http://localhost:${PORT}                    │`);
  console.log(`│                                          │`);
  console.log(`│  Páginas disponibles:                    │`);
  console.log(`│    /              → Inicio               │`);
  console.log(`│    /catalogo      → Catálogo             │`);
  console.log(`│    /producto?id=1 → Producto             │`);
  console.log(`│    /carrito       → Carrito              │`);
  console.log(`│    /wishlist      → Favoritos            │`);
  console.log(`│    /checkout      → Checkout             │`);
  console.log(`└${line}┘\n`);
  console.log('  Presiona Ctrl+C para detener el servidor.\n');
});

module.exports = app;
