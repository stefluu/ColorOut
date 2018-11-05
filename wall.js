class Wall {
  constructor() {
    this.present = true;
    this.color = "black";
  }

  render(wallPos, x, y) {
    stroke("gray");
    strokeWeight(4);
    switch (wallPos) {
      case 0:
        line(x, y, x, y + 40);
      case 1:
        line(x, y + 40, x + 40, y + 40);
      case 2:
        line(x + 40, y + 40, x + 40, y);
      case 3:
        line(x + 40, y, x, y);
    }

  }

  derender(wallPos, x, y) {
    stroke("white");
    switch (wallPos) {
      case 0:
        line(x, y, x, y + 40);
        this.color = "white";
      case 1:
        line(x, y + 40, x + 40, y + 40);
        this.color = "white";
      case 2:
        line(x + 40, y + 40, x + 40, y);
        this.color = "white";
      case 3:
        line(x + 40, y, x, y);
        this.color = "white";
    }
  }

  // renderDiscovered(wallPos, x, y){
  //   stroke("black");
  //   // strokeWeight(3);
  //   if(this.wallPos){
  //     switch (wallPos) {
  //       case 0:
  //         line(x, y, x, y + 40);
  //       case 1:
  //         line(x, y + 40, x + 40, y + 40);
  //       case 2:
  //         line(x + 40, y + 40, x + 40, y);
  //       case 3:
  //         line(x + 40, y, x, y);
  //     }
  //   }
  // }
}




module.exports = Wall;
