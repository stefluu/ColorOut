
const Cell = require('./cell');
const Game = require('./game');
const Maze = require('./maze');


const grid = [];

let current;

const stack = [];

let game;
// window.addEventListener("keypress", (event) => (game.userMove(event)));


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


    directions1 = createElement("h3", "Run around the white maze to render colorful shapes!")
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

    if (game.end()) {
        console.log("derp")
        const randomCongratsColors = [
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px MidnightBlue, 0 0 40px MidnightBlue, 0 0 50px MidnightBlue, 0 0 60px MidnightBlue, 0 0 70px MidnightBlue",
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px MediumVioletRed, 0 0 40px MediumVioletRed, 0 0 50px MediumVioletRed, 0 0 60px MediumVioletRed, 0 0 70px MediumVioletRed",
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px IndianRed, 0 0 40px IndianRed, 0 0 50px IndianRed, 0 0 60px IndianRed, 0 0 70px IndianRed",
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px DarkCyan, 0 0 40px DarkCyan, 0 0 50px DarkCyan, 0 0 60px DarkCyan, 0 0 70px DarkCyan",
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px SeaGreen, 0 0 40px SeaGreen, 0 0 50px SeaGreen, 0 0 60px SeaGreen, 0 0 70px SeaGreen",

        ]

        let chosenCongrats = randomCongratsColors[Math.floor(Math.random() * 5)]
        
        const directions = document.querySelector(".directions");
        congrats = createElement("h1", "CONGRATULATIONS! YOU WIN!");
        congrats.id("congrats");
        congrats.parent(directions);

        congratsMsg = document.getElementById("congrats");
        congratsMsg.style.textShadow = chosenCongrats;
        congratsMsg.style.fontSize = "55px";
        noLoop();
    }
}

window.setup = setup;

window.draw = draw;

//credit: https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLhHyq-ZjXQx8-K2oRTtMM_xdcxhf1-wZc&index=2
//credit: https://www.w3schools.com/howto/howto_css_glowing_text.asp