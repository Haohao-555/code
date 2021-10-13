/**
 * 成员：对象的属性和方法
 * 静态：这些属性和方法不需要创建
 */

class Animal {
    // 静态属性
    static aName = "动物的名字";
    static aWeight = "动物的体重";
    static aAge = "动物的年龄";
}

console.log(Animal.aName); // 动物的名称

// a1 是 Animal 的实例化对象
let a1 = new Animal();
console.log(a1.aName); // undefined

class Car {
    // 静态方法
    static drive() {
        console.log(`车在行驶...`)
    }
}
Car.drive();  // 车在行驶...
let c1 = new Car();
c1.drive();  // c1.drive is not a function