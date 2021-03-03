import {numberMatrix, availMatrix, rule, kingPosition} from "./initiate.js"
import {verticalTop, verticalBottom, horizontalLeft, horizontalRight, topLeftDiagonal, topRightDiagonal, bottomRightDiagonal, bottomLeftDiagonal
    , kingMovements, knightMovements, pawnMovements} from "./pieceMovement.js"
export const cvs = document.getElementById("chessBoard")
export const ctx = cvs.getContext("2d")
export const sqSize = 100


// colors the available position squares at canvas
function colorSqWhite(c, r) {
    ctx.fillStyle = "#0AC8CF"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

function colorSqBlack(c, r) {
    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

function colorKill(c, r) {
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(((c+1)*sqSize)+(sqSize/2), (r+1)*sqSize+(sqSize/2), sqSize/3, 0, 2*Math.PI, false)
    ctx.fill()
}

function paintAvailable() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++) {
            if (availMatrix[r][c] == 1) {
                colorSqWhite(c, r)
            }
            else if (availMatrix[r][c] == -1) {
                colorKill(c, r)
            }
            else if (availMatrix[r][c] == 2) {
                colorSqBlack(c, r)
            }
            else if (availMatrix[r][c] == -2) {
                colorKill(c, r)
            }
        }
    }
}


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
        paintAvailable()
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
        paintAvailable()
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
        paintAvailable()
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
        paintAvailable()
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
        paintAvailable()
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
        pawnMovements(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
        paintAvailable()
    }
    checkAvailCheck() {
        pawnMovements(numberMatrix, availMatrix, this.r, this.c, this.colorPiece)
    }
}

// ¿¿¿¿¿¿¿¿¿¿¿ DRAWER ?????????????
// -------- REMINDERS --------

// ...... SAVED CODE ......