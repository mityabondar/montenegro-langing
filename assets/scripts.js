window.addEventListener('DOMContentLoaded', () => {

  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('header-mobile');

  burger.addEventListener('click', function () {
    burger.classList.toggle('toggle');
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      if (mobileMenu.classList.contains('open')) {
        burger.classList.remove('toggle');
        mobileMenu.classList.remove('open');
      }
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', event => {
    const element = document.querySelector('.scroll-top');
    let windowY = window.scrollY;
    if (windowY >= 500) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });

});