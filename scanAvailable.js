// HERE WE HAVE THE FUNCTIONS TO CHECK THE AVAILABLE SQUARES AROUND A PIECE

// VERTICAL AND HORIZONTAL

export function verticalTop( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {

    // description SCAN THE VERTICAL TOP POSITIONS OF A NUMBER MATRIX AND CREATE AN AVAILMATRIX
    // parameter MATRIXTOSCAN (numberMatrix) && MATRIXTOCREATE (availMatrix) && PIECEC && PIECER && PIECECOLOR
    // return array[MATRIX (availMatrix), BOOLEAN (check true/false)]
    
    var check = false
    for ( let r = ( pieceR - 1 ); r >= 0; r-- ) {
        if ( pieceColor == "white" ) {
            if ( matrixToScan[ r ][ pieceC ] == 0 ) {
                matrixToCreate[ r ][ pieceC ] = 1
            }
            if ( matrixToScan[ r ][ pieceC ] == 1 || matrixToScan[ r ][ pieceC ] == 11 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 2 ) {
                matrixToCreate[ r ][ pieceC ] = -1
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 22 ) {
                matrixToCreate[ r ][ pieceC ] = -11
                check = true
                return [ matrixToCreate, check ]
            }
        }
        else {
            if ( matrixToScan[ r ][ pieceC ] == 0 ) {
                matrixToCreate[ r ][ pieceC ] = 2
            }
            if ( matrixToScan[ r ][ pieceC ] == 2 || matrixToScan[ r ][ pieceC ] == 22 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 1 ) {
                matrixToCreate[ r ][ pieceC ] = -2
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 11 ) {
                matrixToCreate[ r ][ pieceC ] = -22
                check = true
                return [ matrixToCreate, check ]
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function verticalBottom( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let r = ( pieceR + 1 ); r < 8; r++ ) {
        if ( pieceColor == "white" ) {
            if ( matrixToScan[ r ][ pieceC ] == 0 ) {
                matrixToCreate[ r ][ pieceC ] = 1
            }
            if ( matrixToScan[ r ][ pieceC ] == 1 || matrixToScan[ r ][ pieceC ] == 11 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 2 ) {
                matrixToCreate[ r ][ pieceC ] = -1
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 22 ) {
                matrixToCreate[ r ][ pieceC ] = -11
                check = true
                return [ matrixToCreate, check ]
            }
        }
        else {
            if ( matrixToScan[ r ][ pieceC ] == 0 ) {
                matrixToCreate[ r ][ pieceC ] = 2
            }
            if ( matrixToScan[ r ][ pieceC ] == 2 || matrixToScan[ r ][ pieceC ] == 22 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 1 ) {
                matrixToCreate[ r ][ pieceC ] = -2
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ r ][ pieceC ] == 11 ) {
                matrixToCreate[ r ][ pieceC ] = -22
                check = true
                return [ matrixToCreate, check ]
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function horizontalLeft( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC - 1 ); c >= 0; c-- ) {
        if ( pieceColor == "white" ) {
            if ( matrixToScan[ pieceR ][ c ] == 0 ) {
                matrixToCreate[ pieceR ][ c ] = 1
            }
            if ( matrixToScan[ pieceR ][ c ] == 1 || matrixToScan[ pieceR ][ c ] == 11 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 2 ) {
                matrixToCreate[ pieceR ][ c ] = -1
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 22 ) {
                matrixToCreate[ pieceR ][ c ] = -11
                check = true
                return [ matrixToCreate, check ]
            }
        }
        else {
            if ( matrixToScan[ pieceR ][ c ] == 0 ) {
                matrixToCreate[ pieceR ][ c ] = 2
            }
            if ( matrixToScan[ pieceR ][ c ] == 2 || matrixToScan[ pieceR ][ c ] == 22 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 1 ) {
                matrixToCreate[ pieceR ][ c ] = -2
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 11 ) {
                matrixToCreate[ pieceR ][ c ] = -22
                check = true
                return [ matrixToCreate, check ]
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function horizontalRight( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC + 1 ); c < 8; c++ ) {
        if ( pieceColor == "white" ) {
            if ( matrixToScan[ pieceR ][ c ] == 0 ) {
                matrixToCreate[ pieceR ][ c ] = 1
            }
            if ( matrixToScan[ pieceR ][ c ] == 1 || matrixToScan[ pieceR ][ c ] == 11 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 2 ) {
                matrixToCreate[ pieceR ][ c ] = -1
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 22 ) {
                matrixToCreate[ pieceR ][ c ] = -11
                check = true
                return [ matrixToCreate, check ]
            }
        }
        else {
            if ( matrixToScan[ pieceR ][ c ] == 0 ) {
                matrixToCreate[ pieceR ][ c ] = 2
            }
            if ( matrixToScan[ pieceR ][ c ] == 2 || matrixToScan[ pieceR ][ c ] == 22 ) {
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 1 ) {
                matrixToCreate[ pieceR ][ c ] = -2
                return [ matrixToCreate, check ]
            }
            if ( matrixToScan[ pieceR ][ c ] == 11 ) {
                matrixToCreate[ pieceR ][ c ] = -22
                check = true
                return [ matrixToCreate, check ]
            }
        }
    }
    return [ matrixToCreate, check ]
}

// DIAGONALS

export function topLeftDiagonal( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC - 1 ); c >= 0; c-- ) {
        let a = pieceC - c
        for ( let r = ( pieceR - 1 ); r >= 0; r-- ) {
            let b = pieceR - r
            if ( a == b ) {
                if ( pieceColor == "white" ) {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 1
                    }
                    if ( matrixToScan[ r ][ c ] == 1 || matrixToScan[ r ][ c ] == 11 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 2 ) {
                        matrixToCreate[ r ][ c ] = -1
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 22 ) {
                        matrixToCreate[ r ][ c ] = -11
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
                else {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 2
                    }
                    if ( matrixToScan[ r ][ c ] == 2 || matrixToScan[ r ][ c ] == 22 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 1 ) {
                        matrixToCreate[ r ][ c ] = -2
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 11 ) {
                        matrixToCreate[ r ][ c ] = -22
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function topRightDiagonal( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC + 1 ); c < 8; c++ ) {
        let a = pieceC - c
        for ( let r = ( pieceR - 1 ); r >= 0; r-- ) {
            let b = pieceR - r
            if ( a == b * ( -1 ) ) {
                if ( pieceColor == "white" ) {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 1
                    }
                    if ( matrixToScan[ r ][ c ] == 1 || matrixToScan[ r ][ c ] == 11 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 2 ) {
                        matrixToCreate[ r ][ c ] = -1
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 22 ) {
                        matrixToCreate[ r ][ c ] = -11
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
                else {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 2
                    }
                    if ( matrixToScan[ r ][ c ] == 2 || matrixToScan[ r ][ c ] == 22 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 1 ) {
                        matrixToCreate[ r ][ c ] = -2
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 11 ) {
                        matrixToCreate[ r ][ c ] = -22
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function bottomLeftDiagonal( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC - 1 ); c >= 0; c-- ) {
        let a = pieceC - c
        for ( let r = ( pieceR + 1 ); r < 8; r++ ) {
            let b = pieceR - r
            if ( a == b * ( -1 ) ) {
                if ( pieceColor == "white" ) {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 1
                    }
                    if ( matrixToScan[ r ][ c ] == 1 || matrixToScan[ r ][ c ] == 11 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 2 ) {
                        matrixToCreate[ r ][ c ] = -1
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 22 ) {
                        matrixToCreate[ r ][ c ] = -11
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
                else {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 2
                    }
                    if ( matrixToScan[ r ][ c ] == 2 || matrixToScan[ r ][ c ] == 22 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 1 ) {
                        matrixToCreate[ r ][ c ] = -2
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 11 ) {
                        matrixToCreate[ r ][ c ] = -22
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function bottomRightDiagonal( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = ( pieceC + 1 ); c < 8; c++ ) {
        let a = pieceC - c
        for ( let r = ( pieceR + 1 ); r < 8; r++ ) {
            let b = pieceR - r
            if ( a == b ) {
                if ( pieceColor == "white" ) {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 1
                    }
                    if ( matrixToScan[ r ][ c ] == 1 || matrixToScan[ r ][ c ] == 11 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 2 ) {
                        matrixToCreate[ r ][ c ] = -1
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 22 ) {
                        matrixToCreate[ r ][ c ] = -11
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
                else {
                    if ( matrixToScan[ r ][ c ] == 0 ) {
                        matrixToCreate[ r ][ c ] = 2
                    }
                    if ( matrixToScan[ r ][ c ] == 2 || matrixToScan[ r ][ c ] == 22 ) {
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 1 ) {
                        matrixToCreate[ r ][ c ] = -2
                        return [ matrixToCreate, check ]
                    }
                    if ( matrixToScan[ r ][ c ] == 11 ) {
                        matrixToCreate[ r ][ c ] = -22
                        check = true
                        return [ matrixToCreate, check ]
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}


export function pawnInFront( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    if ( pieceColor == "white" ) {
        for ( let r = pieceR; r >= ( pieceR - 2 ); r-- ) {
            if ( pieceR == 6 ) {
                if ( r != pieceR ) {
                    if ( matrixToScan[ r ][ pieceC ] == 0 ) { matrixToCreate[ r ][ pieceC ] = 1 }
                    else { return [ matrixToCreate, check ] }
                }
            }
            else if ( pieceR == 0 ) { return [ matrixToCreate, check ] }
            else {
                if ( r == ( pieceR - 1 ) ) {
                    if ( matrixToScan[ r ][ pieceC ] == 0 ) { matrixToCreate[ r ][ pieceC ] = 1 }
                    else { return [ matrixToCreate, check ] }
                }
            }
        }
    }
    else {
        for ( let r = pieceR; r <= ( pieceR + 2 ); r++ ) {
            if ( pieceR == 1 ) {
                if ( r != pieceR ) {
                    if ( matrixToScan[ r ][ pieceC ] == 0 ) { matrixToCreate[ r ][ pieceC ] = 2 }
                    else { return [ matrixToCreate, check ] }
                }
            }
            else if ( pieceR == 7 ) { return [ matrixToCreate, check ] }
            else {
                if ( r == ( pieceR + 1 ) ) {
                    if ( matrixToScan[ r ][ pieceC ] == 0 ) { matrixToCreate[ r ][ pieceC ] = 2 }
                    else { return [ matrixToCreate, check ] }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}
export function pawnDiagonals( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    if ( pieceColor == "white" ) {
        // ! LIMIT
        if ( pieceR == 0 ) { return [ matrixToCreate, check ] }
        // ! TOP LEFT DIAGONAL
        if ( matrixToScan[ pieceR - 1 ][ pieceC - 1 ] == 2 ) { matrixToCreate[ pieceR - 1 ][ pieceC - 1 ] = -1 }
        if ( matrixToScan[ pieceR - 1 ][ pieceC - 1 ] == 22 ) { matrixToCreate[ pieceR - 1 ][ pieceC - 1 ] = -11; check = true }
        // ! TOP RIGHT DIAGONAL
        if ( matrixToScan[ pieceR - 1 ][ pieceC + 1 ] == 2 ) { matrixToCreate[ pieceR - 1 ][ pieceC + 1 ] = -1 }
        if ( matrixToScan[ pieceR - 1 ][ pieceC + 1 ] == 22 ) { matrixToCreate[ pieceR - 1 ][ pieceC + 1 ] = -11; check = true }
    }
    else {
        // ! LIMIT
        if ( pieceR == 7 ) { return [ matrixToCreate, check ] }
        // ! BOTTOM LEFT DIAGONAL
        if ( matrixToScan[ pieceR + 1 ][ pieceC - 1 ] == 1 ) { matrixToCreate[ pieceR + 1 ][ pieceC - 1 ] = -2 }
        if ( matrixToScan[ pieceR + 1 ][ pieceC - 1 ] == 11 ) { matrixToCreate[ pieceR + 1 ][ pieceC - 1 ] = -22; check = true }
        // ! BOTTOM RIGHT DIAGONAL
        if ( matrixToScan[ pieceR + 1 ][ pieceC + 1 ] == 1 ) { matrixToCreate[ pieceR + 1 ][ pieceC + 1 ] = -2 }
        if ( matrixToScan[ pieceR + 1 ][ pieceC + 1 ] == 11 ) { matrixToCreate[ pieceR + 1 ][ pieceC + 1 ] = -22; check = true }
    }
    return [ matrixToCreate, check ]
}

// PIECE MOVEMENTS -----------------------------------------


// KING

export function kingMovements( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = pieceC - 1; c <= pieceC + 1; c++ ) {
        if ( c >= 0 && c <= 7 ) {
            for ( let r = pieceR - 1; r <= pieceR + 1; r++ ) {
                if ( r >= 0 && r <= 7 ) {
                    if ( !( r == pieceR && c == pieceC ) ) {
                        if ( pieceColor == "white" ) {
                            if ( matrixToScan[ r ][ c ] == 0 ) {
                                matrixToCreate[ r ][ c ] = 1
                            }
                            if ( matrixToScan[ r ][ c ] == 2 ) {
                                matrixToCreate[ r ][ c ] = -1
                            }
                        }
                        else {
                            if ( matrixToScan[ r ][ c ] == 0 ) {
                                matrixToCreate[ r ][ c ] = 2
                            }
                            if ( matrixToScan[ r ][ c ] == 1 ) {
                                matrixToCreate[ r ][ c ] = -2
                            }
                        }
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}

export function knightMovements( matrixToScan, matrixToCreate, pieceC, pieceR, pieceColor ) {
    var check = false
    for ( let c = pieceC - 2; c <= pieceC + 2; c++ ) {
        if ( c >= 0 && c <= 7 ) {
            for ( let r = pieceR - 2; r <= pieceR + 2; r++ ) {
                if ( r >= 0 && r <= 7 ) {
                    if ( r == pieceR - 1 || r == pieceR + 1 ) {
                        if ( c == pieceC - 2 || c == pieceC + 2 ) {
                            if ( pieceColor == "white" ) {
                                if ( matrixToScan[ r ][ c ] == 0 ) {
                                    matrixToCreate[ r ][ c ] = 1
                                }
                                if ( matrixToScan[ r ][ c ] == 2 ) {
                                    matrixToCreate[ r ][ c ] = -1
                                }
                                if ( matrixToScan[ r ][ c ] == 22 ) {
                                    matrixToCreate[ r ][ c ] = -11
                                    check = true
                                }
                            }
                            else {
                                if ( matrixToScan[ r ][ c ] == 0 ) {
                                    matrixToCreate[ r ][ c ] = 2
                                }
                                if ( matrixToScan[ r ][ c ] == 1 ) {
                                    matrixToCreate[ r ][ c ] = -2
                                }
                                if ( matrixToScan[ r ][ c ] == 11 ) {
                                    matrixToCreate[ r ][ c ] = -22
                                    check = true
                                }
                            }
                        }
                    }
                    if ( r == pieceR - 2 || r == pieceR + 2 ) {
                        if ( c == pieceC - 1 || c == pieceC + 1 ) {
                            if ( pieceColor == "white" ) {
                                if ( matrixToScan[ r ][ c ] == 0 ) {
                                    matrixToCreate[ r ][ c ] = 1
                                }
                                if ( matrixToScan[ r ][ c ] == 2 ) {
                                    matrixToCreate[ r ][ c ] = -1
                                }
                                if ( matrixToScan[ r ][ c ] == 22 ) {
                                    matrixToCreate[ r ][ c ] = -11
                                    check = true
                                }
                            }
                            else {
                                if ( matrixToScan[ r ][ c ] == 0 ) {
                                    matrixToCreate[ r ][ c ] = 2
                                }
                                if ( matrixToScan[ r ][ c ] == 1 ) {
                                    matrixToCreate[ r ][ c ] = -2
                                }
                                if ( matrixToScan[ r ][ c ] == 11 ) {
                                    matrixToCreate[ r ][ c ] = -22
                                    check = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return [ matrixToCreate, check ]
}

