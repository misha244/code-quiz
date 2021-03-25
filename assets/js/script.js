const startButton = document.getElementById("start-btn");
const startQuizDiv = document.getElementById("start-quiz");
const timerSpan = document.getElementById("timer");
const mainElement = document.querySelector("main");
const introDiv = document.getElementById("intro-section");

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
    answer: "The Baha Men",
  },
  {
    title: "Moon landing?",
    choices: [
      "staged by Walt Disney",
      "sure",
      "Alexa, show Buzz Aldrin punching that dude",
      "alexa, play man on the moon by r.e.m.",
    ],
    answer: "sure",
  },
  {
    title: "Do you know who I am!?!",
    choices: [
      "Who are you?!",
      "Ronnie Pickering!",
      "Who the fuck is that?",
      "Me",
    ],
    answer: "Ronnie Pickering",
  },
];

// declaring initial value for the timer

let timerValue = 60;

// remove intro section when start btn clicked
const startQuiz = () => {
  introDiv.remove();
};
// start timer when start btn clicked
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

// creating quiz question container
const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  quizContainerDiv.setAttribute("id", "quiz-container");

  const questionContainerDiv = document.createElement("div");
  questionContainerDiv.setAttribute("class", "question-container");
  questionContainerDiv.setAttribute("id", "question-container");

  const answerContainerDiv = document.createElement("div");
  answerContainerDiv.setAttribute("class", "answer-container");
  answerContainerDiv.setAttribute("class", "answer-container");

  return quizContainerDiv;
};

// displaying quiz question container

// creating a fn to check correct/incorrect answer and show next question

// calculating score fn

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);
