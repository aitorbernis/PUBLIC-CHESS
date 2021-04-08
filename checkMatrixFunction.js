
// ! This function makes a scanAvail of every turn piece, puts this piece at each availPosition, and scans if this new position
// ! creates a contrincant check. If so, draws a 0 in the availMatrix

import { copyMatrix, makeNumberMatrix } from "./gameMatrixes.js"
import { setNewPositions } from "./handlerFunctions.js"
import { scanIfEmpty, setZero, underCheck } from "./scanMatrixes.js"



export function editAvailMovLeft( nameMatrix, turn, pieceToMove ) {

    // description MODIFIES THE AVAILMATRIX (WHILE UNDER ENEMY CHECK) OF A PIECE DEPENDING IF IT CREATES ENEMY CHECK
    // parameter MATRIX OF NAMES & TURN OF GAME
    // return array[MATRIX (selected piece modified check), BOOLEAN (movesLeft true/false)]

    var movesLeft = false
    var pieceAvailMatrix
    var newNameMatrix = copyMatrix( nameMatrix )
    // info Scan thru turn pieces, scanAvail and scan if enemy checks 
    newNameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( piece ) => {
            if ( piece != 0 ) {
                if ( turn == 1 ) {
                    if ( piece.pieceColor == "white" ) {
                        // info Make scanAvail at each piece and map the avail matrix
                        var numberMatrix = makeNumberMatrix( newNameMatrix )
                        var availMatrix = piece.scanAvail( numberMatrix )[ 0 ]
                        availMatrix.map( ( row, rowPosition ) => {
                            Object.values( row )
                            Object.values( row ).map( ( availPos, colPosition ) => {
                                if ( availPos != 0 ) {
                                    // info Set each piece at it's availPos
                                    var tempNameMatrix = setNewPositions( piece.r, piece.c, rowPosition, colPosition, newNameMatrix, piece )
                                    // info If at this new position it creates an enemy check, set 0 into availMatrix
                                    if ( underCheck( tempNameMatrix, turn ) ) {
                                        availMatrix = setZero( availMatrix, rowPosition, colPosition )
                                    }
                                }
                            } )
                        } )
                        // info If scanned piece is the selected piece, return it's modifiedAvailMatrix
                        if ( piece == pieceToMove ) { pieceAvailMatrix = availMatrix }
                        // info If the result availMatrix is empty, movesLeft = false
                        if ( !scanIfEmpty( availMatrix ) ) {
                            movesLeft = true
                            return [ pieceAvailMatrix, movesLeft ]
                        }
                    }
                }
                if ( turn == -1 ) {
                    if ( piece.pieceColor == "black" ) {
                        // info Make scanAvail at each piece and map the avail matrix
                        var numberMatrix = makeNumberMatrix( newNameMatrix )
                        var availMatrix = piece.scanAvail( numberMatrix )[ 0 ]
                        availMatrix.map( ( row, rowPosition ) => {
                            Object.values( row )
                            Object.values( row ).map( ( availPos, colPosition ) => {
                                if ( availPos != 0 ) {
                                    // info Set each piece at it's availPos
                                    var tempNameMatrix = setNewPositions( piece.r, piece.c, rowPosition, colPosition, newNameMatrix, piece )
                                    // info If at this new position it creates an enemy check, set 0 into availMatrix
                                    if ( underCheck( tempNameMatrix, turn ) ) {
                                        availMatrix = setZero( availMatrix, rowPosition, colPosition )
                                    }
                                }
                            } )
                        } )
                        // info If scanned piece is the selected piece, return it's modifiedAvailMatrix
                        if ( piece == pieceToMove ) { pieceAvailMatrix = availMatrix }
                        // info If the result availMatrix is empty, movesLeft = false
                        if ( !scanIfEmpty( availMatrix ) ) {
                            movesLeft = true
                            return [ pieceAvailMatrix, movesLeft ]
                        }
                    }
                }
            }
        } )
    } )
    return [ pieceAvailMatrix, movesLeft ]
}

