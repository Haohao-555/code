// 父类
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
       this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    say() {
        console.log(this.name + "说话");
    }
}
let animal = new Animal("动物一", 1);

console.log(animal); // Animal { name: '动物一', age: 1 }

animal.say(); // 动物一说话

// 子类
class Dog extends Animal {
    constructor(name, age, color) {
        // 调用父类的构造函数
        super(name, age);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color
    }
    // 覆盖父类的方法
    say() {
       console.log(this.name + "说话（子类）");
    }
    // 自定义该类特有的方法
    eat() {
      console.log(this.name + "在吃骨头");
    }
}

let dog = new Dog("旺财", 2, "黑色");
console.log(dog.getName()); // 旺财
console.log(dog.getColor()); // 黑色

// 修改子类的颜色
dog.setColor("白色")
console.log(dog.getColor()); // 白色

// 调用该类的方法（子类或者父类）
dog.say();  // 旺财说话（子类）

// 调用子类的方法（特有）
dog.eat(); // 旺财在吃骨头