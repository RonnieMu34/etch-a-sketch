const container = document.querySelector(".grid-container");

let squares = 5;

container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;