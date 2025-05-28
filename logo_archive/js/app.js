import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// Load components
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = Header();
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = Footer();
    }

    // Animation triggers
    const gridItems = document.querySelectorAll('.grid-stagger');
    gridItems.forEach((item, index) => {
        item.style.animationDelay = `${0.5 + (index * 0.1)}s`;
    });
    
    // Fade in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        observer.observe(el);
        el.style.animationPlayState = 'paused';
    });
    
    // Logo hover effect
    document.querySelectorAll('.logo-cell').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('img').classList.add('opacity-100');
            this.querySelector('img').classList.remove('opacity-90');
        });
        item.addEventListener('mouseleave', function() {
            this.querySelector('img').classList.remove('opacity-100');
            this.querySelector('img').classList.add('opacity-90');
        });
    });
}); 