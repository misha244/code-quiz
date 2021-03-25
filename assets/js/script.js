const startButton = document.getElementById("start-btn");
const startQuizDiv = document.getElementById("start-quiz");
const timerSpan = document.getElementById("timer");
const mainElement = document.querySelector("main");
const introDiv = document.getElementById("intro-section");

// declaring initial value for the timer
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

  quizContainerDiv.appendChild(questionContainerDiv);
  quizContainerDiv.appendChild(answerContainerDiv);

  return quizContainerDiv;
};
// displaying quiz question container
const viewQuestion = () => {
  const selectedQuestion = questions;
};
//TODO

// creating a fn to check correct/incorrect answer and show next question

// calculating score fn

// create a game over div

// create a enter initials&submit score div

// go back to index

// write a function to turn brain back to a solid state after its inevitable melting due to overheating

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);
