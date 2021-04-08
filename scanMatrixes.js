
import { copyMatrix, makeNumberMatrix } from "./gameMatrixes.js"


export function scanIfEmpty( matrix ) {

    // description SCANS IF A MATRIX IS EMPTY
    // parameter ANY MATRIX
    // return BOOLEAN (empty true/false)

    var empty = true
    matrix.map( ( r ) => {
        Object.values( r )
        Object.values( r ).map( ( p ) => {
            if ( p != 0 ) {
                empty = false
                return empty
            }
        } )
    } )
    return empty
}

export function movLeft( nameMatrix, turn ) {

    // description SCANS IF TURN HAS MOVEMENTS LEFT
    // parameter MATRIX OF NAMES & TURN OF GAME
    // return BOOLEAN (movementsLeft true/false)

    // info we take the name matrix, and scan all scanAvail of turn's pieces
    var movementsLeft = false
    var newNameMatrix = copyMatrix( nameMatrix )
    var numberMatrix = makeNumberMatrix( newNameMatrix )
    newNameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( position ) => {
            if ( position != 0 ) {
                if ( turn == 1 && position.pieceColor == "white" ) {
                    var availMatrix = position.scanAvail( numberMatrix )[ 0 ]
                    if ( !scanIfEmpty( availMatrix ) ) {
                        movementsLeft = true
                        return movementsLeft
                    }
                }
                if ( turn == -1 && position.pieceColor == "black" ) {
                    var availMatrix = position.scanAvail( numberMatrix )[ 0 ]
                    if ( !scanIfEmpty( availMatrix ) ) {
                        movementsLeft = true
                        return movementsLeft
                    }
                }
            }
        } )
    } )
    return movementsLeft
}

export function underCheck( nameMatrix, turn ) {

    // description SCANS IF TURN IS UNDER ENEMY CHECK
    // parameter MATRIX OF NAMES & TURN OF GAME
    // return BOOLEAN (underCheck true/false)

    var underCheck = false
    var newNameMatrix = copyMatrix( nameMatrix )
    var numberMatrix = makeNumberMatrix( newNameMatrix )
    newNameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( position ) => {
            if ( position != 0 ) {
                if ( turn == 1 ) {
                    if ( position.pieceColor == "black" ) {
                        if ( position.scanAvail( numberMatrix )[ 1 ] ) {
                            underCheck = true
                            return underCheck
                        }
                    }
                }
                if ( turn == -1 ) {
                    if ( position.pieceColor == "white" ) {
                        if ( position.scanAvail( numberMatrix )[ 1 ] ) {
                            underCheck = true
                            return underCheck
                        }
                    }
                }
            }
        } )
    } )
    return underCheck
}

export function setZero( matrix, rPosition, cPosition ) {

    // description SETS A 0 IN A DESIRED LOCATION INSIDE A MATRIX
    // parameter MATRIX & DESIRED LOCATIONS R/C
    // return MATRIX (modifiedMatrix)

    var modifiedMatrix = copyMatrix( matrix )
    modifiedMatrix[ rPosition ][ cPosition ] = 0
    return modifiedMatrix
}

