const container = document.querySelector(".grid-container");

// for (let i = 0; i < 256; i++) {
//     let square = document.createElement('div');
//     square.classList = `square ${i + 1}`;
//     container.appendChild(square);
// }

for (let x = 0; x < 10; x++) {
    let newRow = document.createElement('div');
    newRow.classList = `grid-row`;
    container.appendChild(newRow);
    for (let y = 0; y < 10; y++) {
        let square = document.createElement('div');
        square.classList = `square`;
        newRow.appendChild(square);
        }
}

const gridCells = document.querySelectorAll(".square");

gridCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("hov-square");
    });
});