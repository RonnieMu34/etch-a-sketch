const container = document.querySelector(".grid-container");
const gridCell = document.querySelector(".square");

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

gridCell.addEventListener("mouseover", () => {
    gridCell.classList.add('hov-square');
});