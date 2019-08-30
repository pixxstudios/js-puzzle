(function(){
    let Tiles = [];
    let board = document.createElement('div');
    board.classList.add('board');

    document.querySelector('body').appendChild(board);

    for(let i=0 ; i<15; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');

        Tiles.push(tile);
        board.appendChild(tile);
    }
})();