var submitFormButton = document.querySelector("#submit-answer-btn");
var quizScoreOutput = document.querySelector("#output-quiz");
var quizForm = document.querySelector(".form-container");

const correctAnswers = ["90°","right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    var formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }

    quizScoreOutput.innerText = "Your score: " + score;
}

submitFormButton.addEventListener('click', calculateScore);