const container = document.getElementById('container');
divsNum = 16;
size = 500;  // max size for each line
  function makeGrid(){
    container.innerHTML = "";
    container.setAttribute("style", "margin: auto; width: 500px; height: 500px;");
    for (i = 0; i<divsNum; i++){
      const gridBox = document.createElement('div');
      gridBox.classList.add('gridbox');
      container.appendChild(gridBox);
      for (j=0; j<divsNum; j++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.innerHTML = '&nbsp';
        grid.style.height = size/divsNum;
        grid.style.width = size/divsNum;
        gridBox.appendChild(grid);

        //changes div to be active when moused over
        grid.addEventListener('mouseover', function (){
          grid.classList.add('active');
        });
      }
    }
  }

  makeGrid();

  function clearMe(){
    container.innerHTML= "";
    divsNum = parseInt(prompt("How many boxes per side do you want? (min value of 2, max value of 100)"));
    if (isNaN(divsNum) || divsNum > 100 || divsNum < 2) {
      alert('Error! No can do. Refreshing page');
      divsNum = 16;
      makeGrid();
    } else {
      makeGrid();
    }
  }

function changeColor(deltaColor){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const root = document.documentElement;
  if (deltaColor == "white") {
    root.style.setProperty('--base', 'white');
  } else if (deltaColor == "blue") {
    root.style.setProperty('--base', 'blue')
  } else {
    root.style.setProperty('--base', 'black');

  }
  
}