type Combine = number | string;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combine, b: Combine): Combine {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a + b.toString();
  }
}
const result = add("max", "sigh");
result.split("");
console.log(add("2", 14));

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

type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  salary: number;
};

type ElevatedEmployee = Admin & Employee;

let emp1: ElevatedEmployee = {
  name: "rak",
  privileges: ["a", "b"],
  salary: 2000,
};

type UnkownEmployee = Admin | Employee;

type human = string | number;
type god = string | boolean;
type godly = human & god;
type asur = human | god;
let que: godly = "krishna"; //it is a string type

// type guards
function printType(obj: UnkownEmployee) {
  console.log(obj.name);
  if ("salary" in obj) {
    console.log(obj.salary);
  }
  if ("privileges" in obj) {
    console.log(obj.privileges);
  }
}
let unkemp: UnkownEmployee = {
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

  loadCargo(cargo: number) {
    console.log("loading cargo " + cargo);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

interface Bird {
  type: "bird";
  fly: string;
}
interface Horse {
  type: "horse";
  run: string;
}

type Animal = Horse | Bird;

function movingAnimal(animal: Animal) {
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

//index properties

interface ErrorLog {
  [prop: string]: string;
}
const error: ErrorLog = {
  email: "sn c s",
  password: "nooo",
};

//generics

const arr: Array<string> = [];
// arr[0].split("");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I have fulfilled");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

function merge<T extends object, U extends object>(obj: T, objb: U) {
  return Object.assign(obj, objb);
}
const mergeobject = merge({ name: "max" }, { age: 10 });
console.log(mergeobject);

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T) {
  let description = "Got 0 elements";
  if (element.length === 1) {
    description = "Got 1 element";
  } else {
    description = "Got" + element.length + "element";
  }
  return [element, description];
}

//generic class
class DataStroage<T extends string | number | boolean> {
  storage: T[] = [];

  additem(item: T) {
    return this.storage.push(item);
  }

  removeItem(item: T) {
    return this.storage.splice(this.storage.indexOf(item), 1);
  }

  printStorage() {
    console.log(this.storage);
  }
}

const disk = new DataStroage<string>();
disk.additem("jij");
disk.additem("jij");
disk.additem("jiiii");
disk.printStorage();

const box = new DataStroage<number>();
box.additem(10);
box.additem(1000);
box.additem(10000);
box.printStorage();

const arr1: Readonly<string[]> = ["ams", "sld"];

// Decorators
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger("Im logging")
class Persona {
  name = "MAX";

  constructor() {
    console.log("Creating person object..");
  }
}
let per1 = new Persona();
console.log(per1);
