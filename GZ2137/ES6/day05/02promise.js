let n1 = 10;
let n2 = 7;
let promise = new Promise((resolve, reject) => {
    let v1 = 4;
    if(n1 - n2 == v1) {
        resolve({code: 200, message: "正确"})
    }else {
        reject({code: -1, message: "错误"});
    }
})

promise.then(
    data => console.log(data),
    error => console.log(error)
)

