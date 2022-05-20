let mainDiv = document.querySelector(`.main-div`);

let form = document.querySelector(`form`);
let next = document.querySelector(`.next`);
let prev = document.querySelector(`.prev`);
let totalQuestion = document.querySelector(`p`);
let showResult = document.querySelector(`.show-result`);
let altBox = window.document.createElement(`div`);

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrectAnswer(answer) {
    return answer === this.correctAnswerIndex;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = questions;
    this.score = score;
    this.activeIndex = 0;
  }
  incrementScore() {
    this.score = this.score + 1;
    showResult.innerText = `Your score is ${this.score}`;
    this.createUI();
  }
  decreaseScore() {
    this.score = this.score - 1;
    showResult.innerText = `Your score is ${this.score}`;
    this.createUI();
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;

    this.createUI();
  }
  prevQuestion() {
    this.activeIndex = this.activeIndex - 1;

    this.createUI();
  }
  addQuestions(title, options, answerIndex) {
    let question = new Question(title, options, answerIndex);
    this.questions.push(question);
    this.createUI();
  }
  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.display = `none`;
    } else if (this.activeIndex === this.questions.length - 1) {
      next.style.display = `none`;
    } else {
      next.style.display = `block`;
      prev.style.display = `block`;
    }
  }
  createUI() {
    mainDiv.innerHTML = ``;

    let activeQuestion = this.questions[this.activeIndex];

    let form = document.createElement(`form`);
    let fieldset = document.createElement(`fieldset`);
    let legend = document.createElement(`legend`);
    legend.innerText = activeQuestion.title;
    let optionElm = document.createElement(`div`);
    optionElm.classList.add(`options`);
    let btnWrapper = document.createElement(`div`);
    let btn = document.createElement(`button`);
    btn.type = `submit`;
    btn.innerText = `submit`;
    btn.style.background = `tomato`;
    btn.style.outline = `none`;
    btn.style.border = `none`;
    btn.style.padding = `.5rem .8rem`;
    btn.style.cursor = `pointer`;
    btn.style.color = `wheat`;
    btnWrapper.append(btn);
    activeQuestion.options.forEach((option, index) => {
      let div = document.createElement(`div`);
      let input = document.createElement(`input`);
      input.id = `option-${index}`;
      input.type = `radio`;
      input.name = `options`;
      input.value = index;
      let label = document.createElement(`label`);
      label.for = `option-${index}`;
      label.innerText = option;

      form.addEventListener(`submit`, event => {
        event.preventDefault();
        if (input.checked) {
          if (activeQuestion.isCorrectAnswer(Number(input.value))) {
            this.incrementScore();
          } else {
            this.decreaseScore();
            alert(
              `🤭 OOps!!!
              Correct answer is - ${activeQuestion.getCorrectAnswer()}`
            );
          }
        }
      });
      div.append(input, label);
      optionElm.append(div);
    });
    this.handleButtons();
    totalQuestion.innerText = `Total Questions:${this.questions.length}`;
    fieldset.append(legend, optionElm, btnWrapper);
    form.append(fieldset);
    mainDiv.append(form);
    // return form;
  }
}
function init() {
  let quiz = new Quiz();
  quizCollection.forEach(question => {
    quiz.addQuestions(question.title, question.options, question.answerIndex);
  });
  next.addEventListener(`click`, quiz.nextQuestion.bind(quiz));
  prev.addEventListener(`click`, quiz.prevQuestion.bind(quiz));
  quiz.createUI();
}

init();
