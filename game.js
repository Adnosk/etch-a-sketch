const container = document.getElementById('container');

const playGrid = document.createElement('div');

playGrid.setAttribute('id', 'game');
container.appendChild(playGrid);

// create the grid, css, query selectors and event listeners
function gridMaker(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.className = 'box';
            playGrid.appendChild(div);
        }
    }
    const calc = 100 / size;
    document.getElementById('game').style.gridTemplateColumns = `repeat(${size}, ${calc}%`; //grid-template-columns: repeat(16, 6.25%);
    document.getElementById('game').style.gridTemplateRows = `repeat(${size}, ${calc}%`;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor)
    });
}

// change the background color
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

// create a new grid from user input
function askGrid() {
    let text;
    let gridInput = prompt('Please enter the number of rows/columns:', '16');
    if (gridInput > 1 && gridInput < 100) {
        text = `The new grid has a size of ${gridInput}x${gridInput}`;
        deleteGrid();
        gridMaker(gridInput);
    } else {
        text = 'The input has to be bigger than 1 and less than 100!';
    }
    document.getElementById('userInput').innerHTML = text;
}

// delete old grid
function deleteGrid() {
    while (playGrid.firstChild) {
        playGrid.removeChild(playGrid.firstChild);
    }
}

// default grid size
let gridSize = 16;

gridMaker(gridSize);