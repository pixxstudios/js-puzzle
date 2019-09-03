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

    // Create the tiles
    const numTiles = Math.pow(boardSize, 2);
    for(let i=1 ; i<numTiles; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = i.toString();
        Tiles.push(tile);
    }

    Shuffle(Tiles);
    // Tiles.forEach(tile => board.appendChild(tile));
})();