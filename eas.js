const frame = document.querySelector('.frame');
// const ratio = 3;
// const widthElements = 100 / ratio;
const widthElements = 50;
const nElements = Math.pow(widthElements, 2);
// const sqSize = Math.round(((widthElements * 0.003555) * Math.pow(ratio, 2)) * 10000) / 10000;
const maxWidth = 768;
const sqSize = maxWidth / widthElements;
// const maxWidth = widthElements * sqSize;

frame.style.setProperty('max-width', `${maxWidth}px`);

for (let i = 1; i <= nElements; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', `sq${i}`);
    square.style.setProperty('--sqSize', `${sqSize}px`);
    // square.textContent = `#${i}`;
    frame.appendChild(square);
};

const pixels = document.querySelectorAll('.square');

function changeColor(pixel) {
    pixel.addEventListener('mouseenter', e => e.target.style.setProperty('background-color', 'black'));
}

pixels.forEach(e => changeColor(e));