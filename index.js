
const Cell = require('./cell');
const Game = require('./game');
const Maze = require('./maze');


const grid = [];

let current;

const stack = [];

let game;
window.addEventListener("keypress", (event) => (game.userMove(event)));


let maze;

let mapComplete = false;

let title;
let canvas;
let directionsDiv;


function setup() {
    title = createElement("h1", "ColorOut");
    title.position(970, 20);

    canvas = createCanvas(800, 800);
    canvas.addClass("maze");
    canvas.position(100, 90);



    directionsDiv = createDiv();
    directionsDiv.addClass("directions");
    directionsDiv.position(970, 170);

    const randomGlowColors = [
        "0px 0px 50px 10px white, 0px 0px 50px 10px MidnightBlue",
        "0px 0px 50px 10px white, 0px 0px 50px 10px MediumVioletRed	",
        "0px 0px 50px 10px white, 0px 0px 50px 10px IndianRed",
        "0px 0px 50px 10px white, 0px 0px 50px 10px DarkCyan",
        "0px 0px 50px 10px white, 0px 0px 50px 10px SeaGreen"
    ]

    let chosenGlow = randomGlowColors[Math.floor(Math.random() * randomGlowColors.length)]

    const directions = document.querySelector(".directions");
    directions.style.boxShadow = chosenGlow;


    directions1 = createElement("h3", "Run around the white maze to render color and exit the maze!")
    directions1.parent(directionsDiv);
    
    directions2 = createElement("h4", "The exit to the maze is at the gray dot!");
    directions2.parent(directionsDiv);

    directions3 = createP("Directions:");
    directions3.parent(directionsDiv);

    directions4 = createElement("ul");
    directions4.parent(directionsDiv);

    const listItems = [
        "Right Arrow - go right",
        "Left Arrow - go left",
        "Up Arrow - go up",
        "Down Arrow - go down",
    ]

    for(let i = 0; i < listItems.length; i++){
        nextDirections = createElement("li", listItems[i]);
        nextDirections.parent(directionsDiv);
    }



    for (let x = 0; x < 20; x++) {
        grid[x] = [];
        for (let y = 0; y < 20; y++) {
            grid[x].push(new Cell(x, y, grid, stack))
        }
    }

    let current_row = Math.floor(Math.random() * 20);
    let current_col = Math.floor(Math.random() * 20);

    current = grid[current_row][current_col];
    game = new Game(grid);
    maze = new Maze(current, grid, game)

    frameRate(100);
}



function draw() {
    maze.draw();
    game.userMove();
}

window.setup = setup;

window.draw = draw;
