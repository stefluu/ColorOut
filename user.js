function User(){
    this.row = 19;
    this.col = 19;
    this.radius = 10;

    
    this.render = function(x, y) {
        const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
        let currentColor = colors[Math.floor(Math.random() * colors.length)];
        
        fill(currentColor);
        ellipse(19, 19, 15, 15);
    }
}

module.exports = User;