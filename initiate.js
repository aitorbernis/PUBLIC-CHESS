import { board } from "./board.js"
import { drawPieces } from "./draw.js"
import { startingNameMatrix, makeNameStartingMatrix, setPosition } from "./gameMatrixes.js"

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

// description GAME ARRAY WITH EVERY TURN MATRIX
export var gameArray = []


export function startingFunction() {

    // description GENERATES THE STARTING BOARD

    // info Draws board
    board()

    // info Make starting name matrix and push it into gameArray
    makeNameStartingMatrix()
    gameArray.push( startingNameMatrix )

    // info Set this.c/r of pieces in the starting matrix
    setPosition( gameArray[ gameArray.length - 1 ] )

    // info Draw pieces of the starting matrix
    drawPieces( gameArray[ gameArray.length - 1 ] )
}



