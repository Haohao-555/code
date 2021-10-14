let a = 10;
let b = 6;
let vcode = (v1) => {
    return new Promise((resolve, reject) => {
        console.log(v1)
        if (a - b == v1) {
            resolve({ code: 200, message: "正确" })
        } else {
            reject({ code: -1, message: "错误" })
        }
    })
}

// let pro = vcode(5)
let pro = vcode(4)

pro.then(
    data => console.log(data),
    err => console.log(err)
)

pro.finally(
    () => {
        console.log("不够成功与否，都会执行")
    }
)