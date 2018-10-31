
function Cell(row, col){
    this.row = row;
    this.col = col; 
}

Cell.prototype.render = function() {
    const startX = this.row * 800;
    const startY = this.col * 800;

    // x, y, width, height
    rect(startX, startY, 10, 10)
    noFill();
    stroke();
}

module.exports = Cell;