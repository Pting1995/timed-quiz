// <!-- hide start button when pushed and reappear/rename when highscores are shown -->
// <!-- when start button is pressed a timer starts and i am presented with a question -->
// <!-- if question is answered correctly next question -->
// <!-- if question is answered wrong subtract from timer and move on -->
// <!-- if timer hits 0 game over -->
// <!-- when all questions are answered you can save initials and score -->

// when start button is pressed change h1 to quiz question, hide start button and show possible answers

var timerEl = document.getElementById("time-left");

var cardBody = document.getElementById("card-body");

var h1El = document.getElementById("quiz-text");

var descEl = document.getElementById("description");

var startBtn = document.getElementById("start");

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

function gameOver() {
    h1El.textContent = "u lose"
}

function questionOne() {
    h1El.textContent = "Whale Whale Whale"
    // hides test description and start button
    descEl.textContent = ""
    startBtn.style.display = "none"

    answer1.innerHTML = "Mammal"
    cardBody.appendChild(answer1)
    answer2.innerHTML = "Bird"
    cardBody.appendChild(answer2)
    answer3.innerHTML = "Fish"
    cardBody.appendChild(answer3)
    answer4.innerHTML = "Whale"
    cardBody.appendChild(answer4) 

    answer1.addEventListener("click", function() {
        questionTwo()
    })
    answer2.addEventListener("click", function() {
        wrongAnswer()
        questionTwo()
    })
    answer3.addEventListener("click", function() {
        wrongAnswer()
        questionTwo()
    })
    answer4.addEventListener("click", function() {
        wrongAnswer()
        questionTwo()
    })
}

function wrongAnswer() {
    timeLeft = timeLeft - 10
}

// when start button is pressed
    // change h1 tag to question 1
    // hide article and start button
    // display 4 answers

    // if correct answer is selected then continue
    // else -10 sec & continue

    // possible ways: inc question # by 1 when answered and create a new function per question
    // put questions in 1 big function