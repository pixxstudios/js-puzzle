(function(){
    // variables
    let Tiles = [];


    // create the board
    let board = document.createElement('div');
    board.classList.add('board');
    document.querySelector('body').appendChild(board);

    // Create the tiles
    for(let i=1 ; i<16; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = i.toString();

        Tiles.push(tile);
        board.appendChild(tile);
    }
})();