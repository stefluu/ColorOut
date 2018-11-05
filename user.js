function User(grid) {
    this.row = 19;
    this.col = 19;
    this.radius = 10;
    this.pos = [0, 0];
    this.gridPos = [0, 0];
    this.grid = grid;

    const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
    let currentColor = colors[Math.floor(Math.random() * colors.length)];

    this.updatePos = function (posChange) {
        switch (posChange[0]) {
            case "y":
                let updatedX = this.pos[0] + posChange[1];
                this.pos = [updatedX, this.pos[1]];
            case "x":
                let updatedY = this.pos[1] + posChange[1];
                this.pos = [this.pos[1], updatedY];
        }
    }

    this.updateGridPos = function(posChange, prevPos){
        let prev = prevPos;
        switch (posChange[0]) {
            case "y":
                let updatedY = this.gridPos[1] + posChange[1];
                this.gridPos = [this.gridPos[0], updatedY];
                break;
            case "x":
                let updatedX = this.gridPos[0] + posChange[1];
                this.gridPos = [updatedX, this.gridPos[1]];
                break;
        }
    }

    this.render = function () {
        let nextCell = this.grid[this.gridPos[0]][this.gridPos[1]]
        nextCell.renderUser(currentColor, this.gridPos);
    }

}

module.exports = User;

