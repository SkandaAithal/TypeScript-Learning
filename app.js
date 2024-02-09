"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a + b.toString();
    }
}
const result = add("max", "sigh");
result.split("");
console.log(add("2", 14));
const objtype = {
    num1: 12,
    color: "red",
};
console.log(objtype.num1);
let abc;
abc = [{ a: 1 }, { b: "2" }];
console.log(abc);
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
    Direction[Direction["LEFT"] = 4] = "LEFT";
})(Direction || (Direction = {}));
const where = Direction.LEFT;
console.log(where);
function sendrequest(data, cb) {
    return cb({ data: "hi" });
}
console.log(sendrequest("hello", (respo) => {
    console.log(respo);
    return true;
}));
// arrow function
const prints = (output) => console.log(output);
prints(2222);
//default parameters
const xyz = (a, b = 0, c = 0) => a + b + c;
console.log(xyz(9));
// classes
// class myobject {
// objectname: string;
// count: number;
// private employees: string[] = [];
// constructor(private objectname: string, private readonly count: number) {
// this.objectname = n;
// this.count = m;
//   }
//   describe() {
//     console.log(this.count);
//   }
//   addEmployee(...name: string[]) {
//     this.employees.push(...name);
//     console.log(this.employees);
//     console.log(this.objectname);
//   }
// }
// class myobject2 extends myobject {
//   // admins: string[] = [];
//   constructor(count: number, public admins: string[]) {
//     super("Admin", count);
//   }
// }
// let bitcoin = new myobject("bitcoin", 78);
// bitcoin.describe();
// bitcoin.addEmployee("xyz");
// let IT = new myobject2(33, ["max"]);
// console.log(IT);
// let obj2: { count: number; describe: Function } = {
//   count: 222222,
//   describe: bitcoin.describe,
// };
// obj2.describe();
class Department {
    static createEmployee(name) {
        return { name };
    }
    set setEmployee(value) {
        this.empoloyees.push(value);
    }
    get employeeeDetails() {
        return this.empoloyees;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.empoloyees = [];
    }
    addEmployee(...name) {
        this.empoloyees.push(...name);
        Department.allemployyes.push(...name);
    }
}
Department.allemployyes = [];
class ITDepatment extends Department {
    constructor(id, admin) {
        super(id, "IT DEPARTMENT");
        this.admins = [];
        this.admins = admin;
        this.addEmployee(...admin);
    }
    printEmployees() {
        console.log(this.id);
    }
}
let IT = new ITDepatment("x1", ["Panna", "Ram"]);
console.log(IT);
class Accountingepartment extends Department {
    printEmployees() {
        console.log(this.id);
    }
    constructor(id, reports) {
        super(id, "Accounts DEPARTMENT");
        this.reports = reports;
    }
    addReports(report) {
        this.reports.push(report);
    }
    static getinstance() {
        if (Accountingepartment.instance) {
            return this.instance;
        }
        else {
            return (this.instance = new Accountingepartment("x2", []));
        }
    }
}
let accounting = Accountingepartment.getinstance();
accounting.addReports("finale");
accounting.addEmployee("abc", "def", "ghi");
accounting.employeeeDetails;
console.log(accounting.employeeeDetails.push("hijk"));
accounting.setEmployee = "xyz";
console.log(accounting);
let accounting2 = Accountingepartment.getinstance();
console.log(accounting2);
console.log(accounting === accounting2);
console.log(Department.allemployyes);
console.log(Department.createEmployee("skanda~"));
accounting.printEmployees();
IT.printEmployees();
let plant1;
plant1 = {
    name: "grass",
    category: "herb",
    height: 2,
    describePlant() {
        console.log(this.name, this.category, this.height);
    },
};
plant1.describePlant();
class Person {
    constructor(name, age, job, time, salary) {
        this.description = "";
        this.name = name;
        this.age = age;
        this.job = job;
        this.time = time;
        this.salary = salary;
    }
    giveDescription(value) {
        this.description = value;
    }
}
let person1 = new Person("abc", 3, "sde", 23, 30000);
console.log(person1);
let emp1 = {
    name: "rak",
    privileges: ["a", "b"],
    salary: 2000,
};
let que = "krishna"; //it is a string type
// type guards
function printType(obj) {
    console.log(obj.name);
    if ("salary" in obj) {
        console.log(obj.salary);
    }
    if ("privileges" in obj) {
        console.log(obj.privileges);
    }
}
let unkemp = {
    name: "brave",
    salary: 20,
};
printType(unkemp);
class Car {
    drive() {
        console.log("drivinh car");
    }
}
class Truck {
    drive() {
        console.log("driving truck");
    }
    loadCargo(cargo) {
        console.log("loading cargo " + cargo);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ("loadCargo" in vehicle) {
    //   vehicle.loadCargo(299);
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(0);
    }
}
useVehicle(v2);
useVehicle(v1);
function movingAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log(animal.fly);
            break;
        case "horse":
            console.log(animal.run);
    }
}
movingAnimal({ type: "bird", fly: "fly" });
movingAnimal({ type: "horse", run: "run" });
const error = {
    email: "sn c s",
    password: "nooo",
};
//generics
const arr = [];
// arr[0].split("");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I have fulfilled");
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
function merge(obj, objb) {
    return Object.assign(obj, objb);
}
const mergeobject = merge({ name: "max" }, { age: 10 });
console.log(mergeobject);
function countAndPrint(element) {
    let description = "Got 0 elements";
    if (element.length === 1) {
        description = "Got 1 element";
    }
    else {
        description = "Got" + element.length + "element";
    }
    return [element, description];
}
//generic class
class DataStroage {
    constructor() {
        this.storage = [];
    }
    additem(item) {
        return this.storage.push(item);
    }
    removeItem(item) {
        return this.storage.splice(this.storage.indexOf(item), 1);
    }
    printStorage() {
        console.log(this.storage);
    }
}
const disk = new DataStroage();
disk.additem("jij");
disk.additem("jij");
disk.additem("jiiii");
disk.printStorage();
const box = new DataStroage();
box.additem(10);
box.additem(1000);
box.additem(10000);
box.printStorage();
const arr1 = ["ams", "sld"];
// Decorators
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Persona = class Persona {
    constructor() {
        this.name = "MAX";
        console.log("Creating person object..");
    }
};
Persona = __decorate([
    Logger("Im logging")
], Persona);
let per1 = new Persona();
console.log(per1);
