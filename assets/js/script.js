const startButton = document.getElementById("start-btn");

const startQuizDiv = document.getElementById("start-quiz");

const timerSpan = document.getElementById("timer");

const bodyElement = document.body;

// questions array
questions = [
  {
    title: "Who let the dogs out?",
    choices: [
      "The Baha Men",
      "The Illuminati",
      "Elon Musk",
      "The dogs let themselves out",
    ],
    answer: "Elon Musk",
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
    choices: ["Who?!", "Ronnie Pickering!", "Who the fuck is that?", "Me"],
    answer: "Ronnie Pickering",
  },
];

//const createAndAppendForm = () => {};

let timerValue = 60;

// remove intro section when start btn pressed
const startQuiz = () => {
  const introDiv = document.getElementById("intro-section");
  introDiv.remove();
};

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

startButton.addEventListener("click", startQuiz);
