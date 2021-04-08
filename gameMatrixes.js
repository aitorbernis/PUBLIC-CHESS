import { kW, qW, bW1, bW2, knW1, knW2, rW1, rW2, pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8, kB, qB, bB1, bB2, knB1, knB2, rB1, rB2, pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8 } from "./piecesObjects.js"


export var startingNameMatrix
export function makeNameStartingMatrix() {

    // description CREATE STARTING GAME MATRIX

    startingNameMatrix = [
        [ rB1, knB1, bB1, qB, kB, bB2, knB2, rB2 ],
        [ pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8 ],
        [ rW1, knW1, bW2, qW, kW, bW1, knW2, rW2 ]
    ]
}

// export function makeNameStartingMatrix() {
//     startingNameMatrix = [
//         [0, pB1, 0, 0, kB, 0, 0, 0],     
//         [0, 0, pW1, 0, 0, 0, 0, 0],
//         [0, 0, bB1, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, bW1, 0, 0],
//         [0, 0, kW, 0, 0, 0, 0, 0]
//     ]
// }
// -------------------------------------------------------------------


// export function makeNameStartingMatrix() {
//     startingNameMatrix = [
//         [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],
//         [pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8],
//         [rW1, knW1, bW2, qW, kW, bW1, knW2, rW2]
//     ]
// }

export function makeNumberMatrix( nameMatrix ) {

    // description MAKES A NUMBER MATRIX FROM A NAME MATRIX
    // parameter NAME MATRIX
    // return MATRIX (numberMatrix)

    var numberMatrix = makeEmptyMatrix()
    nameMatrix.map( ( row, numberOfRow ) => {
        Object.values( row )
        Object.values( row ).map( ( piece, numberInRow ) => {
            if ( piece != 0 ) {
                if ( piece.pieceColor == "white" ) {
                    if ( piece.pieceType == "king" ) {
                        numberMatrix[ numberOfRow ][ numberInRow ] = 11
                    }
                    else {
                        numberMatrix[ numberOfRow ][ numberInRow ] = 1
                    }
                }
                if ( piece.pieceColor == "black" ) {
                    if ( piece.pieceType == "king" ) {
                        numberMatrix[ numberOfRow ][ numberInRow ] = 22
                    }
                    else {
                        numberMatrix[ numberOfRow ][ numberInRow ] = 2
                    }
                }
            }
            if ( piece == 0 ) {
                numberMatrix[ numberOfRow ][ numberInRow ] = 0
            }
        } )
    } )
    return numberMatrix
    // whenever we call this function passing a nameMatrix as argument, we get a numberMatrix
    // make sure to save it into a local variable
}



export function makeEmptyMatrix() {

    // description MAKES AN EMPTY MATRIX
    // return MATRIX (emptyMatrix)

    var emptyMatrix = []
    for ( let c = 0; c < 8; c++ ) {
        emptyMatrix[ c ] = []
        for ( let r = 0; r < 8; r++ ) {
            emptyMatrix[ c ][ r ] = 0
        }
    }
    return emptyMatrix
}


export function copyMatrix( matrix ) {

    // description COPIES A MATRIX
    // return MATRIX (copyMatrix)

    var copyMatrix = matrix.map( a => Object.assign( {}, a ) )
    return copyMatrix
}

export function setPosition( nameMatrix ) {

    // description SETS THIS.C/R OF PIECES FROM A NAMEMATRIX
    // parameter NAME MATRIX

    nameMatrix.map( ( rowObject, r ) => {
        Object.values( rowObject )
        Object.values( rowObject ).map( ( position, c ) => {
            if ( position != 0 ) {
                position.c = c
                position.r = r
            }
        } )
    } )
}

export function identityMatrix(nameMatrix) {
    var idMatrix = makeEmptyMatrix()
    nameMatrix.map((row, rowIndex) => {
        Object.values(row)
        Object.values(row).map((position, colIndex) => {
            if (position != 0) {
                idMatrix[rowIndex][colIndex] = position.pieceNumber
            }
        })
    })
    return idMatrix
}