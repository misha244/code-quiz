const bodyElement = document.body;
const goBackButton = document.getElementById("go-back-btn");
const clearScoreButton = document.getElementById("clear-btn");

// go back fn - navigate to index.html
const goBack = () => {
  location.href = "/index.html";
};

// TODO
// fn to get scores from storage
// on load - read local storage & remove from page
/// create li for each score item
/// append to score div
// create high scores array
// clear score fn - remove from local storage
