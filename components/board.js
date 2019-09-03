import Tiles from './tiles.js';
import { Shuffle } from '../helpers.js';

export default class Board{
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.numTiles = Math.pow(this.boardSize, 2);
        this.Tiles = [];
    }

    addTiles(i) {
        const tiles = new Tiles(i);
        this.Tiles.push(tiles.createTiles());
    }

    createBoard() {
        // create the board
        this.board = document.createElement('div');
        this.board.classList.add('board');
        document.querySelector('body').appendChild(this.board);

        for(var i=0; i<this.numTiles; i++) {
            this.addTiles(i);
        }

        Shuffle(this.Tiles);
        this.Tiles.forEach(tile => this.board.appendChild(tile));
    }
}