// ============================================
// BurgerLab - Interactive JavaScript
// ============================================

// ==========================================
// SHOPPING CART
// ==========================================
let panier = [];

function ajouterPanier(nom, prix) {
    // Check if item already exists, if so increment qty
    const existing = panier.find(item => item.nom === nom);
    if (existing) {
        existing.qty += 1;
    } else {
        panier.push({ nom, prix, qty: 1, id: Date.now() });
    }
    mettreAJourPanier();
    afficherNotification(`${nom} ajouté au panier !`, '🍔');

    // Animate the floating cart button
    const floatBtn = document.getElementById('floating-cart');
    floatBtn.classList.add('bounce');
    setTimeout(() => floatBtn.classList.remove('bounce'), 600);
}

function mettreAJourPanier() {
    const total = panier.reduce((sum, item) => sum + (item.prix * item.qty), 0);
    const count = panier.reduce((sum, item) => sum + item.qty, 0);

    // Update all count badges
    document.getElementById('panier-count').textContent = count;
    document.getElementById('panier-count-nav').textContent = count;
    document.getElementById('total').textContent = total.toFixed(2);

    afficherArticlesPanier();
}

function afficherArticlesPanier() {
    const container = document.getElementById('panier-items');

    if (panier.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: #888;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
                <p style="font-weight: 600; margin-bottom: 0.5rem;">Votre panier est vide</p>
                <p style="font-size: 0.85rem;">Ajoutez des burgers délicieux !</p>
            </div>
        `;
        return;
    }

    container.innerHTML = panier.map(item => `
        <div class="panier-item">
            <div class="panier-item-info">
                <div class="panier-item-name">${item.nom} ${item.qty > 1 ? `<span style="color:#888;font-weight:400">×${item.qty}</span>` : ''}</div>
                <div class="panier-item-prix">${(item.prix * item.qty).toFixed(2)}€</div>
            </div>
            <div style="display:flex;align-items:center;gap:0.5rem;">
                <button class="qty-btn" onclick="changerQuantite(${item.id}, -1)" style="width:28px;height:28px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;">−</button>
                <span style="font-weight:600;min-width:20px;text-align:center;">${item.qty}</span>
                <button class="qty-btn" onclick="changerQuantite(${item.id}, 1)" style="width:28px;height:28px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;">+</button>
            </div>
            <button class="panier-item-remove" onclick="supprimerDuPanier(${item.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    `).join('');
}

function changerQuantite(id, delta) {
    const item = panier.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        supprimerDuPanier(id);
        return;
    }
    mettreAJourPanier();
}

function supprimerDuPanier(id) {
    panier = panier.filter(item => item.id !== id);
    mettreAJourPanier();
}

function ouvrirPanier() {
    const modal = document.getElementById('panier-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('open'));
}

function fermerPanier() {
    const modal = document.getElementById('panier-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function commander() {
    if (panier.length === 0) {
        afficherNotification('Votre panier est vide !', '⚠️');
        return;
    }

    const total = panier.reduce((sum, item) => sum + (item.prix * item.qty), 0).toFixed(2);
    const count = panier.reduce((sum, item) => sum + item.qty, 0);

    afficherNotification(`Commande confirmée ! ${count} article(s) - Total: ${total}€`, '🎉');

    panier = [];
    mettreAJourPanier();
    fermerPanier();
}

// ==========================================
// CONTACT FORM
// ==========================================
function envoyerMessage(event) {
    event.preventDefault();
    afficherNotification('Message envoyé avec succès ! Nous vous répondrons bientôt.', '📧');
    event.target.reset();
}

function inscrireNewsletter(event) {
    event.preventDefault();
    afficherNotification('Inscription réussie ! Bienvenue dans la famille BurgerLab.', '🎉');
    event.target.reset();
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================
function afficherNotification(message, icon = '✅') {
    // Remove any existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-text">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => notification.remove(), 400);
    }, 3500);
}

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const backToTop = document.getElementById('back-to-top');

// Scroll effects
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar scroll state
    if (scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveLink();
});

// Hamburger toggle (mobile)
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Back to top
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active link on scroll - updates both desktop burger nav items
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navItem = document.querySelector(`.burger-nav-item[data-section="${id}"]`);

        if (navItem) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.burger-nav-item').forEach(el => el.classList.remove('active'));
                navItem.classList.add('active');
            }
        }
    });
}

// ==========================================
// MENU FILTERS
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const burgerCards = document.querySelectorAll('.burger-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        burgerCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animation
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            counter.textContent = current + '+';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target + '+';
            }
        }

        requestAnimationFrame(update);
    });
}

// Hero stats counter
function animateHeroStats() {
    const heroNumbers = document.querySelectorAll('.hero-stat-number');
    heroNumbers.forEach(num => {
        const target = parseFloat(num.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            if (isDecimal) {
                num.textContent = current.toFixed(1);
            } else if (target >= 1000) {
                num.textContent = Math.floor(current).toLocaleString('fr-FR') + '+';
            } else {
                num.textContent = Math.floor(current) + '+';
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                if (isDecimal) {
                    num.textContent = target.toFixed(1);
                } else if (target >= 1000) {
                    num.textContent = target.toLocaleString('fr-FR') + '+';
                } else {
                    num.textContent = target + '+';
                }
            }
        }

        requestAnimationFrame(update);
    });
}

// Observe stats section for counter animation
const statsSection = document.querySelector('.apropos-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

// ==========================================
// PARTICLES BACKGROUND
// ==========================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(244, 162, 97, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(particle);
    }
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateHeroStats();
    mettreAJourPanier();

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fermerPanier();
        }
    });
});

// Bounce animation for cart button
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .panier-btn-float.bounce {
        animation: cartBounce 0.6s ease;
    }
    @keyframes cartBounce {
        0%, 100% { transform: scale(1); }
        30% { transform: scale(1.3); }
        50% { transform: scale(0.95); }
        70% { transform: scale(1.1); }
    }
`;
document.head.appendChild(styleSheet);
