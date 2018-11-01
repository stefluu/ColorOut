const Wall = require('./wall');

function Cell(row, col, grid) {
    this.row = row;
    this.col = col;
    this.grid = grid;
    this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
    // this.walls = []
    this.visited = false;

    // [1, 2, 3, 4].forEach(() => this.walls.push(new Wall()));

    this.render = function () {
        const startRow = this.row * 40;
        const startCol = this.col * 40;

        // x, y, width, height
        // rect(startX, startY, 40, 40)
        // noFill();
        for (let i = 0; i < this.walls.length; i++) {
            this.walls[i].render(i, startRow, startCol);
        }

        if (this.visited) {
            rect(startRow, startCol, 40, 40)
            fill("green");
        }

    }

    this.getNeighbor = function () {

        // const neighborsIndices = [
        //     [row - 1, col],
        //     [row + 1, col],
        //     [row, col - 1],
        //     [row, col + 1]            
        // ]
        console.log(row)
        console.log(col)
        console.log(grid)

        const neighbors = [
            grid[row - 1][col],
            grid[row + 1][col],
            grid[row][col - 1],
            grid[row][col + 1]
        ]

        // const neighbors = [];

        // const validateIdx = function (idxArr) {
        //     if(idxArr.every((idx) => {
        //         return idx < 20 && idx >= 0}
        //         )){

        //         neighbors.push(idxArr);
        //     }
        // }

        // let top = [(row - 1), col];
        // validateIdx(top);
        // let right = [row, (col+1)];
        // validateIdx(right);
        // let bottom = [(row + 1), col];
        // validateIdx(bottom);
        // let left = [row, (col - 1)];
        // validateIdx(left);

        console.log(neighbors)

        const validNeighbors = [];

        // for(let i = 0; i < neighbors.length; i++){
        //     if ((neighbors[i][0] < 20 && neighbors[i][0] >= 0) && (neighbors[i][1] < 20 && neighbors[i][1] >= 0)) {
        //         validNeighbors.push(neighbors[i]);
        //     }
        // }

        // const validNeighbors = neighbors.filter(neighbor => {
        //     // let x = neighbor[0];
        //     // let y = neighbor[1];

        //     if((neighbor[0] < 20 && neighbor[0] >= 0) && (neighbor[1] < 20 && neighbor[1] >= 0)){
        //         return neighbor;
        //     }
        // }

        // const validateNeighbors = function(neighbor) {
        //     if(!neighbor){
        //         return false;
        //     }
        //     // let x = neighbor[0];
        //     // let y = neighbor[1];

        //     if(neighbor.row < 20 || neighbor.row >=0){
        //         return false;
        //     } else if(neighbor.col < 20 || neighbor.col >= 0){
        //         return false;
        //     } else{
        //         return true
        //     }

        // }

        // const validateNeighbors = function(neighbor){
        //     console.log(neighbor)
        //     neighbor
        // }

        // const validNeighbors = neighbors.filter(validateNeighbors);

        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] && !(neighbors[i].visited)) {
                validNeighbors.push(neighbors[i])
            }
        }


        console.log("valid")
        console.log(validNeighbors)

        let nextCell;

        if (validNeighbors.length > 0) {
            nextCell = this.chooseRandomNeighbor(validNeighbors);
            return nextCell;
        }
        // let nextCell = 

        // //need to check if nextCell is true bc it could be undefined at the edges
        // while(nextCell && nextCell.visited){
        //     nextCell = this.chooseRandomNeighbor(neighbors)

        //     if(nextCell && !nextCell.visited){
        //         return nextCell
        //     }
        // }

        // if (nextCell) {
        //     rect(startRow, startCol, 40, 40)
        //     fill("purple");
        // }
        // console.log(nextCell)
        // return nextCell;

    }

    this.chooseRandomNeighbor = function (validNeighbors) {
        return validNeighbors[Math.floor(Math.random() * validNeighbors.length)]
    }

}

module.exports = Cell;