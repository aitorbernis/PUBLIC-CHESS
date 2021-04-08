import { copyMatrix, identityMatrix } from "./gameMatrixes.js"

export function movementRepetition( gameArray ) {

    // description SCAN MOVEMENT REPETITION DRAW
    // parameter GAME ARRAY
    // return BOOLEAN (draw true/false)

    var draw = false

    // info If there's 9 or more moves done
    if ( gameArray.length >= 9 ) {

        // info -9 = 3 moves ; -5 = 2 moves; -1 = current move
        // info Store matrixes to compare into vars
        var matrix9 = gameArray[ gameArray.length - 9 ]
        var matrix5 = gameArray[ gameArray.length - 5 ]
        var matrix1 = gameArray[ gameArray.length - 1 ]

        // info Trigger identityMatrix function to create identity matrixes from selected array matrixes
        var idMatrix9 = identityMatrix( matrix9 )
        var idMatrix5 = identityMatrix( matrix5 )
        var idMatrix1 = identityMatrix( matrix1 )

        // info Compare current matrix with former one
        if ( sameMatrix( idMatrix1, idMatrix5 ) ) {

            // info Compare current matrix with 2 moves before
            if ( sameMatrix( idMatrix1, idMatrix9 ) ) {
                console.log( "DRAW!!!!!" )
                draw = true
                return draw
            }
        }
    }
    return draw
}

function sameMatrix( matrixA, matrixB ) {

    // description COMPARE TWO IDENTITY MATRIXES
    // parameter IDENTITY MATRIXES
    // return BOOLEAN (same true/false)

    var matrix1 = copyMatrix( matrixA )
    var matrix2 = copyMatrix( matrixB )
    var same = true


    // info Map one matrix and compare each element with same element of other matrix
    matrix1.map( ( row, rowIndex ) => {
        Object.values( row )
        Object.values( row ).map( ( position, colIndex ) => {
            if ( position != 0 ) {

                // info If the positions dont coincide, return same as false
                if ( position != matrix2[ rowIndex ][ colIndex ] ) {
                    return same = false
                }

            }
        } )
    } )

    return same
}



