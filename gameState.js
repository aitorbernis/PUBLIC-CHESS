import { castling } from "./castling.js"
import { makeEmptyMatrix } from "./gameMatrixes.js"
import { editAvailMovLeft } from "./jaque.js"
import { editPassantMatrix } from "./pawnFunctions.js"
import { movLeft, underCheck } from "./scanMatrixes.js"
import { checkMaterial } from "./tablas.js"

export function gameState( nameMatrix, turn, pieceToMove ) {

    // description EVALUATES THE GAME STATE AT THE BEGINNING
    // parameter MATRIX OF NAME & GAME TURN & PIECE TO MOVE
    // return MATRIX (selectedPiece availMatrix if all OK)

    var availMatrix = makeEmptyMatrix()
    if ( checkMaterial( nameMatrix ) ) { console.log( "DRAW" ); alert( "DRAW!" ) }
    // info Scan if movements left (without caring if under enemy check) (StaleMate or CheckMate)
    if ( movLeft( nameMatrix, turn ) ) {

        // info If movements left
        // info Scan if under enemy check
        if ( underCheck( nameMatrix, turn ) ) {
            console.log( "under Check" )

            // info Under enemy check
            // info Modify availMatrix and scan if new position creates enemy check and if there's movements left
            if ( editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 1 ] ) {
                console.log( "available Movements" )

                // info Under enemy check and with movements left
                // info Set modified avail matrix to availMatrix of selected piece
                availMatrix = editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ]
                return availMatrix
            }

            // info Under enemy check and no movements left -> Check Mate (returns empty matrix)
            else { console.log( "Check Mate" ); alert( "DRAW!" ); return availMatrix }
        }

        else {

            // info Not under check and movements left
            // info Do scanAvail with no restrictions and add availMatrix to selectedPiece avail matrix
            console.log( "not under check" )

            if ( pieceToMove.passant == true ) {
                console.log( "euuefhewiuh" )
                availMatrix = editPassantMatrix( nameMatrix, editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ], pieceToMove, turn )
                console.log( availMatrix )
                return availMatrix
            }

            // info if selected piece is a king and hasn't moved, look if castling available
            if ( pieceToMove.pieceType == "king" && pieceToMove.moved == false ) {
                availMatrix = castling( nameMatrix, pieceToMove, turn )
                return availMatrix
            }

            availMatrix = editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ]
            return availMatrix
        }
    }

    // info No moves left at all -> Stale Mate (returns empty matrix)
    else { console.log( "Stale Mate" ); alert( "DRAW" ); return availMatrix }
}
