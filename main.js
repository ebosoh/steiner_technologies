// Hero Carousel
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Live Search Filter (Basic Implementation)
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const desc = product.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || desc.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
}

// WhatsApp Integration (Optional: Log Inquiries)
function logWhatsAppInquiry(productName) {
    console.log(`WhatsApp inquiry for: ${productName}`);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Mobile Nav Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileNavToggle.classList.toggle('fa-times');
        mobileNavToggle.classList.toggle('fa-bars');
    });
}
