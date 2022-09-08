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