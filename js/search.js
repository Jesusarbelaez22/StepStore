let searchDebounceTimer = null;

function openSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  setTimeout(() => overlay.querySelector('.search-input')?.focus(), 100);
  document.body.style.overflow = 'hidden';
}

function closeSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  const input = overlay.querySelector('.search-input');
  if (input) input.value = '';
  document.getElementById('search-results')?.classList.remove('show');
}

function searchProducts(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ).slice(0, 5);
}

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function renderResults(products, query) {
  const container = document.getElementById('search-results');
  if (!container) return;
  if (!products.length) {
    container.innerHTML = '<div class="no-results">No se encontraron resultados</div>';
    container.classList.add('show');
    return;
  }
  container.innerHTML = products.map(p => `
    <a href="producto.html?id=${p.id}" class="search-result-item" onclick="closeSearch()">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <div class="search-result-info">
        <span class="search-result-name">${highlightText(p.name, query)}</span>
        <span class="search-result-brand">${p.brand}</span>
      </div>
      <span class="search-result-price">${formatPrice(p.price)}</span>
    </a>
  `).join('');
  container.classList.add('show');
}

function initSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;

  const input = overlay.querySelector('.search-input');
  if (input) {
    input.addEventListener('input', e => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        const q = e.target.value;
        if (q.length < 2) {
          document.getElementById('search-results')?.classList.remove('show');
          return;
        }
        renderResults(searchProducts(q), q);
      }, 300);
    });
  }

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });

  document.querySelectorAll('.search-trigger').forEach(btn => {
    btn.addEventListener('click', openSearch);
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
