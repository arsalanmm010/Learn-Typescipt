let myName : unknown = "zia"

console.log((myName as string).length);
console.log((<string> myName).length)