// let obj = {
//     a: 1,
//     b: 2,
// }
// let demo = ({ a, b }) => {
//     console.log(a, b);
// }
// demo(obj);

// 记录数据的时候（声明变量）
// let url = "127.0.0.1";
// let port = 8080;
// let type = "get";
// console.log(url, port, type);

// 数组解构
let [url, port, type, aaa = 123] = ["127.0.0.1", "port", "type"];
console.log(url, port, type, aaa); // aaa = 123

// 注意：
let data = [
    {color: "red"},
    {color: "green"},
    {color: "blue"},
]
// 取值（缺少省略值）
let[red, ,blue] = data;
console.log(red); 
console.log(blue)

/**
 * 左右两侧的数据解构需要一致
 * 可以拥有多个变量
 * 可以缺省值
 */

