import { ctx } from "./canvasVar.js";
import { sqSize } from "./board.js"
import { editAvailMovLeft } from "./checkMatrixFunction.js"
import { copyMatrix } from "./gameMatrixes.js";

// info for pawn promotion
export function showPieces( turn ) {

    // description SHOW PROMOTABLE PIECES FOR PAWN PROMOTION
    // parameter TURN

    // info Draws white Queen at c9, r5 and black Queen at c9, r1
    const queen = new Image();
    if ( turn == 1 ) {
        queen.src = "./Pieces/queenWhite.png"
        queen.onload = () => { ctx.drawImage( queen, ( 9 ) * sqSize, ( 5 ) * sqSize, sqSize, sqSize ) }
    }
    else {
        queen.src = "./Pieces/queenBlack.png"
        queen.onload = () => { ctx.drawImage( queen, ( 9 ) * sqSize, ( 1 ) * sqSize, sqSize, sqSize ) }
    }

    const knight = new Image();
    if ( turn == 1 ) {
        knight.src = "./Pieces/knightWhite.png"
        knight.onload = () => { ctx.drawImage( knight, ( 9 ) * sqSize, ( 6 ) * sqSize, sqSize, sqSize ) }
    }
    else {
        knight.src = "./Pieces/knightBlack.png"
        knight.onload = () => { ctx.drawImage( knight, ( 9 ) * sqSize, ( 2 ) * sqSize, sqSize, sqSize ) }
    }

    const bishop = new Image();
    if ( turn == 1 ) {
        bishop.src = "./Pieces/bishopWhite.png"
        bishop.onload = () => { ctx.drawImage( bishop, ( 9 ) * sqSize, ( 7 ) * sqSize, sqSize, sqSize ) }
    }
    else {
        bishop.src = "./Pieces/bishopBlack.png"
        bishop.onload = () => { ctx.drawImage( bishop, ( 9 ) * sqSize, ( 3 ) * sqSize, sqSize, sqSize ) }
    }

    const rook = new Image();
    if ( turn == 1 ) {
        rook.src = "./Pieces/rookWhite.png"
        rook.onload = () => { ctx.drawImage( rook, ( 9 ) * sqSize, ( 8 ) * sqSize, sqSize, sqSize ) }
    }
    else {
        rook.src = "./Pieces/rookBlack.png"
        rook.onload = () => { ctx.drawImage( rook, ( 9 ) * sqSize, ( 4 ) * sqSize, sqSize, sqSize ) }
    }


}

export function setPassant( nameMatrix, turn, pieceToMove, rDestination, cDestination ) {

    // description SETS .passant and .toKill TO PIECES IF PASSANT CONDITION MET
    // parameter NAME MATRIX, TURN, PAWN WHO JUMPED TWO, DESTINATIONC AND R OF PAWN

    // info If piece is not at lateral limits
    if ( pieceToMove.c != 0 && pieceToMove.c != 7 ) {
        if ( turn == 1 ) {

            // info If piece next to selected pawn is another pawn and from opposite color, mark it with .passant = true and pieceToMove.toKill = true
            if ( nameMatrix[ rDestination ][ cDestination - 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination - 1 ].pieceColor == "black" ) {
                nameMatrix[ rDestination ][ cDestination - 1 ].passant = true
                pieceToMove.toKill = true
            }
            if ( nameMatrix[ rDestination ][ cDestination + 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination + 1 ].pieceColor == "black" ) {
                nameMatrix[ rDestination ][ cDestination + 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
        if ( turn == -1 ) {
            if ( nameMatrix[ rDestination ][ cDestination - 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination - 1 ].pieceColor == "white" ) {
                nameMatrix[ rDestination ][ cDestination - 1 ].passant = true
                pieceToMove.toKill = true
            }
            if ( nameMatrix[ rDestination ][ cDestination + 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination + 1 ].pieceColor == "white" ) {
                nameMatrix[ rDestination ][ cDestination + 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
    }
    if ( pieceToMove.c == 0 ) {
        if ( turn == 1 ) {
            if ( nameMatrix[ rDestination ][ cDestination + 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination + 1 ].pieceColor == "black" ) {
                nameMatrix[ rDestination ][ cDestination + 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
        if ( turn == -1 ) {
            if ( nameMatrix[ rDestination ][ cDestination + 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination + 1 ].pieceColor == "white" ) {
                nameMatrix[ rDestination ][ cDestination + 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
    }
    if ( pieceToMove.c == 7 ) {
        if ( turn == 1 ) {
            if ( nameMatrix[ rDestination ][ cDestination - 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination - 1 ].pieceColor == "black" ) {
                nameMatrix[ rDestination ][ cDestination - 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
        if ( turn == -1 ) {
            if ( nameMatrix[ rDestination ][ cDestination - 1 ].pieceType == "pawn" && nameMatrix[ rDestination ][ cDestination - 1 ].pieceColor == "white" ) {
                nameMatrix[ rDestination ][ cDestination - 1 ].passant = true
                pieceToMove.toKill = true
            }
        }
    }
}


export function editPassantMatrix( nameMatrix, availMatrix, passantPiece, turn ) {

    // description EDITS AVAIL MATRIX WHEN PASSANT MOVE
    // parameter NAME MATRIX, AVAIL MATRIX, PASSANT PIECE (piece to move), TURN
    // return MATRIX (passantAvailMatrix)

    var pieceToKill = 0
    var passantAvailMatrix = copyMatrix( availMatrix )

    // info Scans name Matrix to find pawn to kill (.toKill) and stores it at pieceToKill var
    nameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( position ) => {
            if ( position != 0 ) {
                if ( position.toKill == true ) {
                    pieceToKill = position
                }
            }
        } )
    } )

    // info Position an available position (100) at the passant destination
    if ( turn == 1 ) {
        passantAvailMatrix[ passantPiece.r - 1 ][ pieceToKill.c ] = 100
    }
    if ( turn == -1 ) {
        passantAvailMatrix[ passantPiece.r + 1 ][ pieceToKill.c ] = 100
    }
    return passantAvailMatrix
}

export function deletePassantKilled( nameMatrix, rDestination, cDestination, turn ) {

    // description DELETES PASSANT KILLED PIECE
    // parameter NAME MATRIX, PASSANT KILLER R / C, TURN
    // return MATRIX (edited Name Matrix)

    // info Set a 0 where the killed by passant Pawn is
    if ( turn == 1 ) {
        nameMatrix[ rDestination + 1 ][ cDestination ] = 0
        return nameMatrix
    }
    else {
        nameMatrix[ rDestination - 1 ][ cDestination ] = 0
        return nameMatrix
    }
}

export function setPassantFalse( nameMatrix ) {

    // description DELETES .passant & .toKill FROM BOARD
    // parameter NAME MATRIX

    nameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( position ) => {
            if ( position.passant == true ) {
                position.passant = false
            }
            if ( position.toKill == true ) {
                position.toKill = false
            }
        } )
    } )
}