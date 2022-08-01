'use strict';

function initEAS(rows=10, cols=12) {
  document.querySelector('#rows').value = rows;
  document.querySelector('#cols').value = cols;

  const container = document.querySelector('#container');

  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.replaceChildren(grid);

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
    e.addEventListener('mouseenter', activateCell)
  );
}

function doResize(e) {
  const newRows = parseInt(document.querySelector('#rows').value);
  const newCols = parseInt(document.querySelector('#cols').value);
  initEAS(newRows, newCols);
}
document.querySelector('#resize').addEventListener('click', doResize);

function activateCell(e) {
  // console.log(window.getComputedStyle(this).backgroundColor);
  setTimeout(() => this.style.backgroundColor = 'black', 0);
}

initEAS();
