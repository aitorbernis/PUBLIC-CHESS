import { cvs } from "./canvasVar.js"
import { gameArray, turn } from "./initiate.js"
import { reDraw, paintSelectedPiece } from "./draw.js"
import { copyMatrix } from "./gameMatrixes.js"

// X IS C, Y IS R

// ACTUAL GAME FUNCTION, CLICK HANDLER
export function loopFunction() {
    cvs.addEventListener('mousedown', function(e) {clickHandler(cvs, e)})
}

function clickHandler(cvs, event) {
    // CREATE A COPY OF THE LAST NAME MATRIX
    var newNameMatrix = copyMatrix(gameArray[gameArray.length-1])
    var newProvNameMatrix = copyMatrix(gameArray[gameArray.length-1])
    var pieceToMove
    var rPos
    var cPos
    //----------------------------------------------------------
    //----------------------------------------------------------
    const rect = cvs.getBoundingClientRect()
    var r = event.clientY - rect.top
    var c = event.clientX - rect.left
    //CANVAS takes whole window, from 0 to 9 (10x10) used for everything referred to drawing and click point
    var cCanvas = Math.floor(c/100)
    var rCanvas = Math.floor(r/100)

    //BOARD takes the board, from 0 to 7 (8x8) used for everything referring to matrixes
    var cBoard = Math.floor(c/100) - 1
    var rBoard = Math.floor(r/100) - 1
    //----------------------------------------------------------
    //----------------------------------------------------------
    console.log("rCanvas" + rCanvas, "cCanvas" + cCanvas)
    console.log("rBoard" + rBoard, "cBoard" + cBoard)
    console.log("-------------")

    var boardFilter = cCanvas == 0 || cCanvas == 9 || rCanvas == 0 || rCanvas == 9

    if (turn == 1 && !boardFilter) {
        if (gameArray[gameArray.length-1][rBoard][cBoard].colorPiece == "white"){ //if copy paste, change white to black
            reDraw()

            // SAVES THE PIECE TO MOVE
            var pieceToMove = selectedPiece(gameArray[gameArray.length-1], rBoard, cBoard)
            // PAINTS THE PIECE TO MOVE
            paintSelectedPiece(pieceToMove, rCanvas, cCanvas) 

            // SETS A 0 AT THE PROVISIONAL NAME MATRIX
            newProvNameMatrix[rBoard][cBoard] = 0
            console.log(newProvNameMatrix)

        }
    }
}

function selectedPiece(matrix, rBoard, cBoard) {
    var pieceToMove = matrix[rBoard][cBoard]
    return pieceToMove
}