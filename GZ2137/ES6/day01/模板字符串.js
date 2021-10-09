let s1 = `<h1>模板字符串</h1>`
let s2 = `<div>`
let s3 = `</div>`
let str = `${s2}${s1}${s3}`
// console.log(str); // <div><h1>模板字符串</h1></div>

let add = `${1 + 1}`;
// console.log(add);  // 2

let flag = `${1 > 2 ? false : true}`;
// console.log(flag);  // true

function num() {
    return 1;
}
let n = `${num()}`
// console.log(n); // 1

function num1() {}
let n1 = `${num()}`
// console.log(n1); // undefined

 
