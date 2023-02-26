// Globals and DOM constants
const typeSwitcherBtn = document.getElementById('switcher');
const typeStandard = document.getElementById('standard');
const typeShading = document.getElementById('shading');
const typeRandom = document.getElementById('randomColor');
const gridSize = document.getElementById('myRange');
const divGridContainer = document.getElementById('gridContainer');
const output = document.getElementById('sizeDisplay');

// Sets the display under the slider to show current value in realtime
output.innerHTML = gridSize.value;

// Removes original sketch divs to prepare for a reset
gridSize.oninput = function() {
  output.innerHTML = this.value;
  removeAllChildNodes(divGridContainer);
  gridGenerate();
}

// Makes a grid per the gridSize selected on the slider
function gridGenerate() {
  for (j = 0; j < gridSize.value; j++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('rowElement');
      for (i = 0; i < gridSize.value; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('pixelElement');
        gridElement.value = 0;
        gridElement.addEventListener('mouseover', changeColor);
        gridRow.appendChild(gridElement);
      }
      divGridContainer.appendChild(gridRow);
  }
}

// Removes existing pixel divs when generating a new size
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Random Color function for the random draw type
function randomRGBValue() {
  return Math.floor(Math.random()*255);
}

// Function to change the color of the divs on hover
function changeColor(e) {
  // Standard style. Black board with white lines
  if (typeSwitcherBtn.value == 0) {
    e.target.style.opacity = '1';
  // Shading style. Each pass of a div increase color 10%
  } else if (typeSwitcherBtn.value == 1) {
    if (e.target.value < 1.0) {
      e.target.style.opacity = e.target.value + 0.1;
      e.target.value = e.target.value + 0.1;
    }
  // Random style. Random color for each event trigger
  } else if (typeSwitcherBtn.value == 2) {
    e.target.style.opacity = '1';
    e.target.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
  }
}

// Make the switcher button change between 0, 1, or 2 on a click and adjust style for 
// draw type displays to match
typeSwitcherBtn.addEventListener('click', switcherBtnChange);
function switcherBtnChange(e) {
  if (e.target.value == 0) {
      e.target.value = 1;
      typeStandard.classList.add('off');
      typeShading.classList.remove('off');
  } else if (e.target.value == 1) {
      e.target.value = 2;
      typeShading.classList.add('off');
      typeRandom.classList.remove('off');
  } else {
      e.target.value = 0;
      typeRandom.classList.add('off');
      typeStandard.classList.remove('off');
  }
}

// initial grid with default size
gridGenerate();