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

        }
    }

    ontileClick() {

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