const divGridContainer = document.createElement('div');
divGridContainer.setAttribute('id','gridContainer');

let gridSize = 64;

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
const body = document.body;
body.appendChild(divGridContainer);



function changeColor(e) {
  e.target.style.backgroundColor = '#f4f4f4';
}