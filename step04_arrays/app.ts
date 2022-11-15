// correct ways to dexlare array
let array1 : number[] = [1, 4 ,6];
console.log(array1[1]);

let array2 : Array<number> = [1, 4, 63, 2];
let array3 : number[] = [];

// error wrong way to declare array
// let array4: number[] = new number[2];

let array5 : number[] = [];
array5.push(1234);
console.log(array5)