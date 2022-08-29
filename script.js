const container = document.querySelector(".grid-container");
var slider = document.getElementById("myRange");
var reset = document.getElementById("reset");
const gridCells = document.querySelectorAll(".square");

    slider.addEventListener("change", () => {
        let squares = slider.value;

        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

        for (let i = 0; i < (squares * squares); i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            container.appendChild(square);
        }

        gridCells.forEach(cell => {
            cell.addEventListener("mouseover", () => {
                cell.classList.add("hov-square");
            });
        });
});
console.log(slider.value);
