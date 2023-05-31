const frame = document.querySelector('.frame');
const widthElements = 4;
const nElements = Math.pow(widthElements, 2);
const sqSize = 8;
const maxWidth = widthElements * sqSize;

frame.style.setProperty('max-width', `${maxWidth}em`);

for (let i = 1; i <= nElements; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', `sq${i}`);
    square.style.setProperty('--sqSize', `${sqSize}em`);
    square.textContent = `#${i}`;
    frame.appendChild(square);
};
