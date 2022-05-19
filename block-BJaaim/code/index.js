let ul = document.querySelector(`.root`);
let question = document.querySelector(`h1`);
let nextBtn = document.querySelector(`.next`);
let score = 0;
let questionIndex = 0;
let questions = quiz[questionIndex];

class Question {
  constructor(questions) {
    this.title = questions.title;
    this.options = questions.options;
    this.correctAnswer = questions.ans;
  }
  isCorrect(answer) {
    return answer === this.correctAnswer;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswer];
  }
  createUi() {
    this.options.forEach((opt, indx) => {
      let li = document.createElement(`li`);
      let radioBtn = document.createElement(`input`);
      radioBtn.setAttribute(`type`, `radio`);
      radioBtn.setAttribute(`id`, `ans${indx}`);
      radioBtn.setAttribute(`name`, `answer`);
      radioBtn.classList.add(`answer`);
      let label = document.createElement(`label`);
      label.setAttribute(`for`, `ans${indx}`);
      label.setAttribute(`id`, `option${indx}`);
      label.innerText = opt;
      li.append(radioBtn, label);
      ul.append(li);
    });

    question.innerText = `${this.title}`;
    return ul;
  }
}

class Quiz extends Question {
  constructor(questions, questionIndex, score = 0) {
    super(questions);
    this.question = questions.title;
    this.activeIndex = questionIndex;
    this.score = score;
  }
  nextQuestion() {
    questionIndex = questionIndex + 1;
    questions = quiz[questionIndex];
    console.log(questions);
    this.createUi();
  }
  createUI() {
    // this.options.forEach((opt, indx) => {
    //   let li = document.createElement(`li`);
    //   let radioBtn = document.createElement(`input`);
    //   radioBtn.setAttribute(`type`, `radio`);
    //   radioBtn.setAttribute(`id`, `ans${indx}`);
    //   radioBtn.setAttribute(`name`, `answer`);
    //   radioBtn.classList.add(`answer`);
    //   let label = document.createElement(`label`);
    //   label.setAttribute(`for`, `ans${indx}`);
    //   label.setAttribute(`id`, `option${indx}`);
    //   label.innerText = opt;
    //   li.append(radioBtn, label);
    //   ul.append(li);
    // });
    // question.innerText = `${this.title}`;
    // return ul;
  }

  updateScore() {}
}

// let fi = new Question(quiz[0].title, quiz[0].options, quiz[0].ans);
let qui = new Quiz(questions, questionIndex, score);
let ques = new Question(questions);
nextBtn.addEventListener(`click`, qui.nextQuestion.bind(ques));
