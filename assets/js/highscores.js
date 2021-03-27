const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

// go back fn - navigate to index.html
const goBack = () => {
  location.href = "./index.html";
};

// clear score fn - remove from local storage
const clearScore = () => {
  localStorage.clear();
};

// fn to get scores from storage
const getScoresFromLocal = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScores);
};

// on load - read local storage & remove from page
const onLoad = () => {
  getScoresFromLocal();
};

// add event listener on load
window.addEventListener("load", onLoad) => {
  console.log("Oh wow - Owen Wilson");
});

// add event listeners for buttons
goBackButton.addEventListener("click", goBack);
clearScoreButton.addEventListener("click", clearScore);

// create high scores table using local storage
/// create li for each score item
/// append to score div
/// organize scores - descending

// TODO



