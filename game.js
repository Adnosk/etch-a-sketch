const container = document.getElementById('container');

const playGrid = document.createElement('div');

playGrid.setAttribute('id', 'game');
container.appendChild(playGrid);

// create the grid
function gridMaker(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.className = 'box';
            playGrid.appendChild(div);
        }

    }
}

// change the background color
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function askGrid() {
    let text;
    let gridInput = prompt('Please enter the number of rows/columns:', '16');
    if (gridInput > 1 && gridInput < 100) {
        text = `The new grid has a size of ${gridInput}x${gridInput}`
        gridMaker(gridInput);
    } else {
        text = 'The input has to be bigger than 1 and less than 100!'
    }
    document.getElementById('userInput').innerHTML = text;
}

// default grid size
let gridSize = 16;

gridMaker(gridSize);

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', changeColor)
});