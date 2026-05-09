/* ============================================================
   FILE: assets/js/main.js
   SMATO GLOBAL RESOURCE — Main Entry Point
   ============================================================ */

import { initNavbar } from './navbar.js';
import { initAnimations, initMarquee } from './animations.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add page-loaded class for body transitions
  document.body.classList.add('page-loaded');

  initNavbar();
  initAnimations();
  initMarquee();
  initContactForm();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('SMATO Global Resource — Initialized');
});
