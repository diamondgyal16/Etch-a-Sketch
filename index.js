const container = document.querySelector("#container");
const number = document.createElement("button");
container.appendChild(number);
number.textContent = "number";

number.addEventListener ("click" , function() {
    const gridSize = prompt ("enter grid size");

    createGrid(parseInt (gridSize));
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * 255);
}

const darken = (color) => {
    const match = RegExp(/rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (\d?\.?\d)/).exec(color);
    const alpha = parseFloat(match[4]);

    return `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${(alpha === 1) ? alpha : alpha + .1})`;
}

function createGrid (size) {
    // remove all existing rows
    const rows = document.querySelectorAll(".row");

    for (let row of rows) {
        row.remove();
    }
    // end

    for(let i=0; i<size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for(let j=0; j<size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            
            square.addEventListener("mouseenter" , function() {
                const color = square.style.backgroundColor;

                if(color) {
                    square.style.backgroundColor = darken(color);
                } else {
                    square.style.backgroundColor = `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, .1)`;
                }
            })
        }
    }
}

createGrid(16)