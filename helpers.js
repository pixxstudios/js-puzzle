let tiles;

export function Shuffle(array) {
    // randomly shuffle the array
    // return (arr.sort(() => Math.random() - 0.5));
    tiles = array;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function TileClick(position) {
    let index;
    let emptyTile;
    let left, right, top, bottom;
    tiles.forEach((tile, i) => {
        if (tile.innerHTML === position) {
            index = i;
        }

        if(tile.innerHTML === '') {
            emptyTile = i;
        }

        if (emptyTile === i) return;
    });
    // find neighbours
    // left
    // if position % 4 === 0 then no left neighbour
    if (index === 0 || index%4 === 0) {
        left = null;
    }
    // right
    // if position % 3 === 0 then no right neighbour
    if (index === 0 || index%4 === 0) {
        left = null;
    } else {
        left = tiles[index-1];
    }
    // top
    // bottom
    console.log(position, index, emptyTile, left);
}