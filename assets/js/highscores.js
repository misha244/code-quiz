const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");
const scoresDiv = document.getElementById("scores");

let index = 0;

// get high scores from local storage. if empty - returns empty array
const getScoresFromLocal = () => {
  const highScores = localStorage.getItem("highScores");

  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
};

// rank scores in descending order
const rankScores = (lowestScore, highestScore) => {};
const score = timerValue;

// create high scores table/list using the scores in local storage
const createHighScoresTable = (highScores) => {
  const tableElement = document.createElement("table");
  tableElement.setAttribute("id", "score-table");
  tableElement.setAttribute("class", "score-table");
  const createRowElement = (highScore) => {
    const rowElement = tableElement.insertRow(-1);
    rowElement.setAttribute("id", "row-element");
    rowElement.setAttribute("class", "row-element");
    rowElement.insertCell(-1).textContent = highScore.initials;
    rowElement.insertCell(-1).textContent = highScore.score;
    index += 1;
  };

  highScores.forEach(createRowElement);

  scoresDiv.appendChild(tableElement);
};

// on load - read local storage
const onLoad = () => {
  getScoresFromLocal();
};

// clear score fn - remove from local storage
function clearScore() {
  localStorage.clear();
}

// add event listeners
window.addEventListener("load", onLoad);
clearScoreButton.addEventListener("click", clearScore);

// TODO
// expand onLoad fn
// fix rank score fn
// render high scores table
