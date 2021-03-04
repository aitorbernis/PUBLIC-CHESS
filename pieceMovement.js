import {kingPosition, rule} from "./initiate.js"
// HERE WE HAVE THE FUNCTIONS TO CHECK THE AVAILABLE SQUARES AROUND A PIECE

// VERTICAL AND HORIZONTAL

export function verticalTop(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = 0; c < 8; c++) {
            for (let r = (pieceR - 1); r >= 0; r--) {
                if (c == pieceC) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = 0; c < 8; c++) {
            for (let r = (pieceR - 1); r >= 0; r--) {
                if (c == pieceC) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
        } 
    }
}

export function verticalBottom(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = 0; c < 8; c++){
            for( let r = (pieceR+1); r < 8; r++){
                if (c == pieceC){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = 0; c < 8; c++){
            for( let r = (pieceR+1); r < 8; r++){
                if (c == pieceC){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
        }
    }
}

export function horizontalLeft(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC - 1); c >= 0; c--) {
            for (let r = 0; r < 8; r++) {
                if (r == pieceR) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC - 1); c >= 0; c--) {
            for (let r = 0; r < 8; r++) {
                if (r == pieceR) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
        }
    }
}

export function horizontalRight(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC + 1); c < 8; c++) {
            for (let r = 0; r < 8; r++) {
                if (r == pieceR) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC + 1); c < 8; c++) {
            for (let r = 0; r < 8; r++) {
                if (r == pieceR) { 
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
        }
    }
}

// DIAGONALS

export function topLeftDiagonal(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC - 1); c >= 0; c--){
            let a = pieceC - c
            for (let r = (pieceR-1); r >= 0; r--){
                let b = pieceR - r
                if (a == b){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -1
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC - 1); c >= 0; c--){
            let a = pieceC - c
            for (let r = (pieceR-1); r >= 0; r--){
                let b = pieceR - r
                if (a == b){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
}

export function topRightDiagonal(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC + 1); c < 8; c++) {
            let a = pieceC - c
            for (let r = (pieceR - 1); r >= 0; r--){
                let b = pieceR - r
                if (a == b*(-1)){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -1
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC + 1); c < 8; c++) {
            let a = pieceC - c
            for (let r = (pieceR - 1); r >= 0; r--){
                let b = pieceR - r
                if (a == b*(-1)){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }

                }
            }
        }
    }
}

export function bottomLeftDiagonal(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC - 1); c >= 0; c--) {
            let a = pieceC - c
            for (let r = (pieceR + 1); r < 8; r++){
                let b = pieceR - r
                if (a == b*(-1)){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -1
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC - 1); c >= 0; c--) {
            let a = pieceC - c
            for (let r = (pieceR + 1); r < 8; r++){
                let b = pieceR - r
                if (a == b*(-1)){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
}

export function bottomRightDiagonal(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = (pieceC + 1); c < 8; c++) {
            let a = pieceC - c
            for (let r = (pieceR + 1); r < 8; r++){
                let b = pieceR - r
                if (a == b){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -1
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = (pieceC + 1); c < 8; c++) {
            let a = pieceC - c
            for (let r = (pieceR + 1); r < 8; r++){
                let b = pieceR - r
                if (a == b){
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        kingPosition.positionC = c
                        kingPosition.positionR = r
                        rule.check = true
                        return 
                    }
                }
            }
        }
    }
}

//  KING

export function kingMovements(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let c = 0; c < 8; c++) {
            if (pieceC !== 1 && pieceC !== 8){
                if ((pieceC - c) <= 1 && (pieceC - c) >= -1) {
                    for (let r = 0; r < 8; r++) {
                        if ((pieceR - r) <= 1 && (pieceR - r) >= -1) {
                            if (matrixToCheck[r][c] == 0) {
                                matrixToCreate[r][c] = 1
                            }
                            if (matrixToCheck[r][c] == 2) {
                                matrixToCreate[r][c] = -1
                            }
                        }   
                    }    
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let c = 0; c < 8; c++) {
            if (pieceC !== 1 && pieceC !== 8){
                if ((pieceC - c) <= 1 && (pieceC - c) >= -1) {
                    for (let r = 0; r < 8; r++) {
                        if ((pieceR - r) <= 1 && (pieceR - r) >= -1) {
                            if (matrixToCheck[r][c] == 0) {
                                matrixToCreate[r][c] = 2
                            }
                            if (matrixToCheck[r][c] == 1) {
                                matrixToCreate[r][c] = -2
                            }
                        }   
                    }    
                }
            }
        }
    } 
}

// KNIGHT

export function knightMovements(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    
    for (let c = 0; c < 8; c++) {
        let a = pieceC - c
        for (let r = 0; r < 8; r++){
            let b = pieceR - r
            if (a == 2 && b == 1){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
            
            if (a == 1 && b == 2){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
            
            if (a == -1 && b == 2){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
            }
            
            if (a == -2 && b == 1){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
            
            if (a == -2 && b == -1){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
            
            if (a == -1 && b == -2){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
            
            if (a == 1 && b == -2){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
            
            if (a == 2 && b == -1){
                if (pieceColor == "white") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 1
                    }
                    if (matrixToCheck[r][c] == 1 || matrixToCheck[r][c] == 11) {
                        return
                    }
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                        return
                    }
                    if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        return
                    }
                }
                else if (pieceColor == "black") {
                    if (matrixToCheck[r][c] == 0) {
                        matrixToCreate[r][c] = 2
                    }
                    if (matrixToCheck[r][c] == 2 || matrixToCheck[r][c] == 22) {
                        return
                    }
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                        return
                    }
                    if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        return
                    }
                }
                
            }
        }
    }
}

// PAWN

export function pawnInFront(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        for (let r = pieceR; r > pieceR - 3; r--){
            if (pieceR == 6) {
                // if at starting position
                if (r == (pieceR-1) || r == (pieceR-2)) {  
                    if (matrixToCheck[r][pieceC] == 0) {
                        matrixToCreate[r][pieceC] = 1
                    }
                    if (matrixToCheck[r][pieceC] == 1 || matrixToCheck[r][pieceC] == 2) {
                        return 
                    }
                }
            }
            else {
                if (r == (pieceR-1)) {  
                    if (matrixToCheck[r][pieceC] == 0) {
                        matrixToCreate[r][pieceC] = 1
                    }
                    if (matrixToCheck[r][pieceC] == 1 || matrixToCheck[r][pieceC] == 2) {
                        return 
                    }
                }
            }
        }
    }
    else if (pieceColor == "black") {
        for (let r = pieceR; r < pieceR + 3; r++){
            if (pieceR == 1) {
                // if at starting position
                if (r == (pieceR+1) || r == (pieceR+2)) {  
                    if (matrixToCheck[r][pieceC] == 0) {
                        matrixToCreate[r][pieceC] = 2
                    }
                    if (matrixToCheck[r][pieceC] == 1 || matrixToCheck[r][pieceC] == 2) {
                        return 
                    }
                }
            }
            else {
                if (r == (pieceR+1)) {  
                    if (matrixToCheck[r][pieceC] == 0) {
                        matrixToCreate[r][pieceC] = 2
                    }
                    if (matrixToCheck[r][pieceC] == 1 || matrixToCheck[r][pieceC] == 2) {
                        return 
                    }
                }
            }
        }
    }
}
export function pawnDiagonals(matrixToCheck, matrixToCreate, pieceR, pieceC, pieceColor) {
    if (pieceColor == "white") {
        // checks top-left diagonal
        for (let c = 0; c < 8; c++) {
            let a = pieceC - c
            for (let r = 0; r < 8; r++){
                let b = pieceR - r
                if (a == 1 && b == 1){
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                    }
                    else if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        ruleState.check = true
                        console.log("Check", ruleState.check)
                    }
                }
                
            }
        }
        
        // checks top-right diagonal
        for (let c = 0; c < 8; c++) {
            let a = pieceC - c
            for (let r = 0; r < 8; r++){
                let b = pieceR - r
                if (a == -1 && b == 1){
                    if (matrixToCheck[r][c] == 2) {
                        matrixToCreate[r][c] = -1
                    }
                    else if (matrixToCheck[r][c] == 22) {
                        matrixToCreate[r][c] = -11
                        ruleState.check = true
                        console.log("Check", ruleState.check)
                    }
                }
            }
        }
    }

    else if (pieceColor == "black") {
        // checks bottom-left diagonal
        for (let c = 0; c < 8; c++) {
            let a = pieceC - c
            for (let r = 0; r < 8; r++){
                let b = pieceR - r
                if (a == 1 && b == -1){
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                    }
                    else if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        ruleState.check = true
                        console.log("Check", ruleState.check)
                    }
                }
            }
        }
        // checks bottom-right diagonal
        for (let c = 0; c < 8; c++) {
            let a = pieceC - c
            for (let r = 0; r < 8; r++){
                let b = pieceR - r
                if (a == -1 && b == -1){
                    if (matrixToCheck[r][c] == 1) {
                        matrixToCreate[r][c] = -2
                    }
                    else if (matrixToCheck[r][c] == 11) {
                        matrixToCreate[r][c] = -22
                        ruleState.check = true
                        console.log("Check", ruleState.check)
                    }
                }
            }
        }
    }
}