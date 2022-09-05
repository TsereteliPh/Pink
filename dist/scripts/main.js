const header = document.querySelector('.header'),
      headerButton = header.querySelector('.js-burger-btn'),
      svg = header.querySelectorAll('.header__button-svg'),
      panel = header.querySelector('.header__panel'),
      nav = header.querySelector('.nav');

panel.classList.remove('header__panel--opened');
nav.classList.remove('nav--active');

headerButton.addEventListener('click', () => {
    panel.classList.toggle('header__panel--opened');
    svg.forEach((item) => {
        item.classList.toggle('header__js-active');
    });
    nav.classList.toggle('nav--active');
});
function init(){
    const map = new ymaps.Map('map', {
        center: [59.93863506417266,30.323117499999945],
        zoom: 17
    });

    const placemark = new ymaps.Placemark([59.93863506417266,30.323117499999945], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon-map-marker.svg',
        iconImageSize: [36, 36],
        iconImageOffset: [-18, -18]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);
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