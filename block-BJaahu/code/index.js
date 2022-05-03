// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Write test by creating two objects also test both methods.

let methods = {
  isAnswerCorrect: function (index) {
    return index === book.correctAnswer;
  },
  getCorrectAnswer: function () {
    return book.options[book.correctAnswer];
  },
};
let book = Object.create(methods);

function question(title, answer, correctAnswerIndex) {
  book.name = title;
  book.options = answer;
  book.correctAnswer = correctAnswerIndex;
  return book;
}
let user = question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

// let questionMethods = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswer;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswer];
//   },
// };

// function createQuestion(title, option, correctAnswerIndex) {
//   let question = Object.create(questionMethods);
//   question.name = title;
//   question.options = option;
//   question.correctAnswer = correctAnswerIndex;

//   return question;
// }

// let firstQuestion = createQuestion(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );

// let secondQuestion = createQuestion(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

// function CreateQuestion(title, option, correctAnswerIndex) {
//   this.name = title;
//   this.options = option;
//   this.correctAnswer = correctAnswerIndex;
// }

// CreateQuestion.prototype = {
//   isAnswerCorrect: function (index) {
//     return index === this.correctAnswer;
//   },
//   getCorrectAnswer: function () {
//     return this.options[this.correctAnswer];
//   },
// };

// let firstQuestion = new CreateQuestion(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );

// let secondQuestion = new CreateQuestion(
//   "Where is the capital of Jamaica",
//   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
//   2
// );

// - Create using class

class CreateQuestion {
  constructor(title, option, correctAnswerIndex) {
    this.name = title;
    this.options = option;
    this.correctAnswer = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswer;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswer];
  }
}

let firstQuestion = new CreateQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);

let secondQuestion = new CreateQuestion(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
console.group(firstQuestion.name);
console.log(firstQuestion.name);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswer);
console.groupEnd();

console.group(secondQuestion.name);
console.log(secondQuestion.name);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswer);
console.groupEnd();
