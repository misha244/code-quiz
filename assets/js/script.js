const bodyElement = document.body;
const startQuizBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const timerSpan = document.getElementById("timer");
const introDivElement = document.getElementById("intro-section");

// declaring on-start value
let timerValue = 60;
let index = 0;
timerSpan.textContent = timerValue;

// questions array
const questionsArray = [
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
    title: "Dennis is asshole. Why Charlie hate",
    choices: [
      "Dee looks like a bird",
      "Because of the implication",
      "Dennis is a bastard man",
      "Wild card, baby!",
    ],
    answer: "Dennis is a bastard man",
  },
  {
    title: "Do you know who I am!?!",
    choices: [
      "Who are you?!",
      "Ronnie Pickering!",
      "Who the fuck is that?",
      "Me",
    ],
    answer: "Ronnie Pickering!",
  },
  {
    title: "Who was Stone Cold Steve Austin addressing in his 3:16 promo?",
    choices: [
      "Shawn Michaels",
      "Vince McMahon",
      "Triple H",
      "Jake 'The Snake' Roberts",
    ],
    answer: "Jake 'The Snake' Roberts",
  },
];

// create buttons for the choices
const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = (choice) => {
    const gameOverContainer = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.setAttribute("class", "btn choice-btn");
    button.textContent = choice;

    gameOverContainer.appendChild(button);

    parentDiv.appendChild(gameOverContainer);
  };
  choices.forEach(createChoiceAndAppend);

  return parentDiv;
};

// create questions from the questions array
const createQuestion = (question) => {
  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("id", "question-container");
  gameOverContainer.setAttribute("class", "question-container");
  gameOverContainer.setAttribute("data-answer", question.answer);

  const overElement = document.createElement("h2");
  overElement.setAttribute("id", "question");
  overElement.setAttribute("class", "question");
  overElement.textContent = question.title;

  const choices = createChoices(question.choices);

  gameOverContainer.append(overElement, choices);
  gameOverContainer.addEventListener("click", verifyChoice);

  return gameOverContainer;
};

// render question
const renderQuestion = (question) => {
  if (index < questionsArray.length) {
    const questionContainer = createQuestion(question);
    quizContainer.appendChild(questionContainer);
  }
};

// set up start timer fn
const startTimer = () => {
  const timerTick = () => {
    timerSpan.textContent = timerValue;
    timerValue -= 1;

    if (timerValue <= 0) {
      timerValue = 0;
      timerSpan.textContent = timerValue;
      clearInterval(timer);
      displayGameOverContainer();
    }
    if (index === questionsArray.length) {
      clearInterval(timer);
      displayGameOverContainer();
      timerSpan.textContent = timerValue;
    }
  };

  const timer = setInterval(timerTick, 1000);
};

// verify choice and continue to next question
const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.dataset.answer;
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      const replaceQuestion = () => {
        const questionContainer = document.getElementById("question-container");
        if (index < questionsArray.length) {
          quizContainer.removeChild(questionContainer);
          renderQuestion(questionsArray[index]);
        }
      };

      index += 1;
      target.setAttribute("class", "correct-answer");
      if (document.getElementById("wrong")) {
        currentTarget.removeChild(document.getElementById("wrong"));
      }
      const correct = document.createElement("div");
      correct.setAttribute("class", "correct");
      correct.textContent = "Correct!";
      currentTarget.appendChild(correct);

      setTimeout(replaceQuestion, 500);
    } else {
      target.setAttribute("class", "wrong-answer");

      if (document.getElementById("wrong")) {
        currentTarget.removeChild(document.getElementById("wrong"));
      }
      const wrong = document.createElement("div");
      wrong.setAttribute("class", "wrong");
      wrong.setAttribute("id", "wrong");
      wrong.textContent = "Wrong!";
      currentTarget.appendChild(wrong);

      if (timerValue >= 10) {
        timerValue -= 10;
      } else {
        timerValue = 0;
      }
    }
  }
};

// determine final score
const finalScore = () => {
  const highScores = localStorage.getItem("highScores");

  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
};

// submit final score
const submitScore = (event) => {
  event.preventDefault();

  // get button event
  const target = event.target;

  // if button is clicked
  if (target.matches("button")) {
    const score = timerValue;
    const initials = document.getElementById("name-input").value;

    // if initials input is not empty, add initials and score to an array, set to local storage
    if (initials !== "") {
      const highScore = {
        initials: initials,
        score: score,
      };
      const highScores = finalScore();
      highScores.push(highScore);
      localStorage.setItem("highScores", JSON.stringify(highScores));
    }

    location.href = "https://misha244.github.io/code-quiz/high-scores.html";
  }
};

// display game over form
const displayGameOverContainer = () => {
  quizContainer.removeChild(document.getElementById("question-container"));
  createGameOverForm();
};

// create a game over form
const createGameOverForm = () => {
  const gameOverContainer = document.createElement("div");
  gameOverContainer.setAttribute("id", "question-container");
  gameOverContainer.setAttribute("class", "question-container");
  quizContainer.appendChild(gameOverContainer);

  const overElement = document.createElement("h2");
  overElement.setAttribute("id", "title");
  overElement.setAttribute("class", "title");
  overElement.textContent = "GAME OVER";
  gameOverContainer.appendChild(overElement);

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("id", "final-score");
  scoreDiv.setAttribute("class", "final-score");
  scoreDiv.textContent = "Your final score is: ";
  gameOverContainer.appendChild(scoreDiv);

  const spanElement = document.createElement("span");
  spanElement.textContent = timerValue;
  scoreDiv.appendChild(spanElement);

  const gameOverForm = document.createElement("form");
  gameOverForm.setAttribute("id", "game-over-form");
  gameOverForm.setAttribute("class", "game-over-form");
  gameOverForm.addEventListener("click", submitScore);
  gameOverContainer.appendChild(gameOverForm);

  const initialsInput = document.createElement("input");
  initialsInput.setAttribute("id", "initials-input");
  initialsInput.setAttribute("class", "initials-input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("placeholder", "Please enter your initials:");
  gameOverForm.appendChild(initialsInput);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-btn");
  submitButton.setAttribute("class", "btn submit-btn");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";
  gameOverForm.appendChild(submitButton);
};

// remove intro contaier and start quiz
const startQuiz = () => {
  // remove intro div
  quizContainer.removeChild(introDivElement);
  // create question div
  renderQuestion(questionsArray[index]);
};

//TODO
// change qs to the proper ones
// create clear score fn
// try not to have a brain aneurysm while completing the above tasks

startQuizBtn.addEventListener("click", () => {
  startQuiz();
  startTimer();
});
