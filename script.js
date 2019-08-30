import { Shuffle } from './util.js';

(function(){
    // variables
    let Tiles = [];
    let TileNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    // create the board
    let board = document.createElement('div');
    board.classList.add('board');
    document.querySelector('body').appendChild(board);


    TileNums = Shuffle(TileNums);

    // Create the tiles
    for(let i=1 ; i<16; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = TileNums[i-1].toString();

        Tiles.push(tile);
        board.appendChild(tile);
    }
})();