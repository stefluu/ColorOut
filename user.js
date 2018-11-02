function User(){
    this.row = 19;
    this.col = 19;
    this.radius = 10;
    this.pos = [0, 0]

    const colors = ["lightcoral", "orange", "Chartreuse", "darkcyan", "darkorchid"];
    let currentColor = colors[Math.floor(Math.random() * colors.length)];

    this.updatePos = function(posChange){
        switch(posChange[0]){
            case x:
                let updatedX = this.pos[0] + posChange[1];
                this.pos = [updatedX, this.pos[1]];
            case y:
                let updatedY = this.pos[1] + posChange[1];
                this.pos = [this.pos[1], updatedY]; 
        }
    }

    
    this.render = function(x, y) {

        fill(currentColor);
        ellipse(19, 19, 15, 15);
    }
}

module.exports = User;