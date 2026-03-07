/**
 * Portfolio JavaScript
 * Handles dynamic features and animations
 */

// ======================================
// COPYRIGHT YEAR (Dynamic)
// ======================================
function updateCopyrightYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
}

// ======================================
// RANDOM RAINBOW GENERATOR
// ======================================
function randomHue() {
  return Math.floor(Math.random() * 360); // 0-359
}

function generateRandomRainbow() {
  const colors = [];
  for (let i = 0; i < 7; i++) { // 7 colors for rainbow
    colors.push(`hsl(${randomHue()}, 80%, 60%)`);
  }
  return colors;
}

// ======================================
// RANDOM RAINBOW HIGHLIGHT
// ======================================
function randomHighlightGradient() {
  const highlight = document.querySelector('.highlight');
  if (highlight) {
    // Generate random offset between -100% to 100%
    const randomOffset = Math.floor(Math.random() * 200) - 100;
    highlight.style.setProperty('--rainbow-start', `${randomOffset}%`);
  }
}

// ======================================
// RANDOM RAINBOW NAVBAR BORDER
// ======================================
function randomNavbarGradient() {
  const colors = generateRandomRainbow();
  
  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.borderBottom = '4px solid';
    nav.style.borderImage = `linear-gradient(90deg, ${colors.join(', ')}) 1`;
  }
}

// ======================================
// RANDOM RAINBOW FOOTER BORDER
// ======================================
function randomFooterGradient() {
  const colors = generateRandomRainbow();
  
  const footer = document.querySelector('.footer-rainbow');
  if (footer) {
    footer.style.borderTop = '4px solid';
    footer.style.borderImage = `linear-gradient(90deg, ${colors.join(', ')}) 1`;
  }
}

// ======================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ======================================
// INITIALIZE ON DOM LOAD
// ======================================
document.addEventListener('DOMContentLoaded', () => {
  updateCopyrightYear();
  randomNavbarGradient();
  randomFooterGradient();
  randomHighlightGradient();
});

// ======================================
// CONTINUOUS RAINBOW ANIMATION
// ======================================
// Randomize navbar and footer every 5 seconds
setInterval(() => {
  randomNavbarGradient();
  randomFooterGradient();
}, 5000);

// ======================================
// MOBILE MENU TOGGLE
// ======================================
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
      });
    });
  }
});