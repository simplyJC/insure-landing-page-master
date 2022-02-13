const navOpen = document.querySelector('.nav--open');
const navClose = document.querySelector('.nav--close');
const nav = document.querySelector('.header');

navOpen.addEventListener('click', () => {
  navClose.style.display = 'block';
  navOpen.style.display = 'none';
  nav.classList.toggle('header--active');
});

navClose.addEventListener('click', () => {
  nav.classList.toggle('header--active');
  navClose.style.display = 'none';
  navOpen.style.display = 'block';
});

window.addEventListener('resize', () => {
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= 900 ) {
    navClose.style.display = 'none';
    navOpen.style.display = 'none';
  }else{
      navOpen.style.display = 'block';
       //nav.classList.remove('header--active');
       navClose.style.display = 'none';
  }
});
