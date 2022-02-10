const navOpen = document.querySelector('.nav--open');
const navClose = document.querySelector('.nav--close');
const nav = document.querySelector('.header');

navOpen.addEventListener('click', () => {
  nav.style.height = '100%';
  navClose.style.display = 'block';
  navOpen.style.display = 'none';
});

navClose.addEventListener('click', () => {
  nav.style.height = '0%';
  navOpen.style.display = 'block';
  navClose.style.display = 'none';
});
