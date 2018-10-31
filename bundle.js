/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const grid = [];\n\nlet current;\n\nfunction setup() {\n  createCanvas(800, 800);\n//   cols = 10;\n//   rows = 10;\n\n  for(let x = 0; x < 20; x++){\n      grid[x] = [];\n      for(let y = 0; y < 20; y++){\n        grid[x].push(new Cell(x, y))\n      }\n  }\n//   console.log(grid)\n    // const outerEdgeCells = \n    //     [[...Array(20).keys()]]\n    //         .concat(\n\n    //         )\n  let current_row = Math.floor(Math.random() * 20);\n  let current_col = Math.floor(Math.random() * 20);\n\n  current = grid[current_row][current_col];\n\n  frameRate(5);\n\n}\n\nfunction draw() {\n    background(51)\n\n    for(let i = 0; i < grid.length; i++){\n        for(let j = 0; j < grid[i].length; j++){\n            grid[i][j].render();\n        }\n    }\n\n    current.visited = true;\n\n    let nextCell = current.checkNeighbors();\n\n    if(nextCell){\n        current = nextCell;\n        current.visited = true;\n    }\n}\n\nfunction Cell(row, col) {\n    this.row = row;\n    this.col = col;\n    this.walls = [new Wall(), new Wall(), new Wall(), new Wall()];\n    this.visited = false;\n\n    this.render = function () {\n        const startRow = this.row * 40;\n        const startCol = this.col * 40;\n\n        // x, y, width, height\n        // rect(startX, startY, 40, 40)\n        // noFill();\n        for(let i = 0; i < this.walls.length; i++){\n            this.walls[i].render(i, startRow, startCol);\n        }\n\n        if(this.visited){\n            rect(startRow, startCol, 40, 40)\n            fill(\"green\");\n        }\n        \n    }\n\n    this.checkNeighbors = function(){\n        \n        const neighbors = [\n            grid[row - 1][col],\n            grid[row + 1][col],\n            grid[row][col - 1],\n            grid[row][col + 1],            \n        ]\n        // console.log(neighbors)\n\n        const validNeighbors = neighbors.filter(neighbor => neighbor && !neighbor.visited)\n        // console.log(validNeighbors)\n\n        let nextCell = this.chooseRandomNeighbor(validNeighbors);\n\n        // //need to check if nextCell is true bc it could be undefined at the edges\n        // while(nextCell && nextCell.visited){\n        //     nextCell = this.chooseRandomNeighbor(neighbors)\n\n        //     if(nextCell && !nextCell.visited){\n        //         return nextCell\n        //     }\n        // }\n\n        // if (nextCell) {\n        //     rect(startRow, startCol, 40, 40)\n        //     fill(\"purple\");\n        // }\n        // console.log(nextCell)\n        return nextCell\n\n    }\n    \n    this.chooseRandomNeighbor = function(validNeighbors) {\n       return validNeighbors[Math.floor(Math.random() * validNeighbors.length)] \n    }\n\n\n}\n\nfunction Wall(){\n    this.present = true;\n\n    this.render = function(i, x, y){\n        stroke(255);\n        switch(i){\n            case 0: \n                line(x, y, x, y + 40)\n            case 1:\n                line(x, y + 40, x + 40, y + 40)\n            case 2: \n                line(x + 40, y + 40, x + 40, y)\n            case 3:\n                line(x + 40, y, x, y)\n        }\n    }\n}\n\nwindow.setup = setup;\n\nwindow.draw = draw;\n\n//p5 cannot find the functions, \n//so we need to set it to the window so the fx can be found //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3JpZCA9IFtdO1xuXG5sZXQgY3VycmVudDtcblxuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIGNyZWF0ZUNhbnZhcyg4MDAsIDgwMCk7XG4vLyAgIGNvbHMgPSAxMDtcbi8vICAgcm93cyA9IDEwO1xuXG4gIGZvcihsZXQgeCA9IDA7IHggPCAyMDsgeCsrKXtcbiAgICAgIGdyaWRbeF0gPSBbXTtcbiAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCAyMDsgeSsrKXtcbiAgICAgICAgZ3JpZFt4XS5wdXNoKG5ldyBDZWxsKHgsIHkpKVxuICAgICAgfVxuICB9XG4vLyAgIGNvbnNvbGUubG9nKGdyaWQpXG4gICAgLy8gY29uc3Qgb3V0ZXJFZGdlQ2VsbHMgPSBcbiAgICAvLyAgICAgW1suLi5BcnJheSgyMCkua2V5cygpXV1cbiAgICAvLyAgICAgICAgIC5jb25jYXQoXG5cbiAgICAvLyAgICAgICAgIClcbiAgbGV0IGN1cnJlbnRfcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApO1xuICBsZXQgY3VycmVudF9jb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCk7XG5cbiAgY3VycmVudCA9IGdyaWRbY3VycmVudF9yb3ddW2N1cnJlbnRfY29sXTtcblxuICBmcmFtZVJhdGUoNSk7XG5cbn1cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgICBiYWNrZ3JvdW5kKDUxKVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ3JpZFtpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBncmlkW2ldW2pdLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VycmVudC52aXNpdGVkID0gdHJ1ZTtcblxuICAgIGxldCBuZXh0Q2VsbCA9IGN1cnJlbnQuY2hlY2tOZWlnaGJvcnMoKTtcblxuICAgIGlmKG5leHRDZWxsKXtcbiAgICAgICAgY3VycmVudCA9IG5leHRDZWxsO1xuICAgICAgICBjdXJyZW50LnZpc2l0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQ2VsbChyb3csIGNvbCkge1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sID0gY29sO1xuICAgIHRoaXMud2FsbHMgPSBbbmV3IFdhbGwoKSwgbmV3IFdhbGwoKSwgbmV3IFdhbGwoKSwgbmV3IFdhbGwoKV07XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSB0aGlzLnJvdyAqIDQwO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IHRoaXMuY29sICogNDA7XG5cbiAgICAgICAgLy8geCwgeSwgd2lkdGgsIGhlaWdodFxuICAgICAgICAvLyByZWN0KHN0YXJ0WCwgc3RhcnRZLCA0MCwgNDApXG4gICAgICAgIC8vIG5vRmlsbCgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy53YWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLndhbGxzW2ldLnJlbmRlcihpLCBzdGFydFJvdywgc3RhcnRDb2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy52aXNpdGVkKXtcbiAgICAgICAgICAgIHJlY3Qoc3RhcnRSb3csIHN0YXJ0Q29sLCA0MCwgNDApXG4gICAgICAgICAgICBmaWxsKFwiZ3JlZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja05laWdoYm9ycyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbXG4gICAgICAgICAgICBncmlkW3JvdyAtIDFdW2NvbF0sXG4gICAgICAgICAgICBncmlkW3JvdyArIDFdW2NvbF0sXG4gICAgICAgICAgICBncmlkW3Jvd11bY29sIC0gMV0sXG4gICAgICAgICAgICBncmlkW3Jvd11bY29sICsgMV0sICAgICAgICAgICAgXG4gICAgICAgIF1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmVpZ2hib3JzKVxuXG4gICAgICAgIGNvbnN0IHZhbGlkTmVpZ2hib3JzID0gbmVpZ2hib3JzLmZpbHRlcihuZWlnaGJvciA9PiBuZWlnaGJvciAmJiAhbmVpZ2hib3IudmlzaXRlZClcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsaWROZWlnaGJvcnMpXG5cbiAgICAgICAgbGV0IG5leHRDZWxsID0gdGhpcy5jaG9vc2VSYW5kb21OZWlnaGJvcih2YWxpZE5laWdoYm9ycyk7XG5cbiAgICAgICAgLy8gLy9uZWVkIHRvIGNoZWNrIGlmIG5leHRDZWxsIGlzIHRydWUgYmMgaXQgY291bGQgYmUgdW5kZWZpbmVkIGF0IHRoZSBlZGdlc1xuICAgICAgICAvLyB3aGlsZShuZXh0Q2VsbCAmJiBuZXh0Q2VsbC52aXNpdGVkKXtcbiAgICAgICAgLy8gICAgIG5leHRDZWxsID0gdGhpcy5jaG9vc2VSYW5kb21OZWlnaGJvcihuZWlnaGJvcnMpXG5cbiAgICAgICAgLy8gICAgIGlmKG5leHRDZWxsICYmICFuZXh0Q2VsbC52aXNpdGVkKXtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbmV4dENlbGxcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmIChuZXh0Q2VsbCkge1xuICAgICAgICAvLyAgICAgcmVjdChzdGFydFJvdywgc3RhcnRDb2wsIDQwLCA0MClcbiAgICAgICAgLy8gICAgIGZpbGwoXCJwdXJwbGVcIik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV4dENlbGwpXG4gICAgICAgIHJldHVybiBuZXh0Q2VsbFxuXG4gICAgfVxuICAgIFxuICAgIHRoaXMuY2hvb3NlUmFuZG9tTmVpZ2hib3IgPSBmdW5jdGlvbih2YWxpZE5laWdoYm9ycykge1xuICAgICAgIHJldHVybiB2YWxpZE5laWdoYm9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZE5laWdoYm9ycy5sZW5ndGgpXSBcbiAgICB9XG5cblxufVxuXG5mdW5jdGlvbiBXYWxsKCl7XG4gICAgdGhpcy5wcmVzZW50ID0gdHJ1ZTtcblxuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24oaSwgeCwgeSl7XG4gICAgICAgIHN0cm9rZSgyNTUpO1xuICAgICAgICBzd2l0Y2goaSl7XG4gICAgICAgICAgICBjYXNlIDA6IFxuICAgICAgICAgICAgICAgIGxpbmUoeCwgeSwgeCwgeSArIDQwKVxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGxpbmUoeCwgeSArIDQwLCB4ICsgNDAsIHkgKyA0MClcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgbGluZSh4ICsgNDAsIHkgKyA0MCwgeCArIDQwLCB5KVxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGxpbmUoeCArIDQwLCB5LCB4LCB5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuc2V0dXAgPSBzZXR1cDtcblxud2luZG93LmRyYXcgPSBkcmF3O1xuXG4vL3A1IGNhbm5vdCBmaW5kIHRoZSBmdW5jdGlvbnMsIFxuLy9zbyB3ZSBuZWVkIHRvIHNldCBpdCB0byB0aGUgd2luZG93IHNvIHRoZSBmeCBjYW4gYmUgZm91bmQgIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });