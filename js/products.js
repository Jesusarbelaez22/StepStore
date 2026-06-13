// =============================================================
//  CÓMO AGREGAR UN PRODUCTO NUEVO — GUÍA PASO A PASO
// =============================================================
//
//  1. PREPARA TUS FOTOS
//     - Guarda las imágenes en:  C:\StepStore\img\productos\
//     - Nombres recomendados:    nike-air-max-1.jpg, nike-air-max-2.jpg ...
//     - Tamaño ideal:            600×600 px, formato JPG o WebP
//     - Mínimo 1 foto, máximo 4 (la primera es la principal)
//
//  2. COPIA ESTA PLANTILLA y pégala ANTES del corchete final "];":
//
//  {
//    id: 22,                          // Número único, nunca repetir
//    name: "Nombre del zapato",
//    brand: "Marca",
//    category: "sneakers",            // sneakers | basketball | running | casual | skate
//    price: 350000,                   // Precio en pesos colombianos
//    originalPrice: 420000,           // Tacha el precio original. Borra la línea si no hay descuento
//    sizes: [38, 39, 40, 41, 42],     // Tallas disponibles
//    images: [
//      "img/productos/mi-zapato-1.jpg",
//      "img/productos/mi-zapato-2.jpg"
//    ],
//    rating: 4.5,                     // Calificación del 1 al 5
//    reviews: 10,                     // Número de reseñas
//    badge: "NEW",                    // "NEW" | "HOT" | null (sin badge)
//    description: "Descripción del producto.",
//    isNew: true,                     // true → aparece en sección "Nuevos"
//    isTrending: false                // true → aparece en sección "Tendencias"
//  },
//
//  3. CAMBIA el id, nombre, fotos y precio. Guarda el archivo.
//  4. Sube los cambios: git add . → git commit → git push
//  5. Vercel redeploya automáticamente en ~1 minuto.
//
// =============================================================

const PRODUCTS = [

  // -----------------------------------------------------------
  //  PRODUCTOS DE EJEMPLO (usan imágenes de internet)
  //  Puedes editarlos o borrarlos cuando tengas tus fotos reales
  // -----------------------------------------------------------

  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    category: "sneakers",
    price: 350000,
    originalPrice: 420000,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://picsum.photos/seed/shoe1a/600/600",
      "https://picsum.photos/seed/shoe1b/600/600",
      "https://picsum.photos/seed/shoe1c/600/600",
      "https://picsum.photos/seed/shoe1d/600/600"
    ],
    rating: 4.5,
    reviews: 128,
    badge: "NEW",
    description: "El Air Max Pulse redefine la comodidad con amortiguación de aire visible y materiales premium. Diseñado para las calles, perfecto para cada aventura urbana.",
    specs: { material: "Mesh respirável + cuero sintético", suela: "Caucho vulcanizado", peso: "310g (talla 42)", origen: "Vietnam" },
    isNew: true,
    isTrending: true
  },
  {
    id: 2,
    name: "Ultra Boost 23",
    brand: "Adidas",
    category: "running",
    price: 480000,
    originalPrice: null,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe2a/600/600",
      "https://picsum.photos/seed/shoe2b/600/600",
      "https://picsum.photos/seed/shoe2c/600/600",
      "https://picsum.photos/seed/shoe2d/600/600"
    ],
    rating: 4.8,
    reviews: 256,
    badge: "HOT",
    description: "Tecnología Boost que devuelve energía con cada paso. La zapatilla de running más popular del año con upper Primeknit adaptable.",
    specs: { material: "Primeknit 360", suela: "Continental Rubber + Boost", peso: "285g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: true
  },
  {
    id: 3,
    name: "Jordan 1 Retro High OG",
    brand: "Jordan",
    category: "basketball",
    price: 650000,
    originalPrice: null,
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe3a/600/600",
      "https://picsum.photos/seed/shoe3b/600/600",
      "https://picsum.photos/seed/shoe3c/600/600",
      "https://picsum.photos/seed/shoe3d/600/600"
    ],
    rating: 4.9,
    reviews: 512,
    badge: "HOT",
    description: "El ícono que cambió el juego. El Jordan 1 Retro High OG en colorway clásico, fabricado con cuero premium y la icónica suela Air.",
    specs: { material: "Cuero premium full-grain", suela: "Caucho con Air-Sole", peso: "420g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: true
  },

  // -----------------------------------------------------------
  //  MIS PRODUCTOS REALES — reemplaza con tus fotos y datos
  //  Pon las fotos en: C:\StepStore\img\productos\
  // -----------------------------------------------------------

  {
    id: 21,
    name: "Mi Producto 1",
    brand: "Marca",
    category: "sneakers",            // sneakers | basketball | running | casual | skate
    price: 300000,
    originalPrice: null,             // Borra esta línea si no hay precio original
    sizes: [38, 39, 40, 41, 42],
    images: [
      "img/productos/producto-21-1.jpg",
      "img/productos/producto-21-2.jpg"
    ],
    rating: 5.0,
    reviews: 1,
    badge: "NEW",                    // "NEW" | "HOT" | null
    description: "Descripción de mi producto.",
    isNew: true,
    isTrending: false
  },
  {
    id: 22,
    name: "Mi Producto 2",
    brand: "Marca",
    category: "casual",
    price: 250000,
    originalPrice: 300000,
    sizes: [38, 39, 40, 41, 42, 43],
    images: [
      "img/productos/producto-22-1.jpg",
      "img/productos/producto-22-2.jpg"
    ],
    rating: 5.0,
    reviews: 1,
    badge: null,
    description: "Descripción de mi producto.",
    isNew: false,
    isTrending: true
  },
  {
    id: 23,
    name: "Mi Producto 3",
    brand: "Marca",
    category: "running",
    price: 400000,
    originalPrice: null,
    sizes: [39, 40, 41, 42, 43, 44],
    images: [
      "img/productos/producto-23-1.jpg",
      "img/productos/producto-23-2.jpg"
    ],
    rating: 5.0,
    reviews: 1,
    badge: "HOT",
    description: "Descripción de mi producto.",
    isNew: false,
    isTrending: false
  },
  {
    id: 24,
    name: "Mi Producto 4",
    brand: "Marca",
    category: "skate",
    price: 200000,
    originalPrice: null,
    sizes: [37, 38, 39, 40, 41, 42],
    images: [
      "img/productos/producto-24-1.jpg",
      "img/productos/producto-24-2.jpg"
    ],
    rating: 5.0,
    reviews: 1,
    badge: null,
    description: "Descripción de mi producto.",
    isNew: true,
    isTrending: false
  },
  {
    id: 25,
    name: "Mi Producto 5",
    brand: "Marca",
    category: "basketball",
    price: 500000,
    originalPrice: 580000,
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "img/productos/producto-25-1.jpg",
      "img/productos/producto-25-2.jpg"
    ],
    rating: 5.0,
    reviews: 1,
    badge: "NEW",
    description: "Descripción de mi producto.",
    isNew: true,
    isTrending: true
  }

  // Agrega más productos aquí siguiendo la guía del inicio del archivo

];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getTrendingProducts() {
  return PRODUCTS.filter(p => p.isTrending);
}

function getNewProducts() {
  return PRODUCTS.filter(p => p.isNew);
}

function formatPrice(price) {
  return '$' + price.toLocaleString('es-CO');
}
