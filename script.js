const container = document.querySelector(".grid-container");
var btn = document.getElementById("submit");
var reset = document.getElementById("reset");

btn.addEventListener("click", () => {
    let squares = document.getElementById("number").value;

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

    reset.addEventListener("click", () => {
        gridCells.forEach(cell => {
            cell.classList.remove("hov-square");
            container.removeChild(cell);
        });
    });

});