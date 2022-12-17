class Animal {
   name: string;

   constructor(theName : string) {
      this.name = theName;
   }

   move(meters: number = 0) {
      console.log(this.name + " moved " + meters + "m.")
   }
   
}

class Snake extends Animal {
   constructor(name: string) {
      super(name);
   }
   move(meters = 5) {
      console.log("Slithering...")
      super.move(meters)
   }
bite() {
      console.log("bites")
   }
}

class Horse extends Animal {
   constructor(name: string) {
      super(name)
   }
   move(meters = 45) {
      alert("Galloping...");
      super.move(meters)
   }
}

class Donkey extends Animal {
   distance: number
   constructor(name: string, distance: number) {
      super(name)
      this.distance = distance
   }
   move(meters =45){
      alert("Moving")
      super.move(meters)
   }
}