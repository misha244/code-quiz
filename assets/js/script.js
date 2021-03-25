const startButton = document.getElementById("start-btn");
const startQuizDiv = document.getElementById("start-quiz");
const timerSpan = document.getElementById("timer");
const introDiv = document.getElementById("intro-section");

// declaring on-start score value
let score = 0;

// declaring on-start value for the timer
let timerValue = 60;

// declaring an index for question array
let questionsIndex = 0;

// questions array
const questions = [
  {
    title: "Who let the dogs out?",
    choices: [
      "The Baha Men",
      "The Illuminati",
      "Elon Musk",
      "The dogs let themselves out",
    ],
    rightAnswer: "The Baha Men",
  },
  {
    title: "Moon landing?",
    choices: [
      "staged by Walt Disney",
      "sure",
      "Alexa, show Buzz Aldrin punching that dude",
      "alexa, play man on the moon by r.e.m.",
    ],
    rightAnswer: "sure",
  },
  {
    title: "Do you know who I am!?!",
    choices: [
      "Who are you?!",
      "Ronnie Pickering!",
      "Who the fuck is that?",
      "Me",
    ],
    rightAnswer: "Ronnie Pickering",
  },
];

// remove intro section when start btn clicked
//const startQuiz = () => {
//  introDiv.remove();
//};
// start timer when start btn clicked

// create buttons for the answers
// creating quiz question container
// displaying quiz question container

//TODO
// creating a fn to check correct/incorrect answer and show next question

// calculating score fn

// create a game over div

// create a enter initials&submit score div

// go back to index

// write a function to turn brain back to a solid state after its inevitable melting due to overheating
const startTimer = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerSpan.textContent = timerValue;

    if (timerValue === 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

const questions = [
  {
    title: "How many heading elements are there in HTML?",
    choices: ["3 headings", "4 headings", "5 headings", "6 headings"],
    correctAnswer: "6 headings",
  },
  {
    title: "Why is no one talking today?",
    choices: ["Bad Throat", "Bored", "Just for fun", "Concentrating"],
    correctAnswer: "Bored",
  },
];

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");

let index = 0;

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);

    parentDiv.appendChild(div);
  };

  choices.forEach(createChoiceAndAppend);

  return parentDiv;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else {
      alert("BOO");
    }
  }
};

const createQuestion = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);

  divContainer.addEventListener("click", verifyChoice);

  return divContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.appendChild(questionContainer);
  } else {
    alert("DONE");
  }
};

const startQuiz = () => {
  // remove the start button container
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  renderQuestion();
};

startButton.addEventListener("click", startQuiz);
