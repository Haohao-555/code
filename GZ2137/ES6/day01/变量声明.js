/**
 *  变量提升
 *  var a;
 *  console.log(a);
 *  a = 1;
 */
// console.log(a);
// var a = 1; // undefined

// let 关键字 声明变量

// 变量不会提升
// console.log(b); // Cannot access 'b' before initialization
// let b = 2;

// 变量不能重复声明
// let b = 3; // Identifier 'b' has already been declared
// var b = 4; // Identifier 'b' has already been declared

// 可以产生块作用域
// ES5
// {
//     var num = 5;
// }
// console.log(num); // 5
// if(true) {
//   let a = 12; 
//   var a = 12;   
// }
console.log(a); 

// ES6
// {
//     let num = 5;
// }
// console.log(num); // num is not defined

// const 关键字 声明常量（基本数据类型）
// const A = 100;
// A = 200; // TypeError: Assignment to constant variable.

// const B = {a: 100};
// B.a = 200;
// console.log(B.a); // 200

