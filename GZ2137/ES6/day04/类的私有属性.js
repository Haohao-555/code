/**
 * 私有： 是指类的内部使用
 * # 标记私有
 */

class Page {
    #color = "red";
    css() {
        console.log(this.#color);
    }
}

let p1 = new Page();
p1.css();
console.log(p1.#color); // 报错
console.log(p1.color); // undefined
