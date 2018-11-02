function MovingObject(position, velocity, radius, color){
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;

    
    // this.draw = function(){
    //     const userCanvas = document.getElementById('user');
    //     const user = userCanvas.getContext('2d');
    //     user.beginPath();
    //     user.arc(
    //         this.position[0], this.position[1], this.radius, 0, 2 * Math.PI
    //     )

    //     const colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    //     user.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    // }

}

module.exports = MovingObject;