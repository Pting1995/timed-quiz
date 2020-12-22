// <!-- hide start button when pushed and reappear/rename when highscores are shown -->
// <!-- when start button is pressed a timer starts and i am presented with a question -->
// <!-- if question is answered correctly next question -->
// <!-- if question is answered wrong subtract from timer and move on -->
// <!-- if timer hits 0 game over -->
// <!-- when all questions are answered you can save initials and score -->

// when start button is pressed change h1 to quiz question, hide start button and show possible answers

var timerEl = document.getElementById("time-left");

var questionArea = document.getElementById("question-area");

var h1El = document.getElementById("quiz-text");

var descEl = document.getElementById("description");

var startBtn = document.getElementById("start");

var hrEl = document.getElementById("feedback-line")
var feedbackText = document.getElementById("feedback-text")

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
    var line = document.createElement("hr");
}

// shows game over screen if user run out of time
function gameOver() {
    h1El.textContent = "u lose"
}

// shows feedback if question is answered correctly
function posFeedback() {
    hrEl.hidden = false
    feedbackText.textContent = "Correct!"
    feedbackText.hidden = false
}

// shows feedback if question is answered incorrectly
function negFeedback() {
    hrEl.hidden = false
    feedbackText.hidden = false
}

function questionOne() {
    h1El.textContent = "Whales live in the"
    // hides test description and start button
    descEl.textContent = ""
    startBtn.style.display = "none"

    answer1.innerHTML = "Ocean"
    questionArea.appendChild(answer1)
    answer2.innerHTML = "Ground"
    questionArea.appendChild(answer2)
    answer3.innerHTML = "Sky"
    questionArea.appendChild(answer3)
    answer4.innerHTML = "Vacuum of space"
    questionArea.appendChild(answer4) 

    answer1.addEventListener("click", function() {
        questionTwo()
        posFeedback()
    })

    answer2.addEventListener("click", function() {
        minusTime()
        questionTwo()
        negFeedback()
    })

    answer3.addEventListener("click", function() {
        minusTime()
        questionTwo()
        negFeedback()
    })

    answer4.addEventListener("click", function() {
        minusTime()
        questionTwo()
        negFeedback()
    })
}

function questionTwo() {
    h1El.textContent = "What do emperor penguins eat?"

    answer1.innerHTML = "Seaweed"
    questionArea.appendChild(answer1)
    answer2.innerHTML = "Ice"
    questionArea.appendChild(answer2)
    answer3.innerHTML = "Krill"
    questionArea.appendChild(answer3)
    answer4.innerHTML = "Whales"
    questionArea.appendChild(answer4) 

    answer1.addEventListener("click", function() {
        minusTime()
        questionThree()
        negFeedback()
    })

    answer2.addEventListener("click", function() {
        minusTime()
        questionThree()
        negFeedback()
    })

    answer3.addEventListener("click", function() {
        questionThree()
        posFeedback()
    })

    answer4.addEventListener("click", function() {
        minusTime()
        questionThree()
        negFeedback()
    })
}

function questionThree() {
    h1El.textContent = "What best describes a zebra's diet?"

    answer1.innerHTML = "Omnivore"
    questionArea.appendChild(answer1)
    answer2.innerHTML = "Carnivore"
    questionArea.appendChild(answer2)
    answer3.innerHTML = "Herbivore"
    questionArea.appendChild(answer3)
    answer4.innerHTML = "Cannibal"
    questionArea.appendChild(answer4) 

    answer1.addEventListener("click", function() {
        minusTime()
        highScore()
        negFeedback()
    })

    answer2.addEventListener("click", function() {
        minusTime()
        highScore()
        negFeedback()
    })

    answer3.addEventListener("click", function() {
        highScore()
        posFeedback()
    })

    answer4.addEventListener("click", function() {
        minusTime()
        highScore()
        negFeedback()
    })
}

// if Highscores button is pressed, or if question 3 is answered then show highscores

// when start button is pressed
    // change h1 tag to question 1
    // hide article and start button
    // display 4 answers

    // if correct answer is selected then continue
    // else -10 sec & continue

    // possible ways: inc question # by 1 when answered and create a new function per question
    // put questions in 1 big function