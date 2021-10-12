let obj = {};

// 调用定义书写的方法
Object.defineProperty(obj, "message", {
    value: "这是一个好消息",
    writable: false, // 禁止修改 message 属性
    configurable: false, // 禁止删除 message 属性
    enumerable: false // 禁止遍历 message 属性
})
console.log(obj.message);