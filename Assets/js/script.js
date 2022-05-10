const quizE1 = document.querySelector("#quiz");
const questionE1 = document.querySelector("#question")
const startButton = document.querySelector("#start-btn")
const answerBtnE1 = document.querySelector("#answer-btns")
let scoreCounter = document.querySelector("#points")
const timer = document.querySelector("#timer")
const timeContainer = document.querySelector(".time-container")
const highScoreForm = document.querySelector(".submit-score")
const initialsInput = document.querySelector("#initials")
const submitButton = document.querySelector("#submit-button")
const scoresList = document.querySelector("#score-list")
const scoresContainer = document.querySelector("#high-scores")
var secondsLeft = 100;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerHTML = secondsLeft
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver()
        }
    }, 1000)
}

function gameOver() {
    quizE1.classList.add("hide")
    timeContainer.classList.add("hide")
    highScoreForm.classList.remove("hide")
    alert("Game Over")
}

let questions = [
    {
    question: "Var stands for what?",
    answers: ["Variable", "Variant", "Var", "Varment"],
    correctAnswer: "Variable"
    },
    {   
    question: "What folder does the css file go in?",
    answers: ["html", "assets", "css", "readme"],
    correctAnswer: "assets"
    },
    {
    question: "Are the Minnesota Wild going to win the Stanley Cup this year?",
    answers: ["Yes", "No", "Maybe", "Probably Not"],
    correctAnswer: "Yes"
    },
    {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheet", "Coding Style Systems", "Cooper System Setup", "Coding Structer Standered"],
    correctAnswer: "Cascading Style Sheet"
    }
]

function randomize(array) {
    let currentIndex = array.length, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    setTime();
    startButton.classList.add("hide");
    randomize(questions);
    currentIndex = 0;
    quizE1.classList.remove("hide");
    getNewQuestion();
}

function getNewQuestion() {
    clearQuestion();
    showQuestion(questions[currentIndex])
}

function clearQuestion() {
    while (answerBtnE1.firstChild) {
        answerBtnE1.removeChild(answerBtnE1.firstChild)
    }
}

function showQuestion(question) {
    questionE1.textContent = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer;
        button.addEventListener("click", selectAnswer);
        answerBtnE1.appendChild(button);
    })
};

function selectAnswer(event) {
    var choice = event.target;
    var correctAnswer = questions[currentIndex].correctAnswer;
    if (choice.textContent === correctAnswer) {
        console.log("Correct")
        alert("Correct");
        scoreCounter.textContent++;
    } else {
        console.log("Incorrect")
        alert("Incorrect, 10 seconds deducted from timer");
        secondsLeft-=10
    }
    if (questions.length > currentIndex + 1) {
        currentIndex++;
        getNewQuestion();
    } else {
        gameOver();
    }
}

submitButton.addEventListener("Click", function(event) {
    event.preventDefault();

    var initials = document.querySelector("#initials").value();
    if (initials === "") {
        alert("Fill in initials");
    } else {
        alert("Submittion Successful")
    }

    localStorage.setItem("initials", initials);
    renderHighScore()
    scoresContainer.classList.remove("hide");
})

function renderHighScore() {
    var initials = localStorage.getItem("initials");

    if (!initials) {
        return;
    }
    scoresList.createElement("<li>")
}
