let container = document.querySelector('.container');
let row = document.createElement('div');
row.classList.add('row');
let gridDivs;
// let blackButton = document.getElementById('black');
// let rainbowButton = document.getElementById('rainbow');
// let shaderButton = document.getElementById('shader');
let menu = document.getElementById('menu');
let currentMode;
let event;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    event = ['touchstart', 'touchmove']
   }else{
       event = ['mouseover']
   }

function createGrid(numBox = 16) {

    for (let i = 0; i < numBox; i++) {
        container.append(row.cloneNode());
    }

    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        for (let i = 0; i < numBox; i++) {
            let div = document.createElement('div');
            div.classList.add('grid-item');
            div.setAttribute('style', `width: ${100 / numBox}%; padding-top:${100 / numBox}%;
            float: left;
            outline: 1px solid lightgrey;
            background-color: white;
            filter: brightness(1);`);
            
            // div.style.width = `'${100/numBox}'%;`;
            // div.style.paddingTop = `'${100/numBox}'%`;
            row.appendChild(div);
        }
    })
    gridDivs = document.querySelectorAll('.grid-item');
}

function rainbowSketch(e) {
    currentMode = rainbowSketch;
    if(e.target.className === 'grid-item'){
            e.target.style.filter = 'brightness(1)';
            var randomR = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            var randomG = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            var randomB = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let alpha = 1;
            e.target.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},${1})`;
    }
}
function blackSketch(e) {
    currentMode = blackSketch;
        if(e.target.className === 'grid-item'){
            document.elementFromPoint(e.clientX, e.clientY).style.background = `black`;
        }

}
function getValueBetweenBrackets(value){
    let betweenBracketRegex = /\(([^)]+)\)/;
    console.log(`This is value: ${betweenBracketRegex.exec(value)}`)
    return Number(betweenBracketRegex.exec(value)[1]);
}
function shaderSketch(e) {
    currentMode = shaderSketch;
    if(e.target.className === 'grid-item'){
            if(e.target.style.backgroundColor === 'black' || e.target.style.filter === "brightness(0)"){
                console.log('itsblack');
                return;
            }else{
                let shade = e.target.style.filter;
                let currentBrightness = getValueBetweenBrackets(shade);
                e.target.style.filter = `brightness(${currentBrightness-0.1})`;
            }
        }
}



function isNumber(value) {
    let numRegex = /^[1-9][0-9]*$/;
    return numRegex.test(value);
}
function clearGrid() {
    let newGridSize = prompt('Choose the size of your grid (Example: "16" will create a 16x16 grid');
    console.log(newGridSize);
    while (!isNumber(newGridSize)) {
        if(newGridSize===null){
            return;
        }
        newGridSize = prompt('Must enter a number greater than zero. (Example: "16" will create a 16x16 grid');
    }
    if(newGridSize===null){
        return;
    }
    document.querySelectorAll('.grid-item').forEach(function (e) {
        e.remove();
    });
    document.querySelectorAll('.row').forEach(function (e) {
        e.remove();
    });
    event.forEach(e=>{
        container.removeEventListener(e, currentMode, true);
    })
    
    createGrid(newGridSize);
}

  
  // button event listeners
  menu.addEventListener("click", function(e) {
      console.log('helloooooooo');
    event.forEach(e=>{
        container.removeEventListener(e, currentMode, true);
    })
    if (e.target.id == "black") {
        currentMode = blackSketch;
        event.forEach(e=>{
            container.addEventListener(e, blackSketch, true);
        })
    }
    if (e.target.id == "shader") {
        currentMode = shaderSketch;
        event.forEach(e=>{
        container.addEventListener(event, shaderSketch, true);
        })
    }
    if (e.target.id == "rainbow") {
        currentMode = rainbowSketch;
        event.forEach(e=>{
        container.addEventListener(event, rainbowSketch, true);
        })
    }
    // if (e.target.id == "reset") {
    //   resetGrid();
    // }
  })

createGrid(16);