let container = document.querySelector('.container');
let row = document.createElement('div');
row.classList.add('row');
let div = document.createElement('div');
div.classList.add('grid-item');

for(let i = 0; i<16; i++){
    container.append(row.cloneNode());
}

let rows = document.querySelectorAll('.row');
rows.forEach((row)=>{
    for(let i=0;i<16;i++){
        let div = document.createElement('div');
        div.classList.add('grid-item');
        row.appendChild(div);
    }
})

let gridDivs = document.querySelectorAll('.grid-item');

gridDivs.forEach((div)=>{
    div.addEventListener('mouseover', (e)=>{
        
    })
})