import { board } from "./board.js"
import { loopFunction } from "./loopFunction.js"
import { drawPieces } from "./draw.js"
import { startingNameMatrix, makeNameStartingMatrix } from "./gameMatrixes.js"

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

// ARRAY OF MATRIXES OF EVERY NEW CONFIGURATION OF PIECES
export var gameArray = []
export var turn = 1

// SET POSITION (THIS.C & THIS.R) OF PIECES 
export function setPosition() {
    gameArray[gameArray.length-1].map((rowObject, indexOfRow) => {
        Object.values(rowObject)
        Object.values(rowObject).map((position, indexInRow) => {
            if (position != 0) {
                position.c = indexOfRow
                position.r = indexInRow
            }
        })
    })
}


// ONLY HAPPENS ONCE, TO START THE GAME
export function startingFunction() {
    // DRAWS BOARD
    board()
    // MAKES NAME MATRIX AND PUSHES IT INTO GAME ARRAY
    makeNameStartingMatrix()
    gameArray.push(startingNameMatrix) 
    // SETS PIECES THIS.C/R FROM NAME MATRIX
    setPosition()
    // WE DRAW EACH PIECE AT ITS PLACE
    drawPieces()
}

