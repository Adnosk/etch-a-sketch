const container = document.getElementById('container');

const playGrid = document.createElement('div');

playGrid.setAttribute('id', 'game');
container.appendChild(playGrid);

// create the grid, css, query selectors and event listeners. 16 is the default value
function gridMaker(size = 16) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.className = 'box';
            playGrid.appendChild(div);
        }
    }
    document.getElementById('game').style.gridTemplateColumns = `repeat(${size}, ${100/size}%`; // sets the CSS for columns
    document.getElementById('game').style.gridTemplateRows = `repeat(${size}, ${100/size}%`; // sets the CSS for rows
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

// clear grid by changing the color back to white
function clearGrid() {
    document.querySelectorAll('.box').forEach(box => box.style.backgroundColor = "white");
}

gridMaker();