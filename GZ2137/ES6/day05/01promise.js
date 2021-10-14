// // 同步编程
// console.log(1);
// console.log(2);
// console.log(3);

// // 异步编程
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// console.log(3);


/**
 * Promise 对象是一个构造函数，操作异步编程
 * 提供一系列处理异步的API
 *        then()
 *        catch()
 *        finall()
 *        all()
 *        race()
 */

/**  
 * 创建 Promise 实例对象 
 * 参数是函数，这个函数带有俩个形参（resolve, reject）
 * resolve 表达式执行满足条件的逻辑，符合条件调用 resolve
 * reject 表达式执行不满足条件的逻辑，不符合条件调用 reject
 */
let p1 = new Promise(function (a, b) { })
let p2 = new Promise(function (resolve, reject) {
    // document.querySelector(".btn").onclick = () => {
    //     resolve("数据xxxx")
    // }

    // resolve("数据xxx");
    reject("不符合条件的逻辑");
})
//  console.dir(p2)

/**
 *  then 是 Promise 构造函数原型上的方法
 *  then 函数1接收两个参数（1、对应 resolve 的逻辑 2、对应 reject 的逻辑）
 *  这里的 p2 是 Promise 的实例的对象
 */
p2.then(
    (data) => { console.log(data) }, 
    () => { console.log("不符合逻辑")}
);

/**
 *  通过原型调用 catch 的方法
 *  这里主要作用是避免在 Promise 中直接使用 reject() 报错
 *  error 接收 reject() 传递过来的参数
 */
p2.catch(
    error => console.log(error)
)



// let p3 = new Promise((resolve, reject) => {
//    reject("不满足条件");
//     //   resolve("数据")
// }).then(data => {
//    console.log("任务完成",data);
// }).catch(error => {
//     console.log("有错误",error);
// })

// 对比 p2 和 p3
// console.dir(p3)