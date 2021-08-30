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
*/

// 1.0 定义 myJquery 函数 返回对象 (工厂模式)
function myJquery(selector){
    // 返回Init构造函数的实例
    return new Init(selector);
}
// 2.0 
// 定义 init 函数 （构造函数）
// 构造函数 添加属性
function Init(str) {
    if(typeof str == "string"){
        // 标签的伪数组
        this.elements = document.querySelectorAll(str);
    }
}
// 原型     添加方法
// 设置元素的样式
Init.prototype.css = function(prop,value){
    // 循环标签数组
    for(var index = 0 ; index < this.elements.length ; index ++){
        // 设置样式
        this.elements[index].style[prop] = value;
    }
}
// 设置元素的隐藏
Init.prototype.hide = function(){
    // 循环标签数组
    for(var index = 0 ; index < this.elements.length ; index ++){
        // 设置样式
        this.elements[index].style["display"] = "none";
    }
}
// 设置元素的显示
Init.prototype.show = function(){
    // 循环标签数组
    for(var index = 0 ; index < this.elements.length ; index ++){
        // 设置样式
        this.elements[index].style["display"] = "block";
    }
}
// 设置myJquery别名
window._ = window.myJquery = myJquery;


// JS库的本质就是JS.
// 在原生的javascript的基础上进行封装了
