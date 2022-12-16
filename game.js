const container = document.getElementById('container');
const game = document.createElement('div');
const grid = document.createElement('div');
const box = document.createElement('div');

game.setAttribute('id','game');
grid.setAttribute('class', 'grid');

container.appendChild(game);
game.appendChild(grid);
grid.appendChild(box);