import { sqSize } from "./board.js"
import { ctx } from "./canvasVar.js"


export function drawPieces( matrix ) {

    // description TRIGGER DRAWPIECE() METHOD OF PIECES OF A MATRIX
    // parameter MATRIX

    matrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( piece ) => {
            if ( piece != 0 ) {
                piece.drawPiece()
            }
        } )
    } )
}

// description SET DIFERENT COLORS FOR BORDER OF SELECTED PIECE, AND DESTINATIONS
// parameter COLUMN & ROW
function colorSqWhite( c, r ) {
    ctx.fillStyle = "#0AC8CF"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

function colorSqBlack( c, r ) {
    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

function colorKill( c, r ) {
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

function colorKing( c, r ) {
    ctx.fillStyle = "orange"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

function colorCastling( c, r ) {
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

function colorPassant( c, r ) {
    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.arc( ( ( c + 1 ) * sqSize ) + ( sqSize / 2 ), ( r + 1 ) * sqSize + ( sqSize / 2 ), sqSize / 3, 0, 2 * Math.PI, false )
    ctx.fill()
}

export function paintAvailable( availMatrix ) {

    // description TRIGGERS DIFFERENT COLORS FOR AVAILMATRIX VALUES
    // parameter AVAILMATRIX

    for ( let c = 0; c < 8; c++ ) {
        for ( let r = 0; r < 8; r++ ) {
            if ( availMatrix[ r ][ c ] == 1 ) {
                colorSqWhite( c, r )
            }
            if ( availMatrix[ r ][ c ] == 2 ) {
                colorSqBlack( c, r )
            }
            if ( availMatrix[ r ][ c ] == -1 || availMatrix[ r ][ c ] == -2 ) {
                colorKill( c, r )
            }
            if ( availMatrix[ r ][ c ] == -11 || availMatrix[ r ][ c ] == -22 ) {
                colorKing( c, r )
            }
            if ( availMatrix[ r ][ c ] == 99 || availMatrix[ r ][ c ] == -99 ) {
                colorCastling( c, r )
            }
            if ( availMatrix[ r ][ c ] == 100 || availMatrix[ r ][ c ] == -100 ) {
                colorPassant( c, r )
            }
        }
    }
}

export function paintSelectedPiece( pieceToSelect, r, c ) {

    // description DRAWS BORDER AROUND SELECTED PIECE
    // parameter SELECTED PIECE && ROW && COLUMN

    if ( pieceToSelect.pieceColor == "white" ) {
        ctx.strokeStyle = "#0AC9CF"
    }
    else {
        ctx.strokeStyle = "purple"
    }
    ctx.lineWidth = 10
    ctx.strokeRect( c * sqSize, r * sqSize, sqSize, sqSize )
}