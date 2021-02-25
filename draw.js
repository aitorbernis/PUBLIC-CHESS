import {gameNameArray} from "./initiate.js"

export function drawPieces() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++){
            if (gameNameArray[gameNameArray.length-1][c][r] != 0) {
                gameNameArray[gameNameArray.length-1][c][r].drawPiece()
            }
            
        }
    }
}