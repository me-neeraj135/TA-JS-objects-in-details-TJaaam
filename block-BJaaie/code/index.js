// // pseudoClassical pattern
function CreatAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

// dog

function CreatDog(location, numberOfLegs, name, color) {
  CreatAnimal.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.color = color;
}

// cat

function CreatCat(location, numberOfLegs, name, colorOfEyes) {
  CreatAnimal.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

// animal methods

CreatAnimal.prototype = {
  eat: function () {
    return `I live in ${this.location} and I can eat`;
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

// dog methods

CreatDog.prototype = {
  bark: function () {
    return `I am ${this.name} and I can bark 🐶`;
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} I can also bark`;
  },
};

Object.setPrototypeOf(CreatDog.prototype, CreatAnimal.prototype);
// cat methods

CreatCat.prototype = {
  meow: function () {
    return `I am ${this.name} and I can meow meow 😹`;
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.color = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(CreatCat.prototype, CreatAnimal.prototype);

let animal = new CreatAnimal(`Canada`, 6);
let dog = new CreatDog(`El- slvador`, 4, `Jakie`, `black`);
let cat = new CreatCat(`Costa Rica`, 4, `Melenian`, `blue`);

// Inheritance using class pattern

// class Animal {
//   constructor(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
//   }
//   eat() {
//     return `I live in ${this.location} and I can eat`;
//   }
//   changeLocation(newLocation) {
//     this.location = newLocation;
//     return this.location;
//   }
//   summary() {
//     return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//   }
// }

// // Dog class

// class Dog extends Animal {
//   constructor(location, numberOfLegs, name, color) {
//     super(location, numberOfLegs);
//     this.name = name;
//     this.color = color;
//   }

//   bark() {
//     return `I am ${this.name} and I can bark 🐶`;
//   }
//   changeName(newName) {
//     this.name = newName;
//     return this.name;
//   }
//   changeColor(newColor) {
//     this.color = newColor;
//     return this.color;
//   }
//   summary() {
//     return `I am ${this.name} and I am of ${this.color} I can also bark`;
//   }
// }

// // cat class

// class Cat extends Animal {
//   constructor(location, numberOfLegs, name, colorOfEyes) {
//     super(location, numberOfLegs);
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
//   }

//   meow() {
//     return `I am ${this.name} and I can meow meow 😹`;
//   }
//   changeName(newName) {
//     this.name = newName;
//     return this.name;
//   }
//   changeColorOfEyes(newColor) {
//     this.colorOfEyes = newColor;
//     return this.colorOfEyes;
//   }
//   summary() {
//     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
//   }
// }

// let ani = new Animal(`China`, 5);
// let dog = new Dog(`Russia`, 4, `Dog`, `white`);
// let cat = new Cat(`America`, 4, `Rosy`, `brown`);

console.group(dog.name);
console.log(`name`, dog.name);
console.log(`location`, dog.location);
console.log(`number of leg`, dog.numberOfLegs);
console.log(dog.color);
console.log(`change color`, dog.changeColor(`blue`));
console.log(`change name`, dog.changeName(`Teepu`));
console.log(`bark`, dog.bark());

console.log(`summary`, dog.summary());
console.groupEnd();

console.group(cat.name);
console.log(`name`, cat.name);
console.log(`location`, cat.location);
console.log(`number of leg`, cat.numberOfLegs);
console.log(cat.colorOfEyes);
console.log(`change color`, cat.changeColorOfEyes(`blue`));
console.log(`change name`, cat.changeName(`Teepu`));
console.log(`bark`, cat.meow());

console.log(`summary`, cat.summary());
console.groupEnd();
