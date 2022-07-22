function makeGrid(size){
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(i=0; i<amount; i++){
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', colorSquare);
    container.appendChild(square);}
}
makeGrid(16);

const btn = document.querySelector('.btn');
btn.onclick = () => changesize();

function changesize(number){
    number = prompt("Input Number");
    if (number >= 2 && number<= 100){
        makeGrid(number);
    } else {
        alert("Input a number between 2 & 100");}
};

let color = '#272932';
function colorSquare(){
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
    this.style.backgroundColor = color;}
}

const erase = document.querySelector('.eraser');
erase.onclick = () => changeColor('white');

const black = document.querySelector('.black');
black.onclick = () => changeColor('#272932');

const grey = document.querySelector('.grey');
grey.onclick = () => changeColor('#828489');

const rainbow = document.querySelector('.rainbow');
rainbow.onclick = () => changeColor('random');

function changeColor(choice){
    color = choice;
}

function resetBoard() {
    const container = document.querySelector('.container');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
} 

const reset = document.querySelector('.reset');
reset.onclick = () => resetBoard();