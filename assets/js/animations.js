/* ============================================================
   FILE: assets/js/animations.js
   SMATO GLOBAL RESOURCE — Scroll & Reveal Animations
   ============================================================ */

export function initAnimations() {
  // Intersection Observer for scroll reveals
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Counter animation
  const counters = document.querySelectorAll('.counter-value');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
  let startValue = 0;
  const duration = 2000; // 2 seconds
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    // Ease out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    const currentValue = Math.floor(easeProgress * target);
    element.textContent = currentValue + (element.getAttribute('data-suffix') || '');

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Seamless Marquee duplication
export function initMarquee() {
  const marquees = document.querySelectorAll('.marquee');
  marquees.forEach(marquee => {
    const content = marquee.querySelector('.marquee__content');
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);
  });
}
