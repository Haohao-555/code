class Medical {
    constructor(name, age, sex, role) {
        this.name = name
        this.age = age
        this.sex = sex
        this.role = role
    }
    search() {
        console.log(`${this.name}在查询信息`);
    }
}

// 医生
class Doctor extends Medical {
    constructor(name, age, sex, role, station) {
        super(name, age, sex, role)
        this.station = station
    }
    record() {
        console.log(`${this.role}在录入病人信息`)
    }
}
let d1 = new Doctor("大壮", 30, "男", "医生", "外科");
console.log(d1);
d1.record();

// 护士
class Nurse extends Medical {
    constructor(name, age, sex, role) {
        super(name, age, sex, role)
    }
    give() {
        console.log(`${this.name}${this.role}在照顾病人`);
    }
}
let n1 = new Nurse("翠花", 23, "女", "护士");
console.log(n1);
n1.give();

// 病人
class Patient extends Medical {
    constructor(name, age, sex, role) {
        super(name, age, sex, role);
    }
    pay() {
      console.log(`${this.name}${this.role}在支付药物费用`)
    }
}
let p1 = new Patient("二狗", 26, "男", "病人")
console.log(p1)
p1.pay()
