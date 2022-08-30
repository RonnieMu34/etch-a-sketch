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

    gridCells.forEach(cell => { // This is how the new property is added to grey-out a square after a square is hovered over
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hov-square");
        });
    });

});

class ClickAndHold {
    /**
     * 
     * @param {EventTarget} target The HTML element to apply the event to 
     * @param {Function} callback The function to run once the target is clicked and held 
     */
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false; // By default, user isn't holding down button
        this.activeHoldTimeoutId = null;

        ["mousedown", "touchstart"].forEach(type => {
            this.target.addEventListener(type, this._onHoldStart.bind(this));
        });

        ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
            this.target.addEventListener(type, this._onHoldEnd.bind(this));
        });
    }
    _onHoldStart() {
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(() => {
            if (this.isHeld) {
                this.callback();
            }
        }, 1000);
    }

    _onHoldEnd() {
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}