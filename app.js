"use strict";
function add(a, b) {
    if (typeof a === "number") {
        return a + b;
    }
    else {
        return a + b.toString();
    }
}
console.log(add("2", 14));
let alias;
alias = add;
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
console.log(alias(2, 0));
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
console.log("");
