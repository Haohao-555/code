/**
 * race()
 * 多个 promise 实例执行时，比较那个 promise 执行的效率更高（快）
 * 调用对象 Promise.race()
 */

let p1 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第一个任务")
        }, 1000)
    }
)

let p2 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            resolve("第二个任务")
        }, 500)
    }
)

let p3 = new Promise(
    (resolve, reject) => {
        let d = setTimeout(() => {
            // resolve("第三个任务")
            reject("任务失败")
        }, 2000)
    }
)

// let pro = Promise.race([p1, p2, p3]);
// pro.then(
//     (data) => {
//         console.log(data); // 第二个任务
//     },
// ).catch(error => console.log(error))

/**
 * 全部执行 Promise.all()
 */
let pro2 = Promise.all([p1, p2, p3]);
pro2.then(
    (data) => {
        // [ '第一个任务', '第二个任务', '第三个任务' ]
        console.log(data);
    }
)