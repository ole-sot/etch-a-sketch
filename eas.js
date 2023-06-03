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
}
function startDrawing(alpha) {
    const pixels = document.querySelectorAll('.square');
    let color = `rgb(0 0 0 / ${alpha})`;
    
    function changeColor(pixel) {
        pixel.addEventListener('mouseenter', e => {
            e.target.style.setProperty('background-color', color);
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

function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    });
}
async function aDrawing() {
    for (let alpha = 1; alpha <= 10; alpha++) {
        await waitforme(1000);
        startDrawing(alpha / 10);
    };
}

aDrawing();

const setCanvasButton = document.querySelector('#set-canvas');
setCanvasButton.addEventListener('click', () => {
    squaresPerSide = +prompt('Number of squares per side (from 16 to 100):', 64);
    if (16 <= squaresPerSide && squaresPerSide <= 100) {
        removeCanvas();
        drawCanvas(squaresPerSide);
        aDrawing();
    } else alert('Number of squares shold be between 16 and 100.');
});