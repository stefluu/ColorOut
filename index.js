const Cell = require('./cell');

const grid = [];

let current;

function setup() {
  createCanvas(800, 800);
//   cols = 10;
//   rows = 10;

  for(let x = 0; x < 20; x++){
      grid[x] = [];
      for(let y = 0; y < 20; y++){
        grid[x].push(new Cell(x, y, grid))
      }
  }

  let current_row = Math.floor(Math.random() * 20);
  let current_col = Math.floor(Math.random() * 20);

  current = grid[current_row][current_col];

  frameRate(5);

}

function draw() {
    background(51)

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            grid[i][j].render();
        }
    }

    current.visited = true;


    // let nextCell = current.getNextCell(current.row, current.col);
    let nextCell = current.getNeighbor();

    console.log("nextcell")
    console.log(nextCell);

    

    if(nextCell){
        nextCell.visited = true;
        current = nextCell;

    }
}

// function Cell(row, col) {
//     this.row = row;
//     this.col = col;
//     this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];
//     this.visited = false;

//     this.render = function () {
//         const startRow = this.row * 40;
//         const startCol = this.col * 40;

//         // x, y, width, height
//         // rect(startX, startY, 40, 40)
//         // noFill();
//         for(let i = 0; i < this.walls.length; i++){
//             this.walls[i].render(i, startRow, startCol);
//         }

//         if(this.visited){
//             rect(startRow, startCol, 40, 40)
//             fill("green");
//         }
        
//     }

//     this.getNeighbor = function(){
        
//         // const neighborsIndices = [
//         //     [row - 1, col],
//         //     [row + 1, col],
//         //     [row, col - 1],
//         //     [row, col + 1]            
//         // ]

//         const neighbors = [
//             grid[row - 1][col],
//             grid[row + 1][col],
//             grid[row][col - 1],
//             grid[row][col + 1]            
//         ]

//         // const neighbors = [];

//         // const validateIdx = function (idxArr) {
//         //     if(idxArr.every((idx) => {
//         //         return idx < 20 && idx >= 0}
//         //         )){
                
//         //         neighbors.push(idxArr);
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

//         console.log(neighbors)

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

//         for(let i = 0; i < neighbors.length; i++){
//             if(neighbors[i] && !(neighbors[i].visited)){
//                 validNeighbors.push(neighbors[i])
//             }
//         }
        
        
//         console.log("valid") 
//         console.log(validNeighbors)
        
//         let nextCell;

//         if(validNeighbors.length > 0){
//             nextCell = this.chooseRandomNeighbor(validNeighbors);
//             return nextCell;
//         }
//         // let nextCell = 
        
//         // //need to check if nextCell is true bc it could be undefined at the edges
//         // while(nextCell && nextCell.visited){
//             //     nextCell = this.chooseRandomNeighbor(neighbors)
            
//             //     if(nextCell && !nextCell.visited){
//                 //         return nextCell
//                 //     }
//                 // }
                
//                 // if (nextCell) {
//                     //     rect(startRow, startCol, 40, 40)
//                     //     fill("purple");
//                     // }
//                     // console.log(nextCell)
//                     // return nextCell;
           
//     }
    
//     this.chooseRandomNeighbor = function(validNeighbors) {
//        return validNeighbors[Math.floor(Math.random() * validNeighbors.length)] 
//     }

// }

// function Wall(){
//     this.present = true;

//     this.render = function(i, x, y){
//         stroke(255);
//         switch(i){
//             case 0: 
//                 line(x, y, x, y + 40)
//             case 1:
//                 line(x, y + 40, x + 40, y + 40)
//             case 2: 
//                 line(x + 40, y + 40, x + 40, y)
//             case 3:
//                 line(x + 40, y, x, y)
//         }
//     }
// }

window.setup = setup;

window.draw = draw;

//p5 cannot find the functions, 
//so we need to set it to the window so the fx can be found 