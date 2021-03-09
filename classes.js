import {availMatrix, checkMatrix} from "./initiate.js"
import {verticalTop, verticalBottom, horizontalLeft, horizontalRight, topLeftDiagonal, topRightDiagonal, bottomRightDiagonal, bottomLeftDiagonal
    , kingMovements, knightMovements, pawnInFront, pawnDiagonals} from "./pieceMovement.js"
import {ctx} from "./canvasVar.js"
import {sqSize} from "./board.js"
import {numberMatrix} from "./gameMatrixes.js"


// we create a class for each piece type
export class King {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
        this.r = r
    }
    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/kingWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/kingBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
    }
    checkAvail() {
        kingMovements(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
    
}
export class Queen {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
        this.r = r
    }
    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/queenWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/queenBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        
    }

    checkAvail() {
        verticalTop(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        verticalBottom(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        horizontalLeft(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        horizontalRight(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)

        topLeftDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        topRightDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        bottomLeftDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        bottomRightDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
}
export class Bishop {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
        this.r = r
    }

    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/bishopWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/bishopBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
    }
    checkAvail() {
        topLeftDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        topRightDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        bottomLeftDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        bottomRightDiagonal(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    } 
}
export class Knight {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
        this.r = r
    }

    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/knightWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/knightBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        
    }
    checkAvail() {
        knightMovements(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }

}
export class Rook {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
    }

    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/rookWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/rookBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        
    }

    checkAvail() {
        verticalTop(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        verticalBottom(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        horizontalLeft(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        horizontalRight(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
}
export class Pawn {
    constructor(color, c, r) {
        this.colorPiece = color
        this.c = c
        this.r = r
    }
    // makes king white
    drawPiece() {
        if (this.colorPiece == "white"){
            const image = new Image();
            image.src = "./Pieces/pawnWhite.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        if (this.colorPiece == "black"){
            const image = new Image();
            image.src = "./Pieces/pawnBlack.png";
            image.onload = () => {ctx.drawImage(image, (this.c+1)*sqSize, (this.r+1)*sqSize, sqSize, sqSize)}
        }
        
    }
    // position checker for WHITE pawns
    checkAvail() {
        pawnInFront(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        pawnDiagonals(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
    checkAvailCheck() {
        pawnInFront(checkMatrix, availMatrix, this.r, this.c, this.colorPiece)
        pawnDiagonals(checkMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
}