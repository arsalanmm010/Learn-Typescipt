class Human {
   name: string;
   constructor(name:string){
      this.name = name;
   }

   eat(){
      console.log(this.name + " is a Human and is eating");
   }
}

class Animal {
   name: string;
   constructor(name:string){
      this.name = name;
   }
   eat() {
      console.log(this.name + " is a Animal and is eating");
   }
}

class WildAnimal {
   title: string;

   constructor(title:string){
      this.title = title;
   }

   eat(){
      console.log(this.title + " is a WildAnimal and is eating");
   }
}

class Robot {
   name: string;

   constructor(name:string){
      this.name = name;
   }
}

let h: Human = new Human("Tom")
let a: Animal = new Animal("Goat")
let r: Robot = new Robot("R2-D2");

let h2 = h;
h = a;
h.eat();

let r2 = r;
r = a;

let hum : Human = new Animal("Dog");

let r0: Robot = new Animal("Donkey");

let isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);

let isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal)


