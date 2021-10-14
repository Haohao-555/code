/**
 * Genterator
 * 在函数名称之前添加 *
 * yield 对业务逻辑进行分割的关键字
 */
function *foo() {
    yield function() {return"第一个任务"};
    yield function() {return"第二个任务"};
    yield function() {return"第三个任务"};
}
let obj = foo();
console.log(obj); // Object [Generator] {}

let firstTask = obj.next();
let secondTask = obj.next();
let thirdTask = obj.next();

// console.log(firstTask); // { value: [Function (anonymous)], done: false }
// console.log(secondTask); // { value: [Function (anonymous)], done: false }
// console.log(secondTask);  // { value: [Function (anonymous)], done: false }


console.log(firstTask.value()); //  第一个任务
console.log(secondTask.value()); // 第二个任务 
console.log(secondTask.value()); // 第三个任务 