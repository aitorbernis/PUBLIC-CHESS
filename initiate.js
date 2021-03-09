import {board} from "./board.js"
import {drawPieces, paintSelectedPiece, paintAvailable} from "./draw.js"
import {cvs} from "./canvasVar.js"
import {nameMatrix, makeNameStartingMatrix, makeNumberMatrix, numberMatrix} from "./gameMatrixes.js"


//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

// ARRAY OF MATRIXES OF EVERY NEW CONFIGURATION OF PIECES
export var gameArray = []
// MATRIX WITH THE AVAILABLE POSITIONS OF A CERTAIN PIECE
export var availMatrix = []
// MATRIX WITH THE AVAILABLE POSITIONS TO STOP A CHECK
export var checkMatrix
// GAME TURN STARTER (WHITE STARTS)
var turn = 1
// VAR TO CHECK IF IT'S THE FIRST OR SECOND CLICK
var clickState = false
// VAR TO USE WHEN CREATING THE NEW CONFIGURATION MATRIX
var xPos = 0
var yPos = 0
var pieceToMove = 0


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
// CREATES AN AVAILMATRIX (EMPTY)
function instantAvailMatrix() {
    for (let i = 0; i < 8; i++){
        availMatrix[i] = []
        for (let j = 0; j < 8; j++) {
            availMatrix[i][j] = 0
        }
    }
}


// ONLY HAPPENS ONCE, TO START THE GAME
export function startingFunction() {
    // DRAWS BOARD
    board()
    // MAKES NAME MATRIX AND PUSHES IT INTO GAME ARRAY
    makeNameStartingMatrix()
    gameArray.push(nameMatrix) 
    // SETS PIECES THIS.C/R FROM NAME MATRIX
    setPosition()
    // MAKES NUMBER MATRIX FROM NAME MATRIX
    makeNumberMatrix(numberMatrix, gameArray[gameArray.length-1])
    // CREATES A AVAIL MATRIX FULL OF 0
    instantAvailMatrix()
    // WE DRAW EACH PIECE AT ITS PLACE
    drawPieces()
    // FUNCTION THAT CREATES THE PIECES MOVEMENTS
    clickFunction()
}
// THIS FUNCTION TAKES THE NEW MATRIX, SETS A 0 AT ITS FORMER POSITION, AND SETS THE PIECE AT IT'S DESTINATION, THEN PUSH MATRIX INTO ARRAY, SET THISC/R AND MAKE NUMBER MATRIX
function modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard, matrix) {
    matrix[yPos][xPos] = 0
    matrix[yBoard][xBoard] = pieceToMove 
    gameArray.push(matrix)
    setPosition()
    makeNumberMatrix(numberMatrix, gameArray[gameArray.length-1])
}
 // REDRAWS THE BOARD, SETS AVAIL MATRIX TO 0 AND DRAWS PIECES
export function reDraw() {
    board()
    instantAvailMatrix()
    drawPieces()
}
// REDRAWS THE BOARD AND DRAWS PIECES
function reDrawNoAvail() {
    board()
    drawPieces()
}
// RULES OBJECT (CHECK, ...)
export var rule = {
    check: false
}


// OBJECT FOR KING POSITION
export var kingPosition = {
    positionC: 0,
    positionR: 0
}
// WHERE IS KING IN RELATION TO THE CHECK PIECE
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


// SETS THE NEW POSITION VARIABLES TO 0
function refreshSelectedPiece() {
    pieceToMove = 0
    xPos = 0
    yPos = 0
}

// function checkIfCreatesOwnCheck(newMatrix, availableMatrix, pieceToMove) {
//     if (turn == 1) {
//         for (let c = 0; c < 8; c++) {
//             for (let r = 0; r < 8; r++) {
//                 if (availableMatrix[r][c]== 1) {
//                     var matrixToCheckIfCheck = newMatrix.map(a => Object.assign({}, a))
//                     matrixToCheckIfCheck[yPos][xPos] = 0
//                     matrixToCheckIfCheck[r][c] = pieceToMove 
//                     console.log(matrixToCheckIfCheck)
//                     for (let i = 0; i < 8; i++) {
//                         for (let j = 0; j < 8; j++) {
//                             if (matrixToCheckIfCheck[j][i].colorPiece == "black") {
//                                 matrixToCheckIfCheck[j][i].checkAvail()
//                                 if (rule.check == true) {
//                                     console.log("makes check")
//                                     return
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     } 
// }

// function checkIfCreatesOwnCheck(turn, availMatrix, newNameMatrix, xPos, yPos) {
//     var ownCheck = false
//     availMatrix.map((row, rowNumber) => {
//         // console.log(row, rowNumber)
//         row.map((squareInMatrix, columnNumber) => {
//             if (squareInMatrix == 1) {
//                 var tempNameMatrix = newNameMatrix.map(a => Object.assign({}, a))
//                 tempNameMatrix[yPos][xPos] = 0
//                 tempNameMatrix[rowNumber][columnNumber] = pieceToMove 
//                 // console.log(tempNameMatrix)
//                 checkIfCreatesAdvCheck(tempNameMatrix)

//             }
//         })
//     })


// }

// function checkIfCreatesAdvCheck(tempNameMatrix) {
//     // console.log(tempNameMatrix)
//     tempNameMatrix.map((row, index) => {
//         Object.values(row)
//         // console.log(Object.values(row))
//         Object.values(row).map((piece) => {
//             console.log(availMatrix)

//         })
//         // if (Object.values(row).colorPiece == "black") {
//         //     console.log(Object.values(row))
//         // }
//     })
// }

// ACTUAL GAME FUNCTION, CLICK HANDLER
export function clickFunction() {
    cvs.addEventListener('mousedown', function(e) {clickHandler(cvs, e)})
}

function clickHandler(cvs, event) {
    // CREATE A COPY OF THE LAST NAME MATRIX
    var newNameMatrix = gameArray[gameArray.length-1].map(a => Object.assign({}, a))

    //----------------------------------------------------------
    //----------------------------------------------------------
    const rect = cvs.getBoundingClientRect()
    var x = event.clientX - rect.left
    var y = event.clientY - rect.top
    //CANVAS takes whole window, from 0 to 9 (10x10) used for everything referred to drawing and click point
    var xCanvas = Math.floor(x/100)
    var yCanvas = Math.floor(y/100)

    //BOARD takes the board, from 0 to 7 (8x8) used for everything referring to matrixes
    var xBoard = Math.floor(x/100) - 1
    var yBoard = Math.floor(y/100) - 1
    //----------------------------------------------------------
    //----------------------------------------------------------
    
    console.log("|||||||||||||||||||||||||||||||||")
    console.log("Canvas Pressed Square", xCanvas, yCanvas)
    console.log("Board Pressed Square", xBoard, yBoard)
    console.log("|||||||||||||||||||||||||||||||||---------")
    
    // console.log(rule.check)

    var boardFilter = xCanvas == 0 || xCanvas == 9 || yCanvas == 0 || yCanvas == 9

    if (turn == 1 && !boardFilter) {
        if (gameArray[gameArray.length-1][yBoard][xBoard].colorPiece == "white"){ //if copy paste, change white to black
            // if (rule.check == true) {
            //     reDraw()
            //     pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
            //     xPos = xBoard
            //     yPos = yBoard
            //     paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
            //     gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
            //     clickState = true
            //     return
            // }
            // if {
                reDraw()
                pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
                xPos = xBoard
                yPos = yBoard
                paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
                gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
                console.log(availMatrix)
                // checkIfCreatesOwnCheck(turn, availMatrix, newNameMatrix, xPos, yPos)
                // console.log(newNameMatrix)
                
                // funció que després del check available faci un checkifcheck
                clickState = true
                console.log("White Piece Selected")
                return
            // }
            
        }
        // else if (clickState == true) {
        //     if (availMatrix[yBoard][xBoard] == 1 || availMatrix[yBoard][xBoard] == -1){ //if copy paste, change 1 and -1 to 2 and -2
        //         instantAvailMatrix()
        //         modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard, newNameMatrix)
        //         pieceToMove.checkAvail()
                
        //         turn = turn * (-1) 
                
        //         console.log("---- Moved WHITE piece from: ", xPos, yPos, " to: ", xBoard, yBoard, "----")
        //         console.log("-----------------------------------")
        //         console.log("NEW MOVE")
        //         console.log(rule.check)
                
        //         reDrawNoAvail()
        //         clickState = false
        //         refreshSelectedPiece()
                
        //         return
        //     }
        //     else {
        //         clickState = false
        //         reDraw()
        //         return
        //     }

        // }
        
    }
    // else if (turn == -1 && !boardFilter)  {
    //     if (gameArray[gameArray.length-1][yBoard][xBoard].colorPiece == "black"){ //if copy paste, change white to black
    //         // if (rule.check == true) {
    //         //     reDraw()
    //         //     pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
    //         //     xPos = xBoard
    //         //     yPos = yBoard
    //         //     paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
    //         //     gameArray[gameArray.length-1][yBoard][xBoard].checkAvailCheck()
    //         //     clickState = true
    //         //     return
    //         // }
    //         // else {
    //             reDraw()
    //             pieceToMove = gameArray[gameArray.length-1][yBoard][xBoard]
    //             xPos = xBoard
    //             yPos = yBoard
    //             paintSelectedPiece(xCanvas, yCanvas, pieceToMove) 
    //             gameArray[gameArray.length-1][yBoard][xBoard].checkAvail()
    //             clickState = true
    //             console.log("Black Piece Selected")
    //             return
    //         // }
            
    //     }
    //     else if (clickState == true) {
    //         if (availMatrix[yBoard][xBoard] == 2 || availMatrix[yBoard][xBoard] == -2){ //if copy paste, change 1 and -1 to 2 and -2
    //             instantAvailMatrix()
    //             modifyNameMatrix(xPos, yPos, pieceToMove, xBoard, yBoard, newNameMatrix)
    //             pieceToMove.checkAvail()
    //             turn = turn * (-1) 
    //             console.log("---- Moved Black piece from: ", xPos, yPos, " to: ", xBoard, yBoard, "----")
    //             console.log("-----------------------------------")
    //             console.log("NEW MOVE")
                
    //             reDrawNoAvail()
                
    //             refreshSelectedPiece()
                
    //             return
    //         }
    //         else {
    //             clickState = false
    //             reDraw()
    //             return
    //         }

    //     }
    // }    
}