const bodyElement = document.body;
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpan = document.getElementById("timer");
const introDiv = document.getElementById("intro-section");

// declaring on-start values
let score = 0;
let timerValue = 60;
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

// TODO create a fn to view high scores
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

// verify choice and continue to next question
const answerCheck = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else if (answer !== correctAnswer) {
      alert(" 'NO!' - Jeremy Paxman");
      timerValue -= 10;
    }
  }
};

// create question
const createQuestion = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);
  console.log("yada yada yada");

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);

  divContainer.addEventListener("click", answerCheck);

  return divContainer;
};

// render question
const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.appendChild(questionContainer);
  } else {
    alert("play 'Celebration' by Kool & The Gang ");

    // direct to game over form
  }
};

// remove start container and start quiz
const startQuiz = () => {
  // remove the start button container
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  renderQuestion();
};

// start timer
const startTimer = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerSpan.textContent = timerValue;

    if (timerValue === 0) {
      // timerValue = 0;
      timerSpan.textContent = timerValue;
      clearInterval(timer);
    }
    if (index === questions.length) {
      clearInterval(timer);
      timerSpan.textContent = timerValue;
    }
  };
  const timer = setInterval(timerTick, 1000);
};
// determine final score
// const finalScore = () => {};

// display game over fn
const displaygameOverContainer = () => {
  quizContainer.removeChild(document.getElementById("question"));
  gameOverContainer;
};
// create a game over form
const createGameOverForm = () => {
  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("id", "game-over-container");
  gameOverContainer.setAttribute("class", "game-over-container");
  quizContainer.appendChild(gameOverContainer);

  const overElement = document.createElement("h2");
  overElement.setAttribute("id", "title");
  overElement.setAttribute("class", "title");
  overElement.textContent = "Game Over!";
  gameOverContainer.appendChild(overElement);

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("id", "final-score");
  scoreDiv.setAttribute("class", "final-score");
  scoreDiv.textContent = "Your final score is";
  gameOverContainer.appendChild(scoreDiv);

  const spanElement = document.createElement("span");
  spanElement.textContent = timerValue;
  scoreDiv.appendChild(spanElement);

  const gameOverForm = document.createElement("form");
  gameOverForm.setAttribute("id", "game-over-form");
  gameOverForm.setAttribute("class", "game-over-form");
  gameOverContainer.appendChild(gameOverForm);

  const initialsForm = document.createElement("input");
  initialsForm.setAttribute("type", "text");
  initialsForm.setAttribute("placeholder", "Please enter your initials");
  initialsForm.setAttribute("id", "initials-input");
  initialsForm.setAttribute("class", "initials-input");
  gameOverForm.appendChild(initialsForm);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("class", "submit-btn");
  submitButton.textContent = "Submit";
  gameOverForm.appendChild(submitButton);
};

//TODO

// set up highscores fns
// take back to index.html when done
// local memory store highscores
// change qs to the proper ones
// create clear score fn
// try not to have a brain aneurysm while completing the above tasks

startButton.addEventListener("click", () => {
  startQuiz();
  startTimer();
  removeIntroSection();
});
