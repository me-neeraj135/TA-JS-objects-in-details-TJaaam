// animal methods

let animalMethods = {
  eat: function () {
    alert(`I live in ${this.location} and I can eat`);
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

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
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
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

// cat methods

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

function creatAnimal(location, legs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  return animal;
}

// dog

function createDog(location, legs, name, color) {
  let animal = Object.create(dogMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  animal.name = name;
  animal.color = color;
  return animal;
}

// cat

function createCat(location, legs, name, color) {
  let animal = Object.create(catMethods);
  animal.location = location;
  animal.numberOfLegs = legs;
  animal.name = name;
  animal.colorOfEyes = color;
  return animal;
}

let animals = creatAnimal(`Ny`, 4);
let dog = createDog(`France`, 4, `Rambo`, `Brown`);
let cat = createCat(`Denmark`, 4, `Julie`, `blue`);

// animal

console.group(animals.location);
console.log(animals.location);
console.log(animals.numberOfLegs);
console.log(animals.name);
console.log(`Eat`, animals.eat());
console.log(`Change location`, animals.changeLocation(`DC`));
console.log(`Summary`, animals.summary());

// dog
console.group(dog.location);
console.log(`location`, dog.location);
console.log(`no of legs`, dog.numberOfLegs);
console.log(`name`, dog.name);
console.log(`Change name`, dog.changeName(`Jaggu`));
console.log(`Change location`, dog.changeLocation(`CA`));
console.log(`Color`, dog.color);
console.log(`bark`, dog.bark());
console.log(`Eat`, dog.eat());
console.log(`change color`, dog.changeColor(`gray brown`));
console.log(`dog summary`, dog.summary());

// cat
console.group(cat.location);
console.log(`location`, cat.location);
console.log(`no of legs`, cat.numberOfLegs);
console.log(`name`, cat.name);
console.log(`Change name`, cat.changeName(`Jenny`));
console.log(`Change location`, cat.changeLocation(`Huawei`));
console.log(`Color`, cat.color);
console.log(`bark`, cat.meow());
console.log(`Eat`, cat.eat());
console.log(`change color`, cat.changeColorOfEyes(`white`));
console.log(`cat summary`, cat.summary());
