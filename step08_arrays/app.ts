let array1 : number[] = [1, 2, 3, 4];
console.log(array1[2]);

let array2 : Array<number> = [1,2,3];

let array3 : number[] = [];

// error
//let array4 : number[] = new Number[2];

let array5 : number[] = [];
array5.push(1234);
console.log(array5)

// Array methods
console.log(array1.indexOf(3))
console.log(array1.indexOf(3) !== -1)

let emojis : string[] = [];
console.log(emojis.lastIndexOf('4'))

emojis = ['a', 'b', 'c', 'd', 'e', 'f', 'd']
console.log(emojis.lastIndexOf('d'))

console.log(array1.concat(array2))
console.log(array1.join("&"))
array5.push(34)
console.log(array5)
array5.pop()
console.log(array5)
array1.reverse()
console.log(array1)
array1.shift()
console.log(array1)
array1.unshift(35)
console.log(array1)
console.log(array1.slice(0,2))
array1.splice(0,2)
console.log(array1)
console.log(array2.toString())


let names : string[] = ['name1', 'name2', 'name3', 'name4']
let names2 : string[] = ['name2', 'Khan', 'name3', 'name2', 'name3']

let result = names.filter(n => names2.indexOf(n) !== -1)
console.log(result)

let distinctArr = names2.filter((item, index) => names2.indexOf(item) === index)
console.log(distinctArr)

let numbers: Array<number> = [2.6, 1.3, 4.0]
let result4 = numbers.map(Math.ceil)

function isEvenNumber(item:number){
   return item % 2 == 0
}

console.log(result4)
console.log(numbers.every(isEvenNumber))

let num33 : Array<number> = [1,2,3,4]
let result22 = num33.reduceRight(function(a,b){return a+b})
let result23 = num33.reduce(function(a,b){return a-b})
console.log(num33.some(item => item % 2 == 0))
console.log(result22)
console.log(result23)

let sortn : Array<number> = [1,3,4,22,45,8,9,100,10]
console.log(sortn.sort((a,b)=>a-b))

const em = ['as', 'ss', 'sa', 'aa']
console.log(em.fill('aass',2,4))
console.log(em.fill('aass',1))
console.log(em.fill('aass'))