const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpan = document.getElementById("timer");
const introDiv = document.getElementById("intro-section");

// declaring on-start score value
let score = 0;

// declaring on-start value for the timer
let timerValue = 60;

// declaring an index for question array
let index = 0;

// function to remove intro section on start
const removeIntroSection = () => {
  introDiv.remove();
};

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
    correctAnswer: "The Baha Men",
  },
  {
    title: "Moon landing?",
    choices: [
      "staged by Walt Disney",
      "sure",
      "Alexa, show Buzz Aldrin punching that dude",
      "alexa, play man on the moon by r.e.m.",
    ],
    correctAnswer: "sure",
  },

  {
    title: "Dennis is asshole. Why Charlie hate",
    choices: [
      "Dee looks like a bird",
      "Because of the implication",
      "Dennis is a bastard man",
      "Wild card, baby!",
    ],
    correctAnswer: "Dennis is a bastard man",
  },
  {
    title: "Do you know who I am!?!",
    choices: [
      "Who are you?!",
      "Ronnie Pickering!",
      "Who the fuck is that?",
      "Me",
    ],
    correctAnswer: "Ronnie Pickering!",
  },
  {
    title: "Who was Stone Cold Steve Austin addressing in his 3:16 promo?",
    choices: [
      "Shawn Michaels",
      "Vince McMahon",
      "Triple H",
      "Jake 'The Snake' Roberts",
    ],
    correctAnswer: "Jake 'The Snake' Roberts",
  },
];

// timer
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

// create buttons for choices
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

startButton.addEventListener("click", () => {
  startQuiz();
  startTimer();
  removeIntroSection();
});
