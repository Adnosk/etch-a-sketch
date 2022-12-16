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

// default grid size
let gridSize = 16;

gridMaker(gridSize);

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', changeColor)
});