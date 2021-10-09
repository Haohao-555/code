let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let randomColor = () => {
    var index = Math.floor(Math.random() * 16);
    return arr[index];
}
console.log(
    `#${randomColor()}${randomColor()}${randomColor()}${randomColor()}${randomColor()}${randomColor()}`
)