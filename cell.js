const Wall = require('./wall');

function Cell(row, col, grid) {
    this.row = row;
    this.col = col;
    this.grid = grid;
    this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
    this.visited = false;
    this.userVisited = false;


    this.highlight = function () {
        const startRow = this.row * 40;
        const startCol = this.col * 40;
        noStroke();
        fill("purple");
        rect(startRow, startCol, 40, 40)
    }

    // this.makeWallsFalse = function(){
    //     for (let i = 0; i < this.walls.length; i++) {
    //         this.walls[i] = false;
    //     }
    //     this.render();
    // }

    this.updateUserVisit = function(){
        this.userVisited = true;
    }

    this.renderEnd = function(){
        const startRowCol = 19 * 40;
        
        noStroke();
        fill("white");
        rect(startRowCol + 1, startRowCol + 1, 38, 38);
        ellipseMode(CENTER);
        fill("gray");
        ellipse(startRowCol + 20, startRowCol + 20, 15, 15);
    }

    this.render = function () {
        const startRow = this.row * 40;
        const startCol = this.col * 40;

        for (let i = 0; i < this.walls.length; i++) {
            if (this.walls[i].present) {
                this.walls[i].render(i, startRow, startCol);
            } else {
                this.walls[i].derender(i, startRow, startCol);
            }
        }


        if (this.visited) {
            noStroke();
            fill("white");
            rect(startRow + 1, startCol + 1, 38, 38)
        }

         const availColors = [
            "paleturquoise",
            "plum",
            "lightpink",
            "khaki",
            "palegreen",
            "rosybrown"
        ];

        if(this.userVisited){
            // for (let i = 0; i < this.walls.length; i++) {
            //     this.walls[i].renderDiscovered(i, startRow, startCol);
            // }

            let randomColor = availColors[Math.floor(Math.random() * 6)];
            noStroke();
            fill(randomColor);
            quad(
                random(startRow+1, startRow+37), random(startCol+1, startCol+37),
                random(startRow + 1, startRow + 37), random(startCol + 1, startCol + 37),
                random(startRow + 1, startRow + 37), random(startCol + 1, startCol + 37),
                random(startRow + 1, startRow + 37), random(startCol + 1, startCol + 37)
            );


        }
    }

    this.renderUser = function(color) {
        const startRow = this.row * 40;
        const startCol = this.col * 40;

        for (let i = 0; i < this.walls.length; i++) {
            if (this.walls[i].present) {
                this.walls[i].render(i, startRow, startCol);
            } else {
                this.walls[i].derender(i, startRow, startCol);
            }
        }

        noStroke();
        fill("white");
        rect(startRow + 1, startCol + 1, 38, 38);
        ellipseMode(CENTER);
        fill(color);
        ellipse(startRow + 20, startCol + 20, 15, 15);
    };


    this.getNeighbor = function () {

        const top = grid[row - 1];
        const right = grid[row + 1];
        const bottom = grid[row];
        const left = grid[row];

        const neighbors = []

        if (top) {
            neighbors.push(grid[row - 1][col]);
        }

        if (right) {
            neighbors.push(grid[row + 1][col]);
        }

        if (bottom) {
            neighbors.push(grid[row][col - 1]);
        }

        if (left) {
            neighbors.push(grid[row][col + 1]);
        }


        const validNeighbors = [];


        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] && !(neighbors[i].visited)) {
                validNeighbors.push(neighbors[i])

            }
        }

        let nextCell;

        if (validNeighbors.length > 0) {
            nextCell = this.chooseRandomNeighbor(validNeighbors);
            return nextCell;
        } else {
            return undefined;
        }
       
    }

    this.chooseRandomNeighbor = function (validNeighbors) {
        return validNeighbors[Math.floor(Math.random() * validNeighbors.length)]
    }

}

module.exports = Cell;


//credit: https://p5js.org/examples/color-lerp-color.html