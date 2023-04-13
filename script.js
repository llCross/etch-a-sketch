document.addEventListener("DOMContentLoaded", () => {
    
  const gridSizeSlider = document.getElementById('grid-size-slider');
  const gridSizeLabel = document.getElementById('grid-size');
  
  gridSizeSlider.addEventListener('input', () => {
    const gridSize = gridSizeSlider.value;
    gridSizeLabel.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize);
  });
  
  function createGrid(size) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
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

});