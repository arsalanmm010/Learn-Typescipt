//Named function
function add(x: number, y: number): number {
   return x+y;
}

// Anonymous functions

let myAdd1 = function(x:number, y:number):number {
   return x + y
}
//console.log(myAdd1(12,2))

// Anonymous functions with explicit type

let myAdd2: (x:number, y:number) => number =  function(x:number, y:number):number {
   return x + y
}
console.log(myAdd2(34,5445))

// type names don't matter

let myAdd3: (baseValue:number, increment:number) => number = function(x:number, y:number):number {
   return x + y;
}
console.log(myAdd3(12,43))
// Lambda functions

let myAdd4 = (a:number, b:number) => a + b;
console.log(myAdd4(12,3))

type GreetFunction = (a:string) => void;
function greeter(fn: GreetFunction){
   console.log("Greeting")
}

function buildName(firstName: string, ...restOfName: string[]) {
   return firstName + " " + restOfName.join(" ")
}

let employeeName = buildName("Joseph", "Sameul", "Lucas", "Hernandez")
console.log(employeeName)
let result1 = buildName("Bob")
//let result2 = buildName("Bob", "Adams", "Sr.")
let result3 = buildName("Bob", "Adams")
console.log(result1,result3)

let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = "Khan"): string {
   if(lastName)
      return firstName + " " + lastName
   else  return firstName
}

console.log(buildName1("Bob", "Adams"))
//console.log(buildName1("Bob", "Adams", "assd"))
console.log(buildName1("Bob"))


function myCallBack(text:string) {
   console.log("inside myCallBack" + text);
}

function callingFunction(initialText: string, callback: (text:string)=> void)
{
   callback(initialText)
}

callingFunction("Mytext", myCallBack)

function add1(arg1: string, arg2: string) : string;
function add1(arg1: number, arg2: number) : number;
function add1(arg1: boolean, arg2: boolean) : boolean;

function add1(arg1: any, arg2: any) : any {
   return arg1 + arg2
}

console.log(add1(1,2))
console.log(add1("Hello","World"))
console.log(add1(true,false))