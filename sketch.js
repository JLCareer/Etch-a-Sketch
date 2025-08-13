const body = document.querySelector("body")

const gridContainer = document.createElement("div")
gridContainer.classList.add("container");
body.appendChild(gridContainer);

function createGrid(size) {
    for(let i = 0; i < size; i++){
        let row = document.createElement("div")
        row.classList.add("row")
        
        for(let j = 0; j < size; j++){
            let girdPixel = document.createElement("div")
            girdPixel.setAttribute("class", "pixel")
            row.appendChild(girdPixel)
        }
        

        document.querySelector(".container").append(row)
    }
};

createGrid(16);

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.setAttribute("style", "background-color: black")
})

const sizeButton = document.createElement("button")
sizeButton.textContent = "Size"
body.insertBefore(sizeButton, gridContainer)

sizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size (1 ~ 100)"))

    if(newSize > 0 && newSize <= 100){
        document.querySelector(".container").remove();

        let newgrid = document.createElement("div")
        newgrid.classList.add("container");
        body.appendChild(newgrid);

        createGrid(newSize);

        newgrid.addEventListener("mouseover", (event) => {
            let target = event.target;
            target.setAttribute("style", "background-color: black")
        })
    }
})
