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


how to git (Terminal) :    
    - cambiar codi
    - write terminal: git status || --> identify modified files in terminal
    - write terminal: git add --all || (or git add filename) --> add a new file(s)
    - write terminal: git commit -m "message" || --> commit with explanatory message
    - write terminal: git push -u origin master --> pushes changes to github :D
GRACIES MICHI :) ^^ 



map thru a matrix ---------------------------
matrix.map((row) => {
    Object.values(row)
    Object.values(row).map((position) => {})
})

matrix.map((row) => {
    Object.values(row)
    Object.values(row).map((position) => {
        if (position != 0) {
            if (turn == 1) {
                if (position.pieceColor == "white") {

                }
            }
            if (turn == -1) {
                if (position.pieceColor == "black") {

                }
            }
        }
    })
})



Reglas:

- Jaque ✔ ✔ ✔

    - Nueva posición genera un Jaque al rival ✔ ✔

        - Obligar rival a tapar, matar o mover el rey ✔

    - Pieza clavada ✔ ✔ ✔

        - Lugares permitidos ✔ 

        - Matar agresor ✔
        
    - Jaque Mate ✔


- Peón ✔ ✔

    - Coronación ✔

    - Peón al paso ✔


- Enroque ✔ ✔ ✔ ✔ ✔

    - Rey no bajo jaque ✔

    - Piezas no movidas ✔

    - Camino libre de piezas ✔

    - Pieza atacando el camino del enroque ✔


- Tablas ✔ ✔ ✔ 

    - Falta de material ✔ ✔ ✔ ✔ ✔
        - Rey contra rey ✔
        - Rey y caballo contra rey ✔
        - Rey y alfil contra rey ✔
        - Rey y alfil contra rey y alfil (si los alfiles controlan casillas del mismo color) ✔
        - Rey y dos caballos contra rey ✔

    - Rey ahogado ✔

    - Repetición movimientos ✔


--------
TODO:

- ALERT AT END GAME
- COHERENT CODE
- README
- COMMENT