const slidercontainer = document.querySelector("#Slider-Container");
const slider = document.querySelector('#Slider');
const slidervalue = document.querySelector("#Slider-Value")

slidervalue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

//--------Etch A Sketch Functions and Variables --------

const GRIDSIDE = 600;
let SquaresPerSide = 16;

//Searches the html file for sketch-area and assigns it
//The height and width of GRIDSIDE
const SketchArea = document.querySelector("#sketch-area");
SketchArea.style.width = SketchArea.style.height = `${GRIDSIDE}px`

function SetBackgroundColour() {
    this.style.backgroundColor = "black";
}



//add for loop that creates a new div
// sets total number of squares & there heught and width
function CreateGridCells(SquaresPerSide) {
    const numOfSquares = (SquaresPerSide * SquaresPerSide)
    const WidthOrHeight = `${(GRIDSIDE / SquaresPerSide)-2}px`;


    for (let i = 0; i< numOfSquares; i++) {
        const GridCell = document.createElement("div");

        GridCell.style.width = GridCell.style.height = WidthOrHeight;
        GridCell.classList.add("cell");

        SketchArea.appendChild(GridCell);

        //add event for cells we just  created and call changebackgroundcolour function
        GridCell.addEventListener("mouseover", SetBackgroundColour);
    }
}

//Remove Cells depending on slider
//everytime first child is removed second child becomes
//first child and is removed.
function removeGridCells() {
    while (SketchArea.firstChild) {
        SketchArea.removeChild(SketchArea.firstChild);
    }
}

CreateGridCells(16);