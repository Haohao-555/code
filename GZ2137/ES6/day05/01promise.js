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

let p2 = new Promise(function (resolve, reject) {
    // resolve("数据xxx");
    reject("不符合逻辑"); 
})


/**
 *  then 是 Promise 构造函数原型上的方法
 *  then 函数1接收两个参数（1、对应 resolve 的逻辑 2、对应 reject 的逻辑）
 *  这里的 p2 是 Promise 的实例的对象
 */
// p2.then(
//     (data) => { console.log(data) }, 
//     (err) => { console.log(err)}
// );

/**
 *  通过实例对象调用 catch 的方法
 *  这里主要作用是避免在 Promise 中使用 reject() 没有接收函数进行处理时会报错
 *  使用 then 的方法也可以解决
 */
// p2.catch(
//     error => console.log(error)
// )



/**
 * 而对于下面这种类型的  reject("不满足条件");
 * 则必须添加 catch
 */
// let p3 = new Promise((resolve, reject) => {
//     reject("不满足条件");
//     //   resolve("数据");
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

