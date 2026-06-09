<h1 align="center">StepStore</h1>

<p align="center">
  <strong>Tienda virtual de sneakers streetwear — en desarrollo</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20desarrollo-orange?style=flat-square">
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Frontend-Vanilla-blueviolet?style=flat-square">
</p>

---

## Descripción

StepStore es una tienda virtual de zapatillas streetwear actualmente en desarrollo. La interfaz tiene una estética dark con acentos en neón verde, construida completamente con HTML, CSS y JavaScript vanilla, sin ningún framework. El objetivo es ofrecer una experiencia de compra fluida con catálogo, detalle de producto, carrito, wishlist y checkout, todo funcionando desde el navegador con persistencia en `localStorage`.

> **Proyecto en desarrollo activo** — algunas funcionalidades pueden estar incompletas o sujetas a cambios.

---

## Funcionalidades actuales

| Módulo | Estado | Descripción |
|---|---|---|
| Inicio | ✅ | Hero, destacados y navegación general |
| Catálogo | ✅ | Listado completo con filtros por talla, marca y precio |
| Detalle de producto | ✅ | Galería, tallas, descripción y botón de compra |
| Carrito | ✅ | Gestión de productos, cantidades y código de descuento |
| Wishlist | ✅ | Lista de favoritos persistente |
| Checkout | ✅ | Formulario de pago y confirmación de pedido |
| Backend real | 🔧 | Actualmente simulado con `localStorage` |
| Pagos integrados | 🔧 | Pendiente de implementar |
| Panel de administración | 🔧 | En planificación |

---

## Requisitos

- [Node.js](https://nodejs.org) v16 o superior

---

## Instalación

```bash
git clone https://github.com/Jesusarbelaez22/StepStore.git
cd StepStore
npm install
```

---

## Uso

### Iniciar el servidor local

```bash
npm start
```

Abrir en el navegador: **http://localhost:3000**

### Páginas disponibles

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/catalogo` | Catálogo con filtros |
| `/producto?id=1` | Detalle de producto |
| `/carrito` | Carrito de compras |
| `/wishlist` | Lista de favoritos |
| `/checkout` | Checkout y confirmación |

### Compartir con enlace público

Para compartir la tienda desde internet usando ngrok:

```bash
npm run tunnel
```

Con authtoken propio (recomendado para sesiones estables):

```bash
node tunnel.js --authtoken TU_AUTHTOKEN
```

O usando variable de entorno:

```powershell
$env:NGROK_AUTHTOKEN = "tu_token"
npm run tunnel
```

---

## Código de descuento

En el carrito, ingresar **`STEP20`** para aplicar un **20% de descuento**.

---

## Estructura del proyecto

```
StepStore/
├── index.html              Página de inicio
├── catalogo.html           Catálogo con filtros
├── producto.html           Detalle de producto
├── carrito.html            Carrito de compras
├── wishlist.html           Lista de favoritos
├── checkout.html           Checkout y confirmación
├── server.js               Servidor Express
├── tunnel.js               Túnel ngrok público
├── generate-favicon.js     Generador de favicons
├── package.json
├── css/
│   ├── style.css           Variables globales y reset
│   ├── navbar.css
│   ├── home.css
│   ├── catalogo.css
│   ├── producto.css
│   ├── carrito.css
│   └── checkout.css
├── js/
│   ├── products.js         Catálogo de 20 productos
│   ├── cart.js             Lógica del carrito
│   ├── wishlist.js         Lógica de favoritos
│   ├── search.js           Búsqueda
│   ├── filters.js          Filtros del catálogo
│   └── ui.js               Componentes de interfaz
└── img/
    └── icons/              favicon.svg + PNGs generados
```

---

## Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript ES6 — vanilla, sin frameworks
- **Persistencia:** `localStorage` para carrito y favoritos
- **Servidor:** Express.js
- **Túnel público:** ngrok
- **Favicons:** generados desde SVG con canvas

---

## Autor

**Jesús David Arbelaez Castro** — jesus.arbelaez00@usc.edu.co

*Estudiante de Ingeniería en Sistemas — Universidad Santiago de Cali*
