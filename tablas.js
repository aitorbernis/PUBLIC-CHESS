

export function checkMaterial( nameMatrix ) {
    var kingArray = []
    var knightArray = []
    var bishopArray = []
    var counter = 0
    var draw = false
    nameMatrix.map( ( row ) => {
        Object.values( row )
        Object.values( row ).map( ( position ) => {
            if ( position != 0 ) {
                if ( position.pieceType == "king" ) { kingArray.push( position ) }
                if ( position.pieceType == "knight" ) { knightArray.push( position ) }
                if ( position.pieceType == "bishop" ) { bishopArray.push( position ) }
                if ( position.pieceType != "king" && position.pieceType != "knight" && position.pieceType != "bishop" ) {
                    counter = counter + 1
                }
            }
        } )
    } )
    var arrayCounter = kingArray.length + knightArray.length + bishopArray.length
    if ( counter == 0 ) {
        if ( arrayCounter == 2 ) {
            if ( kingArray.length == 2 ) {
                draw = true
                return draw
            }
        }
        if ( arrayCounter == 3 ) {
            if ( kingArray.length == 2 && knightArray.length == 1 ) {
                draw = true
                return draw
            }
            if ( kingArray.length == 2 && bishopArray.length == 1 ) {
                draw = true
                return draw
            }
        }
        if ( arrayCounter > 3 ) {
            if ( kingArray.length == 2 ) {
                if ( knightArray.length == 0 ) {
                    var colorOne = 0
                    var colorTwo = 0
                    bishopArray.map( ( item, itemPosition ) => {
                        if ( itemPosition == 0 ) {
                            colorOne = item.pieceTile
                        }
                        else {
                            if ( item.pieceTile != colorOne ) { 
                                colorTwo = item.pieceTile
                            }
                        }
                    } )
                    if (colorTwo == 0) {
                        return draw = true
                    }
                    else {
                        return draw
                    }
                }
            }
        }
    }

    

    return draw
}


/*
rey
caballo
alfil

*/