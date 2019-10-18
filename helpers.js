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

function canSwap(left, right, top, bottom) {
    if (left === "" ||
        right === "" ||
        top === "" ||
        bottom === "") {
        return true;
    }
    return false;
}
export function TileClick(position, callback) {
    let index;
    let emptyTile;
    let left, right, top, bottom;
    tiles.forEach((tile, i) => {
        if (tile.innerHTML === position) {

            index = i;
        }
        if (tile.innerHTML === '') {
            emptyTile = i;
        }
        if (emptyTile === i) return;
    });
    // find neighbours
    // left
    // if position % 4 === 0 then no left neighbour
    if (index === 0 || index % 4 === 0) {
        left = null;
    } else {
        left = tiles[index - 1].innerHTML;
    }
    // right
    // if position % 3 === 0 then no right neighbour
    if (index === 3 ||
        index === 7 ||
        index === 11 ||
        index === 15) {
        right = null;
    } else {
        right = tiles[index + 1].innerHTML;
    }
    // top
    if (index < 4) {
        top = null;
    } else {
        top = tiles[index - 4].innerHTML;
    }
    // bottom
    if (index > 11) {
        bottom = null;
    } else {
        bottom = tiles[index + 4].innerHTML;
    }
    if (canSwap(left, right, top, bottom)) {
        let temp = tiles[index];

        tiles[index] = tiles[emptyTile];
        tiles[emptyTile] = temp;
        callback(tiles);
    }
}