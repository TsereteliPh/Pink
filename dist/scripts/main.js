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
const price = document.querySelector('.price');
const priceTables = price.querySelectorAll('.price-slider__list');
const priceDots = price.querySelectorAll('.price-dots__item');

let priceCounter = 1;

const currentTable = (n) => {
    for (table of priceTables) {
        table.classList.remove('price-slider__list--active');
    }
    priceTables[n].classList.add('price-slider__list--active');
}

const priceCurrentDot = (n) => {
    for (priceDot of priceDots) {
        priceDot.classList.remove('price-dots__item--active');
    }
    priceDots[n].classList.add('price-dots__item--active');
}

priceDots.forEach((priceDotsitem, index) => {
    priceDotsitem.addEventListener('click', () => {
        priceCounter = index;
        priceCurrentDot(index);
        currentTable(index);
    })
});
const reviews = document.querySelector('.reviews');
const btnLeft = reviews.querySelector('.reviews__button--left');
const btnRight = reviews.querySelector('.reviews__button--right');
const slides = reviews.querySelectorAll('.reviews-slider__box');
const dots = reviews.querySelectorAll('.reviews-dots__item');

let counter = 0;

const currentSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove('reviews-slider__box--active');
    }
    slides[n].classList.add('reviews-slider__box--active');
}

const nextSlide = () => {
    if (counter === slides.length - 1) {
        counter = 0;
        currentSlide(counter);
    } else {
        counter++;
        currentSlide(counter);
    }
}

const prevSlide = () => {
    if (counter === 0) {
        counter = slides.length - 1;
        currentSlide(counter);
    } else {
        counter--;
        currentSlide(counter);
    }
}

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

const currentDot = (n) => {
    for (dot of dots) {
        dot.classList.remove('reviews-dots__item--active');
    }
    dots[n].classList.add('reviews-dots__item--active');
}

dots.forEach((item, dotCounter) => {
    item.addEventListener('click', () => {
        counter = dotCounter;
        currentSlide(dotCounter);
        currentDot(dotCounter);
    })
});