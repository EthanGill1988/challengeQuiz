const startButton = document.getElementById("start");
const questionCardElement = document.getElementById("questions");
const timerElement = document.querySelector(".timer");
startButton.addEventListener("click", startGame);

<script src="questions.js">
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

document.querySelector("#start").onclick = function(){

    const h1 = document.querySelector("#startScreen");
    const underline = document.createElement("u");
    underline.innerText = "Good Game!";
    h1.innerText = "";
    h1.append(underline);

    const choices = document.querySelectorAll(".choices");
   
    choices.forEach(element => this.querySelector("wrapper"));

    const buttons = document.querySelectorAll("button");
    //buttons[0].remove();
    buttons.forEach(element => element.remove());
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
