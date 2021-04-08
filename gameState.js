import { castling } from "./castling.js"
import { makeEmptyMatrix } from "./gameMatrixes.js"
import { editAvailMovLeft } from "./checkMatrixFunction.js"
import { editPassantMatrix } from "./pawnFunctions.js"
import { movLeft, underCheck } from "./scanMatrixes.js"
import { checkMaterial } from "./drawCondFunctions.js"

export function gameState( nameMatrix, turn, pieceToMove ) {

    // description EVALUATES THE GAME STATE AT THE BEGINNING
    // parameter MATRIX OF NAME & GAME TURN & PIECE TO MOVE
    // return MATRIX (selectedPiece availMatrix if all OK)

    var availMatrix = makeEmptyMatrix()

    // subDescription CHECKS INSUFFICIENT MATERIAL DRAW CONDITION
    if ( checkMaterial( nameMatrix ) ) { console.log( "DRAW" ); alert( "DRAW!" ) }

    // subDescription MOVEMENTS LEFT
    // info Scan without caring if under check, if there's movements left, if false --> Stale Mate
    if ( movLeft( nameMatrix, turn ) ) {

        // info If movements left

        // subDescription UNDER ENEMY CHECK
        // info Scan if under enemy check
        if ( underCheck( nameMatrix, turn ) ) {
            console.log( "under Check" )

            // info If under enemy check

            // subDescription EDIT AVAILABLE MATRIX IF UNDER CHECK
            // info Scan piece available positions, and modify availableMatrix, return if available left
            if ( editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 1 ] ) {
                console.log( "available Movements" )

                // info If movements left

                // info Set modified availMatrix to availMatrix of selected piece
                availMatrix = editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ]
                return availMatrix
            }

            // info Under enemy check and no movements left -> Check Mate (returns empty matrix)
            else { console.log( "Check Mate" ); alert( "DRAW!" ); return availMatrix }
        }

        else {

            // info Not under check and movements left

            console.log( "not under check" )

            // subDescription PASSANT CONDITION
            // info If selected piece has .passant condition True, trigger Passant function
            if ( pieceToMove.passant == true ) {
                availMatrix = editPassantMatrix( nameMatrix, editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ], pieceToMove, turn )
                console.log( availMatrix )
                return availMatrix
            }

            // subDescription CASTLING CONDITION
            // info If selected piece is a king and hasn't moved, look if castling available
            if ( pieceToMove.pieceType == "king" && pieceToMove.moved == false ) {

                // info Modify availMatrix with castling option
                availMatrix = castling( nameMatrix, pieceToMove, turn )
                return availMatrix
            }

            // info If no special condition met (passant or castling), just return edited availMatrix of selected Piece 
            availMatrix = editAvailMovLeft( nameMatrix, turn, pieceToMove )[ 0 ]
            return availMatrix
        }
    }

    // info No moves left at all -> Stale Mate (returns empty matrix)
    else { console.log( "Stale Mate" ); alert( "DRAW" ); return availMatrix }
}
