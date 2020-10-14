// what function does: get number from user input
function userNumber(){
    let numDivs = document.getElementById('numDivs').value;
    console.log(numDivs);
    //tableIt(numDivs);
    console.log('it is done');
}


//what function does: remove anything in #container, append a create userNumberxuserNumber grid
function tableIt(numDivs){
    let container = document.getElementById('container');
    container.innerHTML = "";
    let k = 1;
    for (i = 0; i < numDivs; i++) { //creates rows
        let grid = document.createElement('div');
        grid.classList.add('grid-row');
        k +=1;
        container.appendChild(grid);
        for (j = 0; j <numDivs; j++) { //creates items in the row (aka columns)
            let gridBox = document.createElement('div');
            gridBox.classList.add('grid-column');
            grid.appendChild(gridBox);
        }
    }

}



// upon window load, call a function with starting (post) hover black




// upon clicking another radio button, change the (post) hover to user input decision




// clear the color of the etch trail
function clearMe() {}