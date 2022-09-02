const header = document.querySelector('.header'),
      headerButton = header.querySelector('.js-burger-btn'),
      svg = header.querySelectorAll('.header__button-svg'),
      panel = header.querySelector('.header__panel'),
      nav = header.querySelector('.nav');

nav.classList.remove('header__no-js');

headerButton.addEventListener('click', () => {
    panel.classList.toggle('header__panel--opened');
    svg.forEach((item) => {
        item.classList.toggle('header__js-active');
    });
    nav.classList.toggle('nav--active');
});