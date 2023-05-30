const frame = document.querySelector('.frame');
for (let i = 1; i <= 16; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', `sq${i}`);
    square.textContent = '#';
    frame.appendChild(square);
};