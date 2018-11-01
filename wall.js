class Wall {
  constructor() {
    this.present = true;
  }

  render(wallPos, x, y) {
    stroke(255);
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
    stroke(0);
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
}

// class Wall{
//     constructor(){
//         this.present = true;
//     }

//   render = (i, x, y) => {
//     stroke(255);
//     switch (i) {
//       case 0:
//         line(x, y, x, y + 40);
//       case 1:
//         line(x, y + 40, x + 40, y + 40);
//       case 2:
//         line(x + 40, y + 40, x + 40, y);
//       case 3:
//         line(x + 40, y, x, y);
//     }
//   };
// }

module.exports = Wall;
