/**
 * CALAZ - Premium Streetwear E-commerce
 * Main JavaScript functionality
 */

// ==========================================================================
// PRODUCT DATA
// ==========================================================================

const products = [
    {
        id: 1,
        name: "Midnight Essential Tee",
        category: "Essential Basics",
        price: 45,
        originalPrice: null,
        badge: null,
        colors: ["#0a0a0a", "#ffffff", "#666666"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop"
    },
    {
        id: 2,
        name: "Urban Graphic Tee",
        category: "Graphic Tees",
        price: 25,
        originalPrice: null,
        badge: "new",
        colors: ["#0a0a0a", "#1a365d"],
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop"
    },
    {
        id: 3,
        name: "Oversized Comfort Tee",
        category: "Oversized Fit",
        price: 49,
        originalPrice: 65,
        badge: "sale",
        colors: ["#2d3748", "#ffffff", "#f56565"],
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop"
    },
    {
        id: 4,
        name: "Archive Collection Tee",
        category: "Limited Edition",
        price: 75,
        originalPrice: null,
        badge: "limited",
        colors: ["#0a0a0a"],
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop"
    },
    {
        id: 5,
        name: "Street Culture Tee",
        category: "Graphic Tees",
        price: 52,
        originalPrice: null,
        badge: "new",
        colors: ["#0a0a0a", "#ffffff"],
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop"
    },
    {
        id: 6,
        name: "Pure White Essential",
        category: "Essential Basics",
        price: 42,
        originalPrice: null,
        badge: null,
        colors: ["#ffffff", "#f5f5f5"],
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
    },
    {
        id: 7,
        name: "Rebel Statement Tee",
        category: "Graphic Tees",
        price: 48,
        originalPrice: 60,
        badge: "sale",
        colors: ["#0a0a0a", "#1a365d", "#9f7aea"],
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop"
    },
    {
        id: 8,
        name: "Box Logo Heritage",
        category: "Limited Edition",
        price: 85,
        originalPrice: null,
        badge: "limited",
        colors: ["#0a0a0a", "#c53030"],
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop"
    }
];

const newArrivals = [
    {
        id: 9,
        name: "Winter Drop Tee",
        category: "New Collection",
        price: 58,
        originalPrice: null,
        badge: "new",
        colors: ["#0a0a0a", "#4a5568"],
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop"
    },
    {
        id: 10,
        name: "Night City Graphic",
        category: "Graphic Tees",
        price: 54,
        originalPrice: null,
        badge: "new",
        colors: ["#0a0a0a", "#1a365d"],
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop"
    },
    {
        id: 11,
        name: "Minimalist Core",
        category: "Essential Basics",
        price: 44,
        originalPrice: null,
        badge: "new",
        colors: ["#ffffff", "#0a0a0a", "#718096"],
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"
    },
    {
        id: 12,
        name: "Tokyo Streets Tee",
        category: "Limited Edition",
        price: 68,
        originalPrice: null,
        badge: "new",
        colors: ["#0a0a0a"],
        image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&h=800&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop"
    }
];

// ==========================================================================
// CART STATE
// ==========================================================================

let cart = JSON.parse(localStorage.getItem('calaz_cart')) || [];

// ==========================================================================
// DOM ELEMENTS
// ==========================================================================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.querySelector('.search-input');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartBody = document.getElementById('cartBody');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const productsGrid = document.getElementById('productsGrid');
const arrivalsGrid = document.getElementById('arrivalsGrid');
const countdown = document.getElementById('countdown');
const newsletterForm = document.getElementById('newsletterForm');

// ==========================================================================
// MOBILE MENU
// ==========================================================================

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

// ==========================================================================
// SEARCH OVERLAY
// ==========================================================================

if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
        setTimeout(() => searchInput?.focus(), 300);
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

// Close search on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay?.classList.remove('active');
        cartSidebar?.classList.remove('active');
        cartOverlay?.classList.remove('active');
        mobileMenu?.classList.remove('active');
        menuToggle?.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// ==========================================================================
// CART SIDEBAR
// ==========================================================================

if (cartToggle) {
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    });
}

if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// ==========================================================================
// CART FUNCTIONS
// ==========================================================================

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('active', totalItems > 0);
    }
    
    // Update cart items display
    if (cartItems && cartBody) {
        if (cart.length === 0) {
            cartItems.classList.remove('has-items');
            cartFooter?.classList.remove('has-items');
            cartBody.querySelector('.cart-empty').style.display = 'flex';
        } else {
            cartItems.classList.add('has-items');
            cartFooter?.classList.add('has-items');
            cartBody.querySelector('.cart-empty').style.display = 'none';
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-variant">Size: ${item.size} | ${item.color}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn qty-decrease" data-id="${item.id}">−</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn qty-increase" data-id="${item.id}">+</button>
                        </div>
                        <button class="cart-item-remove" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to cart item buttons
            cartItems.querySelectorAll('.qty-decrease').forEach(btn => {
                btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), -1));
            });
            
            cartItems.querySelectorAll('.qty-increase').forEach(btn => {
                btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 1));
            });
            
            cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
            });
        }
    }
    
    // Update subtotal
    if (cartSubtotal) {
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    }
    
    // Save to localStorage
    localStorage.setItem('calaz_cart', JSON.stringify(cart));
}

function addToCart(product, size = 'M', color = 'Black') {
    const existingItem = cart.find(item => 
        item.id === product.id && item.size === size && item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            color,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`${product.name} added to cart!`);
    
    // Open cart sidebar
    cartSidebar?.classList.add('active');
    cartOverlay?.classList.add('active');
    document.body.classList.add('no-scroll');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from cart');
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================

function showToast(message, type = 'success') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(t => t.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================================================
// PRODUCT RENDERING
// ==========================================================================

function renderProducts(containerEl, productList) {
    if (!containerEl) return;
    
    containerEl.innerHTML = productList.map(product => `
        <article class="product-card" data-id="${product.id}">
            <a href="product.html?id=${product.id}" class="product-image-wrapper">
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <img src="${product.imageHover}" alt="${product.name}" class="product-image-hover" loading="lazy">
                <div class="product-actions">
                    <button class="quick-add" data-id="${product.id}">Quick Add</button>
                    <button class="wishlist-btn" aria-label="Add to wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </a>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `
                        <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
                        <span class="price-discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                    ` : ''}
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-swatch" style="background: ${color}"></span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
    
    // Add event listeners for quick add buttons
    containerEl.querySelectorAll('.quick-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            const product = [...products, ...newArrivals].find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        });
    });
    
    // Add event listeners for wishlist buttons
    containerEl.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            btn.classList.toggle('active');
            const isActive = btn.classList.contains('active');
            if (isActive) {
                btn.querySelector('svg').setAttribute('fill', 'currentColor');
                showToast('Added to wishlist');
            } else {
                btn.querySelector('svg').setAttribute('fill', 'none');
                showToast('Removed from wishlist');
            }
        });
    });
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsGrid, products);
    renderProducts(arrivalsGrid, newArrivals);
    updateCartUI();
});

// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================

function updateCountdown() {
    if (!countdown) return;
    
    // Set end date to 7 days from now (or a specific date)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    endDate.setHours(23, 59, 59, 999);
    
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
        countdown.textContent = '00:00:00:00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdown.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================================================
// NEWSLETTER FORM
// ==========================================================================

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate API call
        showToast('Thanks for subscribing! Check your email for 10% off.', 'success');
        newsletterForm.reset();
    });
}

// ==========================================================================
// SCROLL ANIMATIONS
// ==========================================================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    // Also animate section headers and product cards
    document.querySelectorAll('.section-header, .product-card, .category-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Initialize scroll animations after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Slight delay to ensure products are rendered
    setTimeout(initScrollAnimations, 100);
});

// ==========================================================================
// HEADER SCROLL BEHAVIOR
// ==========================================================================

let lastScrollY = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
}, { passive: true });

// ==========================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================================================
// LAZY LOADING IMAGES
// ==========================================================================

if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for older browsers
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ==========================================================================

document.documentElement.classList.add('js-loaded');

