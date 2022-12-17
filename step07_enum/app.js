var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Alpha"] = 3] = "Alpha";
})(Color || (Color = {}));
;
console.log(Color.Alpha);
console.log(Color.Green);
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[1];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var colorIndex = Color2["Blue"];
console.log(colorIndex);
;
var g = 1 /* Color5.Green */;
console.log(g);
;
var colorName1 = 2 /* Color6.Green */;
console.log(colorName1);
;
var colorIndex22 = 4 /* Color22["Blue"] */;
console.log(colorIndex22);
