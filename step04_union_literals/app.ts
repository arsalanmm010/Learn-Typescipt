let myname: string | null;

myname = null;
console.log(myname);

myname = "zia"
console.log(myname);

let myAge: string | number;

myAge = 16;
console.log(myAge);

myAge = "Don't Know";
console.log(myAge)

console.log(myAge.toString());

console.log(myAge.toLowerCase());

let newAge = Math.random() > 0.6 ? "Khan": 60;

if(newAge === "Khan") {
   newAge.toUpperCase();
}

console.log(newAge)

if(typeof newAge === "string") {
   newAge.toUpperCase();
}

console.log(newAge)

typeof newAge === "string" ? newAge.toUpperCase() : newAge.toFixed();

console.log(newAge)

let age : number  | "died" | "unknown";

age = 90;
age = "died"
age = "unknown";

let zia: "zia";

zia = "zia"

let yourName = Math.random() > 0.6 ? "Hira Khan": undefined

if(yourName) {
   yourName.toUpperCase()
}

console.log(yourName)

yourName?.toUpperCase();

type RawData = boolean | number | string | null | undefined

let data: RawData

data = 32
data = "sdfs"
data = null
data = undefined

type Id = number | string
type IdMaybe = Id | undefined | null