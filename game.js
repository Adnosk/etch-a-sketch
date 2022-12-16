const container = document.getElementById('container');
const playGridSection = document.createElement('div');
const box = document.createElement('div');

playGridSection.setAttribute('id','game');
box.setAttribute('class', 'box');

container.appendChild(playGridSection);
playGridSection.appendChild(box);