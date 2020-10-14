// what function does: get number from user input
function userNumber(){
    let numDivs = document.getElementById('numDivs').value;
    numDivs = Number(numDivs);    
    tableIt(numDivs);
}


//what function does: remove anything in #container, append a create userNumberxuserNumber grid
function tableIt(numDivs){
    let container = document.getElementById('container');
    container.innerHTML = "";
    for (i = 0; i < numDivs; i++) { //creates rows
        let grid = document.createElement('div');
        grid.classList.add('grid-row');
        grid.innerHTML = '&nbsp';
        console.log('current i is : ' + i);
        for (j = 0; j <numDivs; j++) { //creates items in the row (aka columns)
            let gridBox = document.createElement('div');
            gridBox.classList.add('grid-column');
            gridBox.innerHTML = '&nbsp';
            console.log('i is ' + i);
            console.log('j is ' + j);
            grid.appendChild(gridBox);
        }
        container.appendChild(grid);
    }
 //NOTE- this currently is 'working' (runs but does not show the grid) when not called onload, has to be called on console right now 10/13/2020
}



// upon window load, call a function with starting (post) hover black




// upon clicking another radio button, change the (post) hover to user input decision




// clear the color of the etch trail
function clearMe() {}