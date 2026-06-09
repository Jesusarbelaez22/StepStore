let activeFilters = {
  categories: [],
  brands: [],
  sizes: [],
  priceMin: 0,
  priceMax: 700000
};
let currentSort = 'newest';

function applyFilters() {
  let filtered = [...PRODUCTS];

  if (activeFilters.categories.length) {
    filtered = filtered.filter(p => activeFilters.categories.includes(p.category));
  }
  if (activeFilters.brands.length) {
    filtered = filtered.filter(p => activeFilters.brands.includes(p.brand));
  }
  if (activeFilters.sizes.length) {
    filtered = filtered.filter(p => p.sizes.some(s => activeFilters.sizes.includes(s)));
  }
  filtered = filtered.filter(p => p.price >= activeFilters.priceMin && p.price <= activeFilters.priceMax);

  return sortProducts(filtered, currentSort);
}

function sortProducts(products, criteria) {
  const arr = [...products];
  switch (criteria) {
    case 'precio-asc': return arr.sort((a, b) => a.price - b.price);
    case 'precio-desc': return arr.sort((a, b) => b.price - a.price);
    case 'rating': return arr.sort((a, b) => b.rating - a.rating);
    case 'popular': return arr.sort((a, b) => b.reviews - a.reviews);
    case 'newest': return arr.sort((a, b) => b.isNew - a.isNew);
    default: return arr;
  }
}

function updateURL() {
  const params = new URLSearchParams();
  if (activeFilters.categories.length) params.set('cat', activeFilters.categories.join(','));
  if (activeFilters.brands.length) params.set('brand', activeFilters.brands.join(','));
  if (activeFilters.sizes.length) params.set('size', activeFilters.sizes.join(','));
  if (activeFilters.priceMin > 0) params.set('pmin', activeFilters.priceMin);
  if (activeFilters.priceMax < 700000) params.set('pmax', activeFilters.priceMax);
  if (currentSort !== 'newest') params.set('sort', currentSort);
  const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
  history.replaceState(null, '', newURL);
}

function loadFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('cat')) activeFilters.categories = params.get('cat').split(',');
  if (params.get('brand')) activeFilters.brands = params.get('brand').split(',');
  if (params.get('size')) activeFilters.sizes = params.get('size').split(',').map(Number);
  if (params.get('pmin')) activeFilters.priceMin = parseInt(params.get('pmin'));
  if (params.get('pmax')) activeFilters.priceMax = parseInt(params.get('pmax'));
  if (params.get('sort')) currentSort = params.get('sort');
}

function syncFilterUI() {
  document.querySelectorAll('.filter-category').forEach(cb => {
    cb.checked = activeFilters.categories.includes(cb.value);
  });
  document.querySelectorAll('.filter-brand').forEach(cb => {
    cb.checked = activeFilters.brands.includes(cb.value);
  });
  document.querySelectorAll('.filter-size').forEach(btn => {
    btn.classList.toggle('selected', activeFilters.sizes.includes(parseInt(btn.dataset.size)));
  });
  const sortEl = document.getElementById('sort-select');
  if (sortEl) sortEl.value = currentSort;
}

function initFilters() {
  loadFiltersFromURL();

  document.querySelectorAll('.filter-category').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.categories = [...document.querySelectorAll('.filter-category:checked')].map(el => el.value);
    });
  });

  document.querySelectorAll('.filter-brand').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.brands = [...document.querySelectorAll('.filter-brand:checked')].map(el => el.value);
    });
  });

  document.querySelectorAll('.filter-size').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = parseInt(btn.dataset.size);
      const idx = activeFilters.sizes.indexOf(size);
      if (idx > -1) activeFilters.sizes.splice(idx, 1);
      else activeFilters.sizes.push(size);
      btn.classList.toggle('selected');
    });
  });

  const sortEl = document.getElementById('sort-select');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      currentSort = sortEl.value;
      renderCatalog();
      updateURL();
    });
  }

  document.getElementById('apply-filters')?.addEventListener('click', () => {
    renderCatalog();
    updateURL();
    closeMobileFilters();
  });

  document.getElementById('clear-filters')?.addEventListener('click', () => {
    activeFilters = { categories: [], brands: [], sizes: [], priceMin: 0, priceMax: 700000 };
    currentSort = 'newest';
    syncFilterUI();
    initPriceSlider();
    renderCatalog();
    updateURL();
  });

  initPriceSlider();
  syncFilterUI();
}

function initPriceSlider() {
  const minInput = document.getElementById('price-min');
  const maxInput = document.getElementById('price-max');
  const minDisplay = document.getElementById('price-min-display');
  const maxDisplay = document.getElementById('price-max-display');
  if (!minInput || !maxInput) return;

  minInput.value = activeFilters.priceMin;
  maxInput.value = activeFilters.priceMax;

  function updateDisplays() {
    if (minDisplay) minDisplay.textContent = formatPrice(parseInt(minInput.value));
    if (maxDisplay) maxDisplay.textContent = formatPrice(parseInt(maxInput.value));
  }
  updateDisplays();

  minInput.addEventListener('input', () => {
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
      minInput.value = maxInput.value;
    }
    activeFilters.priceMin = parseInt(minInput.value);
    updateDisplays();
  });

  maxInput.addEventListener('input', () => {
    if (parseInt(maxInput.value) < parseInt(minInput.value)) {
      maxInput.value = minInput.value;
    }
    activeFilters.priceMax = parseInt(maxInput.value);
    updateDisplays();
  });
}

function closeMobileFilters() {
  document.getElementById('filter-drawer')?.classList.remove('open');
  document.getElementById('filter-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}
