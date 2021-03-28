const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

let index = 0;

// rank scores in descending order
const rankScores = () => {};
const score =
  // clear score fn - remove from local storage
  function clearScore() {
    localStorage.clear();
  };

// get high scores from local storage
const getScoresFromLocal = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  console.log(highScores);
};

// create high scores table/list using the scores in local storage
const createHighScoresTable = () => {
  const tableElement = document.createElement("table");
  tableElement.setAttribute("id", "score-table");
  tableElement.setAttribute("class", "score-table");

  //const createRowElement = () => {
  //  const rowElement =
  //};
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
// TODO

/// create li for each score item
/// append to score div
// render high scores table
