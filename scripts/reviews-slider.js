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