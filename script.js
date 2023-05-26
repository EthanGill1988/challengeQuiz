const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("questions");
startButton.addEventListener("click", startGame);


var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");
var questions = document.querySelector("#questions")

var start = document.getElementById("start");
var titleEl = document.getElementById("question-title");


start.onclick = function() {
    var div = document.getElementById("start-screen");
    div.classList.add("hide");
    
};

function startGame() {
    console.log("Started");
    
    questionCardElement.classList.remove("hide");
    isWin = false;
    timerCount = 50;
    startButton.disabled = true;

    startTimer()
}

function showQuestion() {
    var div = document.getElementById("questions");
    questions.display.style("block");
    //get the current question


    //update the titleEl 
    titleEl.display.style("block");

    //update the options
}

function checkAnswer() {
    // compare user selection to the correct answer of the the current question

    // if correct 
        // add points to score
    // else
        // subtract time from timer

    // if there are more questions to ask
        //show next question
    //else 
        // call endQuiz

}

function endQuiz(){
    //hide question-section

    //show high-score section

    //save users initials to local storage
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







