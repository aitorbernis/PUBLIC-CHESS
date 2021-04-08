import { ctx } from "./canvasVar.js"

// info Size of a single sqare in pixels
export const sqSize = 100

// info Size of the whole canvas (how many squares)
const fieldSize = 10

// info Indicators at the canvas
const numbersx = [ "   c", 0, 1, 2, 3, 4, 5, 6, 7, "" ]
const numbersy = [ "r", 0, 1, 2, 3, 4, 5, 6, 7, "" ]


export function board() {

  // description DRAW BOARD

  for ( let c = 0; c < fieldSize; c++ ) {
    for ( let r = 0; r < fieldSize; r++ ) {
      if ( c == 0 || r == 0 ) {
        // info 0 squares of CANVAS set to be white
        ctx.fillStyle = "white"
        ctx.fillRect( c * sqSize, r * sqSize, sqSize, sqSize )
        // info numbers at white squares
        ctx.font = "50px Arial"
        ctx.fillStyle = "black"
        ctx.fillText( numbersx[ c ], c * sqSize + 30, sqSize - 30 )
        ctx.fillText( numbersy[ r, c ], r * sqSize + 30, c * sqSize + 70 )
      }
      else if ( c == 9 || r == 9 ) {
        // info 9 squares of CANVAS set to be white
        ctx.fillStyle = "white"
        ctx.fillRect( c * sqSize, r * sqSize, sqSize, sqSize )
      }
      else {
        // info draw board colors
        ctx.fillStyle = ( ( c + r ) % 2 == 0 ) ? "white" : "#15B01A"
        ctx.fillRect( c * sqSize, r * sqSize, sqSize, sqSize )
      }
    }
  }
}