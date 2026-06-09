const PRODUCTS = [
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
  {
    id: 4,
    name: "990v6",
    brand: "New Balance",
    category: "casual",
    price: 520000,
    originalPrice: 580000,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe4a/600/600",
      "https://picsum.photos/seed/shoe4b/600/600",
      "https://picsum.photos/seed/shoe4c/600/600",
      "https://picsum.photos/seed/shoe4d/600/600"
    ],
    rating: 4.7,
    reviews: 89,
    badge: "NEW",
    description: "Made in USA. El 990v6 continúa la tradición de excelencia con ENCAP y ABZORB para máxima comodidad todo el día.",
    specs: { material: "Mesh + cuero genuino", suela: "ENCAP + ABZORB", peso: "340g (talla 42)", origen: "USA" },
    isNew: true,
    isTrending: false
  },
  {
    id: 5,
    name: "Old Skool Pro",
    brand: "Vans",
    category: "skate",
    price: 180000,
    originalPrice: null,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://picsum.photos/seed/shoe5a/600/600",
      "https://picsum.photos/seed/shoe5b/600/600",
      "https://picsum.photos/seed/shoe5c/600/600",
      "https://picsum.photos/seed/shoe5d/600/600"
    ],
    rating: 4.4,
    reviews: 341,
    badge: null,
    description: "La silueta icónica del skate con refuerzo de ante en la tira lateral y suela de goma vulcanizada para grip perfecto.",
    specs: { material: "Canvas + suede", suela: "Goma vulcanizada", peso: "280g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: false
  },
  {
    id: 6,
    name: "Chuck 70 Hi",
    brand: "Converse",
    category: "casual",
    price: 220000,
    originalPrice: 260000,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe6a/600/600",
      "https://picsum.photos/seed/shoe6b/600/600",
      "https://picsum.photos/seed/shoe6c/600/600",
      "https://picsum.photos/seed/shoe6d/600/600"
    ],
    rating: 4.3,
    reviews: 198,
    badge: null,
    description: "El Chuck 70 eleva el clásico original con materiales premium, forro interior más suave y acabados de mayor calidad.",
    specs: { material: "Canvas 100% algodón", suela: "Caucho natural", peso: "260g (talla 42)", origen: "Vietnam" },
    isNew: false,
    isTrending: false
  },
  {
    id: 7,
    name: "Dunk Low Retro",
    brand: "Nike",
    category: "sneakers",
    price: 380000,
    originalPrice: null,
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://picsum.photos/seed/shoe7a/600/600",
      "https://picsum.photos/seed/shoe7b/600/600",
      "https://picsum.photos/seed/shoe7c/600/600",
      "https://picsum.photos/seed/shoe7d/600/600"
    ],
    rating: 4.6,
    reviews: 445,
    badge: "HOT",
    description: "De la cancha a la calle. El Dunk Low Retro trae de vuelta el diseño legendario con cuero suave y los colores más buscados de la temporada.",
    specs: { material: "Cuero + textil", suela: "Caucho con pivot circle", peso: "300g (talla 42)", origen: "Vietnam" },
    isNew: false,
    isTrending: true
  },
  {
    id: 8,
    name: "Forum Low",
    brand: "Adidas",
    category: "basketball",
    price: 290000,
    originalPrice: 340000,
    sizes: [39, 40, 41, 42, 43, 44],
    images: [
      "https://picsum.photos/seed/shoe8a/600/600",
      "https://picsum.photos/seed/shoe8b/600/600",
      "https://picsum.photos/seed/shoe8c/600/600",
      "https://picsum.photos/seed/shoe8d/600/600"
    ],
    rating: 4.2,
    reviews: 167,
    badge: null,
    description: "Regresa el Forum Low con su icónica correa transversal y construcción de cuero premium. Un clásico de los 80s reinventado.",
    specs: { material: "Cuero sintético", suela: "Herringbone rubber", peso: "380g (talla 42)", origen: "Indonesia" },
    isNew: false,
    isTrending: false
  },
  {
    id: 9,
    name: "Air Force 1 '07",
    brand: "Nike",
    category: "sneakers",
    price: 280000,
    originalPrice: null,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe9a/600/600",
      "https://picsum.photos/seed/shoe9b/600/600",
      "https://picsum.photos/seed/shoe9c/600/600",
      "https://picsum.photos/seed/shoe9d/600/600"
    ],
    rating: 4.7,
    reviews: 892,
    badge: null,
    description: "El AF1 original. Cuero de primera calidad, perforaciones para transpirabilidad y la unit Air que lo hace inconfundible desde 1982.",
    specs: { material: "Cuero full-grain", suela: "Caucho con Air-Sole", peso: "415g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: false
  },
  {
    id: 10,
    name: "Gel-Kayano 30",
    brand: "New Balance",
    category: "running",
    price: 420000,
    originalPrice: 490000,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe10a/600/600",
      "https://picsum.photos/seed/shoe10b/600/600",
      "https://picsum.photos/seed/shoe10c/600/600",
      "https://picsum.photos/seed/shoe10d/600/600"
    ],
    rating: 4.6,
    reviews: 134,
    badge: "NEW",
    description: "30 años de innovación en running. Gel-Kayano 30 con tecnología FF BLAST+ para amortiguación óptima en largas distancias.",
    specs: { material: "Mesh técnico", suela: "GEL + FF BLAST+", peso: "310g (talla 42)", origen: "Vietnam" },
    isNew: true,
    isTrending: false
  },
  {
    id: 11,
    name: "Sk8-Hi Platform",
    brand: "Vans",
    category: "skate",
    price: 210000,
    originalPrice: null,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    images: [
      "https://picsum.photos/seed/shoe11a/600/600",
      "https://picsum.photos/seed/shoe11b/600/600",
      "https://picsum.photos/seed/shoe11c/600/600",
      "https://picsum.photos/seed/shoe11d/600/600"
    ],
    rating: 4.3,
    reviews: 78,
    badge: null,
    description: "El Sk8-Hi elevado con plataforma de 4cm. Mismo ADN skate con altura extra para un look más atrevido y urbano.",
    specs: { material: "Canvas + suede", suela: "Goma vulcanizada con plataforma", peso: "360g (talla 40)", origen: "China" },
    isNew: false,
    isTrending: false
  },
  {
    id: 12,
    name: "NMD_R1 V3",
    brand: "Adidas",
    category: "sneakers",
    price: 360000,
    originalPrice: 410000,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe12a/600/600",
      "https://picsum.photos/seed/shoe12b/600/600",
      "https://picsum.photos/seed/shoe12c/600/600",
      "https://picsum.photos/seed/shoe12d/600/600"
    ],
    rating: 4.4,
    reviews: 203,
    badge: null,
    description: "El NMD evoluciona. Upper Primeknit de nueva generación con plugs de color contrastante y amortiguación Boost completa.",
    specs: { material: "Primeknit 360", suela: "Boost completo", peso: "265g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: false
  },
  {
    id: 13,
    name: "Jordan 4 Retro",
    brand: "Jordan",
    category: "basketball",
    price: 620000,
    originalPrice: null,
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe13a/600/600",
      "https://picsum.photos/seed/shoe13b/600/600",
      "https://picsum.photos/seed/shoe13c/600/600",
      "https://picsum.photos/seed/shoe13d/600/600"
    ],
    rating: 4.9,
    reviews: 389,
    badge: "HOT",
    description: "Diseñado por Tinker Hatfield, el Jordan 4 con sus icónicas mallas laterales y unidad Air visible es un must-have absoluto.",
    specs: { material: "Cuero + mesh", suela: "Caucho con Air-Sole visible", peso: "450g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: true
  },
  {
    id: 14,
    name: "Fresh Foam X 1080v13",
    brand: "New Balance",
    category: "running",
    price: 540000,
    originalPrice: null,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe14a/600/600",
      "https://picsum.photos/seed/shoe14b/600/600",
      "https://picsum.photos/seed/shoe14c/600/600",
      "https://picsum.photos/seed/shoe14d/600/600"
    ],
    rating: 4.7,
    reviews: 112,
    badge: "NEW",
    description: "La zapatilla de running más lujosa de New Balance. Fresh Foam X de nueva generación para la mayor amortiguación jamás lograda.",
    specs: { material: "Hypoknit", suela: "Fresh Foam X", peso: "298g (talla 42)", origen: "China" },
    isNew: true,
    isTrending: false
  },
  {
    id: 15,
    name: "Authentic Classic",
    brand: "Vans",
    category: "casual",
    price: 120000,
    originalPrice: 150000,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe15a/600/600",
      "https://picsum.photos/seed/shoe15b/600/600",
      "https://picsum.photos/seed/shoe15c/600/600",
      "https://picsum.photos/seed/shoe15d/600/600"
    ],
    rating: 4.2,
    reviews: 567,
    badge: null,
    description: "El inicio de todo. El Authentic es el modelo original de Vans desde 1966. Simple, limpio, eterno.",
    specs: { material: "Canvas", suela: "Goma vulcanizada", peso: "240g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: false
  },
  {
    id: 16,
    name: "Run Star Hike",
    brand: "Converse",
    category: "skate",
    price: 310000,
    originalPrice: 360000,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://picsum.photos/seed/shoe16a/600/600",
      "https://picsum.photos/seed/shoe16b/600/600",
      "https://picsum.photos/seed/shoe16c/600/600",
      "https://picsum.photos/seed/shoe16d/600/600"
    ],
    rating: 4.1,
    reviews: 94,
    badge: null,
    description: "Converse se reinventa. Run Star Hike con la icónica estrella Chuck y suela chunky de trail para las calles más exigentes.",
    specs: { material: "Canvas premium", suela: "CX foam + rubber lug", peso: "480g (talla 42)", origen: "Vietnam" },
    isNew: false,
    isTrending: false
  },
  {
    id: 17,
    name: "React Infinity Run 4",
    brand: "Nike",
    category: "running",
    price: 400000,
    originalPrice: null,
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe17a/600/600",
      "https://picsum.photos/seed/shoe17b/600/600",
      "https://picsum.photos/seed/shoe17c/600/600",
      "https://picsum.photos/seed/shoe17d/600/600"
    ],
    rating: 4.5,
    reviews: 178,
    badge: "NEW",
    description: "Diseñado para reducir lesiones. La espuma React de Nike en máxima expresión con upper Flyknit para carreras largas sin dolor.",
    specs: { material: "Flyknit", suela: "React foam", peso: "305g (talla 42)", origen: "Vietnam" },
    isNew: true,
    isTrending: false
  },
  {
    id: 18,
    name: "Handball Spezial",
    brand: "Adidas",
    category: "casual",
    price: 260000,
    originalPrice: null,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe18a/600/600",
      "https://picsum.photos/seed/shoe18b/600/600",
      "https://picsum.photos/seed/shoe18c/600/600",
      "https://picsum.photos/seed/shoe18d/600/600"
    ],
    rating: 4.6,
    reviews: 321,
    badge: "HOT",
    description: "El favorito de los creativos y fashionistas. Handball Spezial con piel de ante suave y silueta baja que combina con todo.",
    specs: { material: "Suede premium", suela: "Gum rubber", peso: "290g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: true
  },
  {
    id: 19,
    name: "Jordan 11 Retro",
    brand: "Jordan",
    category: "basketball",
    price: 580000,
    originalPrice: null,
    sizes: [40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe19a/600/600",
      "https://picsum.photos/seed/shoe19b/600/600",
      "https://picsum.photos/seed/shoe19c/600/600",
      "https://picsum.photos/seed/shoe19d/600/600"
    ],
    rating: 4.8,
    reviews: 467,
    badge: "HOT",
    description: "La zapatilla de Michael Jordan en sus años más legendarios. Patente brillante, Ballistic mesh y la suela de carbono icónica.",
    specs: { material: "Patente + Ballistic mesh", suela: "Carbon fiber shank + Air", peso: "430g (talla 42)", origen: "China" },
    isNew: false,
    isTrending: true
  },
  {
    id: 20,
    name: "Blazer Mid '77 Vintage",
    brand: "Nike",
    category: "sneakers",
    price: 230000,
    originalPrice: 270000,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    images: [
      "https://picsum.photos/seed/shoe20a/600/600",
      "https://picsum.photos/seed/shoe20b/600/600",
      "https://picsum.photos/seed/shoe20c/600/600",
      "https://picsum.photos/seed/shoe20d/600/600"
    ],
    rating: 4.4,
    reviews: 289,
    badge: null,
    description: "El primer Nike de baloncesto regresa con acabado vintage intencionado. Cuero suave y la paleta de colores clásica de los 70s.",
    specs: { material: "Cuero + textil", suela: "Caucho vulcanizado", peso: "355g (talla 42)", origen: "Vietnam" },
    isNew: false,
    isTrending: false
  }
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
