const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

let index = 0;

// declare high scores const
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

// rank scores in descending order

const score =
  // clear score fn - remove from local storage
  function clearScore() {
    localStorage.clear();
  };

// on load - read local storage & remove from page
const onLoad = () => {
  getScoresFromLocal();
};

// add event listener on load
window.addEventListener("load", onLoad);

// add event listeners for buttons
goBackButton.addEventListener("click", goBack);
clearScoreButton.addEventListener("click", clearScore);

// create high scores table/list using the scores in local storage
const createHighScoresTable = () => {};

// TODO

/// create li for each score item
/// append to score div
// render high scores table
