/**
 * 
 */
async function foo() {
    //    await login();
    await login().then(data => console.log(data))
    console.log("其他任务");
}

// function login() {
//     setTimeout(function() {
//         console.log("任务一");
//     }, 1000)
// }

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("登录")
        }, 1000)
    })
}

foo()


