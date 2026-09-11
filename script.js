const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.brand').forEach(brand => {
    brand.addEventListener('click', event => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const target = brand.getAttribute('href');
      if (target === '#top') event.preventDefault();

      brand.classList.remove('brand-bounce');
      void brand.offsetWidth;
      brand.classList.add('brand-bounce');

      setTimeout(() => {
        brand.classList.remove('brand-bounce');
        if (target === '#top') {
          document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', '#top');
        }
      }, 760);
    });
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
