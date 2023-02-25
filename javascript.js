let gridSize = document.getElementById('myRange');
let output = document.getElementById('sizeDisplay')
output.innerHTML = gridSize.value;

console.log(gridSize);

gridSize.oninput = function() {
  output.innerHTML = this.value;
}

let divGridContainer = document.getElementById('gridContainer');

for (j = 0; j < gridSize.value; j++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('rowElement');
    for (i = 0; i < gridSize.value; i++) {
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

