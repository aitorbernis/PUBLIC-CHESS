--> starting.js

    This file is the engine to create the initial pieces and at their initial position (initial matrix).
    It produces the NameMatrix with the pieces configuration on the board at the initial position.
    It creates a function that sets the position on the matrix as their this.c and this.r and
    then creates another matrix (NumberMatrix) from the NameMatrix, which will be used for available moves.

--> draw.js

    This file draws the pieces on the board.
    It takes the gameArray from the recurrent.js file, and draws the last nameMatrix from the nameArray

--> recurrent.js

    This file is the engine to create all the matrixes from a game, after the initial one.


----> HOW IT WORKS <----

1) starting.js
    - Create the empty variables for every piece in game (kW, kB, qW, etc...)
    - Create an object which will include every piece from the same color (whitePieces and blackPieces)
    - Set the class of each object element
    - Create the starting name array
    - Create initial name matrix, with the initial pieces configuration on the board
    - Push this matrix inside the starting name array
    - Create starting number array 
    - Create initial number matrix from the name matrix
    - Push this matrix inside the starting number array
    - Export startingNameArray and startingNumberArray to recurrent.js

    --> We have an array (startingNameArray) which includes the first name 
        matrix (first piece configuration on board by name)

    --> We have an array (startingNumberArray) which includes the first number 
        matrix (first piece configuration on board by number)

2) draw.js
    - Import gameNameArray from recurrent.js
    - Go throught the last nameMatrix and draw every piece at its position

how to git (Terminal) :    
    - modified code
    - git status --> identify modified files in terminal
    - git add --all or git add filename --> add to commit later
    - git commit -m "message" --> commit with explanatory message
    - git push -u origin master --> pushes changes to github :D 

    