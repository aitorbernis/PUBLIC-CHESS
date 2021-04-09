import { board } from "./board.js"
import { drawPieces } from "./drawingFunctions.js"
import { startingNameMatrix, makeNameStartingMatrix, setPosition } from "./gameMatrixes.js"

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

// description GAME ARRAY WITH EVERY TURN MATRIX
// info Every new movement generates a new matrix pushed inside the array, for a White + Black movement, we have 2 matrixes.
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



