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
                // let updatedY = prev[1] + posChange[1];
                // this.pos = [prev[0], updatedY];
                let updatedY = this.gridPos[1] + posChange[1];
                this.gridPos = [this.gridPos[0], updatedY];
                break;
            case "x":
                // let updatedX = prev[0] + posChange[1];
                // this.pos = [updatedX, prev[1]];
                let updatedX = this.gridPos[0] + posChange[1];
                this.gridPos = [updatedX, this.gridPos[1]];
                break;
        }
        // console.log("grid pos")
        // console.log(this.gridPos)
    }

    this.render = function () {
        // fill(currentColor);
        // ellipse((x+20), (y+20), 15, 15);
        let nextCell = this.grid[this.gridPos[0]][this.gridPos[1]]
        nextCell.renderUser(currentColor);
    }

    // this.draw = function () {
    //     let x = this.pos[0];
    //     let y = this.pos[1];
    //     // const keypress = event.keyCode;
    //     // console.log(event);
    //     if (keyIsDown(LEFT_ARROW)) {
    //         // console.log(this.user.pos)
    //         this.updatePos(["y", -40]);
    //         this.render(this.pos[0], this.pos[1]);
    //     }

    //     if (keyIsDown(RIGHT_ARROW)) {
    //         this.updatePos(["y", 40]);
    //         this.render(this.pos[0], this.pos[1]);
    //     }

    //     if (keyIsDown(UP_ARROW)) {
    //         this.updatePos(["x", -40]);
    //         this.render(this.pos[0], this.pos[1]);
    //     }

    //     if (keyIsDown(DOWN_ARROW)) {
    //         this.updatePos(["x", 40]);
    //         this.render(this.pos[0], this.pos[1]);
    //     }
    // }
}

module.exports = User;

// const Cell = require('./cell');

// function User(grid) {
//     this.row = 19;
//     this.col = 19;
//     this.radius = 10;
//     this.pos = [0, 0];
//     this.grid = grid;

//     const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
//     let currentColor = colors[Math.floor(Math.random() * colors.length)];

//     this.updatePos = function (posChange, prevPos) {
//         let prev = prevPos;
//         console.log("prevpos")
//         console.log(prev)
//         switch (posChange[0]) {
//             case "y":
//                 // let updatedY = prev[1] + posChange[1];
//                 // this.pos = [prev[0], updatedY];
//                 let updatedY = this.pos[1] + posChange[1];
//                 this.pos = [this.pos[0], updatedY];
//                 break;
//             case "x":
//                 // let updatedX = prev[0] + posChange[1];
//                 // this.pos = [updatedX, prev[1]];
//                 let updatedX = this.pos[0] + posChange[1];
//                 this.pos = [updatedX, this.pos[1]];
//                 break;
//         }
//         console.log("newpos")
//         console.log(this.pos)
//     }

//     this.display = function(){
//         fill(currentColor);
//         ellipse((this.pos[0] + 20), (this.pos[1] + 20), 15, 15);

//     }

//     this.persistantDisplay = function(x, y){
//         fill(currentColor);
//         ellipse((x + 20), (y + 20), 15, 15);
//     }

//     this.render = function() {
//         let currentCell = this.grid[this.pos[0]][this.pos[1]];
//         console.log("cell to rerender")
//         console.log(currentCell)
//         currentCell.hasUser = true;
//         currentCell.rerender(currentColor);
//         this.persistantDisplay()
//         // currentCell.display(currentCell.row, currentCell.col)
//     }

//     this.draw = function () {
//         let x = this.pos[0];
//         let y = this.pos[1];
//         // const keypress = event.keyCode;
//         // console.log(event);
//         if (keyIsDown(LEFT_ARROW)) {
//             // console.log(this.user.pos)
//             this.updatePos(["y", -40]);
//             this.render(this.pos[0], this.pos[1]);
//         }

//         if (keyIsDown(RIGHT_ARROW)) {
//             this.updatePos(["y", 40]);
//             this.render(this.pos[0], this.pos[1]);
//         }

//         if (keyIsDown(UP_ARROW)) {
//             this.updatePos(["x", -40]);
//             this.render(this.pos[0], this.pos[1]);
//         }

//         if (keyIsDown(DOWN_ARROW)) {
//             this.updatePos(["x", 40]);
//             this.render(this.pos[0], this.pos[1]);
//         }
//     }
// }

// module.exports = User;

// // function User(){
// //     this.row = 19;
// //     this.col = 19;
// //     this.radius = 10;
// //     this.pos = [0, 0]

// //     const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
// //     let currentColor = colors[Math.floor(Math.random() * colors.length)];


// //     this.updatePos = function(posChange){
// //         switch(posChange[0]){
// //             case "x":
// //                 let updatedX = this.pos[0] + posChange[1];
// //                 this.pos = [updatedX, this.pos[1]];
// //             case "y":
// //                 let updatedY = this.pos[1] + posChange[1];
// //                 this.pos = [this.pos[1], updatedY]; 
// //         }
// //     }


// //     this.render = function(x, y) {

// //         fill(currentColor);
// //         ellipse(19, 19, 15, 15);
// //     }
// // }

// // module.exports = User;