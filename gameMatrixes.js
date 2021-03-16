import {kW ,qW ,bW1 ,bW2 ,knW1 ,knW2 ,rW1 ,rW2 ,pW1 ,pW2 ,pW3 ,pW4 ,pW5 ,pW6 ,pW7 ,pW8 ,kB ,qB ,bB1 ,bB2 ,knB1 ,knB2 ,rB1 ,rB2 ,pB1 ,pB2 ,pB3 ,pB4 ,pB5 ,pB6 ,pB7 ,pB8} from "./piecesObjects.js"

// MAKE NAME MATRIX --------------------------------------------------
export var startingNameMatrix
export function makeNameStartingMatrix() {
    startingNameMatrix = [
        [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],      
        [pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8],
        [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
    ]
}

// export function makeNameStartingMatrix() {
//     startingNameMatrix = [
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
// -------------------------------------------------------------------


// MAKE NUMBER MATRIX -----------------------------------------------------------------------------------------
// we pass the nameMatrix as argument so we can create a numberMatrix from it
// it also directly creates an empty numberMatrix at the beginning from the makeEmptyMatrix
export function makeNumberMatrix(matrixToCheck) {
    var numberMatrix = makeEmptyMatrix()
    matrixToCheck.map((row, numberOfRow) => {
        Object.values(row)
        Object.values(row).map((piece, numberInRow) => {
            console.log(numberOfRow,numberInRow, piece)
            if (piece != 0) {
                if (piece.colorPiece == "white"){
                    if (piece.pieceType == "king") {
                        numberMatrix[numberOfRow][numberInRow] = 11
                    }
                    else {
                        numberMatrix[numberOfRow][numberInRow] = 1
                    }
                } 
                if (piece.colorPiece == "black"){
                    if (piece == kB) {
                        numberMatrix[numberOfRow][numberInRow] = 22
                    }
                    else {
                        numberMatrix[numberOfRow][numberInRow] = 2
                    }
                }
            }
            if (piece == 0) {
                numberMatrix[numberOfRow][numberInRow] = 0
            }
        })
    })
    return numberMatrix
    // whenever we call this function passing a nameMatrix as argument, we get a numberMatrix
    // make sure to save it into a local variable
}

function makeEmptyMatrix() {
    var emptyMatrix = []
    for (let c = 0; c < 8; c++) {
        emptyMatrix[c] = []
        for (let r = 0; r < 8; r++) {
            emptyMatrix[c][r] = 0
        }
    }
    return emptyMatrix
}
// ------------------------------------------------------------------------------------------------------------

export function copyMatrix(matrix) {
    var copyMatrix = matrix.map(a => Object.assign({}, a))
    return copyMatrix
}


