let squaresPerSide = 16;
const canvas = document.querySelector('.canvas');

function drawCanvas(squaresPerSide) {
    const resolution = squaresPerSide;
    const nElements = Math.pow(resolution, 2);
    const maxWidth = 640;
    const sqSize = maxWidth / resolution;

    canvas.style.setProperty('max-width', `${maxWidth}px`);

    for (let i = 1; i <= nElements; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('id', `sq${i}`);
        square.style.setProperty('--sqSize', `${sqSize}px`);
        canvas.appendChild(square);
    };

    const pixels = document.querySelectorAll('.square');

    function changeColor(pixel) {
        pixel.addEventListener('mouseenter', e => {
            e.target.style.setProperty('background-color', 'black');
        });
    }

    pixels.forEach(pixel => changeColor(pixel));
}
function removeCanvas() {
    while (canvas.childElementCount > 0) {
        canvas.lastChild.remove();
    };
}

drawCanvas(squaresPerSide);

const setCanvasButton = document.querySelector('#set-canvas');
setCanvasButton.addEventListener('click', () => {
    squaresPerSide = +prompt('Number of squares per side (from 16 to 100):', 64);
    if (16 <= squaresPerSide && squaresPerSide <= 100) {
        removeCanvas();
        drawCanvas(squaresPerSide);
    } else alert('Number of squares shold be between 16 and 100.');
});