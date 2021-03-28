const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

// go back fn - navigate to index.html
const goBack = () => {
  location.href = "./index.html";
};

const rankScores = () => {};

// clear score fn - remove from local storage
const clearScore = () => {
  localStorage.clear();
};

// fn to get scores from storage
const getScoresFromLocal = () => {
  const highScores = localStorage.getItem("highScores");
  console.log(highScores);

  // parse scores to object if present
  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
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
// create high scores table using local storage
/// create li for each score item
/// append to score div
// render high scores table
