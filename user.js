function User() {
    this.row = 19;
    this.col = 19;
    this.radius = 10;
    this.pos = [0, 0]

    const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
    let currentColor = colors[Math.floor(Math.random() * colors.length)];

    this.updatePos = function (posChange) {
        switch (posChange[0]) {
            case "x":
                let updatedX = this.pos[0] + posChange[1];
                this.pos = [updatedX, this.pos[1]];
            case "y":
                let updatedY = this.pos[1] + posChange[1];
                this.pos = [this.pos[1], updatedY];
        }
    }


    this.render = function (x, y) {

        fill(currentColor);
        ellipse((x + 20), (y + 20), 15, 15);
    }

    this.draw = function () {
        let x = this.pos[0];
        let y = this.pos[1];
        // const keypress = event.keyCode;
        // console.log(event);
        if (keyIsDown(LEFT_ARROW)) {
            // console.log(this.user.pos)
            this.updatePos(["y", -40]);
            this.render(this.pos[0], this.pos[1]);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.updatePos(["y", 40]);
            this.render(this.pos[0], this.pos[1]);
        }

        if (keyIsDown(UP_ARROW)) {
            this.updatePos(["x", -40]);
            this.render(this.pos[0], this.pos[1]);
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.updatePos(["x", 40]);
            this.render(this.pos[0], this.pos[1]);
        }
    }
}

module.exports = User;

// function User(){
//     this.row = 19;
//     this.col = 19;
//     this.radius = 10;
//     this.pos = [0, 0]

//     const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
//     let currentColor = colors[Math.floor(Math.random() * colors.length)];


//     this.updatePos = function(posChange){
//         switch(posChange[0]){
//             case "x":
//                 let updatedX = this.pos[0] + posChange[1];
//                 this.pos = [updatedX, this.pos[1]];
//             case "y":
//                 let updatedY = this.pos[1] + posChange[1];
//                 this.pos = [this.pos[1], updatedY]; 
//         }
//     }


//     this.render = function(x, y) {

//         fill(currentColor);
//         ellipse(19, 19, 15, 15);
//     }
// }

// module.exports = User;