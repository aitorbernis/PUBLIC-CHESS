import { copyMatrix, identityMatrix } from "./gameMatrixes.js"

export function movementRepetition( gameArray ) {
    var draw = false
    if ( gameArray.length >= 9 ) {
        var matrix9 = gameArray[ gameArray.length - 9 ]
        var matrix5 = gameArray[ gameArray.length - 5 ]
        var matrix1 = gameArray[ gameArray.length - 1 ]
        var idMatrix9 = identityMatrix(matrix9)
        var idMatrix5 =identityMatrix(matrix5)
        var idMatrix1 =identityMatrix(matrix1)
        if (sameMatrix(idMatrix1, idMatrix5)) {
            if (sameMatrix(idMatrix1,idMatrix9)) {
                console.log("DRAW!!!!!")
                draw = true
                return draw
            }
        }
    }
    return draw
}

function sameMatrix(matrixA, matrixB) {
    var matrix1 =copyMatrix(matrixA)
    var matrix2 = copyMatrix(matrixB)
    var same = false
    var count = 0
    matrix1.map((row, rowIndex) => {
        Object.values(row)
        Object.values(row).map((position, colIndex) => {
            if (position != 0) {
                if (position == matrix2[rowIndex][colIndex] ) {
                    count = count + 1
                }
            }
            
        })
    })
    if (count != 32) {return same}
    else {return same = true}
}


