export function Shuffle(arr) {
    // randomly shuffle the array
    return (arr.sort(() => Math.random() - 0.5));
}
