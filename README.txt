--------------------------------------------------------------------
------------------ AITOR BERNIS' FIRST CHESS GAME ------------------
--------------------------------------------------------------------

This is my ever first own code, with no tutorials or external code.

It has been modified, remade and reworked many times.

Special thanks to Michi for his huge help understanding JavaScript functions, event listeners, returns and many other things.

This is not an AI, or a multiplayer chess game, it's just a board, the pieces, turns and all of chess rules.

Since it's my ever first code, I know it may be quite spagethi, but i'll be updating it.

My next project will be making this same chess game but using React.JavaScript

No license or whatever, you can downloade it, modify it, use it, destroy it, eat it, or worship it.

(This is not a tutorial, im not teaching JavaScript here, im just explaining the code. I expect some knowledge from the reader)

--------------------------------------------------------------------
--------------------------------------------------------------------

README STRUCTURE:

    - 1) How to run it

        - 1.1) VisualStudio Code Extensions 

    - 2) Short code and game explanation

    - 3) Short file explanation

    - 4) Full code steps explanation

    - 5) Code to copy/paste


--------------------------------------------------------------------

1) HOW TO RUN IT


    - You will need NPM and YARN

    - NPM:

        - visit: https://nodejs.org/en/ and download NODE (which includes NPM)

        - once installed, we will use it to install YARN

    - YARN:

        - enter your console/terminal

        - type: npm install -g yarn

    - Once both installed, you need to create a server and run the game from your browser (I use Chrome)

    - In your console/terminal type: npx server

    - You should get something like this:

    ┌───────────────────────────────────────────────────┐
    │                                                   │
    │   Serving!                                        │
    │                                                   │
    │   - Local:            http://localhost:****       │
    │   - On Your Network:  http://**********           │
    │                                                   │
    │   Copied local address to clipboard!              │
    │                                                   │
    └───────────────────────────────────────────────────┘

    - Don't close the terminal, go to your browser and just paste what's copied in your clipboard (http://localhost:****)

    - Once there, just go find the folder which has all the code and pieces images, and there you have it!

- If it doesn't work, go search why.

--------------------------

1.1) VISUALSTUDIO CODE EXTENSIONS

If you are interested on the extensions I use in VisualStudio Code for this code, here you have them

There's an important extension that i use, which is the reason for the weird commentaries in this code, such as // description, // return, etc...

This extension is called Better Comments, and once you install it, if you acces the Settings, write Save at the "Search Settings" text bar, and you will see something like:


    ┌───────────────────────────────────────────────────┐
    │                                                   │
    │  Editor: Code Actions On Save                     │
    │  Code action kinds to be run on save.             │
    │                                                   │
    │                                                   │
    │  Edit in settings.json                            │
    │                                                   │
    └───────────────────────────────────────────────────┘


Click in "Edit in settings.json".

Once in, you will see something like this:
 "better-comments.tags": [
        {
            "tag": "description",
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false,
        },
        ...many more...

the "tag": "description", wont be the same in your settings, you will probably have one called todo, ?, !, or so.

At the end of this README file, at 5) Code to copy/paste, you will find a piece of JSON that looks like this, but it has included those special comments im using like // description, // return, // parameter, etc...

Also, I use as Theme ATOM ONE DARK THEME, also an extension.

--------------------------------------------------------------------

2) SHORT CODE AND GAME EXPLANATION

First of all, every file in this code is commented, every function has the same comment structure. The comments in the actual files are very short, just a fist reminder. The full explanation is here. (At 4) Full code steps explanation)

The whole game is focused on what I called the nameMatrix, a matrix (array of arrays) which includes every piece in it's position.

Something like this: 

startingNameMatrix = [
        [ rB1, knB1, bB1, qB, kB, bB2, knB2, rB2 ],
        [ pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8 ],
        [ rW1, knW1, bW2, qW, kW, bW1, knW2, rW2 ]
]

knW1 for instance stands for KNIGHT WHITE ONE, same as bB2 which is BISHOP BLACK TWO

Also, each piece is an object from a class which defines every piece parameter, like which image to display, it's position, color, etc...

For example: 

var kW = new King( 1, "white" ) (this is done in piecesObjects.js file)

It works with an eventListener, which triggers the eventHandler() function everytime we click.

The eventHandler function is divided in two, first and second click (repeated for both white and black turn), and with every click, conditions must be met so you can move further.

It is written in full VanillaJS

--------------------------------------------------------------------

3) SHORT FILE EXPLANATION

index.html:

    - Includes the HTML, also creates a canvas, links to the javascript files (in this case, engine.js), and links the style file (style.css)

engine.js: 

    - Only runs both game functions, staringFunction() and loopFunction()

startingFunction.js:

    - This file includes the definition of the gameArray, and the startingFunction(), which creates the board, the  starting name matrix, and draws the pieces into the board

loopFunction.js:

    - This is the actual game, this big file includes the eventListener which triggers the eventHandler function, the one that controls each click.

classes.js:

    - This file includes the classes that define each piece

gameMatrixes.js:

    - Includes the starting name matrix, and some functions that create or copy matrixes

board.js:

    - Includes the board function, the one which draws the board on the canvas

canvasVar.js:

    - This file gets the canvas from the html and sets the context to 2d (creates constants)

castling.js:

    - Includes the functions related with castling

checkMatrixFunction.js:

    - Includes the function that modifies the available Matrix depending if this available positions are actually available

insufMaterial.js:

    - Includes the functions which determine the insufficent material draw conditions

drawingFunctions.js:

    - Includes the drawing functions, like drawing pieces, drawing available positions, selected pieece, etc

gameState.js:

    - This file includes the same name function which scans the game state to determine if it can continue or not

handlerFunctions.js:

    - This file includes some functions that the clickHandler needs.

movRepetition.js:

    - Includes the movement repetition draw condition function

pawnFunctions.js:

    - Includes the en passant conditions and the pawn promotion function that shows the available promotion pieces

piecesObjects.js:

    - Creates the pieces objects, assigning a class to each one

scanAvail.js:

    - Includes those functions which scan the numberMatrix to create a new matrix with the available positions of each piece

scanMatrixes.js:

    - Includes those functions that scans matrixes (simmilar to checkMatrixFunction.js)

style.css:

    - The CSS file which includes the style for the canvas


--------------------------------------------------------------------

4) FULL CODE STEPS EXPLANATION

(be ready for a lot of text)

Here I will try to explain as best as I can how my whole code works, explaining each function, each step, etc...

This explanation will be divided in blocks, (1) Introduction, (2) Starting the game, (3) Explaining matrixes, (4) Explaining classes & (5) Game steps explanation

So, let's get started!

--------------------------

(1) INTRODUCTION:

So, this game is based in "3" main things: The Game Array, the Name Matrix and the Click Handler

The Game Array:

    This is no more than a simple array, but it's the most important part of the whole code. This array stores the name matrixes (explained in next point), so, literally, it stores the whole game, every new movement.
    
    The array stores the matrixes as they happen, every turn has a matrix, and every white-black movement are 2 matrixes inside the array.

    At the beginning of the game, the startingFunction() creates the first name matrix and pushes it to the Game Array, being the no movements first configuration as the first element of the array.

The Name Matrix:

    This matrix is key, this is not a representation of the board with the pieces, the board and pieces are a representation of this matrix.

    Remember when I say matrix, i mean an Array of Arrays. Every element of the first array corresponds to a row in the game, and every array inside each array is the whole row.

    The initial name matrix is the one showed in ((2) SHORT CODE AND GAME EXPLANATION), but I will repeat it for you, because you are nice.

    startingNameMatrix = [
        [ rB1, knB1, bB1, qB, kB, bB2, knB2, rB2 ],
        [ pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ pW1, pW2, pW3, pW4, pW5, pW6, pW7, pW8 ],
        [ rW1, knW1, bW2, qW, kW, bW1, knW2, rW2 ]
    ]

    This matrix is actually inside a function that creates it, called makeNameStartingMatrix() and lives in the gameMatrixes.js file

    As you can see, it looks quite like a chess board, where you have the pieces (rB1 (rook black one), knW2 (knight WHite two), etc...) and 0's are empty positions.

    The pieces are nothing else than objects which are determined by a class (the assignation happens in piecesObjects.js, and the classes are defined in classes.js)

    This matrix is the one that will be pushed inside the Game Array, every new movement will modify this matrix, and push it inside the Game Array.

    For example, moving the white pawn from A2 to A4 would look like:

    startingNameMatrix = [
        [ rB1, knB1, bB1, qB, kB, bB2, knB2, rB2 ],
        [ pB1, pB2, pB3, pB4, pB5, pB6, pB7, pB8 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ pW1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, pW2, pW3, pW4, pW5, pW6, pW7, pW8 ],
        [ rW1, knW1, bW2, qW, kW, bW1, knW2, rW2 ]
    ]

    As you can see, the pW1 (pawn) is not at A4.

The Click Handler:

    This is the game. Everytime you make a click the clickHandler() function is triggered by the eventListener inside the loopFunction().

    It is divided in 2 parts, each one divided in two parts.

    First, we have each turn, white's and black's turn, defined by a variable called turn. White's turn is turn = 1, and black's move is turn = -1, so we can change turn by multiplying turn * -1.

    Inside every turn we have 2 divisions, first and second click.

    First click determines which piece you want to move. It selects this piece and asks for a second click, to determine the destination of each position.

    The second click determines the destination of the piece. 

    Both first and second click functions are exactly the same for both white and black's turn, only with slightly differences in numbers, colors, etc, but they are all indicated next to it with the purple commentary.

--------------------------

(2) STARTING THE GAME

To start the game first we need an HTML, which is the index.html file.

This file includes nothing more a Canvas.

The canvas is where the board will live, and where your whole game will live. Clicks are only detected inside the canvas, so if you click outside, nothing will happen.

Also we link both the style.css and the javascript, using engine.js as the source for everything.

The style.css file only sets the canvas in the middle of the screen.

The engine.js file includes two functions, here we will focus on the first one, the startingFunction().

This function is defined in startingFunction.js file.

Here, in this file, the same name function startingFunction() creates the first board calling the board() function inside board.js file. This draws the board.

Then we push inside the Game Array the startingNameMatrix, using the makeNameStartingMatrix() function.

Each piece has in their class constructors it's this.c and this.r, which determine the row and column inside the nameMatrix, so it's position.

And at the end, we go to the Game Array and draw the pieces from the matrix inside the canvas.

--------------------------

(3) EXPLAINING MATRIXES

So in this game we have 4 different matrixes, all of them created from the NAME MATRIX.

The Name Matrix is the mother matrix, the rest of different matrixes we will be using are nothing more than extrapolations of the first one.

    - We have the Name matrix which I already explained in depth in (1) INTRODUCTION.

    - Then we have what I called the Number Matrix.

        This matrix is used in the scanAvailable.js file, it is a matrix that takes the Name Matrix, maps it, and if the piece is black, sets a 2 in the matrix, if white, sets a 1. If it's a white King it sets an 11 and if it's a black King, it sets a 22.
        For example, the Number Matrix of the Starting Name Matrix would be:

        [
        [ 2, 2, 2, 2, 22, 2, 2, 2 ],
        [ 2, 2, 2, 2, 2, 2, 2, 2 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 1, 1, 11, 1, 1, 1 ]
        ]

        As you see, every black piece is a 2 (despite King, which is a 22) and same story with white pieces.

        The scanAvailable.js file functions use this matrix to determine available positions. Because a white piece doesn't really care wether if the piece in front of it is a Rook, a Bishop or a Pawn, it only matters that it is an oponent's piece and that it's not the king.
        The 11/22 notation for kings is used to differenciate them, because every time one of the available positions is an 11 or a 22, it means that's a check.

    - Then we have what I called the Available Matrix (or availMatrix)

        This matrix is produced in scanAvail.js file, in their functions.

        This functions take the Number Matrix as input, scan this matrix, and depending on what they find they create another Matrix which is the one called availMatrix or availableMatrix.

        This matrix is a matrix for the available destinations/movements for a certain piece.

        For white pieces it draws a 1 for an empty square which is available as destination, a -1 for an available square that contains an enemy piece (so, a kill), and it also includes a -11, which indicates that this killing destination is actually a king, so a check.

        In case of en passant available position, it draws a 100

        In case of a castling available position, it draws a 99 for white and a -99 for black

        For example, imagine this situation:

        [
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ bB2, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, kB, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ qW, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, pW1, 0, 0, 0, kW, 0 ]
        ]

        Here we have a white queen at A3, a black Bishop in A7, a white Pawn in C1, a black King in D6 and a white King in G1.

        As we see, the availMatrix for the White queen in this situation would be:

        [
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ -1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, -11, 0, 0, 0, 0 ],
        [ 1, 0, 1, 0, 0, 0, 0, 0 ],
        [ 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 0, 0, 0, 0, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0 ]
        ]

        Here, the available destinations for the queen are marked with a 1. The kill on the black bishop as a -1, and the check on the black king as a -11.
        Notice that where the white pawn was (C1) we see a 0 there. Whenever the scanAvail functions find an enemy piece or an own piece, marks that one and stops.

    - And at last, we have the identityMatrix

        This matrix is only used in a very specific place.

        This matrix is created by scanning the Name Matrix, and since every piece have a property called this.pieceNumber, it sets this pieceNumber at the piece position.

        The this.pieceNumber is a different number for each piece. It goes from 1 to 32, since there's 32 pieces. It identifies every piece by a specific number which will not be shared by another piece.

        So, for instance, the identityMatrix of the startingNameMatrix would look like this:

        [
        [23, 21, 19, 18, 17, 20, 22, 24],
        [25, 26, 27, 28, 29, 30, 31, 32],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [9, 10, 11, 12, 13, 14, 15, 16],
        [7, 5, 4, 2, 1, 3, 6, 8]
        ]

        This matrix is only used at the movement repetition draw condition. It is used to compare different game matrixes.


--------------------------

(3) EXPLAINING CLASSES

So, we have 6 different classes for each piece type. So we have a King, Queen, Bishop, Knight, Rook and Pawn class.

This classes contain all the basic information needed to make a piece.

All of them have the same 3 parts

    - Constructor: Here we have different kinds of parameters for each piece, but all of them have this 5 ones:
        - this.pieceNumber : number for the identityMatrix
        - this.pieceColor : color of piece, white or black
        - this.c/r : column/row of the piece
        - this.pieceType : indicates which kind of piece it is

        - then you also have:
            - this.pieceTile : for Bishops, tells on which tiles this bishop will be playing
            - this.passant : for Pawns, it tells if this piece is ready to kill en passant
            - this.toKill : for Pawns, it tells if this piece is in a position to be killed en passant
            - this.moved : for Kings and Rooks, it tells you if a piece has moved, for the castling condition

    - Methods:

        - drawPiece() : Depending on this.pieceColor, tells which image (png from Pieces folder) will be displayed for this piece
        - setAvail() : Calls the scanAvailable.js functions to return an array which includes first the availMatrix, and second a boolean that indicates if in this availMatrix there's a -11 or -22 (a check)

When we create the pieces, in piecesObjects.js, we set which class it will be (new King() for instance) and then we pass in the diferent constructor parameters that we set at the beginning, like this.pieceNumber, this.pieceColor, and this.pieceTyle

The this.pieceType is set right inside the constructor, since it doesn't matter what color the piece is because either a black or white bishop is a bishop.

We only change the class of a piece when a pawn promotes to another piece. Here, we take that particular pawn (pW4 for instance), and just set a new class to define it (new Queen() for instance). In this case, the pW4 will be a Queen.

--------------------------

(5) GAME STEPS EXPLANATION

(if you were not ready for the text above, you will certainly not be ready for what's about to come)


Here I will try to explain in the easiest, fastest and clearest way possible how the game actually works, what the game does.

I've already explained how the game starts, right at (2) Starting the game, i explained how the startingFunction.js and startingFunction() work and what they do, but now we will move to the loopFunction().

The actual loopFunction() isn't much, but what it contains is the real engine of the game, the eventListener.

Inside the loopFunction(), the eventListener triggers the clickHandler() function everytime we click inside the canvas, so what we are going to focus on will be the clickHandler() function, since this is the one that contains everything we need.

As I explained before in (1) Introduction, the Click handler is divided in two parts which are divided also in two parts: Both turns, and inside every turn, first and second click.

At the beginning of the loopFunction.js file, we start defining the important variables we will need, like setting the turn to 1 (white starts), clickState to false (will be explained in a bit), etc...

Then we just call the clickHandler() function.

This section will be divided in two main parts: 1) Explaining variables & 2) Explaining clickHandler().

(this whole section (5) Game steps explanation, will be focused on the loopFunction.js file, so if i reffer to "this file, inside this file, etc... i mean loopFunction.js. If I reffer to another file, it will be clear)

----------

1) EXPLAINING VARIABLES

In this file we use 7 global variables, which are:


    - clickState: This variable sets if it is the first or second click. clickState == false means first click

    - turn: Sets the turn, 1 for white and -1 for black

    - pieceToMove: The selected piece to move

    - originC/R: This variable will be used to store the position of the selected piece (before moving it)

    - availMatrix: The availMatrix of a piece

    - tempNameMatrix: A temporary nameMatrix, different from the original one

All of this variables change with every turn or movement or even click, they are vital for the code, and are used all thru the clickHandler()

----------

2) EXPLAINING CLICKHANDLER()

Here comes the big part of the README

So, the clickHandler is the brain of the game, it determines what happens everytime we click, which piece will be moved, where, if it creates a check, if you can castle, everything.

All the remaining files from this game are just functions that we call inside the clickHandler() (most of them, but all of them are finally related to this function)

This section will be divided in 3 parts: (1) Setting coordinates, (2) First Click & (3) Second Click.

Since both white and black's turn are exactly the same, I will only explain the case of white's turn, and those small different things will be pointed out. You can read this part either from the white or black's point of view.


- - - -

(1) SETTING COORDINATES

At the beginning of the clickHandler(), right before the first turn starts, how we get the x and y position of the clicked position inside the canvas.

Then, since the actual x and y position are decimals, we get only the whole number and set it to rBoard and cBoard.

cBoard and rBoard are as important as originC and originR, origin stores the position of a piece to move, before it is moved, but the c/rBoard variables store the actual column and row number of the clicked part of the canvas, and are used everytime.

In the first click, as we will see next, c/rBoard are the values set to originC/R, and in the second click c/rBoard are the coordinates of the destination.

We can also see c/rCanvas.

The difference between canvas and board is that the whole canvas is a 10x10 grid of squares of 100px wide/height, and the board is embedded inside.

The canvas matrix starts at the top left corner with the (0,0) coordinates and ends at the bottom right corner with the (9,9) coordinates, so 10x10

The board top left corner is at (1,1) and the bottom right corner is in (8,8). 

So if cCanvas is 6, cBoard will be 5, and cCanvas = 0 will be outside the cBoard limits.

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

So for instance, the canvas is the whole matrix (external 0's with the 1's inside) and the board is the 1's square.

Hope it's clear.

- - - -

(2) FIRST CLICK

So we end the coordinates part and we reach where it all begins.

It all starts with the if (turn == 1) statement.

Then we go right to the First Click.

So we encounter the if (clickState != "promotion") conditional. Don't bother about it now, will explain it later. In short, since the clickState is defined by default as false, false is the first click.

So once we enter inside this if statement, we find the first click brain.

(The "if ( cCanvas == 0 || cCanvas == 9 || rCanvas == 0 || rCanvas == 9 ) { return }" is only used to make sure you press inside the board, if you press outside the board, in the canvas, it will restart the function)

We find the first important conditional:

- if ( gameArray[ gameArray.length - 1 ][ rBoard ][ cBoard ].pieceColor == "white" )

    Here we acces the Game Array, and go to it's last element (the current name matrix) and check if inside this matrix, the selected position [rBoard][cBoard] has a piece which color is white (in black's turn, white is changed to black).

- If we have pressed a white piece, first we find an odd newMovement() function.

    newMovement() lives inside handlerFunctions.js

    This is here so if you after pressing a white piece, you press another white piece, everything is reset and you can draw this new individual piece, not having two white pieces selected.

- Now, before everything is assigned, we trigger the movementRepetition() function (which lives inside movRepetition.js). 

    - movementRepetition() is the function that scans if the movement repetition draw condition is met.
    
        - It works by taking the gameArray, and if there has been 9 or more moves, it checks the current nameMatrix, the nameMatrix of 2 full white and black moves, and the 4 full white and black moves to compare them.
        - Here is the only place where we create the identityMatrix. We use it to compare this different matrixes of the gameArray to see if we repeated the same position 3 times, and a draw ends the game.
        - It returns a boolean that indicates if the draw condition is met or not, if so, we have the FIRST GAME ENDING CONDITION, we trigger an alert if this function returns a boolean as true (draw is true)

- After the movement repetition draw condition, and being this false, we can continue the game.
- We encounter an assignation to pieceToMove with the function getSelectedPiece() (which lives inside handlerFunctions.js)

    - This function just takes the name matrix, the coordinates of the piece to move, and returns a variable which is this piece. 
    - Then we just assign what the function returns to pieceToMove
    - Now pieceToMove will be the piece we pressed on

- We have the piece, now we need to store it's position. We set r/cBoard to originR/C.

- paintSelectedPiece() is a function that draws a square around the selected piece, so it is easy to see which piece is selected (it lives inside drawingFunctions.js)

- And after we have the piece, it's position and we highlighted it, we encounter what is probably the most important part of the clickHandler: gameState() (lives inside gameState.js)

    - This function scans the actual situation of the game. It is a condition that every new board has to go thru, and inside here we scan everything, how the actual pieces configuration on the board is and many other things:

        - First, we create an empty matrix (makeEmptyMatrix() which lives inside gameMatrixes.js, does exactly what you would expect from it, it creates an 8x8 matrix full of 0's)
        - Then we scan the first condition, the insufficient material draw condition:

            - This function called checkMaterial() (which lives inside insufMaterial.js) scans if the remaining pieces on the board are enough for playing
            
                - We create 3 arrays (king, bishop and knight array). We will push in every king, bishop or knight we encounter while scanning the nameMatrix
                - While we map the nameMatrix, if we find a king, bishop or knight we push it into it's correspondent array. If we encounter another piece, we create a counter that is increased by 1 for each piece.
                - Then come the conditions:

                    - If the only remaining pieces are those in the arrays, we check if we have the draw conditions:

                        - King vs King
                        - King & Knight vs King
                        - Kings & Bishops of same colorTile
            
            - It returns a draw variable, which is a boolean

        - If the checkMaterial allows to continue, we move to the main part

            - This main part has a structure:

                - First we look if there's available movements for turn's pieces, doesn't matter if you are under a current check or not

                    - This function is called movLeft() and lives inside scanMatrixes.js

                        - This function takes the turn and the name matrix, and scan thru the name matrix and looks for every piece if they have movements left.
                            - It works by taking the name matrix, mapping it, and if the found piece is a turn piece, it triggers the scanAvail method of it's class, returning an availMatrix
                            - Then we call another function called scanIfEmpty() (which also lives inside scanMatrixes.js) to scan if the availMatrix generated has something else than all 0's, if it only has 0's it is considered empty, so no available movements left
                            - It returns a boolean of movementsLeft
                                
                                - If there's available movements left, then we look if we are under an enemy check

                                    - This function is called underCheck() and lives inside scanMatrixes.js.

                                        - It scans the nameMatrix and looks at the availMatrix of each enemy piece to see if in any of them there's a check
                                        - It does this by calling the scanAvail() of each piece and checking if the second item of the array returned (the check boolean) is true or not

                                            - If we are under enemy check we must edit the availMatrixes of the turn's pieces so they can stop that check, and we will also see if there's available movements while under check, because if there's no available movements, we reach check mate

                                                - We call the editAvailMovLeft() function which lives inside checkMatrixFunction.js

                                                    - This function scans thru the turn pieces in the nameMatrix
                                                    - Generates an availMatrix of each piece
                                                    
                                                        - Map thru this availMatrix and set the piece at each available position

                                                            - While in an available position, it calls the previously seen underCheck() to see if this new position creates an enemy check

                                                                - If it creates an enemy check, this available position is not longer an available position and we modify the availMatrix

                                                                    - If after editing the availMatrixes we have movements left, we return the available matrix of the selected piece

                                                                    - If after editing we don't have movements left, we find the FOURTH GAME ENDING CONDITION, the CHECK MATE

                                                                - If it does not create an enemy check, we continue to the next available position and repeat

                                            - If we are not under enemy check, we can scan now the passant and castling conditions

                                                - First we scan the passant condition. If the selected piece is a pawn and it's this.passant is true, it means this piece is able to kill en passant

                                                    - We call the editPassantMatrix() (which lives inside pawnFunctions.js)

                                                        - This function edits the availMatrix so it creates a new available position which is the one to kill en passant
                                                            
                                                            - It takes the nameMatrix and scans it to find the pawn with the this.toKill as true, since this pawn is in a position to be killed en passant

                                                                - When we find the piece, we store this piece into a variable called pieceToKill

                                                            - Then, depending on the turn, we set a 100 into the availMatrix to mark that position as available and as a passant mode position

                                                            - We set this availMatrix as the pieceToMove availMatrix and we finish the gameState function
                                                
                                                - Second, if the selected piece is the king, we enter the castling condition. King and Rook's this.moved should be false for this condition to met

                                                    - We call the castling() function which lives inside castling.js

                                                        - This function scans both sides of the King to see if he can castle.

                                                            - First it calls the queenSide() function (which also lives in castling.js) which takes the King position, and looks at the queenSide positions

                                                                - It goes thru every position:

                                                                    - Looks if position is empty. If position is empty, places King there and calls underCheck() function to see if it creates an enemy check'

                                                                        - If empty and no check, it goes to the next one and repeats the latest steps
                                                                        
                                                                            - If they are all empty and no check found, when it reaches the last column (well since it's queenSide it is the first column), and if there's a Rook there with the this.move condition as false, it returns a boolean of queenside as true

                                                                            - If it finds an occupied square, or if in an empty square it gets checked, it returns a boolean for queenside as false
                                                            
                                                            - Second it calls the kingSide() function (lives also in castling.js) which does exactly the same as the queenSide() but in the other sides

                                                            - If one of this functions returns a true, it means that it can castle that side, so it modifies the availMatrix setting a 99 (queenSide) or a -99 (kingSide) into the availMatrix

                                                - Third, if the passant and castling conditions are not met, we do a simple editAvailMovLeft() to get the availMatrix of the selected piece and finish the gameState function

                                - If there are no available movements, we encounter a draw, a STALEMATE, and here we find the THIRD GAME ENDING CONDITION

        - If the checkMaterial does not allow to continue, we get the SECOND GAME ENDING CONDITION, an insufficient material draw

- So, the gameState or ended the game with a draw or a check mate, or generated an availMatrix of a selected piece, so now we store what the gameState returns as an availMatrix of the selected piece

- Now we call a function called paintAvailable() (which is inside drawingFunctions.js) that scans the availMatrix, and draws in the canvas those available positions with a colored circle.

    - There's a color for each turn, one for available, another one for kill, for castling, for en passant, etc. This is totally editable, you don't even need this to exist, it is a guide to actually see in the board the available positions drawed, so it makes it easier

- Then we change the clickState to true, so we change to the second click, and we return

- - - -

(3) SECOND CLICK

So we covered everything that happens during the first click, when you click on a piece to move and then the gameState function triggers.

Now we are going to see what happens when you press on a destination, in a square which coincides with an available position of the availMatrix.


--------------------------------------------------------------------


5) CODE TO COPY/PASTE

Copy this piece of JSON inside the settings.json file of your settings in VSCODE after installing the BETTER COMMENTS extension on VSCODE (explained in 1.1) VisualStudio Code Extensions)

-----------------------------------------------------

"better-comments.tags": [
        {
            "tag": "description",
            "color": "#FF2D00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false,
        },
        {
            "tag": "parameter",
            "color": "#46DE0D",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "return",
            "color": "#F0AA0B",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "info",
            "color": "#CDCB79",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "subDescription",
            "color": "#0397E5",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "reminder",
            "color": "#F33098",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
        {
            "tag": "-",
            "color": "#F3FF00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": true,
            "italic": false
        }
    ],

-----------------------------------------------------




codes:

white:
    - avail = 1
    - kill = -1
    - kill king = -11

black:
    - avail = 2
    - kill = -2
    - kill king = -22

- castle queenSide = 99
- castle kingSide = -99


