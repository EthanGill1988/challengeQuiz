const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("hide");
startButton.addEventListener("click", startGame);



var chosenWord = '';
var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");

var words = ["variable", "array", "DOM", "root", "setAttribute", "string", "boolean", "function"];

function init() {
    
}

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    questionCardElement.classList.remove("hide");
    isWin = false;
    timerCount = 50;
    startButton.disabled = true;

    startTimer()
}
function setNextQuestion() {

}
function winGame() {
    wordBlank.textContent = "Winner, Winner Chicken Dinner!! 🏆";
    scoreCounter++
    startButton.disabled = false;

}

function loseGame() {
    wordBlank.textContent = "Don't Be Glum Chum, Give it a 'notha Whack!!";
    startButton.disabled = false;
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

function getRandomWords(array) {
    var random = Math.random();
    var rawIndex = random*array.length;
    var index = Math.floor(rawIndex);
    var item = array[index];

    return item; 
}




init();


