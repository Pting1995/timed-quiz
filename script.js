// <!-- hide start button when pushed and reappear/rename when highscores are shown -->
// <!-- when start button is pressed a timer starts and i am presented with a question -->
// <!-- if question is answered correctly next question -->
// <!-- if question is answered wrong subtract from timer and move on -->
// <!-- if timer hits 0 game over -->
// <!-- when all questions are answered you can save initials and score -->

// when start button is pressed change h1 to quiz question, hide start button and show possible answers
var startBtn = document.getElementById("start")
var h1 = document.getElementById("quiz-text")


startBtn.addEventListener("click", function() {
    h1.textContent = "Question One"
})