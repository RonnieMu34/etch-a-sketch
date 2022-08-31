const container = document.querySelector(".grid-container");
var slider = document.getElementById("slider");

slider.addEventListener("change", () => { // This is the slider event listener
    let squares = slider.value;

    container.innerHTML = "";

    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i = 0; i < (squares * squares); i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
    }

    const gridCells = document.querySelectorAll(".square");
    
    let mouse_down = false;
    document.body.onmousedown = () => mouse_down = true;
    document.body.onmouseup = () => mouse_down = false;
    document.body.onmousemove = () => 

    gridCells.forEach(cell => { // This is how the new property is added to grey-out a square after a square is hovered over
        cell.addEventListener("mouseover", () => {
                if (mouse_down)
                    cell.classList.add("hov-square");
        });
    });

});