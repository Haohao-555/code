/**
 * 函数： 可重复利用的代码块
 * 箭头函数：简化了代码的书写风格（简约）
 * 
 * var foo = function(){}
 * let foo = () => {}
 *  
 * 应用：
 *    1、普通函数
 *    2、事件函数
 *    3、回调函数 setInterval(function(){})
 * 
 *    原型对象的函数不能使用箭头函数
 *   （箭头函数作用域没有 this 这个概念，找不到实例化对象）
 * 
 */

let btn = document.querySelector(".btn");
btn.onclick = function () {
    // this 是事件的调用者
    console.log(this);
}

btn.onclick = () => {
    console.log(this); // window
    console.log(btn); // 当前对象
}

// 面向对象 （封装性 继承性 多态性）
let aaa;
function Animal(name) {
    console.log(this, "指向实例对象");
    this.name = name;
}
Animal.prototype.eat = function () {
    aaa = this;
    console.log(this.name + "吃食物")
}

let housi = new Animal("猴子");
housi.eat();
console.log(houzi === aaa);

let daxiang = new Animal("大象");
daxiang.eat();


// 构造函数不能使用箭头函数
function Student(name) {
    this.name = name;
}
// 原型对象上的函数 不能采用箭头函数
// Student.prototype.say = () => {
//     console.log("say")
//     console.log(this.name+ "在说话");
// }

// 实例对象
let xiaoming = new Student("小明");
xiaoming.say();

/**
 * 总结：
 *    面向对象的编码方式，主要是把属性和方法添加到对象上，可以通过 this 找属性和方法。
 *    但是箭头函数作用域没有 this 所以构造函数对象的函数不能采用箭头函数，
 *    否则找不到对象上的属性和方法
 */



