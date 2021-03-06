// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

//

// - Write test by creating two objects also test both methods.

// - Without Object

let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;

function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}

function getCorrectAnswer(para) {
  return para === correctAnswerIndex
    ? options[correctAnswerIndex]
    : `try again`;
}
getCorrectAnswer();

// // - Organize using object

let question = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,

  isAnswerCorrect(index) {
    return index === question.correctAnswerIndex;
  },

  getCorrectAnswer(para) {
    return question.options[question.correctAnswerIndex];
  },
};

// - Use a function to create object

function creatQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index === question.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return question.options[question.correctAnswerIndex];
  };

  return question;
}

let question1 = creatQuestion(
  `what is the capital of India`,
  [`Chandigarh`, `Kanpur`, `lucknow`, `Delhi`],
  3
);

let question2 = creatQuestion(
  `what is the capital of Uttar - Predesh`,
  [`Chandigarh`, `Kanpur`, `Lucknow`, `Delhi`],
  2
);

// - Convert the function to use `this` keyword

function creatQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };

  return question;
}

let question1 = creatQuestion(
  `what is the capital of India`,
  [`Chandigarh`, `Kanpur`, `lucknow`, `Delhi`],
  3
);

let question2 = creatQuestion(
  `what is the capital of Uttar - Predesh`,
  [`Chandigarh`, `Kanpur`, `Lucknow`, `Delhi`],
  2
);
