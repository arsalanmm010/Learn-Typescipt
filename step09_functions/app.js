"use strict";
//Named function
function add(x, y) {
    return x + y;
}
// Anonymous functions
let myAdd1 = function (x, y) {
    return x + y;
};
//console.log(myAdd1(12,2))
// Anonymous functions with explicit type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(34, 5445));
// type names don't matter
let myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd3(12, 43));
// Lambda functions
let myAdd4 = (a, b) => a + b;
console.log(myAdd4(12, 3));
function greeter(fn) {
    console.log("Greeting");
}
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Sameul", "Lucas", "Hernandez");
console.log(employeeName);
let result1 = buildName("Bob");
//let result2 = buildName("Bob", "Adams", "Sr.")
let result3 = buildName("Bob", "Adams");
console.log(result1, result3);
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName1("Bob", "Adams"));
//console.log(buildName1("Bob", "Adams", "assd"))
console.log(buildName1("Bob"));
function myCallBack(text) {
    console.log("inside myCallBack" + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("Mytext", myCallBack);
function add1(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add1(1, 2));
console.log(add1("Hello", "World"));
console.log(add1(true, false));
