const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("questions");
const titleEl = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");

startButton.addEventListener("click", startGame);

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
  }
];

var scoreCounter = 0;
var isWin = false;
var timer;
var timerCount;
var timerElement = document.querySelector(".timer");
var currentQuestionIndex = 0;

function startGame() {
  startButton.classList.add("hide");
  questionCardElement.classList.remove("hide");
  isWin = false;
  timerCount = 50;
  startButton.disabled = true;

  showQuestion();
  startTimer();
}

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

function endQuiz() {
  questionCardElement.classList.add("hide");
  // Code for handling the end of the quiz
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

    







