let squaresPerSide = 16;
const canvas = document.querySelector('.canvas');
const maxWidth = 640;

function drawCanvas(squaresPerSide) {
  const resolution = squaresPerSide;
  const nElements = Math.pow(resolution, 2);
  const sqSize = maxWidth / resolution;

  canvas.style.setProperty('max-width', `${maxWidth}px`);

  for (let i = 1; i <= nElements; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.setProperty('--sqSize', `${sqSize}px`);
    canvas.appendChild(square);
  }
}

function removeCanvas() {
  canvas.innerHTML = '';
}

function setColorWithOpacity(pixel) {
  const alpha = Number(pixel.style.opacity);
  const newAlpha = alpha + 0.1;
  if (newAlpha <= 1) {
    pixel.style.opacity = newAlpha;
  }
}

function startDrawing() {
  const pixels = document.querySelectorAll('.square');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', e => {
      setColorWithOpacity(e.target);
    });
  });
}

drawCanvas(squaresPerSide);
startDrawing();

const setCanvasButton = document.querySelector('#set-canvas');
setCanvasButton.addEventListener('click', () => {
  squaresPerSide = +prompt('Number of squares per side (from 16 to 100):', 64);
  if (16 <= squaresPerSide && squaresPerSide <= 100) {
    removeCanvas();
    drawCanvas(squaresPerSide);
    startDrawing();
  } else {
    alert('Number of squares should be between 16 and 100.');
  }
});
