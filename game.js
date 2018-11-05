const User = require('./user');

function Game(grid) {
    this.end = [19, 19];
    this.grid = grid;
    this.user = new User(this.grid);
    this.renderCellPos = [0, 0];
    // this.lastInput = new Date();
    // this.userPos = [0, 0];
    this.startTime = new Date();


    this.userRender = function () {
        this.user.render(this.user.pos[0], this.user.pos[1]);
    }

    // this.play = function () {
    //     this.userMove();
    // }

    this.end = function () {
        this.renderCellPos === [19, 19]
    }

    
    this.userMove = function () {
        
        this.user.render(0,0);

        const endCell = this.grid[19][19];
        endCell.renderEnd();
        
        let userPos = this.user.pos;
        let x = userPos[0];
        let y = userPos[1];
        let gridPos = this.user.gridPos;
        let prevGridPosCell = this.grid[gridPos[0]][gridPos[1]];

        let endTime = new Date();
 

        if (keyIsPressed && key === 'ArrowUp' && endTime - this.startTime > 100) {
            this.startTime = endTime;
            if (prevGridPosCell.walls[0].color === "white") {
              this.user.updateGridPos(["y", -1], userPos);
              this.renderCellPos = this.user.gridPos;
              let renderCell = this.grid[this.renderCellPos[0]][this.renderCellPos[1]];
              debugger
              renderCell.updateUserVisit();
              this.user.render(this.renderCellPos[0], this.renderCellPos[1]);
            }
        }

        if (keyIsPressed && key === "ArrowDown" && endTime - this.startTime > 100) {
            this.startTime = endTime;
          if (prevGridPosCell.walls[1].color === "white") {
            this.user.updateGridPos(["y", 1], userPos);
            this.renderCellPos = this.user.gridPos;
            let renderCell = this.grid[this.renderCellPos[0]][this.renderCellPos[1]];
            debugger
            renderCell.updateUserVisit();
            this.user.render(this.renderCellPos[0], this.renderCellPos[1]);
          }
        }

        if (keyIsPressed && key === "ArrowLeft" && endTime - this.startTime > 100) {
            this.startTime = endTime;
          if (prevGridPosCell.walls[0].color === "white") {
            this.user.updateGridPos(["x", -1], userPos);
            this.renderCellPos = this.user.gridPos;
            let renderCell = this.grid[this.renderCellPos[0]][this.renderCellPos[1]];
            debugger
            renderCell.updateUserVisit();
            this.user.render(this.renderCellPos[0], this.renderCellPos[1]);
          }
        }

        if (keyIsPressed && key === "ArrowRight" && endTime - this.startTime > 100) {
            this.startTime = endTime;
          if (prevGridPosCell.walls[2].color === "white") {
            this.user.updateGridPos(["x", 1], userPos);
            this.renderCellPos = this.user.gridPos;
            let renderCell = this.grid[this.renderCellPos[0]][this.renderCellPos[1]];
            debugger
            renderCell.updateUserVisit();
            this.user.render(this.renderCellPos[0], this.renderCellPos[1]);
          }
        }

    }

}

module.exports = Game;
