export default class Tiles{
    constructor(id) {
        this.id = id;
    }

    createTiles() {
    // Create the tiles
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.innerHTML = this.id.toString();
    // Tiles.push(tile);
    return tile;
    }
}