/*
* author: zhangsan
* date: 2021-08-30
* v1.0.0
* myJquery js lib v1.0.0 (简单版)
*
*
* 1.获取页面元素
* 2.设置页面标签的样式
* 3.显示元素
* 4.隐藏元素
* 5.添加类名
* 6.移除类名
* 7.获取兄弟元素
*/

// 1.0 定义 myJquery 函数 返回对象 (工厂模式)
function myJquery(selector) {
    // 返回Init构造函数的实例
    return new Init(selector);
}
// 2.0 
// 定义 init 函数 （构造函数）
// 构造函数 添加属性
function Init(str) {
    if (typeof str == "string") {
        // 标签的伪数组
        this.elements = document.querySelectorAll(str);
    }
}
// 原型     添加方法
// 设置元素的样式
Init.prototype.css = function (prop, value) {
    // 循环标签数组
    for (var index = 0; index < this.elements.length; index++) {
        // 设置样式
        this.elements[index].style[prop] = value;
    }
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}
// 设置元素的隐藏
Init.prototype.hide = function () {
    // 循环标签数组
    for (var index = 0; index < this.elements.length; index++) {
        // 设置样式
        this.elements[index].style["display"] = "none";
    }
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}
// 设置元素的显示
Init.prototype.show = function () {
    // 循环标签数组
    for (var index = 0; index < this.elements.length; index++) {
        // 设置样式
        this.elements[index].style["display"] = "block";
    }
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}
// 添加类名
Init.prototype.addClass = function(cName){
     // 循环标签数组
     for (var index = 0; index < this.elements.length; index++) {
        // 设置样式
        this.elements[index].classList.add(cName);
    }
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}
// 移除类名
Init.prototype.removeClass = function(cName){
    // 循环标签数组
    for (var index = 0; index < this.elements.length; index++) {
        // 设置样式
        this.elements[index].classList.remove(cName);
    }
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}
// 获取兄弟元素（排他逻辑）
Init.prototype.siblings = function(selector){
    // 当前选择的标签
    var el = this.elements[0];
    // 获取当前标签的父元素
    var parentEl = el.parentElement;
    // parentEl.removeChild(el);
    // 获取父元素的所有子元素
    var childs = parentEl.children;
    // var childs = parentEl.querySelectorAll("selector");
    // 定义数组
    var arr = [];
    // 循环childs标签数组
    for(var i = 0 ; i < childs.length ; i ++){
        // 排除当前选择的标签
        if(childs[i] == el ){
            // 跳出当前的循环
            continue;
        }
        // 把其他元素(兄弟元素添加数组)
        arr.push(childs[i]);
    }
    // 兄弟元素标签数组
    this.elements = arr;
    // console.log(arr);
    // 返回当前函数作用域的this(实现链式操作的重要代码)
    return this;
}



// 设置myJquery别名
window._ = window.myJquery = myJquery;


// JS库的本质就是JS.
// 在原生的javascript的基础上进行封装了
