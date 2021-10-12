// 目标对象
let data = {}
// 创建实例（返回一个可以处理属性的对象）
/**
 * Proxy
 * 参数1： 目标对象
 * 参数2： 监听处理过程
 */
let o1 = new Proxy(data, {
    get(target, key) {
        if(key == "message") {
            return  undefined;
        }else {
            return target[key];
        }
    },
    set(target, key, value) {
        if(key == "password") {
            target[key] = 123456
        }
        target[key] = value;
    }
})
// o1.message = "这是个好消息"
// let msg = o1.message;
// console.log(msg); // undefined

// o1.password = "55555"
// let pwd = o1.password;
// console.log(pwd); //123456 

/**
 * Reflect
 * 对对象进行操作的API
 */
let obj = {
    x:100,
    y:200
}

// 判断是否存在 x 属性
// console.log(Reflect.has(obj, "x")); // true
// console.log(Reflect.has(obj, "w")); // false
// console.log(Reflect.has(obj, "h")); // false

// 获取属性值
// let x0 = Reflect.get(obj, "x");
// console.log("x:", x0); // x: 100

// 设置属性值
// Reflect.set(obj, "y", "400px");
// console.log(obj); // { x: 100, y: '400px' }

