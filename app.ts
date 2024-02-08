type Combine = number | string;
function add(a: Combine, b: number): Combine {
  if (typeof a === "number") {
    return a + b;
  } else {
    return a + b.toString();
  }
}
console.log(add("2", 14));
let alias: (a: Combine, b: number) => Combine;
alias = add;
const objtype: {
  num1: number;
  color: string;
} = {
  num1: 12,
  color: "red",
};
console.log(objtype.num1);
let abc: object[];
abc = [{ a: 1 }, { b: "2" }];
console.log(abc);
enum Direction {
  UP = 1,
  DOWN,
  RIGHT,
  LEFT,
}

const where: Direction = Direction.LEFT;
console.log(where);
console.log(alias(2, 0));

function sendrequest(data: string, cb: (res: any) => void) {
  return cb({ data: "hi" });
}

console.log(
  sendrequest("hello", (respo) => {
    console.log(respo);
    return true;
  })
);

// arrow function
const prints: (a: number) => void = (output) => console.log(output);
prints(2222);

//default parameters
const xyz = (a: number, b: number = 0, c: number = 0): number => a + b + c;
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

abstract class Department {
  static allemployyes: string[] = [];
  static createEmployee(name: string): object {
    return { name };
  }
  private empoloyees: string[] = [];

  set setEmployee(value: string) {
    this.empoloyees.push(value);
  }
  get employeeeDetails() {
    return this.empoloyees;
  }
  constructor(protected readonly id: string, private name: string) {}

  addEmployee(...name: string[]) {
    this.empoloyees.push(...name);
    Department.allemployyes.push(...name);
  }

  abstract printEmployees(): void;
}
class ITDepatment extends Department {
  admins: string[] = [];
  constructor(id: string, admin: string[]) {
    super(id, "IT DEPARTMENT");
    this.admins = admin;
    this.addEmployee(...admin);
  }
  printEmployees(): void {
    console.log(this.id);
  }
}

let IT = new ITDepatment("x1", ["Panna", "Ram"]);
console.log(IT);
class Accountingepartment extends Department {
  private static instance: Accountingepartment;
  printEmployees(): void {
    console.log(this.id);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounts DEPARTMENT");
  }

  addReports(report: string) {
    this.reports.push(report);
  }

  static getinstance() {
    if (Accountingepartment.instance) {
      return this.instance;
    } else {
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

// Interfaces
interface Plants {
  name: string;
  category: string;
  height: number;
  describePlant(): void;
}

let plant1: Plants;
plant1 = {
  name: "grass",
  category: "herb",
  height: 2,
  describePlant() {
    console.log(this.name, this.category, this.height);
  },
};
plant1.describePlant();

interface Name {
  readonly name: string;
  age: number;
}
interface Job {
  job: string;
  time: number;
}
interface Salary extends Job {
  salary: number;
}

class Person implements Name, Salary {
  name: string;
  age: number;
  job: string;
  salary: number;
  readonly time: number;
  description: string = "";
  constructor(
    name: string,
    age: number,
    job: string,
    time: number,
    salary: number
  ) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.time = time;
    this.salary = salary;
  }

  giveDescription(value: string) {
    this.description = value;
  }
}
let person1 = new Person("abc", 3, "sde", 23, 30000);
console.log(person1);
