// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }
// }

// let side = new Square(4);
// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
// }

// let side = new Square(4);

// - Create another method named `calcArea` that will return the area of the square.

// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   claArea() {
//     let sqr = this.height * this.width;
//     return `Area of the square is ${sqr} ㎡`;
//   }
// }

// let side = new Square(6);

// - Create a getter method named `area` that will return area of the square.

// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   claArea() {
//     let sqr = this.height * this.width;
//     return `Area of the square is ${sqr} ㎡`;
//   }
//   get area() {
//     return this.height * this.width;
//   }
// }

// let side = new Square(6);

// - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   claArea() {
//     this._area = this.height * this.width;
//     return `Area of the square is ${this.area} ㎡`;
//   }
//   get area() {
//     return this.height * this.width;
//   }
// }

// let side = new Square(6);

// - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

// class Square {
//   constructor(value) {
//     this.width = value;
//     this.height = value;
//   }

//   static isEqual(side1, side2) {
//     return side1.area === side2.area;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`);
//   }
//   claArea() {
//     this._area = this.height * this.width;
//     return `Area of the square is ${this.area} ㎡`;
//   }
//   get area() {
//     return this.height * this.width;
//   }
// }

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
// let side1 = new Square(4);
// let side2 = new Square(4);

// - Check the `area` getter method on both square.
// side1.area;
// side2.area;
// - Check the `isEqual` method and pass the two instance you created above.
// Square.isEqual(side1, side2);

// ## User Class

// - Create a class named `User` that accepts `firstName` and `lastName` property

// class User {
//   constructor(fn, ln) {}
// }
// - Create a getter method named `fullName` that will return the full name of the person.
// class User {
//   constructor(fn, ln) {
//     this.firstName = fn;
//     this.lastName = ln;
//   }
//   get fullName() {
//     return this.firstName + ` ` + this.lastName;
//   }
// }

// let person = new User(`Arya`, `Stark`);
// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)
class User {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  set fullName(value) {
    this._fullName = value.split(` `);

    if (this._fullName.length < 5) {
      alert(`Full name should be more than 5 characters`);
    } else {
      this.firstName = this._fullName[0];
      this.lastName = this._fullName[1];
    }
  }
  get fullName() {
    return this._fullName;
  }
}

let person = new User(`Joy`);
// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

// - Create two instance of the `User` class

// - Check by using the `fullName` setter method with name bigger than 5 characters.

// - Check by using the `fullName` setter method with name less than 5 characters.

// - Check the `fullName` using getter

// - Check the `nameContains` method
