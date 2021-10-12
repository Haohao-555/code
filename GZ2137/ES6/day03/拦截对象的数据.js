// 定义对象
let model = {
    
}

// 监听 model 对象属性 message 的读写
Object.defineProperty(model, "message", {
    /**
     * 设置了 get set 时，不能设置 value 和 writable 
     */
    get() { // 读取
        return this.value + "123"
    },
    set(v1) { // 写入
        this.value = v1
    },
})

// console.log(model.message);
// 设置
model.message = "今天天气要下雨..."

// 获取属性值
console.log(model.message);
