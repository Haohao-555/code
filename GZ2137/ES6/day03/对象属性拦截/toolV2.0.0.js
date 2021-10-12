function myObject(target, prop, value) {
    return new Proxy(target, {
        get(target, prop){
           if(Reflect.has(target, prop)) {
               return Reflect.get(target, prop)
           }else {
               return "当前对象没有这个属性"
           }
        },
        set(target, prop, value){
             Reflect.set(target, prop, value);
        }
    })
}
// 测试

// 定义一个用户
let user = {
    name: "admin",
    password: "123123",
    message: "这是一个好消息"
}

let o1 = myObject(user, "name");

console.log(o1.name); // admin
console.log(o1.x); // 当前对象没有这个属性

o1.message = "xxx";
console.log(o1.message); // xxx
