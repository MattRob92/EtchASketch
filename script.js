const GRIDSIDE = 600;
let rows = 16;
let cols = 16;

//Searches the html file for sketch-area and assigns it
//The height and width of GRIDSIDE
const SketchArea = document.querySelector("#sketch-area");
SketchArea.style.width =`${GRIDSIDE}px`;
SketchArea.style.height = `${GRIDSIDE}px`


//add for loop that creates a new div
// sets the height and width of the div using cols and rows.
function CreateGridCells() {
    for (let i = 0; i< (rows * cols); i++) {
        const GridCell = document.createElement("div");

        GridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        GridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
        GridCell.classList.add("cell");

        SketchArea.appendChild(GridCell);
    }
}

CreateGridCells();