// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});
