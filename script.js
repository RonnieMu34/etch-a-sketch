const container = document.querySelector(".grid-container");

let squares = 10;

container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

for (let i = 0; i < (squares * squares); i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    container.appendChild(square);
}

const gridCells = document.querySelectorAll(".square");

gridCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hov-square");
    });
});