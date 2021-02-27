import {King, Queen, Bishop, Knight, Rook, Pawn, ctx, cvs, sqSize, ruleState} from "./classes.js"
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
export var gameNameArray = []
export var gameNumberArray = []

// MAKE NAME MATRIX
export var nameMatrix
export function makeStartingMatrix() {
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
// export function makeStartingMatrix() {
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

export function setRules() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++){
            if (gameNameArray[gameNameArray.length-1][r][c] != 0) {
                gameNameArray[gameNameArray.length-1][r][c].rule = 0
            }
            
        }
    }
}


// MAKE NUMBER MATRIX
export var numberMatrix = []
export function makeNumberMatrix() {
    for (let c = 0; c < 8; c++) {
        numberMatrix[c] = []
        for (let r = 0; r < 8; r++){
            if (gameNameArray[gameNameArray.length-1][c][r] != 0) {
                if (gameNameArray[gameNameArray.length-1][c][r].colorPiece == "white"){
                    if (gameNameArray[gameNameArray.length-1][c][r] == kW) {
                        numberMatrix[c][r] = 11
                    }
                    else {
                        numberMatrix[c][r] = 1
                    }
                    
                    
                }
                if (gameNameArray[gameNameArray.length-1][c][r].colorPiece == "black"){
                    if (gameNameArray[gameNameArray.length-1][c][r] == kB) {
                        numberMatrix[c][r] = 22
                    }
                    else {
                        numberMatrix[c][r] = 2
                    }
                }
            }
            if (gameNameArray[gameNameArray.length-1][c][r] == 0) {
                numberMatrix[c][r] = 0
            }
        }
    }
}

// SET POSITION (THIS.C & THIS.R) OF PIECES 
export function setPosition() {
    for (let c = 0; c < 8; c++) {
        for (let r = 0; r < 8; r++){
            if (gameNameArray[gameNameArray.length-1][r][c] != 0) {
                gameNameArray[gameNameArray.length-1][r][c].c = c
                gameNameArray[gameNameArray.length-1][r][c].r = r
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

function paintSelectedPieceWhite(c, r) {
    ctx.strokeStyle = "#0AC9CF"
    ctx.lineWidth = 10
    ctx.strokeRect(c*sqSize, r*sqSize, sqSize, sqSize)
}
function paintSelectedPieceBlack(c, r) {
    ctx.strokeStyle = "purple"
    ctx.lineWidth = 10
    ctx.strokeRect(c*sqSize, r*sqSize, sqSize, sqSize)
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

export var turn = 0
export function startingFunction() {
    board()
    makeStartingMatrix()
    gameNameArray.push(nameMatrix) 
    setPosition()
    setRules()
    makeNumberMatrix()
    gameNumberArray.push(numberMatrix)
    instantAvailMatrix()
    drawPieces()
    clickFunction()
    turn = 1
}


export function newMoveFunction() {
    board()
    setPosition()
    makeNumberMatrix()
    gameNumberArray.push(numberMatrix)
    instantAvailMatrix()
    drawPieces()
}



export function clickFunction() {
    cvs.addEventListener('mousedown', function(e) {clickHandler(cvs, e)})
}

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

export var newNameMatrix
var clickState = false

var currAvailMatr = []
var xPos = 0
var yPos = 0
var pieceToMove = 0

function clickHandler(cvs, event) {

    newNameMatrix = gameNameArray[gameNameArray.length-1].map(a => Object.assign({}, a))
    const rect = cvs.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    //CANVAS takes whole window, from 0 to 9 (10x10) used for everything referred to drawing and click point
    var xCanvas = Math.floor(x/100)
    var yCanvas = Math.floor(y/100)

    //BOARD takes the board, from 0 to 7 (8x8) used for everything referring to matrixes
    var xBoard = Math.floor(x/100) - 1
    var yBoard = Math.floor(y/100) - 1
    
    console.log("Canvas Pressed Square", xCanvas, yCanvas)
    console.log("Board Pressed Square", xBoard, yBoard)

    // if pressed off the board, just return (out of board, so use CANVAS)
    if (xCanvas == 0 || xCanvas == 9 || yCanvas == 0 || yCanvas == 9) {
        return
    }

    if (turn == 1) {
        //click sobre pieza blanca en turno blancas y clickState falso
        if (gameNameArray[gameNameArray.length-1][yBoard][xBoard].colorPiece == "white"){
            newMoveFunction()
            paintSelectedPieceWhite(xCanvas, yCanvas) // paint selected piece
            gameNameArray[gameNameArray.length-1][yBoard][xBoard].checkAvail() // check available positions
            clickState = true
            pieceToMove = gameNameArray[gameNameArray.length-1][yBoard][xBoard]
            xPos = xBoard
            yPos = yBoard
            return
        }
        else if (clickState == true) {
            //console.log(currAvailMatr)
            // console.log("cs true")
            if (availMatrix[yBoard][xBoard] == 1 || availMatrix[yBoard][xBoard] == -1){
                newNameMatrix[yPos][xPos] = 0
                newNameMatrix[yBoard][xBoard] = pieceToMove
                gameNameArray.push(newNameMatrix)
                turn = turn * (-1)
                newMoveFunction()
                console.log("si")
                return
            }
            else {
                clickState = false
                newMoveFunction()
                return
            }

        }
        
    }
    else if (turn == -1) {
        //click sobre pieza blanca en turno blancas y clickState falso
        if (gameNameArray[gameNameArray.length-1][yBoard][xBoard].colorPiece == "black"){
            newMoveFunction()
            paintSelectedPieceBlack(xCanvas, yCanvas) // paint selected piece
            gameNameArray[gameNameArray.length-1][yBoard][xBoard].checkAvail() // check available positions
            clickState = true
            pieceToMove = gameNameArray[gameNameArray.length-1][yBoard][xBoard]
            xPos = xBoard
            yPos = yBoard
            return
        }
        else if (clickState == true) {
            //console.log(currAvailMatr)
            // console.log("cs true")
            if (availMatrix[yBoard][xBoard] == 2 || availMatrix[yBoard][xBoard] == -2){
                newNameMatrix[yPos][xPos] = 0
                newNameMatrix[yBoard][xBoard] = pieceToMove
                gameNameArray.push(newNameMatrix)
                turn = turn * (-1)
                newMoveFunction()
                console.log("si")
                return
            }
            else {
                clickState = false
                newMoveFunction()
                return
            }
        }
    }    
    return 
}



// function selectedPiece(cvs, event) {
//     newNameMatrix = gameNameArray[gameNameArray.length-1].map(a => Object.assign({}, a))
//     const rect = cvs.getBoundingClientRect()
//     var x = event.clientX - rect.left
//     var y = event.clientY - rect.top
//     x = Math.floor(x/100) - 1
//     y = Math.floor(y/100) - 1
    
//     console.log("Pressed square", x+1, y+1))
    
//     for (let c = 0; c < 8; c++){
//         for (let r = 0; r < 8; r++) {
//             if (c == x && r == y) {
//                 if (gameNumberArray[gameNumberArray.length-1][y][x] != 0) {
//                     if (turn == 1) {
//                             if (gameNameArray[gameNameArray.length-1][y][x].colorPiece == "white"){
//                                 paintSelectedPieceWhite(c+1, r+1)
//                                 gameNameArray[gameNameArray.length-1][y][x].checkAvail()
//                                 cvs.addEventListener('mousedown', function(e) {destinationPlace(cvs, e, x, y, gameNameArray)}, {once : true})
                                

//                             }
//                             else if (gameNameArray[gameNameArray.length-1][y][x].colorPiece == "black"){
//                                 clickFunction()
//                                 return

//                             }
//                     }

//                     else if (turn == -1) {
//                         if (gameNameArray[gameNameArray.length-1][y][x].colorPiece == "black"){
//                             paintSelectedPieceBlack(c+1, r+1)
//                             gameNameArray[gameNameArray.length-1][y][x].checkAvail()
//                             cvs.addEventListener('mousedown', function(e) {destinationPlace(cvs, e, x, y)}, {once : true})

//                         }
//                         else if (gameNameArray[gameNameArray.length-1][y][x].colorPiece == "white"){
//                             clickFunction()
//                             return

//                         }
//                     }
//                 }
//                 if (gameNumberArray[gameNumberArray.length-1][y][x] == 0) {
//                     clickFunction()
//                     return

//                 }
//             }
//         }
//     }
// }

// function destinationPlace(cvs, event, c, r) {
//     const rect = cvs.getBoundingClientRect()
//     var x = event.clientX - rect.left
//     var y = event.clientY - rect.top
//     x = Math.floor(x/100) - 1
//     y = Math.floor(y/100) - 1
//     console.log("Pressed square", x+1, y+1)
//     if (turn == 1) {
//         if (availMatrix[y][x] == 1 || availMatrix[y][x] == -1 ) {
            
//             var pieceToMove = gameNameArray[gameNameArray.length-1][r][c]
//             newNameMatrix[r][c] = 0
//             newNameMatrix[y][x] = pieceToMove
//             gameNameArray.push(newNameMatrix)
//             newMoveFunction()
//             gameNumberArray.push(numberMatrix)
//             newNameMatrix[y][x].checkAvail()
//             console.log(gameNameArray)
//             console.log(ruleState.check)
//             turn = turn * (-1)
//             cvs.addEventListener('mousedown', function(e) {selectedPiece(cvs, e)}, {once : true})
    
//             // console.log("Name Matrix", gameNameArray)
//             // console.log("Number Matrix", gameNumberArray)
//         }
//         if (availMatrix[y][x] == 0) {
//             newMoveFunction()
    
//         }
//     }
//     else if (turn == -1) {
//         if (availMatrix[y][x] == 2 || availMatrix[y][x] == -2) {
//             var pieceToMove = gameNameArray[gameNameArray.length-1][r][c]
//             newNameMatrix[r][c] = 0
//             newNameMatrix[y][x] = pieceToMove
//             gameNameArray.push(newNameMatrix)
//             newMoveFunction()
//             gameNumberArray.push(numberMatrix)
//             newNameMatrix[y][x].checkAvail()
//             console.log(gameNameArray)
//             turn = turn * (-1)
//             cvs.addEventListener('mousedown', function(e) {selectedPiece(cvs, e)}, {once : true})
    
//             // console.log("Name Matrix", gameNameArray)
//             // console.log("Number Matrix", gameNumberArray)
//         }
//         if (availMatrix[y][x] == 0) {
//             newMoveFunction()
    
//         }
//     }
    
// }










