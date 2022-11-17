var teacher = {
    name: "zeeshan",
    exp: 10
};
console.log(teacher);
var student = {
    name: "Hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
var storeManager = {
    name: "Bilal"
};
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
sphere = ball;
console.log(sphere);
ball = sphere;
console.log(ball);
var tube = { diameter: 32, length: 23 };
ball = tube;
console.log(ball);
var myType = { name: "Zia", id: 1 };
myType = { id: 2, name: "Tom" };
//myType = {id:3, myName: "sdf"};
var x;
x = { id: 3, fullName: "Zia Khan" };
console.log(x);
var myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};
console.log(myBook);
var obj1 = {
    student_id: 3232,
    name: "Rita",
    teacher_id: 7877,
    teacher_name: "Seema"
};
console.log(obj1.teacher_id);
console.log(obj1.name);
var val;
var val1 = val;
var val2 = val;
// const val3: boolean = val;
// const val4: number = val;
// const val5: string = val;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something went wrong");
}
