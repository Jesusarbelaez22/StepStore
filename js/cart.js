const CART_KEY = 'stepstore_cart';
const DISCOUNT_CODES = { 'STEP20': 0.20 };

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size, quantity = 1) {
  const cart = getCart();
  const product = getProductById(productId);
  if (!product) return false;

  const existingIdx = cart.findIndex(i => i.productId === productId && i.size === size);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      id: Date.now(),
      productId,
      size,
      quantity,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0]
    });
  }
  saveCart(cart);
  if (typeof animateCartBadge === 'function') animateCartBadge();
  return true;
}

function removeFromCart(itemId) {
  const cart = getCart().filter(i => i.id !== itemId);
  saveCart(cart);
}

function updateQuantity(itemId, quantity) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === itemId);
  if (idx > -1) {
    if (quantity <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].quantity = quantity;
    }
    saveCart(cart);
  }
}

function getCartSubtotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.quantity, 0);
}

function getAppliedDiscount() {
  return JSON.parse(localStorage.getItem('stepstore_discount') || 'null');
}

function applyDiscount(code) {
  const rate = DISCOUNT_CODES[code.toUpperCase()];
  if (rate) {
    localStorage.setItem('stepstore_discount', JSON.stringify({ code: code.toUpperCase(), rate }));
    return { success: true, rate, message: `Descuento del ${rate * 100}% aplicado` };
  }
  return { success: false, message: 'Código inválido' };
}

function removeDiscount() {
  localStorage.removeItem('stepstore_discount');
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  const discount = getAppliedDiscount();
  const discountAmount = discount ? subtotal * discount.rate : 0;
  const shipping = subtotal - discountAmount >= 200000 ? 0 : 12000;
  return {
    subtotal,
    discountAmount,
    shipping,
    total: subtotal - discountAmount + shipping
  };
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  localStorage.removeItem('stepstore_discount');
  updateCartBadge();
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
