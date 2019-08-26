export class Board {
    constructor({ boardSize, tileSize, onGameWin }) {
        this.boardSize = boardSize;
        this.tileSize = tileSize;
        this.onGameWin = onGameWin;
        this.tileMargin = 0;
        this.tiles = [];
        this.tileOrder = [];

        this.boardContainer = document.createElement('div');
        this.boardContainer.className = 'board-container';

        this.setTileMargin();
        this.initBoard();
    }

    // create tile elements and add to the board
    initBoard() {
        const numTiles = Math.pow(this.boardSize, 2);
        this.tiles = [];

        this.tileOrder = Array(numTiles).fill(0).map((el, i) => i);

        /* do {
            Helpers.shuffleArray(this.tileOrder);
        } while(!this.isSolvable() || this.hasWon()) */

        // add tiles to board
        let curRow = 1;
        let curCol = 1;
        for(let i=0; i<numTiles; i++) {
            // ignore 0 which is the blank space
            if(this.tileOrder[i] !== 0) {
                const tile = new tile({
                    number: this.tileOrder[i],
                    size: this.tileSize,
                    margin: this.tileMargin,
                    row: curRow,
                    col: curCol,
                    onClickHandler: (number) => this.onTileClick(number)
                });
                this.tile.push(tile);
                this.boardContainer.appendChild(tile.element);
            }
            if (curCol < this.boardSize) {
                curCol++;
            } else {
                curCol = 1;
                curRow++;
            }
        }
        this.setBoardHeight();
    }

    onTileClick() {

    }

    isSolvable() {

    }

    getTileMoveDirections() {

    }

    hasWon() {

    }

    // clear and rebuild board
    getBoardSize() {

    }

    setTileSize() {

    }

    getBoardHeight() {

    }

    setTileMargin() {
        
    }

    get element() {
        return this.boardContainer;
    } 
}