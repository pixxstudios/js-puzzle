import { Board } from './board.js';

export class Game {
    constructor() {
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'game-container';

        const boardSize = 4;
        const tileSize = 100;

        this.board = new Board({
            boardSize,
            tileSize,
            onGameWin: () => onGameWin()
        });

        this.gameContainer.appendChild(this.board.element);
    }

    get element() {
        return this.gameContainer;
    }
}  