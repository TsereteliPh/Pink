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

priceDots.forEach((item, index) => {
    item.addEventListener('click', () => {
        priceCounter = index;
        priceCurrentDot(index);
        currentTable(index);
    })
});