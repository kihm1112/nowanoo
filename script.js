// Animasi entry dengan IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Toggle menu untuk mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.section .sejarah-box').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.prestasi-item').forEach(el => {
  observer.observe(el);
});