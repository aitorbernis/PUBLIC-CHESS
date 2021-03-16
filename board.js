import {ctx} from "./canvasVar.js"

export const sqSize = 100

// size of the whole canvas
const fieldSize = 10

// indicators at the canvas
const numbersx = ["   c", 0, 1, 2, 3, 4, 5, 6, 7, ""]
const numbersy = ["r", 0, 1, 2, 3, 4, 5, 6, 7, ""]

// draw board
export function board() {
  for (let c = 0; c < fieldSize; c++) {
    for (let r = 0; r < fieldSize; r++) {
      if (c == 0  || r == 0) {
        // 0 squares of CANVAS set to be white
        ctx.fillStyle = "white"
        ctx.fillRect(c*sqSize, r*sqSize, sqSize, sqSize)

        // numbers at white squares
        ctx.font = "50px Arial"
        ctx.fillStyle = "black"
        ctx.fillText(numbersx[c], c*sqSize+30, sqSize-30)
        ctx.fillText(numbersy[r,c], r*sqSize+30, c*sqSize+70)
      }
      else if (c == 9 || r == 9) {
        // 9 squares of CANVAS set to be white
        ctx.fillStyle = "white"
        ctx.fillRect(c*sqSize, r*sqSize, sqSize, sqSize)
      }
      else {
        // draw board colors
        ctx.fillStyle = ((c+r)%2==0) ? "white":"#15B01A"
        ctx.fillRect(c*sqSize, r*sqSize, sqSize, sqSize)
      }
    }
  }
}