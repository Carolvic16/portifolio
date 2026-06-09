// ── Navbar scroll ──────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Active nav link via IntersectionObserver ───
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { rootMargin: '-35% 0px -60% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Hamburger menu ─────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ── Scroll reveal ──────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));