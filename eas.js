'use strict';

function initEAS(rows=10, cols=10) {
  const container = document.querySelector('#container');
  container.innerText = '';

  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);

  for(let i=0; i<rows; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    grid.appendChild(gridRow);

    for(let j=0; j<cols; j++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('gridCell');
      gridRow.appendChild(gridCell);
    }
  }

  document.querySelectorAll('.gridCell').forEach( e =>
    e.addEventListener('mouseover', activateCell)
  );
}

function activateCell(e) {
  console.log(window.getComputedStyle(this).backgroundColor);
  this.style.backgroundColor = 'black';
}

initEAS();
