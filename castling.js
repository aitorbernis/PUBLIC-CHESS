import { editAvailMovLeft } from "./checkMatrixFunction.js"
import { setNewPositions } from "./handlerFunctions.js"
import { underCheck } from "./scanMatrixes.js"


export function castling( nameMatrix, pieceToMove, turn ) {

    // description SCANS BOTH SIDES OF KING TO SEE IF A CASTLING IS AVAILABLE
    // parameter NAME MATRIX, PIECETOMOVE (HAS TO BE KING), TURN
    // return ??

    var queenAvail = false
    var kingAvail = false
    queenAvail = queenSide( nameMatrix, pieceToMove, turn )
    kingAvail = kingSide( nameMatrix, pieceToMove, turn )
    console.log( "Queen Side =", queenAvail, "King Side =", kingAvail )
    var availMatrix = editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ]
    if ( queenAvail ) {
        availMatrix[ pieceToMove.r ][ pieceToMove.c - 2 ] = 99
    }
    if ( kingAvail ) {
        availMatrix[ pieceToMove.r ][ pieceToMove.c + 2 ] = -99
    }
    return availMatrix
}

export function queenSide( nameMatrix, king, turn ) {

    // description SCANS IF QUEEN SIDE CASTLING IS AVAILABLE
    // parameter NAME MATRIX, PIECETOMOVE (HAS TO BE KING), TURN
    // return BOOLEAN ( queenSide true/false )

    var queenSide = true

    // info scans the queen side of king's position
    for ( let c = ( king.c - 1 ); c >= 0; c-- ) {
        // info if c is not the rook side
        if ( c != 0 ) {
            // info if position not empty, return
            if ( nameMatrix[ king.r ][ c ] != 0 ) {
                queenSide = false
                return queenSide
            }
            // info if position is empty, put king there and scan if it creates an enemy check
            var tempNameMatrix = setNewPositions( king.r, king.c, king.r, c, nameMatrix, king )
            if ( underCheck( tempNameMatrix, turn ) ) {
                queenSide = false
                return queenSide
            }
        }
        // info if at the last position there's a rook and has not moved, return a true
        else {
            if ( nameMatrix[ king.r ][ 0 ].pieceType == "rook" && nameMatrix[ king.r ][ 0 ].moved == false ) {
                return queenSide
            }
        }
    }
}
export function kingSide( nameMatrix, king, turn ) {
    var kingSide = true
    for ( let c = ( king.c + 1 ); c <= 7; c++ ) {
        if ( c != 7 ) {
            if ( nameMatrix[ king.r ][ c ] != 0 ) {
                kingSide = false
                return kingSide
            }
            var tempNameMatrix = setNewPositions( king.r, king.c, king.r, king.c, nameMatrix, king )
            if ( underCheck( tempNameMatrix, turn ) ) {
                kingSide = false
                return kingSide
            }
        }
        else {
            if ( nameMatrix[ king.r ][ 0 ].pieceType == "rook" && nameMatrix[ king.r ][ 0 ].moved == false ) {
                return kingSide
            }
        }
    }
}

