const User = require('./user');

function Game(){
    this.user = new User();
    this.end = [19, 19];
    // this.userPos = [0, 0];

    this.userRender = function(){
        this.user.render(this.user.pos[0], this.user.pos[1]);
    }

    this.play = function(){
        this.userMove();
    }

    this.end = function(userPos){
        this.user.pos === this.end
    }

    this.userMove = function(){

        let userPos = this.user.pos;
        let x = userPos[0];
        let y = userPos[1];
        // const keypress = event.keyCode;
        // console.log(event);
        if (keyIsDown(LEFT_ARROW)) {
            console.log(this.user.pos)
            this.user.updatePos(["y", -40]);
            this.user.render(this.user.pos[0], this.user.pos[1]);
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            this.user.updatePos(["y", 40]);
            this.user.render(this.user.pos[0], this.user.pos[1]);
        }
    
        if (keyIsDown(UP_ARROW)) {
            this.user.updatePos(["x", -40]);
            this.user.render(this.user.pos[0], this.user.pos[1]);
        }
    
        if (keyIsDown(DOWN_ARROW)) {
            this.user.updatePos(["x", 40]);
            this.user.render(this.user.pos[0], this.user.pos[1]);
        }
        
        // this.user.update();
        // this.user.display();
        // const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
        // let currentColor = colors[Math.floor(Math.random() * colors.length)];
        
        // fill(currentColor);
        // ellipse(19, 19, 15, 15);
    }

}

module.exports = Game;
//     this.xDimen = 900;
//     this.yDimen = 900;
//     this.cells = [];
// }

// Game.prototype.render = function(canvas){
//     Game.setUp()
// })

// Game.prototype.setUp = function(mazeCanvas){
//     const canvas = mazeCanvas.getContext("2d");

//     canvas.fillStyle = "purple";
//     //x, y, width, height
//     canvas.fillRect(0, 0, 800, 800);

//     cols = 10; //each will be 8 x 8
//     rows = 10;

//     for(let rowNum = 0; rowNum < rows; rowNum++){
//         for (let colNum = 0; colNum < cols, colNum++){
//             cells.push(new Cell(rowNum, colNum))
//         }
//     }

//     for(let i = 0; i < this.cells.length; i++){
        
//     }