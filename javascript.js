let gridSize = 64;
let divGridContainer = document.getElementById('gridContainer');

for (j = 0; j < gridSize; j++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('rowElement');
    for (i = 0; i < gridSize; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('pixelElement');
      gridElement.addEventListener('mouseover', changeColor);
      gridRow.appendChild(gridElement);
    }
    divGridContainer.appendChild(gridRow);
}

function changeColor(e) {
  e.target.style.backgroundColor = '#f4f4f4';
}