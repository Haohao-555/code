/**
 * 
 * @param {number} max 最大值 
 * @param {number} min 最小值
 * @returns 
 */
var demo = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(demo(5, 1));

