const WISHLIST_KEY = 'stepstore_wishlist';

function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistBadge();
}

function toggleWishlist(productId) {
  const list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx > -1) {
    list.splice(idx, 1);
    saveWishlist(list);
    return false;
  } else {
    list.push(productId);
    saveWishlist(list);
    return true;
  }
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

function removeFromWishlist(productId) {
  saveWishlist(getWishlist().filter(id => id !== productId));
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

function updateAllWishlistButtons() {
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = parseInt(btn.dataset.wishlistId);
    btn.classList.toggle('active', isInWishlist(id));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateWishlistBadge();
  updateAllWishlistButtons();
});
