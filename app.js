import Board from './components/board.js';

(() => {
    function init() {
        newGame();
        newGameButton();
    }

    function newGame() {
        const boardSize = 4;
        const board = new Board(boardSize);
        board.createBoard();
    }

    function newGameButton() {
        const newGameBtn = document.createElement('button');
        
    }

    init();
})();