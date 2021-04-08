export function checkMaterial( nameMatrix ) {

    // description SCANS INSUFFICIENT MATERIAL CONDITIONS
    // parameter NAME MATRIX
    // return BOOLEAN (draw true/false)

    // info Create a king, knight and bishop array where we pass each correspondent piece found in name matrix
    var kingArray = []
    var knightArray = []
    var bishopArray = []

    // info Counter for pieces that are not King, knight or bishop
    var counter = 0

    // info Draw boolean (the one we return)
    var draw = false

    // subDescription SCAN FUNCTION
    // info Scan thru the name matrix, if piece is a King, knight or bishop we push it into it's correspondent array
    // info If piece is not one of these, add +1 to the counter
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

    // info Variable that stores the total length value of adding each array's length
    var arrayCounter = kingArray.length + knightArray.length + bishopArray.length

    // subDescription INSUFFICIENT MATERIAL CONDITIONS

    // info If there's no other pieces rather than the array ones, proceed 
    if ( counter == 0 ) {

        // info If there's only two pieces
        if ( arrayCounter == 2 ) {

            // info If those 2 pieces are both kings, Insufficient material draw
            if ( kingArray.length == 2 ) {
                draw = true
                return draw
            }
        }

        // info If there's only 3 pieces
        if ( arrayCounter == 3 ) {

            // info If 2 of those are the Kings and the other one is a Knight or Bishop, Insufficient material draw
            if ( kingArray.length == 2 && knightArray.length == 1 ) {
                draw = true
                return draw
            }
            if ( kingArray.length == 2 && bishopArray.length == 1 ) {
                draw = true
                return draw
            }
        }

        // info If there's more than 3 pieces
        if ( arrayCounter > 3 ) {
            if ( kingArray.length == 2 ) {

                // info If there's only Kings and Bishops
                if ( knightArray.length == 0 ) {

                    // info Variables to store Bishop's tile color
                    var colorOne = 0
                    var colorTwo = 0

                    // info Map the bishop array, if all bishops have same tile color, Insufficient material draw, otherwise, continue
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
                    if ( colorTwo == 0 ) {
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