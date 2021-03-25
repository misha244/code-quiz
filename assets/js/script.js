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

// create buttons for the answers
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

// displaying quiz question container

//TODO

// creating a fn to check correct/incorrect answer and show next question

// calculating score fn

// create a game over div

// create a enter initials&submit score div

// go back to index

// write a function to turn brain back to a solid state after its inevitable melting due to overheating

startButton.addEventListener("click", startTimer);
startQuizDiv.addEventListener("click", startQuiz);
