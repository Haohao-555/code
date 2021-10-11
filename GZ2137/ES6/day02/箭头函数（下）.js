// 箭头函数传递参数

/**
 * 
 * 一个参数可以省略括号，一条执行语句可以省略花括号
 */
let myAlert01 = message => console.log(message);
myAlert01("hello world 123");

/**
 * 默认参数 
 */
let myAlert02 = (message = "你好，世界", date = "2021") => {
    console.log(message);
    console.log(date)
}
myAlert02();


