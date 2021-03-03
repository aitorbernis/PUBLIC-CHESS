import {gameArray} from "./initiate.js"

export function drawPieces() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++){
            if (gameArray[gameArray.length-1][c][r] != 0) {
                gameArray[gameArray.length-1][c][r].drawPiece()
            }
            
        }
    }
}