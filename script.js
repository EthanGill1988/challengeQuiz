const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("questions");
startButton.addEventListener("click", startGame);



var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");
var choices = document.querySelector("#choices")

var start = document.getElementById("start");
var titleEl = document.getElementById("#question-title");


start.onclick = function() {
    var div = document.getElementById("startScreen");
    div.classList.add("hide");
    
};

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

function showQuestion() {
    var choicesElement = document.getElementById("choices");
    choicesElement.style.display = "block";
    
    questionCardElement.classList.remove("hide");
    
    // Get the current question
    var currentQuestion = questions[currentQuestionIndex];
    
    // Update the titleEl
    titleEl.textContent = currentQuestion.question;
    
    // Update the options
    // Assuming you have option elements with IDs like "option1", "option2", etc.
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var optionElement = document.getElementById("option" + (i + 1));
      optionElement.textContent = currentQuestion.options[i];
    }
  }

  function checkAnswer(event) {
    var clickedEl = event.target;
    var userSelection = clickedEl.innerText;
  
    // Get the current question
    var currentQuestion = questions[currentQuestionIndex];
  
    // Compare user selection with the correct answer
    if (userSelection === currentQuestion.answer) {
      // Correct answer
      scoreCounter++;
    } else {
      // Incorrect answer
      timerCount -= 10; // Subtract 10 seconds from the timer
    }
  
    // Proceed to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
      // Still more questions to ask
      currentQuestionIndex++;
      showQuestion();
    } else {
      // No more questions, end the quiz
      endQuiz();
    }
  }

  function endQuiz() {
    // Hide question section
    questionCardElement.classList.add("hide");
  
    // Show high-score section
    var highScoreSection = document.getElementById("high-score");
    highScoreSection.classList.remove("hide");
  
    // Save user's initials to local storage
    var initials = prompt("Enter your initials:");
    localStorage.setItem("initials", initials);
  
    // Additional logic for handling high scores or other end-of-quiz actions can be added here
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

    







