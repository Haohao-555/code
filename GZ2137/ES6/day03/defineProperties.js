let obj = {}
Object.defineProperties(obj, {
    message: {
        value: "这是个好消息",
        wirtable: false,
    },
    color: {
        get() {
            return this.value
        },
        set(v1) {
            this.value = v1
        }
    },
})
obj.color = "red"
console.log(obj);