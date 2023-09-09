const COLORED_ELEMENTS = document.querySelectorAll('[COLOR]');
const ELEMENTS_WITH_DISPLAY = document.querySelectorAll('[display]');

COLORED_ELEMENTS.forEach(element => element.style.color = element.getAttribute('color'));
ELEMENTS_WITH_DISPLAY.forEach(element => element.style.display = element.getAttribute('display'));
