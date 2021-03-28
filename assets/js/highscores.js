const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

let index = 0;

// rank scores in descending order
const rankScores = (lowestScore, highestScore) =>
  highestScore.score - lowestScore.score;

// clear score fn - remove from local storage
function clearScore() {
  localStorage.clear();
}

// declare high scores const
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

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
// create high scores table using local storage
/// create li for each score item
/// append to score div
// render high scores table
