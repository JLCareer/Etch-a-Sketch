let gridRow = 100, gridColumn = 100;

const body = document.querySelector("body")

const gridContainer = document.createElement("div")

gridContainer.classList.add("container");

body.appendChild(gridContainer);

for(let i = 0; i < gridRow; i++){
    let row = document.createElement("div")
    row.classList.add("row")
    
    for(let j = 0; j < gridColumn; j++){
        let girdPixel = document.createElement("div")
        girdPixel.setAttribute("class", "pixel")
        row.appendChild(girdPixel)
    }
    
    gridContainer.append(row)
}

