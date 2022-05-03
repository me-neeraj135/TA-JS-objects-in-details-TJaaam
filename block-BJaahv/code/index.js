// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// - [ ] Using function to create object

// function crateUser(name, id, noOfProjects) {
//   let person = {
//     getProjects() {
//       return person.noOfProjects;
//     },
//     changeName(newName) {
//       return person.name;
//     },
//     incrementProjects(value = 1) {
//       person.noOfProjects = person.noOfProjects + value;
//       return person.noOfProjects;
//     },
//     decrementProjects: function (value = 1) {
//       person.noOfProjects = person.noOfProjects - value;
//       return person.noOfProjects;
//     },
//   };
//   person.getProjects = person.name = name;
//   person.id = id;
//   person.noOfProjects = noOfProjects;
//   return person;
// }
// let user1 = crateUser(`Arya`, 5032733, 20);
// let user2 = crateUser(`John`, 5032734, 25);
// console.group(user1.name);
// console.log(user1.name);
// console.log(`id`, user1.id);
// console.log(`number of projects`, user1.noOfProjects);
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(`id`, user2.id);
// console.log(`number of projects`, user2.noOfProjects);
// console.groupEnd();

//  - [ ] Using Object.create (prototypal pattern)

// function createUser(name, id, noOfProjects) {
//   let person = Object.create(createUser.prototype);
//   person.name = name;
//   person.id = id;
//   person.noOfProjects = noOfProjects;

//   return person;
// }

// createUser.prototype = {
//   getProjects() {
//     return this.noOfProjects;
//   },
//   changeName() {
//     return this.name;
//   },
//   incrementProjects(value = 1) {
//     this.noOfProjects = this.noOfProjects + value;
//     return this.noOfProjects;
//   },
//   decrementProjects(value = 1) {
//     this.noOfProjects = this.noOfProjects - value;
//     return this.noOfProjects;
//   },
// };

// let user1 = createUser(`Arya`, 5032733, 20);
// let user2 = createUser(`John`, 5032734, 25);
// console.group(user1.name);
// console.log(user1.name);
// console.log(`id`, user1.id);
// console.log(`number of projects`, user1.noOfProjects);
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(`id`, user2.id);
// console.log(`number of projects`, user2.noOfProjects);
// console.groupEnd();

// - [ ] Using Pseudoclassical Way

// function CreateUser(name, id, noOfProjects) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects = noOfProjects;
// }

// CreateUser.prototype = {
//   getProjects() {
//     return this.noOfProjects;
//   },
//   changeName() {
//     return this.name;
//   },
//   incrementProjects(value = 1) {
//     this.noOfProjects = this.noOfProjects + value;
//     return this.noOfProjects;
//   },
//   decrementProjects(value = 1) {
//     this.noOfProjects = this.noOfProjects - value;
//     return this.noOfProjects;
//   },
// };

// let user1 = new CreateUser(`Arya`, 5032733, 20);
// let user2 = new CreateUser(`John`, 5032734, 25);

// console.group(user1.name);
// console.log(user1.name);
// console.log(`id`, user1.id);
// console.log(`number of projects`, user1.noOfProjects);
// console.groupEnd();

// console.group(user2.name);
// console.log(user2.name);
// console.log(`id`, user2.id);
// console.log(`number of projects`, user2.noOfProjects);
// console.groupEnd();

// - [ ] Using Class
class user {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.noOfProjects;
  }
  changeName() {
    return this.name;
  }
  incrementProjects(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  }
  decrementProjects(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  }
}

let user1 = new user(`Arya`, 5032733, 200);
let user2 = new user(`John`, 5032734, 250);

console.group(user1.name);
console.log(user1.name);
console.log(`id`, user1.id);
console.log(`number of projects`, user1.noOfProjects);
console.groupEnd();

console.group(user2.name);
console.log(user2.name);
console.log(`id`, user2.id);
console.log(`number of projects`, user2.noOfProjects);
console.groupEnd();
