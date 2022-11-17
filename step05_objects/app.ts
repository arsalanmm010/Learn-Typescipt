let teacher : {name: string, exp: number} = {
   name: "zeeshan",
   exp: 10
}

console.log(teacher)

type Student = {
   name: string,
   age?: number
}

let student: Student = {
   name: "Hira",
   age: 30
}

console.log(student["name"]);
console.log(student.age);

interface Manager {
   name: string,
   subordinate?: number
}

let storeManager: Manager = {
   name: "Bilal"
}

interface Ball {
   diameter: number
}

interface Sphere {
   diameter: number;
}

let ball:Ball = {diameter: 10}
let sphere:Sphere = {diameter:20}

sphere = ball;
console.log(sphere)
ball = sphere;
console.log(ball)

interface Tube {
   diameter: number;
   length: number;
}

let tube:Tube = {diameter: 32, length:23};

ball = tube
console.log(ball)

let myType = {name:"Zia", id:1}

myType = {id:2, name: "Tom"};

//myType = {id:3, myName: "sdf"};

let x: {id:number, [x:string]: any};

x = {id:3, fullName: "Zia Khan"}

console.log(x)


type Author = {
   firstName : string;
   lastName : string;
}

type Book = {
   author: Author;
   name: string;
}

const myBook : Book = {
   author: {
      firstName: "Zia",
      lastName: "Khan"
   },
   name: "My Best Book"
}

console.log(myBook)

interface Student1 {
   student_id : number;
   name: string;
}

interface Teacher {
   teacher_id : number;
   teacher_name: string;
}

type intersected_type = Student1 & Teacher;

let obj1: intersected_type = {
   student_id: 3232,
   name: "Rita",
   teacher_id: 7877,
   teacher_name: "Seema",
};

console.log(obj1.teacher_id)
console.log(obj1.name)

let val: unknown;

const val1: unknown = val;
const val2: any = val;
// const val3: boolean = val;
// const val4: number = val;
// const val5: string = val;

function error(message: string) : never {
   throw new Error(message);
}

function fail() {
   return error("Something went wrong");
}
