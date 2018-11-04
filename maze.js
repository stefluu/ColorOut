function Maze(current, grid, game) {
  this.current = current;
  this.grid = grid;
  this.stack = [];
  this.map = false;
  this.game = game;

  this.draw = function() {
    background(51);

    // if (!map && !gameEnd) {
    if (this.current) {
      this.current.visited = true;
      // this.current.highlight();
      this.stack.push(this.current);
    }

    // let nextCell = this.current.getNextCell(this.current.row, this.current.col);
    let nextCell = this.current.getNeighbor();

    // console.log("nextcell")
    // console.log(nextCell);

    removeWalls = function(current, next, grid) {
      const changeX = current.row - next.row;
      const changeY = current.col - next.col;

      // current.walls.forEach(wall => wall.present = false)

      switch (changeX) {
        case 1:
          current.walls[0].present = false;
          next.walls[2].present = false;
          break;
        case -1:
          current.walls[2].present = false;
          next.walls[0].present = false;
          break;
      }

      switch (changeY) {
        case 1:
          current.walls[3].present = false;
          next.walls[1].present = false;
          break;
        case -1:
          current.walls[1].present = false;
          next.walls[3].present = false;
          break;
      }

      // const firstRow = grid[0];
      // const lastRow = grid[19];

      // for (let i = 0; i < firstRow.length; i++) {
      //     firstRow[i].walls[3].present = true
      // }

      // for (let i = 0; i < lastRow.length; i++) {
      //     lastRow[i].walls[1].present = true
      // }

      // const firstCol = grid.filter((cell) => {
      //     return cell.col === 0
      // })

      // const lastCol = grid.filter((cell) => {
      //     return cell.col === 19
      // })

      // for (let i = 0; i < firstCol.length; i++) {
      //     firstCol[i].walls[2].present = true;
      // }

      // for (let i = 0; i < lastCol.length; i++) {
      //     lastCol[i].walls[0].present = true;
      // }
    };

    if (nextCell) {
      nextCell.visited = true;
      removeWalls(this.current, nextCell, grid);
      this.current = nextCell;
      // console.log("this.stack")
      // console.log(this.stack);
    } else if (this.stack.length > 0) {
      potentialRestart = this.stack.pop();
      while (potentialRestart && !potentialRestart.getNeighbor()) {
        if (!this.stack.length) {
          potentialRestart.visited = true;
          // game.userMove();
          this.map = true;
          break;
          console.log("finish");
          if (map) {
            console.log("hi");
            game.userMove();
          }
          // noLoop();
          // break;
        } else {
          potentialRestart = this.stack.pop();
        }
      }
      this.current = potentialRestart;
      // console.log(this.this.current)
      // } else if(allVisited) {
      //     noLoop();
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j].render();
      }
    }

    //     game.start();
    // } else if (map && !gameEnd) {
    //     game.start();
    //     game.userMove();
    //     // keyPressed();

    // }

    // // this.current.highlight();

    // function keyPressed() {
    //     game.userMove();
    //     // redraw();
    //     return false;
    // }

    // keyPressed();

    // user.render();

    // redraw();

    // while (!game.end()){
    //     game.userMove()
    // }
  };

  // this.mapComplete = function(){
  //     return this.map;
  // }
}

module.exports = Maze;

// window.draw = draw;

// class Maze{
//     constructor(current){
//         this.current = current;
//     }

//     draw(){
//         background(51)

//         // if (!map && !gameEnd) {
//             if (this.current) {
//                 this.current.visited = true;
//                 // this.current.highlight();
//                 stack.push(this.current);
//             }

//             // let nextCell = this.current.getNextCell(this.current.row, this.current.col);
//             let nextCell = this.current.getNeighbor();

//             // console.log("nextcell")
//             // console.log(nextCell);

//             removeWalls = function (this.current, next, grid) {
//                 const changeX = this.current.row - next.row;
//                 const changeY = this.current.col - next.col;

//                 // this.current.walls.forEach(wall => wall.present = false)

//                 switch (changeX) {
//                     case 1:
//                         this.current.walls[0].present = false;
//                         next.walls[2].present = false;
//                         break;
//                     case -1:
//                         this.current.walls[2].present = false;
//                         next.walls[0].present = false;
//                         break;
//                 }

//                 switch (changeY) {
//                     case 1:
//                         this.current.walls[3].present = false;
//                         next.walls[1].present = false;
//                         break;
//                     case -1:
//                         this.current.walls[1].present = false;
//                         next.walls[3].present = false;
//                         break;
//                 }

//                 // const firstRow = grid[0];
//                 // const lastRow = grid[19];

//                 // for (let i = 0; i < firstRow.length; i++) {
//                 //     firstRow[i].walls[3].present = true
//                 // }

//                 // for (let i = 0; i < lastRow.length; i++) {
//                 //     lastRow[i].walls[1].present = true
//                 // }

//                 // const firstCol = grid.filter((cell) => {
//                 //     return cell.col === 0
//                 // })

//                 // const lastCol = grid.filter((cell) => {
//                 //     return cell.col === 19
//                 // })

//                 // for (let i = 0; i < firstCol.length; i++) {
//                 //     firstCol[i].walls[2].present = true;
//                 // }

//                 // for (let i = 0; i < lastCol.length; i++) {
//                 //     lastCol[i].walls[0].present = true;
//                 // }
//             }

//             if (nextCell) {
//                 nextCell.visited = true;
//                 this.removeWalls(this.current, nextCell, grid);
//                 this.current = nextCell;
//                 // console.log("stack")
//                 // console.log(stack);
//             } else if (stack.length > 0) {
//                 potentialRestart = stack.pop()
//                 while (potentialRestart && !potentialRestart.getNeighbor()) {
//                     if (!stack.length) {
//                         potentialRestart.visited = true
//                         map = true;
//                         // noLoop();
//                         // break;
//                     } else {
//                         potentialRestart = stack.pop();
//                     }
//                 }
//                 this.current = potentialRestart;
//                 // console.log(this.current)
//                 // } else if(allVisited) {
//                 //     noLoop();
//             }

//             for (let i = 0; i < grid.length; i++) {
//                 for (let j = 0; j < grid[i].length; j++) {
//                     grid[i][j].render();
//                 }
//             }

//         //     game.start();
//         // } else if (map && !gameEnd) {
//         //     game.start();
//         //     game.userMove();
//         //     // keyPressed();

//         // }

//         // // current.highlight();

//         // function keyPressed() {
//         //     game.userMove();
//         //     // redraw();
//         //     return false;
//         // }

//         // keyPressed();

//     // user.render();

//     // redraw();

//     // while (!game.end()){
//     //     game.userMove()
//     // }

//     }

// }

// module.exports = Maze;
