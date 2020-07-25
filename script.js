let grid = document.getElementById("grid");

let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

const button = document.querySelector("#button");

let color = "black";


function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "row";
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }

    }
}

function changeColor(){
    item = Array.from(document.querySelectorAll(".cell"));
    item.forEach((item) => {
        item.addEventListener("mouseenter", ()=>{
            console.log("enter");
            item.style.backgroundColor = color;
            item.style.borderColor = color;
        })
    })
}

function removeGrid(count){
    grid.innerHTML = "";
}

button.addEventListener("click", ()=>{
    console.log("remove");
    removeGrid(16);
    defaultGrid();
    changeColor();
})




defaultGrid();
changeColor();