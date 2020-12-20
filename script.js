// <!-- hide start button when pushed and reappear/rename when highscores are shown -->
// <!-- when start button is pressed a timer starts and i am presented with a question -->
// <!-- if question is answered correctly next question -->
// <!-- if question is answered wrong subtract from timer and move on -->
// <!-- if timer hits 0 game over -->
// <!-- when all questions are answered you can save initials and score -->

// when start button is pressed change h1 to quiz question, hide start button and show possible answers

var timerEl = document.getElementById("time-left");

var cardBody = document.getElementById("card-body");

var h1 = document.getElementById("quiz-text");

var desc = document.getElementById("description");

var startBtn = document.getElementById("start");

var button = document.createElement("button");
button.innerHTML = "Do Something";

startBtn.addEventListener("click", function() {
    
    secLeft();
    questionOne();
})

function secLeft() {
    var timeLeft = 5;
    setInterval(function() {
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(secLeft);
            gameOver();
        }
    }, 1000)
}

function gameOver() {
    h1.textContent = "u lose"
}

function questionOne() {
    h1.textContent = "Question One"

    cardBody.appendChild(button)
}

// when start button is pressed
    // change h1 tag to question 1
    // hide article and start button
    // display 4 answers

    // if correct answer is selected then continue
    // else -10 sec & continue

    // possible ways: inc question # by 1 when answered and create a new function per question
    // put questions in 1 big function