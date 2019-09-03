export default class Tiles{
    constructor(id) {
        this.id = id;
    }

    createTiles() {
        // Create the tiles
        if(this.id === 0) return this.addEmptyTile();
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = this.id.toString();
        return tile;
    }

    addEmptyTile() {
        // create blank tile
        let blankTile  = document.createElement('div');
        blankTile.classList.add('blankTile');
        return blankTile;
    }
}