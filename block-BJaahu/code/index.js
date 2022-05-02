// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.

let methods = {
  isAnswerCorrect(index) {
    return index === book.correctAnswer;
  },
  getCorrectAnswer(index) {
    if (index === book.correctAnswer) {
      return book.options[index];
    }
  },
};

function question(title, answer, correctAnswerIndex) {
  let book = Object.create(methods);
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
