let color = "black"

//This function creates all the divs in th container 
function populateSize(size){
 let board = document.querySelector(".board")
 let squares = board.querySelectorAll("div")
 squares.forEach((div) => div.remove)
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
board.style.gridTemplateRows =  `repeat(${size}, 1fr)`

let amount = size * size 

//the loop is responsible for multiplying the number of divs according to user input
for (let i=0; i<amount; i++) {
let square = document.createElement('div');
square.addEventListener("mouseover", changeSquareColor)
square.style.backgroundColor = 'white'
board.insertAdjacentElement("beforeend", square)
}
}
populateSize(16)
 
// This function guides the user to input a number from 2 to 100
function changeSize(input){
    if (input >= 2 && input <= 100){
    populateSize(input)
    } else {
        alert("Pick a number between 2 and 100")
    }
}

// Below function sets a conditional  based on the paramter of the changeColor() function 
function changeSquareColor() {
if (color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`   
    }else if (color === 'pickedColor'){
        this.style.backgroundColor = colorInput.value
    } else{
    this.style.backgroundColor = color
    }
}
  
// The button the user clicks passes on a parameter into the function below 
// which the determines the color to be assigned
function changeColor(choice) {
    color = choice
}

//This function resets the board when the reset button is clicked 
function resetBoard(){
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white")   
}

//The code below adds a class to each button to enable it scale up
//and back to its normal size whenever a mouseenter and mouseleave event is triggered  
let buttons = document.querySelectorAll("button")
buttons.forEach((buttons) => buttons.addEventListener("mouseover", () => buttons.classList.add("scale")))
buttons.forEach((buttons) => buttons.addEventListener("mouseleave", () => buttons.classList.remove("scale")))

//The code below adds a class to the placeholder to enable it scale up
//and back to its normal size whenever a keydown and keyup event is triggered  
let placeholder = document.getElementById("placeholder")
placeholder.addEventListener("keydown", () => placeholder.classList.add("scale"))
placeholder.addEventListener("keyup", () => placeholder.classList.remove("scale"))

// The code below allows users use picked color from the range of colors
let colorInput = document.querySelector("#color")
colorInput.addEventListener("input", () => {
    let pickedColor = colorInput.value
    changeColor(pickedColor)
})