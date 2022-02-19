let color = "black"

function populateSize(size){
 let board = document.querySelector(".board")
 let squares = board.querySelectorAll("div")
 squares.forEach((div) => div.remove)
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows =  `repeat(${size}, 1fr)`

let amount = size * size 

for (let i=0; i<amount; i++) {
let square = document.createElement('div');
square.addEventListener("mouseover", changeSquareColor)
square.style.backgroundColor = 'white'
board.insertAdjacentElement("beforeend", square)
}
}
populateSize(16)
 
function changeSize(input){
    if (input >= 2 && input <= 100){
    populateSize(input)
    } else {
        alert("Pick a number between 2 and 100")
    }
}

function changeSquareColor() {
if (color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`   
    }else if (color === 'pickedColor'){
        this.style.backgroundColor = colorInput.value
    } else{
    this.style.backgroundColor = color
    }
}
  
function changeColor(choice) {
    color = choice
}

function resetBoard(){
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white")   
}

let buttons = document.querySelectorAll("button")
buttons.forEach((buttons) => buttons.addEventListener("mouseover", () => buttons.classList.add("scale")))
buttons.forEach((buttons) => buttons.addEventListener("mouseleave", () => buttons.classList.remove("scale")))

let placeholder = document.getElementById("placeholder")
placeholder.addEventListener("keydown", () => placeholder.classList.add("scale"))
placeholder.addEventListener("keyup", () => placeholder.classList.remove("scale"))

let colorInput = document.querySelector("#color")
colorInput.addEventListener("input", () => {
    let pickedColor = colorInput.value
    changeColor(pickedColor)
})