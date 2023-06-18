
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
var highScoresList = document.getElementById("highscores");

highScores.forEach(function(scoreData) {
  var scoreItem = document.createElement("li");
  scoreItem.textContent = scoreData.initials + " - " + scoreData.score;
  highScoresList.appendChild(scoreItem);
});

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
  localStorage.removeItem("scores");
  highScoresList.innerHTML = "";
});