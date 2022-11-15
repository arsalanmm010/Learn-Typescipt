// "duck typing"

let myType = {name:"Zia", id:1};

// Case 1
myType = {id:2, name:"Tom"};

// Case 2 (error)
//myType = {id:3, name_person: "Tom"};

// Case 3
let x : {id:number, [x:string]:any};
x = {id:1, fullName: "Tin"};

// Case 4 (error Excess property)
// myType = {id:2, name:"Tom", age:22};

// Case when Stale object literal are assigned to a variable
let myType2 = {id:2, name:"Tom"};

// Case 1
// can be assigned because both have same properties
myType = myType2

let myType3 = {id:3, name_person:"Tome"};
// Case 2
// cannot be assigned cause property name different
// myType = myType3;

// Case 2b
// now f can have any name just property will be of type string
var f: {id:number , [f:string]: any};
var g = {id:1, fullName:"Zia"};
f = g;

var myType4 = {id:2, name:"Tom", age:22};
// Case 3
// excess property allowed in case of STALE object literal
myType = myType4

console.log(myType)