import {numberMatrix, availMatrix} from "./initiate.js"
export const cvs = document.getElementById("chessBoard")
export const ctx = cvs.getContext("2d")
export const sqSize = 100

// allows to control which piece's "allowed moves" will light up
// 0 = tots, 1 = King, 2 = Queen, 3 = Bishop, 4 = Knight, 5 = Rook, 6 = Pawn
const vj = 0

export var ruleState = {
    check: false,
    pawnPromotion: false,
    castleKing: false,
    castleQueen: false,
}

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
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.r = r
        this.rule = rule
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
        if (this.colorPiece == "white") {
            for (let c = 0; c < 8; c++) {
                if (this.c !== 1 && this.c !== 8){
                    if ((this.c - c) <= 1 && (this.c - c) >= -1) {
                        for (let r = 0; r < 8; r++) {
                            if ((this.r - r) <= 1 && (this.r - r) >= -1) {
                                // here we control the lighting up 
                                if(vj == 0 || vj == 1){
                                    if (numberMatrix[r][c] == 0) {
                                        availMatrix[r][c] = 1
                                        paintAvailable()
                                    }
                                    if (numberMatrix[r][c] == 2) {
                                        availMatrix[r][c] = -1
                                        paintAvailable()
                                    }
                                }   
                            }    
                        }
                    }
                }
            }
        } 
        else if (this.colorPiece == "black") {
            for (let c = 0; c < 8; c++) {
                if (this.c !== 1 && this.c !== 8){
                    if ((this.c - c) <= 1 && (this.c - c) >= -1) {
                        for (let r = 0; r < 8; r++) {
                            if ((this.r - r) <= 1 && (this.r - r) >= -1) {
                                // here we control the lighting up 
                                if(vj == 0 || vj == 1){
                                    if (numberMatrix[r][c] == 0) {
                                        availMatrix[r][c] = 2
                                        paintAvailable()
                                    }
                                    if (numberMatrix[r][c] == 1) {
                                        availMatrix[r][c] = -2
                                        paintAvailable()
                                    }
                                }   
                            }    
                        }
                    }
                }
            } 
        }
    }
}
export class Queen {
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.r = r
        this.rule = rule
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
        if (this.colorPiece == "white") {
            // checks vertical
            vertical_top:
            for (let c = 0; c < 8; c++) {
                for (let r = (this.r - 1); r >= 0; r--) {
                    if (c == this.c) { 
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break vertical_top
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break vertical_top
                        }
                        if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break vertical_top
                        }
                    }
                }
            } 
            vertical_bottom:
            for (let c = 0; c < 8; c++){
                for( let r = (this.r+1); r < 8; r++){
                    if (c == this.c){
                        if (numberMatrix[r][c] == 0){
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break vertical_bottom
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break vertical_bottom
                        }
                        if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break vertical_bottom
                        }
                    }
                }
            }

            // checks horizontal
            horizontal_left:
            for (let c = (this.c - 1); c >= 0; c--) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break horizontal_left
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break horizontal_left
                        }
                        if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break horizontal_left
                        }
                    }
                }
            }
            horizontal_right:
            for (let c = (this.c + 1); c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                break horizontal_right
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                                break horizontal_right
                            }
                            if (numberMatrix[r][c] == 22) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                                ruleState.check = true
                                console.log("Check", ruleState.check)
                                break horizontal_right
                            }
                    }
                }
            }

            // checks diagonals
            top_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--){
                let a = this.c - c
                for (let r = (this.r-1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 1){
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 2){
                            availMatrix[r][c] = -1
                            colorKill(c, r)
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break top_left_diagonal
                        }
                    }
                }
            }
            bottom_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break bottom_left_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break bottom_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break bottom_left_diagonal
                        }
                    }
                }
            }
            top_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r - 1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break top_right_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break top_right_diagonal
                        }  
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break top_right_diagonal
                        } 

                    }
                }
            }
            bottom_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break bottom_right_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break bottom_right_diagonal
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break bottom_right_diagonal
                        }
                    }
                }
            }
        } 
        else if (this.colorPiece == "black") {
            // checks vertical
            vertical_top:
            for (let c = 0; c < 8; c++) {
                for (let r = (this.r - 1); r >= 0; r--) {
                    if (c == this.c) { 
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break vertical_top
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break vertical_top
                        }
                    }
                }
            } 
            vertical_bottom:
            for (let c = 0; c < 8; c++){
                for( let r = (this.r+1); r < 8; r++){
                    if (c == this.c){
                        if (numberMatrix[r][c] == 0){
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break vertical_bottom
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break vertical_bottom
                        }
                    }
                }
            }
    
            // checks horizontal
            horizontal_left:
            for (let c = (this.c - 1); c >= 0; c--) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                break horizontal_left
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                                break horizontal_left
                            }
                    }
                }
            }
            horizontal_right:
            for (let c = (this.c + 1); c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                break horizontal_right
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                                break horizontal_right
                            }
                    }
                }
            }
    
            // checks diagonals
            top_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--){
                let a = this.c - c
                for (let r = (this.r-1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 2){
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 1){
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                    }
                }
            }
            bottom_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break bottom_left_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break bottom_left_diagonal
                        }
                    }
                }
            }
            top_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r - 1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break top_right_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break top_right_diagonal
                        }   
    
                    }
                }
            }
            bottom_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break bottom_right_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break bottom_right_diagonal
                        }
                    }
                }
            } 
        }
    }
}
export class Bishop {
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.r = r
        this.rule = rule
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
        if (this.colorPiece == "white") {
            // checks diagonals
            top_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--){
                let a = this.c - c
                for (let r = (this.r-1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 1){
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 2){
                            availMatrix[r][c] = -1
                            colorKill(c, r)
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break top_left_diagonal
                        }
                    }
                }
            }
            bottom_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break bottom_left_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break bottom_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break bottom_left_diagonal
                        }
                    }
                }
            }
            top_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r - 1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break top_right_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break top_right_diagonal
                        }  
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break top_right_diagonal
                        } 

                    }
                }
            }
            bottom_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 1
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 1) {
                            break bottom_right_diagonal
                        }
                        if (numberMatrix[r][c] == 2) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            break bottom_right_diagonal
                        }
                        else if (numberMatrix[r][c] == 22) {
                            availMatrix[r][c] = -1
                            paintAvailable()
                            ruleState.check = true
                            console.log("Check", ruleState.check)
                            break bottom_right_diagonal
                        }
                    }
                }
            }
        } 
        else if (this.colorPiece == "black") {
            // checks diagonals
            top_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--){
                let a = this.c - c
                for (let r = (this.r-1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 2){
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 1){
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break top_left_diagonal
                        }
                        else if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                    }
                }
            }
            bottom_left_diagonal:
            for (let c = (this.c - 1); c >= 0; c--) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break bottom_left_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break bottom_left_diagonal
                        }
                    }
                }
            }
            top_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r - 1); r >= 0; r--){
                    let b = this.r - r
                    if (a == b*(-1)){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break top_right_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break top_right_diagonal
                        }   
    
                    }
                }
            }
            bottom_right_diagonal:
            for (let c = (this.c + 1); c < 8; c++) {
                let a = this.c - c
                for (let r = (this.r + 1); r < 8; r++){
                    let b = this.r - r
                    if (a == b){
                        if (numberMatrix[r][c] == 0) {
                            availMatrix[r][c] = 2
                            paintAvailable()
                        }
                        if (numberMatrix[r][c] == 2) {
                            break bottom_right_diagonal
                        }
                        if (numberMatrix[r][c] == 1) {
                            availMatrix[r][c] = -2
                            paintAvailable()
                            break bottom_right_diagonal
                        }
                    }
                }
            } 
        }
    } 
}
export class Knight {
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.r = r
        this.rule = rule
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
        if (this.colorPiece == "white") {
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == 2 && b == 1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                                
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                    }
                    if (a == 1 && b == 2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
    
                            }
                        }
                    }
                    if (a == -1 && b == 2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
    
                            }
                        }
                    }
                    if (a == -2 && b == 1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
    
                            }
                        }
                    }
                    if (a == -2 && b == -1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                    }
                    if (a == -1 && b == -2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                    }
                    if (a == 1 && b == -2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                    }
                    else if (a == 2 && b == -1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 2) {
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                    }
                }
            }
        } 
        else if (this.colorPiece == "black") {
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == 2 && b == 1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                    }
                    if (a == 1 && b == 2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
    
                            }
                        }
                    }
                    else if (a == -1 && b == 2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
    
                            }
                        }
                    }
                    else if (a == -2 && b == 1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
    
                            }
                        }
                    }
                    else if (a == -2 && b == -1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                    }
                    else if (a == -1 && b == -2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                    }
                    else if (a == 1 && b == -2){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                    }
                    else if (a == 2 && b == -1){
                        if(vj == 0 || vj == 4){
                            if (numberMatrix[r][c] == 0) {
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                            if (numberMatrix[r][c] == 1) {
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                    }
                }
            } 
        }
    }

}
export class Rook {
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.rule = rule
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
        if (this.colorPiece == "white") {
            // checks vertical
            vertical_top:
            for (let c = 0; c < 8; c++) {
                for (let r = (this.r - 1); r >= 0; r--) {
                    if (c == this.c) { 
                        if (numberMatrix[r][c] == 0) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 1) {
                            break vertical_top
                        }
                        if (numberMatrix[r][c] == 2) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                            break vertical_top
                        }
                    }
                }
            } 
            vertical_bottom:
            for (let c = 0; c < 8; c++){
                for( let r = (this.r+1); r < 8; r++){
                    if (c == this.c){
                        if (numberMatrix[r][c] == 0){
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 1
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 1) {
                            break vertical_bottom
                        }
                        if (numberMatrix[r][c] == 2) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                            break vertical_bottom
                        }
                    }
                }
            }
    
            // checks horizontal
            horizontal_left:
            for (let c = (this.c - 1); c >= 0; c--) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                            if (numberMatrix[r][c] == 0) {
                                if(vj == 0 || vj == 5){
                                    availMatrix[r][c] = 1
                                    paintAvailable()
                                }
                            }
                            if (numberMatrix[r][c] == 1) {
                                break horizontal_left
                            }
                            if (numberMatrix[r][c] == 2) {
                                if(vj == 0 || vj == 5){
                                    availMatrix[r][c] = -1
                                    paintAvailable()
                                }
                                break horizontal_left
                            }
                    }
                }
            }
            horizontal_right:
            for (let c = (this.c + 1); c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                            if (numberMatrix[r][c] == 0) {
                                if(vj == 0 || vj == 5){
                                    availMatrix[r][c] = 1
                                    paintAvailable()
                                }
                            }
                            if (numberMatrix[r][c] == 1) {
                                break horizontal_right
                            }
                            if (numberMatrix[r][c] == 2) {
                                if(vj == 0 || vj == 5){
                                    availMatrix[r][c] = -1
                                    paintAvailable()
                                }
                                break horizontal_right
                            }
                    }
                }
            } 
        }
        else if (this.colorPiece == "black") {
           // checks vertical
            vertical_top:
            for (let c = 0; c < 8; c++) {
                for (let r = (this.r - 1); r >= 0; r--) {
                    if (c == this.c) { 
                        if (numberMatrix[r][c] == 0) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 2) {
                            break vertical_top
                        }
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                            break vertical_top
                        }
                    }
                }
            } 
            vertical_bottom:
            for (let c = 0; c < 8; c++){
                for( let r = (this.r+1); r < 8; r++){
                    if (c == this.c){
                        if (numberMatrix[r][c] == 0){
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 2) {
                            break vertical_bottom
                        }
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                            break vertical_bottom
                        }
                    }
                }
            }

            // checks horizontal
            horizontal_left:
            for (let c = (this.c - 1); c >= 0; c--) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                        if (numberMatrix[r][c] == 0) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 2) {
                            break horizontal_left
                        }
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                            break horizontal_left
                        }
                    }
                }
            }
            horizontal_right:
            for (let c = (this.c + 1); c < 8; c++) {
                for (let r = 0; r < 8; r++) {
                    if (r == this.r) { 
                        if (numberMatrix[r][c] == 0) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = 2
                                paintAvailable()
                            }
                        }
                        if (numberMatrix[r][c] == 2) {
                            break horizontal_right
                        }
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 5){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                            break horizontal_right
                        }
                    }
                }
            } 
        }
    }
}
export class Pawn {
    constructor(color, c, r, rule) {
        this.colorPiece = color
        this.c = c
        this.r = r
        this.rule = rule
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
        if (this.colorPiece == "white") {
            //checks in front available
            in_front: 
            for (let r = this.r; r > this.r - 3; r--){
                if (this.r == 6) {
                    if (r == (this.r-1) || r == (this.r-2)) {  
                        // here we control the lighting up 
                        if (numberMatrix[r][this.c] == 0) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][this.c] = 1
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][this.c] == 1) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                        else if (numberMatrix[r][this.c] == 2) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                    }
                }
                else {
                    if (r == (this.r-1)) {  
                        // here we control the lighting up 
                        if (numberMatrix[r][this.c] == 0) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][this.c] = 1
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][this.c] == 1) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                        else if (numberMatrix[r][this.c] == 2) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }  
                    }
                }
            }
            // checks top-left diagonal
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == 1 && b == 1){
                        if (numberMatrix[r][c] == 2) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][c] == 22) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -1
                                paintAvailable()
                                ruleState.check = true
                                console.log("Check", ruleState.check)
                            }
                        }
                    
                    }
                }
            }
            // checks top-right diagonal
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == -1 && b == 1){
                        if (numberMatrix[r][c] == 2) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -1
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][c] == 22) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -1
                                paintAvailable()
                                ruleState.check = true
                                console.log("Check", ruleState.check)
                            }
                        }
                    }
                }
            }
        }
        else if (this.colorPiece == "black") {
            //checks in front available
            in_front:
            for (let r = this.r; r < this.r + 3; r++){
                if (this.r == 1) {
                    if (r == (this.r+1) || r == (this.r+2)) {  
                        // here we control the lighting up 
                        if (numberMatrix[r][this.c] == 0) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][this.c] = 2
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][this.c] == 2) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                        else if (numberMatrix[r][this.c] == 1) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                    }
                }
                else {
                    if (r == (this.r+1)) {  
                        // here we control the lighting up 
                        if (numberMatrix[r][this.c] == 0) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][this.c] = 2
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][this.c] == 2) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }
                        else if (numberMatrix[r][this.c] == 1) {
                            if(vj == 0 || vj == 6){
                                break in_front
                            }
                        }  
                    }
                }
            }
            // checks bottom-left diagonal
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == 1 && b == -1){
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][c] == 11) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -2
                                paintAvailable()
                                ruleState.check = true
                                console.log("Check", ruleState.check)
                            }
                        }
                    }
                }
            }
            // checks bottom-right diagonal
            for (let c = 0; c < 8; c++) {
                let a = this.c - c
                for (let r = 0; r < 8; r++){
                    let b = this.r - r
                    if (a == -1 && b == -1){
                        if (numberMatrix[r][c] == 1) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -2
                                paintAvailable()
                            }
                        }
                        else if (numberMatrix[r][c] == 11) {
                            if(vj == 0 || vj == 6){
                                availMatrix[r][c] = -2
                                paintAvailable()
                                ruleState.check = true
                                console.log("Check", ruleState.check)
                            }
                        }
                    }
                }
            }
        }
    }
}

// ¿¿¿¿¿¿¿¿¿¿¿ DRAWER ?????????????
// -------- REMINDERS --------

// ...... SAVED CODE ......