class Cricketer {
  constructor(teamName) {
    this.teamName = teamName;
  }
  playCricket() {
    return `This is  ${this.teamName} and I play ${this.sportsName}`;
  }
}
class Player extends Cricketer {
  constructor(teamName, sportName) {
    super(teamName);
    this.sportsName = sportName;
  }
  play() {
    return `I'm ${this.name} and I play ${this.sportsName}`;
  }
}

class Teacher {
  constructor(name, age, gender, instituteName) {
    this.instituteName = instituteName;
  }
  teach(para) {
    return `This is  ${this.instituteName} Institute we teach ${this.para}`;
  }
}

class Artist {
  constructor(kind) {
    this.kind = kind;
  }
  creatArt() {
    return `My name is     ${this.name}  and  I'm a ${this.kind}  artist  `;
  }
}

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
