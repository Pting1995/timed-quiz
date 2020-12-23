var timerEl = document.getElementById("time-left");

var questionArea = document.getElementById("question-area");

var h1El = document.getElementById("quiz-text");

var descEl = document.getElementById("description");

var startBtn = document.getElementById("start-button")

var initialsForm = document.getElementById("initials-form")

var highscoreBtn = document.getElementsByClassName("highscore-button")

var highscoreList = document.getElementById("highScores-list")

var hrEl = document.getElementById("feedback-line");
var feedbackText = document.getElementById("feedback-text");

var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

var timeLeft = 100

startBtn.addEventListener("click", function() {

    secLeft();

    questionOne();
})

function secLeft() {
    
    setInterval(function() {
        timeLeft--;
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + " seconds left";
            
        }
        else {
            timerEl.textContent = "";
            clearInterval(secLeft);
            gameOver();
        }
        
    }, 1000)
}

// subtracts time for wrong answers
function minusTime() {
    timeLeft = timeLeft - 10;
}

// shows game over screen if user run out of time
function gameOver() {
    h1El.textContent = "You lose!";
    descEl.textContent = "Your final score is: 0";
    timerEl.hidden = true;
    answer1.hidden = true;
    answer2.hidden = true;
    answer3.hidden = true;
    answer4.hidden = true;
}

// shows feedback if question is answered correctly
function posFeedback() {
    hrEl.hidden = false
    feedbackText.textContent = "Correct!";;
    feedbackText.hidden = false;
}

// shows feedback if question is answered incorrectly
function negFeedback() {
    hrEl.hidden = false;
    feedbackText.hidden = false;
}

function removeMinusTime() {
    answer1.removeEventListener("click", minusTime);
    answer2.removeEventListener("click", minusTime);
    answer3.removeEventListener("click", minusTime);
    answer4.removeEventListener("click", minusTime);
}

function questionOne() {
    h1El.textContent = "Whales live in the";
    // hides test description and start button
    descEl.textContent = "";
    startBtn.style.display = "none";

    answer1.innerHTML = "Ocean";
    questionArea.appendChild(answer1);
    answer2.innerHTML = "Ground";
    questionArea.appendChild(answer2);
    answer3.innerHTML = "Sky";
    questionArea.appendChild(answer3);
    answer4.innerHTML = "Vacuum of space";
    questionArea.appendChild(answer4);

    answer1.addEventListener("click", posFeedback);
    answer1.addEventListener("click", questionTwo);

    answer2.addEventListener("click", minusTime);
    answer2.addEventListener("click", negFeedback);
    answer2.addEventListener("click", questionTwo);


    answer3.addEventListener("click", minusTime);
    answer3.addEventListener("click", negFeedback);
    answer3.addEventListener("click", questionTwo);

    answer4.addEventListener("click", minusTime);
    answer4.addEventListener("click", negFeedback);
    answer4.addEventListener("click", questionTwo);
}

function questionTwo() {
    removeMinusTime()
    h1El.textContent = "What do emperor penguins eat?";

    answer1.innerHTML = "Seaweed";
    questionArea.appendChild(answer1);
    answer2.innerHTML = "Ice";
    questionArea.appendChild(answer2);
    answer3.innerHTML = "Krill";
    questionArea.appendChild(answer3);
    answer4.innerHTML = "Whales";
    questionArea.appendChild(answer4);

    answer1.addEventListener("click", minusTime);
    answer1.addEventListener("click", negFeedback);
    answer1.addEventListener("click", questionThree);

    answer2.addEventListener("click", minusTime);
    answer2.addEventListener("click", negFeedback);
    answer2.addEventListener("click", questionThree);

    answer3.addEventListener("click", posFeedback);
    answer3.addEventListener("click", questionThree);

    answer4.addEventListener("click", minusTime);
    answer4.addEventListener("click", negFeedback);
    answer4.addEventListener("click", questionThree);
}

function questionThree() {
    removeMinusTime()
    h1El.textContent = "What best describes a zebra's diet?";

    answer1.innerHTML = "Omnivore";
    questionArea.appendChild(answer1);
    answer2.innerHTML = "Herbivore";
    questionArea.appendChild(answer2);
    answer3.innerHTML = "Carnivore";
    questionArea.appendChild(answer3);
    answer4.innerHTML = "Cannibal";
    questionArea.appendChild(answer4);

    answer1.addEventListener("click", minusTime);
    answer1.addEventListener("click", negFeedback);
    answer1.addEventListener("click", summary);

    answer2.addEventListener("click", posFeedback);
    answer2.addEventListener("click", summary);

    answer3.addEventListener("click", minusTime);
    answer3.addEventListener("click", negFeedback);
    answer3.addEventListener("click", summary);

    answer4.addEventListener("click", minusTime);
    answer4.addEventListener("click", negFeedback);
    answer4.addEventListener("click", summary);
}

function summary() {

    var allUsers = []
    

    h1El.textContent = "All questions answered!"
    descEl.textContent = "Your final score is: " + timeLeft
    timerEl.hidden = true;
    answer1.hidden = true;
    answer2.hidden = true;
    answer3.hidden = true;
    answer4.hidden = true;
    initialsForm.hidden = false
    initialsForm.addEventListener("submit", function() {
        event.preventDefault()
        // store user initials in local storage

//         highScores()
    })
}

// function highScores() {
//     h1El.textContent = "Highscores!"

// }