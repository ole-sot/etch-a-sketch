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
function removeCanvas() {
    while (canvas.childElementCount > 0) {
        canvas.lastChild.remove();
    };
}
function setColorWithOpacity(alpha) {
    alpha /= 10;
    const pixels = document.querySelectorAll('.square');
    let color = `rgb(0 0 0 / ${alpha})`;
    
    function changeColor(pixel) {
        pixel.addEventListener('mouseout', e => {
            e.target.style.setProperty('background-color', color);
        });
    }
    
    pixels.forEach(pixel => changeColor(pixel));
}
function startDrawing() {
    const pixels = document.querySelectorAll('.square');
    // function pickAlpha(pixel) {
    //     pixel.addEventListener('mouseenter', e => {
    //         function findCurrentAlpha() {
    //             const bgColor = e.target.style.getPropertyValue('background-color');

    //             if (bgColor.includes('rgb(0, 0, 0)')) {
    //                 return 10;
    //             } else {
    //                 return +bgColor.slice(bgColor.indexOf(',') + 8, bgColor.indexOf(')')) * 10;
    //             };
    //         }
            
    //         alpha = findCurrentAlpha();
    //         if (alpha < 10) {
    //             alpha++;
    //             setColorWithOpacity(alpha);
    //         } else setColorWithOpacity(10);
    //     });
    // }
    let alpha = 1;
    function pickAlpha(pixel) {
        pixel.addEventListener('mouseenter', e => {
          const bgColor = e.target.style.getPropertyValue('background-color');
          let currentAlpha = 0;
      
          if (bgColor.includes('rgb(0, 0, 0)')) {
            currentAlpha = 10;
          } else {
            const matches = bgColor.match(/\d+/);
            if (matches !== null) {
              currentAlpha = Number(matches[0]) * 10;
            }
          }
      
          if (currentAlpha < 10) {
            alpha++;
            setColorWithOpacity(alpha);
          } else {
            setColorWithOpacity(10);
          }
        });
      }
    
    pixels.forEach(pixel => pickAlpha(pixel));
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
    } else alert('Number of squares shold be between 16 and 100.');
});