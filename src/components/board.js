export class Board {
    constructor({ boardSize, tileSize, onGameWin }) {
        this.boardSize = boardSize;
        this.tileSize = tileSize;
        this.onGameWin = onGameWin;
    }
}