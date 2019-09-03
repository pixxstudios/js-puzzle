export default class Board{
    constructor(boardSize) {
        this.boardSize = boardSize;
    }

    createBoard() {
        // create the board
        this.board = document.createElement('div');
        this.board.classList.add('board');
        document.querySelector('body').appendChild(this.board);
    }
}