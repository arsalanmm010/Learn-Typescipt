enum Color {
   Red, Green, Blue, Alpha
};

console.log(Color.Alpha)
console.log(Color.Green)

let c: Color = Color.Green;
console.log(c)

enum Color1 {
   Red = 1, Green, Blue
};

let colorName: string = Color1[1];
console.log(colorName)

enum Color2 {
   Red = 1,
   Green = 2,
   Blue = 4
};

let colorIndex = Color2["Blue"];
console.log(colorIndex)

const enum Color5 {
   Red, Green, Blue
};

let g: Color5  = Color5.Green;
console.log(g)


const enum Color6 {
   Red =1,
   Green,
   Blue
};

let colorName1 = Color6.Green;
console.log(colorName1)

const enum Color22 {
   Red = 1,
   Green = 2,
   Blue = 4
};

let colorIndex22 = Color22["Blue"]
console.log(colorIndex22)

