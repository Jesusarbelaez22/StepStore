// Toast notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span><span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function createToastContainer() {
  const c = document.createElement('div');
  c.id = 'toast-container';
  document.body.appendChild(c);
  return c;
}

// Modal
function openModal(content) {
  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-box"><button class="modal-close" onclick="closeModal()">✕</button><div class="modal-body"></div></div>`;
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
  }
  overlay.querySelector('.modal-body').innerHTML = content;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Cart badge bounce
function animateCartBadge() {
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.classList.remove('bounce');
    void badge.offsetWidth;
    badge.classList.add('bounce');
    setTimeout(() => badge.classList.remove('bounce'), 600);
  });
}

// Lazy loading
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });
  images.forEach(img => observer.observe(img));
}

// Scroll to top
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Mobile menu
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu?.classList.toggle('open');
    mobileOverlay?.classList.toggle('active');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  mobileOverlay?.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  document.querySelector('.hamburger')?.classList.remove('active');
  document.getElementById('mobile-menu')?.classList.remove('open');
  document.getElementById('mobile-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Stars renderer
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<span class="star filled">★</span>';
    else if (i === Math.ceil(rating) && rating % 1 >= 0.5) stars += '<span class="star half">★</span>';
    else stars += '<span class="star">★</span>';
  }
  return stars;
}

// Product card template
function createProductCard(product) {
  const inWishlist = typeof isInWishlist === 'function' && isInWishlist(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-image-wrap">
        <a href="producto.html?id=${product.id}">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </a>
        ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
        ${discount ? `<span class="badge badge-sale">-${discount}%</span>` : ''}
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-wishlist-id="${product.id}" onclick="handleWishlistToggle(${product.id}, this)">♥</button>
      </div>
      <div class="card-info">
        <span class="card-brand">${product.brand}</span>
        <a href="producto.html?id=${product.id}" class="card-name">${product.name}</a>
        <div class="card-rating">${renderStars(product.rating)} <span>(${product.reviews})</span></div>
        <div class="card-footer">
          <div class="card-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="handleAddToCart(${product.id})">+ Carrito</button>
        </div>
      </div>
    </div>
  `;
}

function handleWishlistToggle(productId, btn) {
  if (typeof toggleWishlist !== 'function') return;
  const added = toggleWishlist(productId);
  btn.classList.toggle('active', added);
  showToast(added ? '¡Agregado a favoritos!' : 'Eliminado de favoritos', added ? 'success' : 'info');
}

function handleAddToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)];
  addToCart(productId, defaultSize, 1);
  showToast(`¡${product.name} agregado al carrito!`, 'success');
  animateCartBadge();
}

// Skeleton loader
function createSkeletonCards(count = 6) {
  return Array(count).fill(0).map(() => `
    <div class="product-card skeleton">
      <div class="skeleton-image"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollToTop();
  initLazyLoad();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileMenu();
    }
  });
});
