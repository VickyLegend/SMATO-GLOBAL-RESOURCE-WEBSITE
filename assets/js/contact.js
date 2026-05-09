/* ============================================================
   FILE: assets/js/contact.js
   SMATO GLOBAL RESOURCE — Contact Form Handling
   ============================================================ */

export function initContactForm() {
  const form = document.querySelector('.form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, select, textarea');

  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';

      // Simulate API call
      setTimeout(() => {
        form.innerHTML = `
          <div class="form-success reveal reveal--scale is-visible" style="text-align: center; padding: var(--space-2xl);">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-gold); margin-bottom: var(--space-md);">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3 style="color: var(--color-gold); margin-bottom: var(--space-sm);">Thank You!</h3>
            <p style="color: var(--color-text-muted);">Your message has been received. Our division specialists will contact you shortly.</p>
          </div>
        `;
      }, 1500);
    }
  });
}

function validateField(input) {
  const group = input.closest('.form__group');
  const value = input.value.trim();
  let isValid = true;
  let errorMessage = '';

  // Required check
  if (input.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  }

  // Type specific checks
  if (isValid && input.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  }

  // UI Feedback
  if (!isValid) {
    group.classList.add('form__group--error');
    input.style.borderColor = '#ff4444';
    // Add error message if doesn't exist
    let msg = group.querySelector('.form__error');
    if (!msg) {
      msg = document.createElement('span');
      msg.className = 'form__error';
      msg.style.color = '#ff4444';
      msg.style.fontSize = '12px';
      msg.style.marginTop = '4px';
      group.appendChild(msg);
    }
    msg.textContent = errorMessage;
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  } else {
    group.classList.remove('form__group--error');
    input.style.borderColor = 'var(--color-gold)';
    const msg = group.querySelector('.form__error');
    if (msg) msg.remove();
  }

  return isValid;
}
