import {King, Queen, Bishop, Knight, Rook, Pawn, ctx, cvs, sqSize} from "./classes.js"
import {verticalTop, verticalBottom, horizontalLeft, horizontalRight, topLeftDiagonal, topRightDiagonal, bottomRightDiagonal, bottomLeftDiagonal
    , kingMovements, knightMovements, pawnInFront} from "./pieceMovement.js"
import {board} from "./board.js"
import {drawPieces} from "./draw.js"

// CREATE PIECE VAR
var kW
var qW 
var bW1 
var bW2 
var knW1
var knW2
var rW1
var rW2
var pW1
var pW2
var pW3
var pW4
var pW5
var pW6
var pW7
var pW8
var kB 
var qB 
var bB1
var bB2
var knB1
var knB2
var rB1
var rB2
var pB1
var pB2
var pB3
var pB4
var pB5
var pB6
var pB7
var pB8


// creates objects of every piece
kW = new King("white")
qW = new Queen("white")
bW1 = new Bishop("white")
bW2 = new Bishop("white")
knW1 = new Knight("white")
knW2 = new Knight("white")
rW1 = new Rook("white")
rW2 = new Rook("white")
pW1 = new Pawn("white")
pW2 = new Pawn("white")
pW3 = new Pawn("white")
pW4 = new Pawn("white")
pW5 = new Pawn("white")
pW6 = new Pawn("white")
pW7 = new Pawn("white")
pW8 = new Pawn("white")

kB = new King("black")
qB = new Queen("black")
bB1 = new Bishop("black")
bB2 = new Bishop("black")
knB1 = new Knight("black")
knB2 = new Knight("black")
rB1 = new Rook("black")
rB2 = new Rook("black")
pB1 = new Pawn("black")
pB2 = new Pawn("black")
pB3 = new Pawn("black")
pB4 = new Pawn("black")
pB5 = new Pawn("black")
pB6 = new Pawn("black")
pB7 = new Pawn("black")
pB8 = new Pawn("black")


//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
// MAKE NAME AND NUMBER GAME ARRAY
export var gameArray = []

// MAKE NAME MATRIX
export var nameMatrix
export function makeNameStartingMatrix() {
    nameMatrix = [
        [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],      
        [pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8],
        [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
    ]
}
// export function makeNameStartingMatrix() {
//     nameMatrix = [
//         [rB1, knB1, bB1, qB, kB, bB2, knB2, rB2],      
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [rW1, knW1, bW1, qW, kW, bW2, knW2, rW2]
//     ]
// }



// MAKE NUMBER MATRIX
export var numberMatrix = []
export function makeNumberMatrix() {
    for (let c = 0; c < 8; c++) {
        numberMatrix[c] = []
        for (let r = 0; r < 8; r++){
            if (gameArray[gameArray.length-1][c][r] != 0) {
                if (gameArray[gameArray.length-1][c][r].colorPiece == "white"){
                    if (gameArray[gameArray.length-1][c][r] == kW) {
                        numberMatrix[c][r] = 11
                    }
                    else {
                        numberMatrix[c][r] = 1
                    }
                    
                }
                if (gameArray[gameArray.length-1][c][r].colorPiece == "black"){
                    if (gameArray[gameArray.length-1][c][r] == kB) {
                        numberMatrix[c][r] = 22
                    }
                    else {
                        numberMatrix[c][r] = 2
                    }
                }
            }
            if (gameArray[gameArray.length-1][c][r] == 0) {
                numberMatrix[c][r] = 0
            }
        }
    }
}

// SET POSITION (THIS.C & THIS.R) OF PIECES 
export function setPosition() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++){
            if (gameArray[gameArray.length-1][r][c] != 0) {
                gameArray[gameArray.length-1][r][c].c = c
                gameArray[gameArray.length-1][r][c].r = r
            }
            
        }
    }
}


//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

export var availMatrix = []

function instantAvailMatrix() {
    for (let i = 0; i < 8; i++){
        availMatrix[i] = []
        for (let j = 0; j < 8; j++) {
            availMatrix[i][j] = 0
        }
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

function paintSelectedPiece(c, r, pieceToMove) {
    if (pieceToMove.colorPiece == "white") {
        ctx.strokeStyle = "#0AC9CF"
    }
    else {
        ctx.strokeStyle = "purple"
    }
    ctx.lineWidth = 10
    ctx.strokeRect(c*sqSize, r*sqSize, sqSize, sqSize)
}


//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------THE GAME ENGINE STARTS HERE------------------------------------------------------------------------

export var turn = 0

//  ONLY HAPPENS ONE, TO START THE GAME
export function startingFunction() {
    // DRAWS BOARD
    board()
    // MAKES NAME MATRIX AND PUSHES IT INTO GAME ARRAY
    makeNameStartingMatrix()
    gameArray.push(nameMatrix) 
    // SETS PIECES THIS.C/R FROM NAME MATRIX
    setPosition()
    // MAKES NUMBER MATRIX FROM NAME MATRIX
    makeNumberMatrix()
    // CREATES A AVAIL MATRIX FULL OF 0
    instantAvailMatrix()
    // WE DRAW EACH PIECE AT ITS PLACE
    drawPieces()
    // FUNCTION THAT CREATES THE PIECES MOVEMENTS
    clickFunction()
    // WHITE STARTS
    turn = 1
}

// THIS FUNCTION TAKES THE NEW MATRIX, SETS A 0 AT ITS FORMER POSITION, AND SETS THE PIECE AT IT'S DESTINATION, THEN PUSH MATRIX INTO ARRAY, SET THISC/R AND MAKE NUMBER MATRIX
function modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard) {
    newNameMatrix[yPos][xPos] = 0
    newNameMatrix[yBoard][xBoard] = pieceToMove 
    gameArray.push(newNameMatrix)
    setPosition()
    makeNumberMatrix()
}


export function reDraw() {
    board()
    instantAvailMatrix()
    drawPieces()
}

function reDrawNoAvail() {
    board()
    drawPieces()
}


//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

export function clickFunction() {
    cvs.addEventListener('mousedown', function(e) {clickHandler(cvs, e)})
}
export var newNameMatrix
export var checkMatrix
var clickState = false

export var checkSquaresAvail = []
export var rule = {
    check: false
}

var xPos = 0
var yPos = 0
var pieceToMove = 0

export var kingPosition = {
    positionC: 0,
    positionR: 0
}


function whereIsKing(xBoard, yBoard, matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    // same column, above, exact and under
    if (kingPosition.positionC == xBoard) {
        console.log("same column")
        if (kingPosition.positionR == yBoard) {
            console.log("same row")
            console.log("exact same place")
        }
        else if (kingPosition.positionR < yBoard) {
            console.log("above")
        }
        else if (kingPosition.positionR > yBoard) {
            console.log("under")
        }
    }
    // left columns, top diagonal, left, bot diagonal
    else if (kingPosition.positionC < xBoard) {
        console.log("left")
        if (kingPosition.positionR == yBoard) {
            console.log("same row")
        }
        else if (kingPosition.positionR < yBoard) {
            console.log("top left diagonal")
            instantAvailMatrix()
            topLeftDiagonal(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor)
            checkMatrix =  matrixToCreate.map(a => Object.assign({}, a))

            console.log(checkMatrix)

        }
        else if (kingPosition.positionR > yBoard) {
            console.log("bottom left diagonal")
        }
    }
    else if (kingPosition.positionC > xBoard) {
        console.log("right")
        if (kingPosition.positionR == yBoard) {
            console.log("same row")
        }
        else if (kingPosition.positionR < yBoard) {
            console.log("top right diagonal")
        }
        else if (kingPosition.positionR > yBoard) {
            console.log("bottom right diagonal")
        }
    }
}


function refreshSelectedPiece() {
    pieceToMove = 0
    xPos = 0
    yPos = 0
}

function checkIfTheresCheck() {

}

function clickHandler(cvs, event) {
    // CREATE A COPY OF THE LAST NAME MATRIX
    newNameMatrix = gameArray[gameArray.length-1].map(a => Object.assign({}, a))
    const rect = cvs.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    //CANVAS takes whole window, from 0 to 9 (10x10) used for everything referred to drawing and click point
    var xCanvas = Math.floor(x/100)
    var yCanvas = Math.floor(y/100)

    //BOARD takes the board, from 0 to 7 (8x8) used for everything referring to matrixes
    var xBoard = Math.floor(x/100) - 1
    var yBoard = Math.floor(y/100) - 1
    
    console.log("|||||||||||||||||||||||||||||||||")
    console.log("Canvas Pressed Square", xCanvas, yCanvas)
    console.log("Board Pressed Square", xBoard, yBoard)
    console.log("|||||||||||||||||||||||||||||||||---------")
    
    console.log(rule.check)

    // if pressed off the board, just return (out of board, so use x/yCANVAS)
    if (xCanvas == 0 || xCanvas == 9 || yCanvas == 0 || yCanvas == 9) {
        return
    }

    if (turn == 1) {
        if (gameArray[gameArray.length-1][yBoard][xBoard].colorPiece == "white"){ //if copy paste, change white to black
            if (rule.check == true) {
                reDraw()
                pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
                xPos = xBoard
                yPos = yBoard
                paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
                gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
                clickState = true
                return
            }
            else {
                reDraw()
                pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
                xPos = xBoard
                yPos = yBoard
                paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
                gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
                clickState = true
                console.log("White Piece Selected")
                return
            }
            
        }
        else if (clickState == true) {
            if (availMatrix[yBoard][xBoard] == 1 || availMatrix[yBoard][xBoard] == -1){ //if copy paste, change 1 and -1 to 2 and -2
                instantAvailMatrix()
                modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard)
                pieceToMove.checkAvail()
                
                turn = turn * (-1) 
                
                console.log("---- Moved WHITE piece from: ", xPos, yPos, " to: ", xBoard, yBoard, "----")
                console.log("-----------------------------------")
                console.log("NEW MOVE")
                console.log(rule.check)
                
                reDrawNoAvail()
                clickState = false
                refreshSelectedPiece()
                
                return
            }
            else {
                clickState = false
                reDraw()
                return
            }

        }
        
    }
    else if (turn == -1) {
        if (gameArray[gameArray.length-1][yBoard][xBoard].colorPiece == "black"){ //if copy paste, change white to black
            // if (rule.check == true) {
            //     reDraw()
            //     pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
            //     xPos = xBoard
            //     yPos = yBoard
            //     paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
            //     gameArray[gameArray.length-1][yBoard][xBoard].checkAvailCheck()
            //     clickState = true
            //     return
            // }
            // else {
                reDraw()
                pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
                xPos = xBoard
                yPos = yBoard
                paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
                gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
                clickState = true
                console.log("Black Piece Selected")
                return
            // }
            
        }
        else if (clickState == true) {
            if (availMatrix[yBoard][xBoard] == 2 || availMatrix[yBoard][xBoard] == -2){ //if copy paste, change 1 and -1 to 2 and -2
                instantAvailMatrix()
                modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard)
                pieceToMove.checkAvail()
                turn = turn * (-1) 
                console.log("---- Moved Black piece from: ", xPos, yPos, " to: ", xBoard, yBoard, "----")
                console.log("-----------------------------------")
                console.log("NEW MOVE")
                
                reDrawNoAvail()
                
                refreshSelectedPiece()
                
                return
            }
            else {
                clickState = false
                reDraw()
                return
            }

        }
    }    
}