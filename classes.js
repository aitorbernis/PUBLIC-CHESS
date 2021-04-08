import { ctx } from "./canvasVar.js"
import { sqSize } from "./board.js"
import { makeEmptyMatrix } from "./gameMatrixes.js"
import {
    verticalBottom, verticalTop, horizontalLeft, horizontalRight, topRightDiagonal, topLeftDiagonal, bottomRightDiagonal, bottomLeftDiagonal, pawnDiagonals, pawnInFront,
    kingMovements, knightMovements
} from "./scanAvailable.js"


// description PIECE CLASSES

export class King {

    // description CONSTRUCTOR
    // info Constructor; pieceNumber (a number for each piece), color of piece, pieceType, piece Column, piece Row + (moved (for king and rook --> castling))
    constructor( pieceNumber, color, c, r ) {
        this.pieceColor = color
        this.pieceType = "king"
        this.r = r
        this.c = c
        this.moved = false
        this.pieceNumber = pieceNumber
    }

    // description OPTIONS FOR EACH PIECE IMAGE
    // info Draws piece image at object position
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/kingWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/kingBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
    }

    // description SCANS AVAILABLE DESTINATIONS FOR PIECE
    // parameter NUMBER MATRIX
    // return array[MATRIX (availableMatrix), BOOLEAN (check true/false)]

    scanAvail( numberMatrix ) {
        // info Create an empty available matrix
        var availMatrix = makeEmptyMatrix()
        // info Sets default check state as false
        var check = false
        // info Trigger scanAvailable.js of this piece
        kingMovements( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )

        return [ availMatrix, check ]
    }

}
export class Queen {
    constructor( pieceNumber, color, c, r ) {
        this.pieceColor = color
        this.pieceType = "queen"
        this.r = r
        this.c = c
        this.pieceNumber = pieceNumber
    }
    // makes king white
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/queenWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/queenBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
    }

    scanAvail( numberMatrix ) {
        var availMatrix = makeEmptyMatrix()
        var check = false
        // info Trigger scanAvailable.js of this piece and changes check variable
        if ( verticalTop( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || verticalBottom( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ||
            horizontalLeft( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || horizontalRight( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ||
            topLeftDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || topRightDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ||
            bottomLeftDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || bottomRightDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ) { check = true }

        return [ availMatrix, check ]
    }


}
export class Bishop {
    constructor( pieceNumber, color, tile, c, r ) {
        this.pieceColor = color
        this.pieceType = "bishop"
        this.pieceTile = tile
        this.r = r
        this.c = c
        this.pieceNumber = pieceNumber
    }

    // makes king white
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/bishopWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/bishopBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
    }
    scanAvail( numberMatrix ) {
        var availMatrix = makeEmptyMatrix()
        var check = false

        if ( topLeftDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || topRightDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ||
            bottomLeftDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || bottomRightDiagonal( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ) { check = true }

        return [ availMatrix, check ]
    }
}
export class Knight {
    constructor( pieceNumber, color, c, r ) {
        this.pieceColor = color
        this.pieceType = "knight"
        this.r = r
        this.c = c
        this.pieceNumber = pieceNumber
    }

    // makes king white
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/knightWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/knightBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }

    }
    scanAvail( numberMatrix ) {
        var availMatrix = makeEmptyMatrix()
        var check = false

        if ( knightMovements( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ) { check = true }

        return [ availMatrix, check ]
    }

}
export class Rook {
    constructor( pieceNumber, color, c, r ) {
        this.pieceColor = color
        this.pieceType = "rook"
        this.r = r
        this.c = c
        this.moved = false
        this.pieceNumber = pieceNumber
    }

    // makes king white
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/rookWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/rookBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
    }

    scanAvail( numberMatrix ) {
        var availMatrix = makeEmptyMatrix()
        var check = false

        if ( verticalTop( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || verticalBottom( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ||
            horizontalLeft( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || horizontalRight( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ) { check = true }

        return [ availMatrix, check ]
    }
}
export class Pawn {
    constructor( pieceNumber, color, c, r ) {
        this.pieceColor = color
        this.pieceType = "pawn"
        this.r = r
        this.c = c
        this.passant = false
        this.toKill = false
        this.pieceNumber = pieceNumber
    }
    // makes king white
    drawPiece() {
        if ( this.pieceColor == "white" ) {
            const image = new Image();
            image.src = "./Pieces/pawnWhite.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }
        if ( this.pieceColor == "black" ) {
            const image = new Image();
            image.src = "./Pieces/pawnBlack.png";
            image.onload = () => { ctx.drawImage( image, ( this.c + 1 ) * sqSize, ( this.r + 1 ) * sqSize, sqSize, sqSize ) }
        }

    }
    // position checker for WHITE pawns
    scanAvail( numberMatrix ) {
        var availMatrix = makeEmptyMatrix()
        var check = false

        if ( pawnInFront( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] || pawnDiagonals( numberMatrix, availMatrix, this.c, this.r, this.pieceColor )[ 1 ] ) { check = true }

        return [ availMatrix, check ]
    }


}

