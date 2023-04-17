document.addEventListener("DOMContentLoaded", () => {
    
  const gridSizeSlider = document.querySelector('.grid-size-slider');
  const gridSizeLabel = document.querySelector('.grid-size');

//a slider to control the number of grids
  gridSizeSlider.addEventListener('input', () => {
    const gridSize = gridSizeSlider.value;
    gridSizeLabel.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize);
  });
  
//function to create a grid using divs
  function createGrid(size) {
    const container = document.querySelector('.grid-container');
    container.textContent = '';
    container.style.width = '750px';
    container.style.height = '750px';
  
    const squareSize = 750 / size;
  
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }
  }
  
// initialize grid
  createGrid(gridSizeSlider.value);
  gridSizeLabel.textContent = `${gridSizeSlider.value}x${gridSizeSlider.value}`;

//color picker
  const colorPicker = document.querySelector('.color-picker');
  let currentColor = colorPicker.value;

  colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
});

//function to change div color on hover
const drawButton = document.querySelector('.draw-button');

drawButton.addEventListener('click', draw);

function draw() {
  const squares = document.querySelectorAll('.square');

  for (let i = 0; i < squares.length; i++) {
    let colorValue = 100;

    squares[i].addEventListener('mouseover', () => {
      if (colorValue > 0) {
        colorValue -= 10;
      }
      squares[i].style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    });

    squares[i].addEventListener('touchstart', () => {
      if (colorValue > 0) {
        colorValue -= 10;
      }
      squares[i].style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    });

    squares[i].addEventListener('touchmove', () => {
      if (colorValue > 0) {
        colorValue -= 10;
      }
      squares[i].style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    });
  }
}

//eraser function
const eraseButton = document.querySelector('.eraser-button');

eraseButton.addEventListener('click', erase);

function erase() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'white';
    });

    square.addEventListener('touchstart', () => {
      square.style.backgroundColor = 'white';
    });

    square.addEventListener('touchmove', () => {
      square.style.backgroundColor = 'white';
    });
  });
}

//clear function
const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', clear);

function clear () {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = 'white';
  });
}

draw();  

});