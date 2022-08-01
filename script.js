const container = document.querySelector(".grid-container");

// for (let i = 0; i < 256; i++) {
//     let square = document.createElement('div');
//     square.classList = `square ${i + 1}`;
//     container.appendChild(square);
// }

for (let x = 0; x < 5; x++) {
    let newRow = document.createElement('div');
    newRow.classList = `grid-row ${x + 1}`;
    container.appendChild(newRow);
    for (let y = 0; y < 5; y++) {
        let square = document.createElement('div');
        square.classList = `square ${y + 1}`;
        newRow.appendChild(square);
        }
}