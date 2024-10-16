const container = document.querySelector("#container")

const number = document.createElement("button")
container.appendChild(number)
number.textContent = "number"
number.addEventListener ("click" , function (){
    const gridSize = prompt ("enter grid size")

    createGrid(parseInt (gridSize))
})

function createGrid (size){
    const rows = document.querySelectorAll(".row")

    for (let row of rows){
        row.remove()
    }

    for(let i=0; i<size; i++){
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row)
    
        for(let j=0; j<size; j++){
            const square = document.createElement("div")
            square.classList.add("box")
            row.appendChild(square)
            square.addEventListener("mouseenter" , function(){
                square.classList.add("draw")
            })
        }
    }
}

createGrid(16)