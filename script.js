//Default size of grid
let n = 16;

//Prompt user to enter grid size
function gridSize() {
  let size = prompt("Choose the size for the grid(1-64)", 16)
  if(size < 1) {
    n = 1;
  }
  else if(size > 64) {
    n = 64;
  }
  else {
    n = size;
  }
}

gridSize();

//Calling main container
const container = document.getElementById("container");

//Function to make a grid inside the container
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', colorChange);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(n, n);

//Function to change the color of the cell when mouse hovers over it
function colorChange(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

//Function to clear the grid
function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  })
  makeRows(n, n);
}