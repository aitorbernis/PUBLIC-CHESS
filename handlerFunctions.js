import { board } from "./board.js"
import { drawPieces } from "./drawingFunctions.js"
import { copyMatrix } from "./gameMatrixes.js"
import { gameArray } from "./startingFunction.js"


export function setNewPositions( originR, originC, destinationR, destinationC, matrixToEdit, pieceToMove ) {

    // description PUTS PIECE AT DESTINATION AND SETS 0 AT ORIGIN
    // parameter ORIGINc/r (original position) && DESTINATIONc/r (destination) && MATRIXTOEDIT && PIECETOMOVE
    // return MATRIX (modified matrix)

    var newMatrix = copyMatrix( matrixToEdit )
    newMatrix[ originR ][ originC ] = 0
    newMatrix[ destinationR ][ destinationC ] = pieceToMove
    return newMatrix
}


export function getSelectedPiece( nameMatrix, rPosition, cPosition ) {

    // description CREATES VAR WITH SELECTED PIECE
    // parameter NAMEMATRIX (matrix to take piece from) && r/cPOSITION (position of piece)
    // return PIECE (piece to move)

    var pieceToMove = nameMatrix[ rPosition ][ cPosition ]
    return pieceToMove
}



export function newMovement() {

    // description DRAWS A NEW MOVEMENT FROM GAME ARRAY

    board()
    drawPieces( gameArray[ gameArray.length - 1 ] )
}



export function tempNewMovement( matrix ) {

    // description DRAWS A NEW MOVEMENT FROM MATRIX
    // parameter MATRIX

    board()
    drawPieces( matrix )
}