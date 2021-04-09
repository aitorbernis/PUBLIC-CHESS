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

    - Don't close the terminal, go to your browser and just paste what's copied in your clipboard (http://localhost:5000)

    - Once there, just go find the folder which has all the code and pieces images, and there you have it!

- If it doesn't work, go search why.

--------------------------

1.1) VISUALSTUDIO CODE EXTENSIONS

If you are interested on the extensions I use in VisualStudio Code for this code, here you have them

There's an important extension that i use, which is the reason for the weird commentaries in this code, such as // description, // return, etc...

This extension is called Better Comments, and once you install it, if you acces the Settings, write Save at the "Search Settings" text bar, and you will see 
something like:


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

At the end of this README file, at 5) Code to copy/paste, you will find a piece of JSON that looks like this, but it has included those special comments im using
like // description, // return, // parameter, etc...

Also, I use as Theme ATOM ONE DARK THEME, also an extension.

--------------------------------------------------------------------

2) SHORT CODE AND GAME EXPLANATION

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

The eventHandler function is divided in two, first and second click (repeated for both white and black turn), and with every click, conditions must be met 
so you can move further.

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

    This is no more than a simple array, but it's the most important part of the whole code. This array stores the name matrixes (explained in next point), so, literally, it stores
    the whole game, every new movement.
    
    The array stores the matrixes as they happen, every turn has a matrix, and every white-black movement are 2 matrixes inside the array.

    At the beginning of the game, the startingFunction() creates the first name matrix and pushes it to the Game Array, being the no movements first configuration as the first element of
    the array.

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

    First, we have each turn, white's and black's turn, defined by a variable called turn. White's turn is turn = 1, and black's move is turn = -1, so we can change turn
    by multiplying turn * -1.

    Inside every turn we have 2 divisions, first and second click.

    First click determines which piece you want to move. It selects this piece and asks for a second click, to determine the destination of each position.

    The second click determines the destination of the piece. 

    Both first and second click functions are exactly the same for both white and black's turn, only with slightly differences in numbers, colors, etc, but they are all
    indicated next to it with the purple commentary.

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

        This matrix is used in the scanAvailable.js file, it is a matrix that takes the Name Matrix, maps it, and if the piece is black, sets a 2 in the matrix,
        if white, sets a 1. If it's a white King it sets an 11 and if it's a black King, it sets a 22.
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

        The scanAvailable.js file functions use this matrix to determine available positions. Because a white piece doesn't really care wether if the piece
        in front of it is a Rook, a Bishop or a Pawn, it only matters that it is an oponent's piece and that it's not the king.
        The 11/22 notation for kings is used to differenciate them, because every time one of the available positions is an 11 or a 22, it means that's a check.

    - Then we have what I called the Available Matrix (or availMatrix)

        This matrix is produced in scanAvail.js file, in their functions.

        This functions take the Number Matrix as input, scan this matrix, and depending on what they find they create another Matrix which is the one called
        availMatrix or availableMatrix.

        This matrix is a matrix for the available destinations/movements for a certain piece.

        For white pieces it draws a 1 for an empty square which is available as destination, a -1 for an available square that contains an enemy piece (so, a kill),
        and it also includes a -11, which indicates that this killing destination is actually a king, so a check.

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

        The this.pieceNumber is a different number for each piece. It goes from 1 to 32, since there's 32 pieces. It identifies every piece by a specific number which will not
        be shared by another piece.

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


--------------------------------------------------------------------

5) CODE TO COPY/PASTE

Copy this piece of JSON inside the settings.json file of your settings in VSCODE after installing the BETTER COMMENTS extension on VSCODE
(explained in 1.1) VisualStudio Code Extensions)

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


