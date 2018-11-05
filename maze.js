function Maze(current, grid, game) {
  this.current = current;
  this.grid = grid;
  this.stack = [];
  this.game = game;


  this.draw = function() {
    background(51);

    // if (!map && !gameEnd) {
    if (this.current) {
      this.current.visited = true;
      this.stack.push(this.current);
    }

    let nextCell = this.current.getNeighbor();

    removeWalls = function(current, next) {
      const changeX = current.row - next.row;
      const changeY = current.col - next.col;


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
    };


    if (nextCell) {
      nextCell.visited = true;
      removeWalls(this.current, nextCell, grid);
      this.current = nextCell;
    } else if (this.stack.length > 0) {
      potentialRestart = this.stack.pop();
      while (potentialRestart && !potentialRestart.getNeighbor()) {
        if (!this.stack.length) {
          potentialRestart.visited = true;
          this.map = true;
          break;

          // noLoop();
          // break;
        } else {
          potentialRestart = this.stack.pop();
        }
      }
      this.current = potentialRestart;
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j].render();
      }
    }
  };
}

module.exports = Maze;

