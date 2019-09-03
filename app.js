import { Shuffle } from './helpers.js';
import Board from './components/board.js';

(function(){
    // variables
    let Tiles = [];
    const boardSize = 4;
    const board = new Board(boardSize);
    board.createBoard();

    // create blank tile
    let blankTile  = document.createElement('div');
    blankTile.classList.add('blankTile');
    Tiles.push(blankTile);

    Shuffle(Tiles);
    // Tiles.forEach(tile => board.appendChild(tile));
})();