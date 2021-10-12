function myObject(target) {
    return new Proxy(target, {
        get(target, prop){
            console.log(1)
           if(Reflect.has(target, prop)) {
               return Reflect.get(target, prop)
           }else {
               return "当前对象没有这个属性"
           }
        },
        set(target, prop, value){
            console.log(2)
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

 user = myObject(user);

console.log(user.name); // admin
console.log(user.x); // 当前对象没有这个属性

user.message = "xxx";
console.log(user.message); // xxx
