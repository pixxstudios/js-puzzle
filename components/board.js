import Tiles from './tiles.js';

export default class Board{
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.numTiles = Math.pow(this.boardSize, 2);
    }

    addTiles(i) {
        const tiles = new Tiles(i);
        tiles.createTiles();
    }

    createBoard() {
        // create the board
        this.board = document.createElement('div');
        this.board.classList.add('board');
        document.querySelector('body').appendChild(this.board);

        for(var i=0; i<this.numTiles; i++) {
            this.addTiles(i);
        }
    }
}