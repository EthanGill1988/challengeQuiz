const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("questions");
const titleEl = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");

startButton.addEventListener("click", startGame);
// the base code I was given had the questions in a seperate .js file. it took askBCS a half hour to tell me I didn't need it
// i asked Ed and he seemed annoyed and said I was supposed to use it. Now I think the 'questions.js' was supposed to be 'scores.js'
// either way, $12k (I only made $19k last year), for two people to give me answers that didn't help. 
//anyways, heres the questions array.
var questions = [
  {
    question: "I am used to store multiple values in a single variable, what am I?",
    options: ["Directory", "Class", "Module", "Array"],
    correctAnswer: "Array",
  },
  {
    question: "I am a region where expressions and values can be referenced, what am I?",
    options: ["Scope", "Database", "Module", "Brace"],
    correctAnswer: "Scope",
  },
  {
    question: "I have Audio Processiong Disorder which means:",
    options: ['live lectures are a pain in my butt', 'breakout rooms are brutal', 'please just give me a road map to follow', 'all the above'],
    correctAnswer: 'all the above',
  }
];

var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");
var currentQuestionIndex = 0;

// the startGame function that adds or removes the 'hide' attrivute and starts the timer.
function startGame() {
  startButton.classList.add("hide");
  questionCardElement.classList.remove("hide");
  isWin = false;
  timerCount = 50;
  startButton.disabled = true;

  showQuestion();
  startTimer();
}
// pulls questions from the question array
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  titleEl.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];
    var optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.classList.add("option");
    optionElement.addEventListener("click", checkAnswer);
    choicesElement.appendChild(optionElement);
  }
}
// function to judge one's brain use skills 
function checkAnswer(event) {
  var userSelection = event.target.textContent;
  var currentQuestion = questions[currentQuestionIndex];

  if (userSelection === currentQuestion.correctAnswer) {
    scoreCounter++;
  } else {
    timerCount -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// ending the quiz, prompting the user and redirection to the High Scores page.
function endQuiz() {
  clearInterval(timer); 
  questionCardElement.classList.add("hide");

  var finalScore = scoreCounter; 
  var finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = finalScore;

  var endScreenElement = document.getElementById("end-screen");
  endScreenElement.classList.remove("hide"); 

  var initialsInput = document.getElementById("initials");
  var submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function() {
    var initials = initialsInput.value.trim(); 

    if (initials !== "") {
      var scoreData = {
        score: finalScore,
        initials: initials,
      };

      var scores = JSON.parse(localStorage.getItem("scores")) || [];
      scores.push(scoreData);
      scores.sort(function(a, b) {
        return b.score - a.score;
      });

      localStorage.setItem("scores", JSON.stringify(scores));

      alert("Score and initials saved!");
      window.location.href = "highscores.html";
    } else {
      alert("Please enter your initials.");
    }
  });
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

    







