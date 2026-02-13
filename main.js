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

// Advanced Product Filtering System
const filterInputs = {
    search: document.querySelector('.search-bar input'),
    brands: document.querySelectorAll('.brand-filter'),
    categories: document.querySelectorAll('.category-filter'),
    priceRange: document.querySelector('#price-range'),
    priceValue: document.querySelector('#price-value')
};

const products = document.querySelectorAll('.product-card');

function updateFilters() {
    const searchQuery = filterInputs.search ? filterInputs.search.value.toLowerCase() : '';
    const maxPrice = filterInputs.priceRange ? parseInt(filterInputs.priceRange.value) : 500000;

    // Update price display
    if (filterInputs.priceValue) {
        filterInputs.priceValue.textContent = `KSh ${maxPrice.toLocaleString()}`;
    }

    const selectedBrands = Array.from(filterInputs.brands)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const selectedCategories = Array.from(filterInputs.categories)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const descElement = product.querySelector('p');
        const desc = descElement ? descElement.textContent.toLowerCase() : '';
        const brand = product.dataset.brand;
        const category = product.dataset.category;
        const price = parseInt(product.dataset.price);

        const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
        const matchesPrice = isNaN(price) || price <= maxPrice;
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

        if (matchesSearch && matchesPrice && matchesBrand && matchesCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Add event listeners
if (filterInputs.search) filterInputs.search.addEventListener('keyup', updateFilters);
if (filterInputs.priceRange) filterInputs.priceRange.addEventListener('input', updateFilters);
filterInputs.brands.forEach(cb => cb.addEventListener('change', updateFilters));
filterInputs.categories.forEach(cb => cb.addEventListener('change', updateFilters));

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
