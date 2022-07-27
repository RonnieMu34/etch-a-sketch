const container = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList = `square ${i + 1}`;
    container.appendChild(square);
}