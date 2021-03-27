const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

// go back fn - navigate to index.html
const goBack = () => {
  location.href = "/index.html";
};

// clear score fn - remove from local storage
const clearScore = () => {
  localStorage.clear();
};

// fn to get scores from storage
const getScoresFromLocal = () => {
  const highScores = localStorage.getItem("highScores");
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

// TODO

/// create li for each score item
/// append to score div
// create high scores array
