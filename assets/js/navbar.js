/* ============================================================
   FILE: assets/js/navbar.js
   SMATO GLOBAL RESOURCE — Navigation Logic
   ============================================================ */

export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const overlayLinks = document.querySelectorAll('.nav-overlay__link');

  // Sticky Navbar logic
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navOverlay.classList.toggle('nav-overlay--open');
      // Logic for hamburger animation if needed
    });
  }

  // Close overlay on link click
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      navOverlay.classList.remove('nav-overlay--open');
    });
  });

  // Active page detection
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
}
