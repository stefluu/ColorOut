const Wall = require('./wall');

function Cell(row, col, grid) {
    this.row = row;
    this.col = col;
    this.grid = grid;
    this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
    // this.walls = []
    this.visited = false;

    // [1, 2, 3, 4].forEach(() => this.walls.push(new Wall()));

    this.highlight = function () {
        // console.log(this.row, this.col);
        const startRow = this.row * 40;
        const startCol = this.col * 40;
        noStroke();
        fill("purple");
        rect(startRow, startCol, 40, 40)
    }

    this.render = function () {
        const startRow = this.row * 40;
        const startCol = this.col * 40;

        // x, y, width, height
        // rect(startX, startY, 40, 40)
        // noFill();

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

        // const neighborsIndices = [
        //     [row - 1, col],
        //     [row + 1, col],
        //     [row, col - 1],
        //     [row, col + 1]            
        // ]
        // console.log(row)
        // console.log(col)
        // console.log(grid)

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


        // const neighbors = [
        //     grid[row - 1][col],
        //     grid[row + 1][col],
        //     grid[row][col - 1],
        //     grid[row][col + 1]
        // ]
        //  const neighborsIndices = [
        //     [row - 1, col],
        //     [row + 1, col],
        //     [row, col - 1],
        //     [row, col + 1]            
        // ]

        // const neighbors = [];

        // const validateIdx = function (idx) {
        //     idx >= 0 && idx < 20
        // }
        // for(let i = 0; i < neighborsIndices.length; i++){
        //     if(validateIdx(neighborsIndices[i][0]) && validateIdx(neighborsIndices[i][1])){
        //         neighbors.push(grid[neighborsIndices[i][0]][neighborsIndices[i][1]])
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
        // console.log("neighbors")
        // console.log(neighbors)

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

        // for (let i = 0; i < neighbors.length; i++) {
        //     if (neighbors[i] && !(neighbors[i].visited)) {
        //         if(neighbors[i].row < 20 && neighbors[i].row >=0){
        //             if(neighbors[i].col < 20 && neighbors[i].col >= 0){

        //                 validNeighbors.push(neighbors[i])
        //             }
        //         }
        //     }
        // }

        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] && !(neighbors[i].visited)) {
                // if(neighbors[i].row < 20 && neighbors[i].row >=0){
                //     if(neighbors[i].col < 20 && neighbors[i].col >= 0){

                validNeighbors.push(neighbors[i])
                // }
                // }
            }
        }


        // console.log("valid")
        // console.log(validNeighbors)

        let nextCell;

        if (validNeighbors.length > 0) {
            nextCell = this.chooseRandomNeighbor(validNeighbors);
            return nextCell;
        } else {
            return undefined;
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

// const Wall = require('./wall');

// function Cell(row, col, grid) {
//     this.row = row;
//     this.col = col;
//     this.grid = grid;
//     this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
//     // this.walls = []
//     this.visited = false;

//     // [1, 2, 3, 4].forEach(() => this.walls.push(new Wall()));

//     this.highlight = function(){
//         // console.log(this.row, this.col);
//         const startRow = this.row * 40;
//         const startCol = this.col * 40;
//         noStroke();
//         fill("purple");
//         rect(startRow, startCol, 40, 40)
//     }

//     this.render = function () {
//         const startRow = this.row * 40;
//         const startCol = this.col * 40;

//         // x, y, width, height
//         // rect(startX, startY, 40, 40)
//         // noFill();

//         for (let i = 0; i < this.walls.length; i++) {
//             if(this.walls[i].present){
//                 this.walls[i].render(i, startRow, startCol);
//             } else {
//                 this.walls[i].derender(i, startRow, startCol);
//             }
//         }


//         if (this.visited) {
//             noStroke();
//             fill("white");
//             rect(startRow+1, startCol+1, 38, 38)
//         }


//     }


//     this.getNeighbor = function () {

//         // const neighborsIndices = [
//         //     [row - 1, col],
//         //     [row + 1, col],
//         //     [row, col - 1],
//         //     [row, col + 1]            
//         // ]
//         // console.log(row)
//         // console.log(col)
//         // console.log(grid)

//         const top = grid[row - 1];
//         const right = grid[row + 1];
//         const bottom = grid[row];
//         const left = grid[row];

//         const neighbors = []

//         if(top){
//             neighbors.push(grid[row - 1][col]);
//         }

//         if(right){
//             neighbors.push(grid[row + 1][col]);
//         }

//         if (bottom) {
//             neighbors.push(grid[row][col - 1]);
//         }

//         if (left) {
//             neighbors.push(grid[row][col + 1]);
//         }


//         // const neighbors = [
//         //     grid[row - 1][col],
//         //     grid[row + 1][col],
//         //     grid[row][col - 1],
//         //     grid[row][col + 1]
//         // ]
//         //  const neighborsIndices = [
//         //     [row - 1, col],
//         //     [row + 1, col],
//         //     [row, col - 1],
//         //     [row, col + 1]            
//         // ]

//         // const neighbors = [];

//         // const validateIdx = function (idx) {
//         //     idx >= 0 && idx < 20
//         // }
//         // for(let i = 0; i < neighborsIndices.length; i++){
//         //     if(validateIdx(neighborsIndices[i][0]) && validateIdx(neighborsIndices[i][1])){
//         //         neighbors.push(grid[neighborsIndices[i][0]][neighborsIndices[i][1]])
//         //     }
//         // }


//         // let top = [(row - 1), col];
//         // validateIdx(top);
//         // let right = [row, (col+1)];
//         // validateIdx(right);
//         // let bottom = [(row + 1), col];
//         // validateIdx(bottom);
//         // let left = [row, (col - 1)];
//         // validateIdx(left);
//         // console.log("neighbors")
//         // console.log(neighbors)

//         const validNeighbors = [];

//         // for(let i = 0; i < neighbors.length; i++){
//         //     if ((neighbors[i][0] < 20 && neighbors[i][0] >= 0) && (neighbors[i][1] < 20 && neighbors[i][1] >= 0)) {
//         //         validNeighbors.push(neighbors[i]);
//         //     }
//         // }

//         // const validNeighbors = neighbors.filter(neighbor => {
//         //     // let x = neighbor[0];
//         //     // let y = neighbor[1];

//         //     if((neighbor[0] < 20 && neighbor[0] >= 0) && (neighbor[1] < 20 && neighbor[1] >= 0)){
//         //         return neighbor;
//         //     }
//         // }

//         // const validateNeighbors = function(neighbor) {
//         //     if(!neighbor){
//         //         return false;
//         //     }
//         //     // let x = neighbor[0];
//         //     // let y = neighbor[1];

//         //     if(neighbor.row < 20 || neighbor.row >=0){
//         //         return false;
//         //     } else if(neighbor.col < 20 || neighbor.col >= 0){
//         //         return false;
//         //     } else{
//         //         return true
//         //     }

//         // }

//         // const validateNeighbors = function(neighbor){
//         //     console.log(neighbor)
//         //     neighbor
//         // }

//         // const validNeighbors = neighbors.filter(validateNeighbors);

//         // for (let i = 0; i < neighbors.length; i++) {
//         //     if (neighbors[i] && !(neighbors[i].visited)) {
//         //         if(neighbors[i].row < 20 && neighbors[i].row >=0){
//         //             if(neighbors[i].col < 20 && neighbors[i].col >= 0){

//         //                 validNeighbors.push(neighbors[i])
//         //             }
//         //         }
//         //     }
//         // }

//           for (let i = 0; i < neighbors.length; i++) {
//             if (neighbors[i] && !(neighbors[i].visited)) {
//                 // if(neighbors[i].row < 20 && neighbors[i].row >=0){
//                 //     if(neighbors[i].col < 20 && neighbors[i].col >= 0){

//                         validNeighbors.push(neighbors[i])
//                     // }
//                 // }
//             }
//         }


//         // console.log("valid")
//         // console.log(validNeighbors)

//         let nextCell;

//         if (validNeighbors.length > 0) {
//             nextCell = this.chooseRandomNeighbor(validNeighbors);
//             return nextCell;
//         } else{
//             return undefined;
//         }
//         // let nextCell = 

//         // //need to check if nextCell is true bc it could be undefined at the edges
//         // while(nextCell && nextCell.visited){
//         //     nextCell = this.chooseRandomNeighbor(neighbors)

//         //     if(nextCell && !nextCell.visited){
//         //         return nextCell
//         //     }
//         // }

//         // if (nextCell) {
//         //     rect(startRow, startCol, 40, 40)
//         //     fill("purple");
//         // }
//         // console.log(nextCell)
//         // return nextCell;

//     }

//     this.chooseRandomNeighbor = function (validNeighbors) {
//         return validNeighbors[Math.floor(Math.random() * validNeighbors.length)]
//     }

// }

// module.exports = Cell;


// const Wall = require('./wall');

// function Cell(row, col, grid) {
//     grid = grid || 0
//     // userColor = userColor || 0

//     this.row = row;
//     this.col = col;
//     this.grid = grid;
//     // this.userColor = userColor;
//     this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
//     // this.walls = []
//     this.visited = false;
//     this.hasUser = false;

//     // [1, 2, 3, 4].forEach(() => this.walls.push(new Wall()));

//     this.highlight = function () {
//         // console.log(this.row, this.col);
//         const startRow = this.row * 40;
//         const startCol = this.col * 40;
//         noStroke();
//         fill("purple");
//         rect(startRow, startCol, 40, 40)
//     }

//     this.render = function () {

//         const startRow = this.row * 40;
//         const startCol = this.col * 40;

//         // x, y, width, height
//         // rect(startX, startY, 40, 40)
//         // noFill();

//         for (let i = 0; i < this.walls.length; i++) {
//             if (this.walls[i].present) {
//                 this.walls[i].render(i, startRow, startCol);
//             } else {
//                 this.walls[i].derender(i, startRow, startCol);
//             }
//         }


//         if (this.visited) {
//             noStroke();
//             fill("white");
//             rect(startRow + 1, startCol + 1, 38, 38)
//         }

//     }

//     this.rerender = function (color) {

//         const startRow = this.row * 40;
//         const startCol = this.col * 40;

//         // x, y, width, height
//         // rect(startX, startY, 40, 40)
//         // noFill();

//         for (let i = 0; i < this.walls.length; i++) {
//             if (this.walls[i].present) {
//                 this.walls[i].render(i, startRow, startCol);
//             } else {
//                 this.walls[i].derender(i, startRow, startCol);
//             }
//         }


//         // if (this.visited) {
//         //     noStroke();
//         //     fill("white");
//         //     rect(startRow + 1, startCol + 1, 38, 38)
//         // }

//         if (this.hasUser) {
//             noStroke();
//             fill("white");
//             rect(startRow + 1, startCol + 1, 38, 38);
//             ellipseMode(CENTER);
//             fill(color);
//             ellipse(startRow + 20, startCol + 20, 15, 15);
//         }

//     }

//     // this.resetRender = function(){
//     //     this.render()
//     // }


//     this.getNeighbor = function () {

//         // const neighborsIndices = [
//         //     [row - 1, col],
//         //     [row + 1, col],
//         //     [row, col - 1],
//         //     [row, col + 1]            
//         // ]
//         // console.log(row)
//         // console.log(col)
//         // console.log(grid)

//         const top = grid[row - 1];
//         const right = grid[row + 1];
//         const bottom = grid[row];
//         const left = grid[row];

//         const neighbors = []

//         if (top) {
//             neighbors.push(grid[row - 1][col]);
//         }

//         if (right) {
//             neighbors.push(grid[row + 1][col]);
//         }

//         if (bottom) {
//             neighbors.push(grid[row][col - 1]);
//         }

//         if (left) {
//             neighbors.push(grid[row][col + 1]);
//         }


//         // const neighbors = [
//         //     grid[row - 1][col],
//         //     grid[row + 1][col],
//         //     grid[row][col - 1],
//         //     grid[row][col + 1]
//         // ]
//         //  const neighborsIndices = [
//         //     [row - 1, col],
//         //     [row + 1, col],
//         //     [row, col - 1],
//         //     [row, col + 1]            
//         // ]

//         // const neighbors = [];

//         // const validateIdx = function (idx) {
//         //     idx >= 0 && idx < 20
//         // }
//         // for(let i = 0; i < neighborsIndices.length; i++){
//         //     if(validateIdx(neighborsIndices[i][0]) && validateIdx(neighborsIndices[i][1])){
//         //         neighbors.push(grid[neighborsIndices[i][0]][neighborsIndices[i][1]])
//         //     }
//         // }


//         // let top = [(row - 1), col];
//         // validateIdx(top);
//         // let right = [row, (col+1)];
//         // validateIdx(right);
//         // let bottom = [(row + 1), col];
//         // validateIdx(bottom);
//         // let left = [row, (col - 1)];
//         // validateIdx(left);
//         // console.log("neighbors")
//         // console.log(neighbors)

//         const validNeighbors = [];

//         // for(let i = 0; i < neighbors.length; i++){
//         //     if ((neighbors[i][0] < 20 && neighbors[i][0] >= 0) && (neighbors[i][1] < 20 && neighbors[i][1] >= 0)) {
//         //         validNeighbors.push(neighbors[i]);
//         //     }
//         // }

//         // const validNeighbors = neighbors.filter(neighbor => {
//         //     // let x = neighbor[0];
//         //     // let y = neighbor[1];

//         //     if((neighbor[0] < 20 && neighbor[0] >= 0) && (neighbor[1] < 20 && neighbor[1] >= 0)){
//         //         return neighbor;
//         //     }
//         // }

//         // const validateNeighbors = function(neighbor) {
//         //     if(!neighbor){
//         //         return false;
//         //     }
//         //     // let x = neighbor[0];
//         //     // let y = neighbor[1];

//         //     if(neighbor.row < 20 || neighbor.row >=0){
//         //         return false;
//         //     } else if(neighbor.col < 20 || neighbor.col >= 0){
//         //         return false;
//         //     } else{
//         //         return true
//         //     }

//         // }

//         // const validateNeighbors = function(neighbor){
//         //     console.log(neighbor)
//         //     neighbor
//         // }

//         // const validNeighbors = neighbors.filter(validateNeighbors);

//         // for (let i = 0; i < neighbors.length; i++) {
//         //     if (neighbors[i] && !(neighbors[i].visited)) {
//         //         if(neighbors[i].row < 20 && neighbors[i].row >=0){
//         //             if(neighbors[i].col < 20 && neighbors[i].col >= 0){

//         //                 validNeighbors.push(neighbors[i])
//         //             }
//         //         }
//         //     }
//         // }

//         for (let i = 0; i < neighbors.length; i++) {
//             if (neighbors[i] && !(neighbors[i].visited)) {
//                 // if(neighbors[i].row < 20 && neighbors[i].row >=0){
//                 //     if(neighbors[i].col < 20 && neighbors[i].col >= 0){

//                 validNeighbors.push(neighbors[i])
//                 // }
//                 // }
//             }
//         }


//         // console.log("valid")
//         // console.log(validNeighbors)

//         let nextCell;

//         if (validNeighbors.length > 0) {
//             nextCell = this.chooseRandomNeighbor(validNeighbors);
//             return nextCell;
//         } else {
//             return undefined;
//         }
//         // let nextCell = 

//         // //need to check if nextCell is true bc it could be undefined at the edges
//         // while(nextCell && nextCell.visited){
//         //     nextCell = this.chooseRandomNeighbor(neighbors)

//         //     if(nextCell && !nextCell.visited){
//         //         return nextCell
//         //     }
//         // }

//         // if (nextCell) {
//         //     rect(startRow, startCol, 40, 40)
//         //     fill("purple");
//         // }
//         // console.log(nextCell)
//         // return nextCell;

//     }

//     this.chooseRandomNeighbor = function (validNeighbors) {
//         return validNeighbors[Math.floor(Math.random() * validNeighbors.length)]
//     }

//     this.renderUser = function(currentColor){
//         this.hasUser = true;
//         this.rerender(currentColor)
//         // fill(this.userColor);
//         // ellipse(20, 20, 15, 15);
//     }

// }

// module.exports = Cell;

// // const Wall = require('./wall');

// // function Cell(row, col, grid) {
// //     this.row = row;
// //     this.col = col;
// //     this.grid = grid;
// //     this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
// //     // this.walls = []
// //     this.visited = false;

// //     // [1, 2, 3, 4].forEach(() => this.walls.push(new Wall()));

// //     this.highlight = function(){
// //         // console.log(this.row, this.col);
// //         const startRow = this.row * 40;
// //         const startCol = this.col * 40;
// //         noStroke();
// //         fill("purple");
// //         rect(startRow, startCol, 40, 40)
// //     }

// //     this.render = function () {
// //         const startRow = this.row * 40;
// //         const startCol = this.col * 40;

// //         // x, y, width, height
// //         // rect(startX, startY, 40, 40)
// //         // noFill();

// //         for (let i = 0; i < this.walls.length; i++) {
// //             if(this.walls[i].present){
// //                 this.walls[i].render(i, startRow, startCol);
// //             } else {
// //                 this.walls[i].derender(i, startRow, startCol);
// //             }
// //         }


// //         if (this.visited) {
// //             noStroke();
// //             fill("white");
// //             rect(startRow+1, startCol+1, 38, 38)
// //         }


// //     }


// //     this.getNeighbor = function () {

// //         // const neighborsIndices = [
// //         //     [row - 1, col],
// //         //     [row + 1, col],
// //         //     [row, col - 1],
// //         //     [row, col + 1]            
// //         // ]
// //         // console.log(row)
// //         // console.log(col)
// //         // console.log(grid)

// //         const top = grid[row - 1];
// //         const right = grid[row + 1];
// //         const bottom = grid[row];
// //         const left = grid[row];

// //         const neighbors = []

// //         if(top){
// //             neighbors.push(grid[row - 1][col]);
// //         }

// //         if(right){
// //             neighbors.push(grid[row + 1][col]);
// //         }

// //         if (bottom) {
// //             neighbors.push(grid[row][col - 1]);
// //         }

// //         if (left) {
// //             neighbors.push(grid[row][col + 1]);
// //         }


// //         // const neighbors = [
// //         //     grid[row - 1][col],
// //         //     grid[row + 1][col],
// //         //     grid[row][col - 1],
// //         //     grid[row][col + 1]
// //         // ]
// //         //  const neighborsIndices = [
// //         //     [row - 1, col],
// //         //     [row + 1, col],
// //         //     [row, col - 1],
// //         //     [row, col + 1]            
// //         // ]

// //         // const neighbors = [];

// //         // const validateIdx = function (idx) {
// //         //     idx >= 0 && idx < 20
// //         // }
// //         // for(let i = 0; i < neighborsIndices.length; i++){
// //         //     if(validateIdx(neighborsIndices[i][0]) && validateIdx(neighborsIndices[i][1])){
// //         //         neighbors.push(grid[neighborsIndices[i][0]][neighborsIndices[i][1]])
// //         //     }
// //         // }


// //         // let top = [(row - 1), col];
// //         // validateIdx(top);
// //         // let right = [row, (col+1)];
// //         // validateIdx(right);
// //         // let bottom = [(row + 1), col];
// //         // validateIdx(bottom);
// //         // let left = [row, (col - 1)];
// //         // validateIdx(left);
// //         // console.log("neighbors")
// //         // console.log(neighbors)

// //         const validNeighbors = [];

// //         // for(let i = 0; i < neighbors.length; i++){
// //         //     if ((neighbors[i][0] < 20 && neighbors[i][0] >= 0) && (neighbors[i][1] < 20 && neighbors[i][1] >= 0)) {
// //         //         validNeighbors.push(neighbors[i]);
// //         //     }
// //         // }

// //         // const validNeighbors = neighbors.filter(neighbor => {
// //         //     // let x = neighbor[0];
// //         //     // let y = neighbor[1];

// //         //     if((neighbor[0] < 20 && neighbor[0] >= 0) && (neighbor[1] < 20 && neighbor[1] >= 0)){
// //         //         return neighbor;
// //         //     }
// //         // }

// //         // const validateNeighbors = function(neighbor) {
// //         //     if(!neighbor){
// //         //         return false;
// //         //     }
// //         //     // let x = neighbor[0];
// //         //     // let y = neighbor[1];

// //         //     if(neighbor.row < 20 || neighbor.row >=0){
// //         //         return false;
// //         //     } else if(neighbor.col < 20 || neighbor.col >= 0){
// //         //         return false;
// //         //     } else{
// //         //         return true
// //         //     }

// //         // }

// //         // const validateNeighbors = function(neighbor){
// //         //     console.log(neighbor)
// //         //     neighbor
// //         // }

// //         // const validNeighbors = neighbors.filter(validateNeighbors);

// //         // for (let i = 0; i < neighbors.length; i++) {
// //         //     if (neighbors[i] && !(neighbors[i].visited)) {
// //         //         if(neighbors[i].row < 20 && neighbors[i].row >=0){
// //         //             if(neighbors[i].col < 20 && neighbors[i].col >= 0){

// //         //                 validNeighbors.push(neighbors[i])
// //         //             }
// //         //         }
// //         //     }
// //         // }

// //           for (let i = 0; i < neighbors.length; i++) {
// //             if (neighbors[i] && !(neighbors[i].visited)) {
// //                 // if(neighbors[i].row < 20 && neighbors[i].row >=0){
// //                 //     if(neighbors[i].col < 20 && neighbors[i].col >= 0){

// //                         validNeighbors.push(neighbors[i])
// //                     // }
// //                 // }
// //             }
// //         }


// //         // console.log("valid")
// //         // console.log(validNeighbors)

// //         let nextCell;

// //         if (validNeighbors.length > 0) {
// //             nextCell = this.chooseRandomNeighbor(validNeighbors);
// //             return nextCell;
// //         } else{
// //             return undefined;
// //         }
// //         // let nextCell = 

// //         // //need to check if nextCell is true bc it could be undefined at the edges
// //         // while(nextCell && nextCell.visited){
// //         //     nextCell = this.chooseRandomNeighbor(neighbors)

// //         //     if(nextCell && !nextCell.visited){
// //         //         return nextCell
// //         //     }
// //         // }

// //         // if (nextCell) {
// //         //     rect(startRow, startCol, 40, 40)
// //         //     fill("purple");
// //         // }
// //         // console.log(nextCell)
// //         // return nextCell;

// //     }

// //     this.chooseRandomNeighbor = function (validNeighbors) {
// //         return validNeighbors[Math.floor(Math.random() * validNeighbors.length)]
// //     }

// // }

// // module.exports = Cell;