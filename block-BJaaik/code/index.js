class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `I'm ${this.name} and I eat`;
  }
  sleep() {
    return `I'm ${this.name} and I sleep`;
  }
  walk() {
    return `I'm ${this.name} and I walk`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportName) {
    super(name, age, gender);
    this.sportsName = sportName;
  }
  play() {
    return `I'm ${this.name} and I play ${this.sportsName}`;
  }
}
class Cricketer extends Player {
  constructor(name, age, gender, sportName, teamName) {
    super(name, age, gender, sportName);
    this.teamName = teamName;
  }
  playCricket() {
    return `This is  ${this.teamName} and I play ${this.sportsName}`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `This is  ${this.instituteName} Institute we teach the students`;
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  creatArt() {
    return `My name is     ${this.name}  and  I'm a ${this.kind}  artist  `;
  }
}

let Virat = new Cricketer(`Virat`, 40, `male`, `cricket`, `India`);
