"use strict";
class Human {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a WildAnimal and is eating");
    }
}
class Robot {
    constructor(name) {
        this.name = name;
    }
}
let h = new Human("Tom");
let a = new Animal("Goat");
let r = new Robot("R2-D2");
let h2 = h;
h = a;
h.eat();
let r2 = r;
r = a;
let hum = new Animal("Dog");
let r0 = new Animal("Donkey");
let isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);
let isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal);
