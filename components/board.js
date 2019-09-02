export default class Board{
    constructor(boardSize) {
        this.boardSize = boardSize;
    }

    createBoard() {
        // create the board
        let board = document.createElement('div');
        board.classList.add('board');
        document.querySelector('body').appendChild(board);
    }
}