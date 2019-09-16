import Board from './components/board.js';

(() => {
    function init() {
        newGameButton();
        newGame();
    }

    function newGame() {
        const boardSize = 4;
        const board = new Board(boardSize);
        board.clearBoard();
        board.createBoard();
    }

    function newGameButton() {
        const newGameBtn = document.createElement('button');
        newGameBtn.innerText = "New Game";
        newGameBtn.classList.add('newGameBtn');
        newGameBtn.addEventListener('click', newGame);
        document.querySelector('body').appendChild(newGameBtn);
    }

    init();
})();