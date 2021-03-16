import { gameArray } from "./initiate.js"
import { sqSize, board } from "./board.js"
import { ctx } from "./canvasVar.js"

export function drawPieces() {
    // map thru the rows of the matrix
    gameArray[gameArray.length-1].map((row) => {
        // we get objects, so we transform them into arrays
        Object.values(row)
        // we map every row to get every square (piece)
        Object.values(row).map((piece) => {
            if (piece != 0) {
                piece.drawPiece()
            }
        })
    })
}

// colors the available position squares at canvas
function colorSqWhite(c, r) {
    ctx.fillStyle = "#0AC8CF"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

function colorSqBlack(c, r) {
    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

function colorKill(c, r) {
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

export function paintAvailable() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++) {
            if (availMatrix[r][c] == 1) {
                colorSqWhite(c, r)
            }
            else if (availMatrix[r][c] == 2) {
                colorSqBlack(c, r)
            }
            else if (availMatrix[r][c] == -1 || availMatrix[r][c] == -2 || availMatrix[r][c] == -11 || availMatrix[r][c] == -22) {
                colorKill(c, r)
            }
        }
    }
}

export function paintSelectedPiece(pieceToMove, r, c) {
    if (pieceToMove.colorPiece == "white") {
        ctx.strokeStyle = "#0AC9CF"
    }
    else {
        ctx.strokeStyle = "purple"
    }
    ctx.lineWidth = 10
    ctx.strokeRect(c*sqSize, r*sqSize, sqSize, sqSize)
}

export function reDraw() {
    board()
    drawPieces()
}