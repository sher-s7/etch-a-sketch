let container = document.querySelector('.container');
let row = document.createElement('div');
row.classList.add('row');
let gridDivs;


function createGrid(numBox = 16) {
    
    for (let i = 0; i < numBox; i++) {
        container.append(row.cloneNode());
    }

    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        for (let i = 0; i < numBox; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.setAttribute('style',`width: ${100/numBox}%; padding-top:${100/numBox}%;
            float: left;
            outline: 1px solid black;
            background-color: white;`);
            // div.style.width = `'${100/numBox}'%;`;
            // div.style.paddingTop = `'${100/numBox}'%`;
            row.appendChild(div);
        }
    })
    gridDivs = document.querySelectorAll('.grid-item');
}

function rainbowSketch(){
gridDivs.forEach((div) => {
    console.log(gridDivs)
    div.addEventListener('mouseover', (e) => {
        console.log(e.target.style);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomColor)
        e.target.style.background = `#${randomColor}`;
    })
})
}

function clearGrid(){
    let newGridSize = prompt('Choose the size of your grid:');
    document.querySelectorAll('.grid-item').forEach(function(e){
        e.remove();
    })
    document.querySelectorAll('.row').forEach(function(e){
        e.remove();
    })
    createGrid(newGridSize);
}

// createGrid(16);