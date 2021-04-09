import { cvs } from "./canvasVar.js"
import { gameArray } from "./startingFunction.js"
import { paintSelectedPiece, paintAvailable } from "./drawingFunctions.js"
import { copyMatrix, setPosition } from "./gameMatrixes.js"
import { showPieces, setPassant, deletePassantKilled, setPassantFalse } from "./pawnFunctions.js"
import { Queen, Knight, Bishop, Rook } from "./classes.js"
import { gameState } from "./gameState.js"
import { movementRepetition } from "./movRepetition.js"
import { setNewPositions, getSelectedPiece, newMovement, tempNewMovement } from "./handlerFunctions.js"





export function loopFunction() {

    // description INCLUDES THE EVENT LISTENER, WHICH CALLS CLICKHANDLER FUNCTION

    cvs.addEventListener( 'mousedown', function ( e ) { clickHandler( cvs, e ) } )

}



// info CLICKSTATE false --> first click || true --> second click || "promotion" --> pawn promotion
var clickState = false

// info TURN 1 = white || -1 = black
var turn = 1

// info Piece to move at each movement
var pieceToMove

// info ORIGINc/c position of first click
var originC = 0
var originR = 0

// info Matrix with available positions of piece
var availMatrix

// info TEMPNAMEMATRIX temprorary nameMatrix for pawn promotion
var tempNameMatrix





function clickHandler( cvs, event ) {

    // description CLICK FUNCTION
    // parameter CVS (canvas) && EVENT

    // info Create copy of last Game Array matrix
    var newNameMatrix = copyMatrix( gameArray[ gameArray.length - 1 ] )

    //----------------------------------------------------------
    //----------------------------------------------------------

    // info set canvas and board cursor position
    const rect = cvs.getBoundingClientRect()
    var r = event.clientY - rect.top
    var c = event.clientX - rect.left

    var cCanvas = Math.floor( c / 100 )
    var rCanvas = Math.floor( r / 100 )

    var cBoard = Math.floor( c / 100 ) - 1
    var rBoard = Math.floor( r / 100 ) - 1

    //----------------------------------------------------------
    //----------------------------------------------------------

    console.log( "game Array", gameArray )
    console.log( "rCanvas" + rCanvas, "cCanvas" + cCanvas )
    console.log( "rBoard" + rBoard, "cBoard" + cBoard )
    console.log( "-------------" )

    // description TURN WHITE
    if ( turn == 1 ) {

        // info If not in promotion state
        if ( clickState != "promotion" ) {
            // info If clicked outside the board, return
            if ( cCanvas == 0 || cCanvas == 9 || rCanvas == 0 || rCanvas == 9 ) { return }

            // description FIRST CLICK
            // info If clicked in the board, only act if white piece selected
            if ( gameArray[ gameArray.length - 1 ][ rBoard ][ cBoard ].pieceColor == "white" ) { // reminder copy/paste -> pieceColor = "black"

                // info If after clicking a white piece you click another white one, restart the board. 
                newMovement()

                // info Movement repetition draw condition
                if ( movementRepetition( gameArray ) ) { alert( "DRAW!" ) }

                // info Saves selected piece
                pieceToMove = getSelectedPiece( gameArray[ gameArray.length - 1 ], rBoard, cBoard )

                // info Saves original piece position
                originC = cBoard
                originR = rBoard

                // info Draws border around selected piece
                paintSelectedPiece( pieceToMove, rCanvas, cCanvas )

                // info Sets the availMatrix of the selectedPiece
                availMatrix = gameState( newNameMatrix, turn, pieceToMove )

                // info Draws available destinations
                paintAvailable( availMatrix )

                // info Set clickState for second click
                clickState = true

                return
            }

            // description SECOND CLICK
            else if ( clickState == true ) {

                // info If clicked in an available destination
                if ( availMatrix[ rBoard ][ cBoard ] == 1 || availMatrix[ rBoard ][ cBoard ] == -1 ) { // reminder copy/paste -> 2 -2

                    // description PAWN PROMOTION CONDITION
                    // info Promotion condition => If pieceToMove is a pawn at row 1 and moves to row 0
                    if ( pieceToMove.pieceType == "pawn" && originR == 1 && rBoard == 0 ) { // reminder copy/paste -> 6 7
                        // info Show pieces to promote into
                        showPieces( turn )
                        // info Sets pawn to it's destination at the 0 row (from origin to destination)
                        tempNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                        // info Sets this.c/r of the temporaryNameMatrix
                        setPosition( tempNameMatrix )
                        // info Sets pieceToMove as the pawn at it's new position in row 0
                        pieceToMove = tempNameMatrix[ rBoard ][ cBoard ]
                        // info Draws the board with the pawn at the destination location
                        tempNewMovement( tempNameMatrix )
                        // info Changes clickState to go to promotion mode
                        clickState = "promotion"
                        return
                    }

                    // description CASTLING this.moved CONDITION
                    // info For castling, if a king or rook moves, change the this.moved boolean
                    if ( pieceToMove.pieceType == "king" || pieceToMove.pieceType == "rook" ) { pieceToMove.moved = true }

                    // description REGULAR SECOND CLICK WITHOUT CONDITIONANTS
                    // info Set pieceToMove to it's destination, and push this matrix into the gameArray
                    gameArray.push( setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove ) )


                    // info Sets this.c/r of the pieces of the new matrix
                    setPosition( gameArray[ gameArray.length - 1 ] )

                    // description PAWN EN PASSANT CONDITION
                    // info If pieceToMove is a pawn and jumps from row 6 to 4 (initial double jump)
                    if ( pieceToMove.pieceType == "pawn" && originR == 6 && rBoard == 4 ) {
                        console.log( "Jumped two" )

                        // info Set .passant & .toKill into desired pieces
                        setPassant( gameArray[ gameArray.length - 1 ], turn, pieceToMove, rBoard, cBoard )
                    }

                    // info Draws board with the new pieces configuration
                    newMovement()

                    // info Changes game turn
                    turn = turn * -1
                    return
                }

                // description CASTLING CLICK
                // info If clicked in a castling avail position (99 queenSide, -99 kingSide)
                if ( availMatrix[ rBoard ][ cBoard ] == 99 ) {

                    var castlingNameMatrix = copyMatrix( newNameMatrix )

                    // info Set King to destination
                    castlingNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )

                    // info Set Rook to destination
                    castlingNameMatrix = setNewPositions( 7, 0, 7, 3, castlingNameMatrix, newNameMatrix[ 7 ][ 0 ] ) // reminder copy/paste -> 0 0 / 0 3 / 0 0

                    // info Push new name matrix into game array
                    gameArray.push( castlingNameMatrix )

                    // info Sets this.c/r of the pieces of the new matrix
                    setPosition( gameArray[ gameArray.length - 1 ] )

                    // info Draws board with the new pieces configuration
                    newMovement()

                    // info Changes game turn
                    turn = turn * -1
                    return
                }
                if ( availMatrix[ rBoard ][ cBoard ] == -99 ) {
                    var castlingNameMatrix = copyMatrix( newNameMatrix )
                    castlingNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                    castlingNameMatrix = setNewPositions( 7, 7, 7, 5, castlingNameMatrix, newNameMatrix[ 7 ][ 7 ] ) // reminder copy/paste -> 0 7 / 0 5 / 0 7
                    gameArray.push( castlingNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    turn = turn * -1
                    return
                }

                // description EN PASSANT CLICK
                // info If clicked in a passant avail position
                if ( availMatrix[ rBoard ][ cBoard ] == 100 ) {
                    console.log( "pressedd" );

                    // info Set killer Pawn to destination
                    newNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )

                    // info Delete killed Pawn from it's position and create the new name Matrix
                    newNameMatrix = deletePassantKilled( newNameMatrix, rBoard, cBoard, turn )
                    gameArray.push( newNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    setPassantFalse( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    turn = turn * -1
                    return
                }

            }
        }

        // description PAWN PROMOTION MODE
        else {
            // info Show pieces to promote into
            showPieces( turn )
            // info Exclude not promotable pieces selected
            if ( cCanvas == 9 && rCanvas != 9 && rCanvas != 0 && rCanvas != 1 && rCanvas != 2 && rCanvas != 3 && rCanvas != 4 ) { // reminder copy/paste -> 0 [5 to 8]
                // info Pressing on promotable pieces
                if ( rCanvas == 5 ) { // reminder copy/paste -> 1
                    // info Draws border around selected promotable piece
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                    // info Set pieceToMove class as promotable piece's class
                    pieceToMove = new Queen( "white", pieceToMove.c, pieceToMove.r ) // reminder copy/paste -> "black"
                    // info Sets new pieceToMove at the pawn position
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    // info Push definitive matrix into gameArray
                    gameArray.push( tempNameMatrix )
                    // info Set this.c/r of last matrix
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    // info Draws board with the new pieces configuration
                    newMovement()
                }
                if ( rCanvas == 6 ) { // reminder copy/paste -> 2
                    pieceToMove = new Knight( "white", pieceToMove.c, pieceToMove.r ) // reminder copy/paste -> "black"
                    console.log( pieceToMove )
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
                if ( rCanvas == 7 ) { // reminder copy/paste -> 3

                    // info Depending on where the pawn lands, the resulting bishop tile color will be dependent
                    // info If landed in an even tile, (white tile), create a white tile color Bishop
                    if ( pieceToMove.c % 2 == 0 ) {
                        pieceToMove = new Bishop( "white", "white", pieceToMove.c, pieceToMove.r ) // reminder copy/paste -> "black" "black"
                    }
                    else {
                        pieceToMove = new Bishop( "white", "black", pieceToMove.c, pieceToMove.r ) // reminder copy/paste -> "black" "white"
                    }
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
                if ( rCanvas == 8 ) { // reminder copy/paste -> 4
                    pieceToMove = new Rook( "white", pieceToMove.c, pieceToMove.r ) // reminder copy/paste -> "black"
                    console.log( pieceToMove )
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
            }
            else { return }
            console.log( "pressed" )
            clickState = false
            turn = turn * -1
            return
        }
    }


    // description TURN BLACK
    else if ( turn == -1 ) {
        if ( clickState != "promotion" ) {
            if ( cCanvas == 0 || cCanvas == 9 || rCanvas == 0 || rCanvas == 9 ) { return }

            if ( gameArray[ gameArray.length - 1 ][ rBoard ][ cBoard ].pieceColor == "black" ) {
                newMovement()
                if ( movementRepetition( gameArray ) ) { alert( "DRAW!" ) }
                pieceToMove = getSelectedPiece( gameArray[ gameArray.length - 1 ], rBoard, cBoard )
                originC = cBoard
                originR = rBoard
                paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                availMatrix = gameState( newNameMatrix, turn, pieceToMove )
                paintAvailable( availMatrix )
                clickState = true
                return
            }

            else if ( clickState == true ) {
                if ( availMatrix[ rBoard ][ cBoard ] == 2 || availMatrix[ rBoard ][ cBoard ] == -2 ) {
                    if ( pieceToMove.pieceType == "pawn" && originR == 6 && rBoard == 7 ) {
                        showPieces( turn )
                        tempNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                        setPosition( tempNameMatrix )
                        pieceToMove = tempNameMatrix[ rBoard ][ cBoard ]
                        tempNewMovement( tempNameMatrix )
                        clickState = "promotion"
                        return
                    }
                    if ( pieceToMove.pieceType == "king" || pieceToMove.pieceType == "rook" ) { pieceToMove.moved = true }
                    gameArray.push( setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove ) )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    if ( pieceToMove.pieceType == "pawn" && originR == 1 && rBoard == 3 ) {
                        console.log( "Jumped two" )
                        setPassant( gameArray[ gameArray.length - 1 ], turn, pieceToMove, rBoard, cBoard )
                    }
                    newMovement()
                    turn = turn * -1
                    return
                }
                if ( availMatrix[ rBoard ][ cBoard ] == 99 ) {
                    var castlingNameMatrix = copyMatrix( newNameMatrix )
                    castlingNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                    castlingNameMatrix = setNewPositions( 0, 0, 0, 3, castlingNameMatrix, newNameMatrix[ 0 ][ 0 ] )
                    gameArray.push( castlingNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    turn = turn * -1
                    return
                }
                if ( availMatrix[ rBoard ][ cBoard ] == -99 ) {
                    var castlingNameMatrix = copyMatrix( newNameMatrix )
                    castlingNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                    castlingNameMatrix = setNewPositions( 0, 7, 0, 5, castlingNameMatrix, newNameMatrix[ 0 ][ 7 ] )
                    gameArray.push( castlingNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    turn = turn * -1
                    return
                }
                if ( availMatrix[ rBoard ][ cBoard ] == 100 ) {
                    console.log( "pressedd" );
                    newNameMatrix = setNewPositions( originR, originC, rBoard, cBoard, newNameMatrix, pieceToMove )
                    newNameMatrix = deletePassantKilled( newNameMatrix, rBoard, cBoard, turn )
                    gameArray.push( newNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    setPassantFalse( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    turn = turn * -1
                    return
                }

            }
        }

        else {
            showPieces( turn )
            if ( cCanvas == 9 && rCanvas != 9 && rCanvas != 0 && rCanvas != 5 && rCanvas != 6 && rCanvas != 7 && rCanvas != 8 ) {
                if ( rCanvas == 1 ) {
                    pieceToMove = new Queen( "black", pieceToMove.c, pieceToMove.r )
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
                if ( rCanvas == 2 ) {
                    pieceToMove = new Knight( "black", pieceToMove.c, pieceToMove.r )
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
                if ( rCanvas == 3 ) {
                    if ( pieceToMove.c % 2 == 0 ) {
                        pieceToMove = new Bishop( "black", "black", pieceToMove.c, pieceToMove.r )
                    }
                    else {
                        pieceToMove = new Bishop( "black", "white", pieceToMove.c, pieceToMove.r )
                    }
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
                if ( rCanvas == 4 ) {
                    pieceToMove = new Rook( "black", pieceToMove.c, pieceToMove.r )
                    tempNameMatrix[ pieceToMove.r ][ pieceToMove.c ] = pieceToMove
                    gameArray.push( tempNameMatrix )
                    setPosition( gameArray[ gameArray.length - 1 ] )
                    newMovement()
                    paintSelectedPiece( pieceToMove, rCanvas, cCanvas )
                }
            }
            else { return }
            console.log( "pressed" )
            clickState = false
            turn = turn * -1
            return
        }
    }
}
