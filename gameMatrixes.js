import {gameArray} from "./initiate.js"
import {kW ,qW ,bW1 ,bW2 ,knW1 ,knW2 ,rW1 ,rW2 ,pW1 ,pW2 ,pW3 ,pW4 ,pW5 ,pW6 ,pW7 ,pW8 ,kB ,qB ,bB1 ,bB2 ,knB1 ,knB2 ,rB1 ,rB2 ,pB1 ,pB2 ,pB3 ,pB4 ,pB5 ,pB6 ,pB7 ,pB8} from "./piecesObjects.js"

// MAKE NAME MATRIX
export var nameMatrix
// export function makeNameStartingMatrix() {
//     nameMatrix = [
//         [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],      
//         [pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8],
//         [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
//     ]
// }
export function makeNameStartingMatrix() {
    nameMatrix = [
        [rB1, knB1, bB1, 0, kB, bB2, knB2, rB2],      
        [pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, qB],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8],
        [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
    ]
}
// export function makeNameStartingMatrix() {
//     nameMatrix = [
//         [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],      
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
//     ]
// }



// MAKE NUMBER MATRIX
export var numberMatrix = []
export function makeNumberMatrix(matrixToCreate, matrixToCheck) {
    for (let c = 0; c < 8; c++) {
        matrixToCreate[c] = []
        for (let r = 0; r < 8; r++){
            if (matrixToCheck[c][r] != 0) {
                if (matrixToCheck[c][r].colorPiece == "white"){
                    if (matrixToCheck[c][r] == kW) {
                        matrixToCreate[c][r] = 11
                    }
                    else {
                        matrixToCreate[c][r] = 1
                    }
                    
                }
                if (matrixToCheck[c][r].colorPiece == "black"){
                    if (matrixToCheck[c][r] == kB) {
                        matrixToCreate[c][r] = 22
                    }
                    else {
                        matrixToCreate[c][r] = 2
                    }
                }
            }
            if (matrixToCheck[c][r] == 0) {
                matrixToCreate[c][r] = 0
            }
        }
    }
}