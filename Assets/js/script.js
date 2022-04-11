const startButton = document.querySelector(".start-btn button");
const infoButton = document.querySelector(".info-box");
const quitButton = infoButton.querySelector(".buttons .quit-btn");
const continueButton = infoButton.querySelector(".buttons .restart-btn");
const gameBox = document.querySelector(".game-box");
const nextButton = gameBox.querySelector(".next-btn");
const optionText = document.querySelector(".option-list");
const timeCounter = gameBox.querySelector(".timer .timer-sec");
const timeCounterLine = gameBox.querySelector("header .time-line");


let questionCount = 0;

let questionNumber = 1;

let counter;
let timeValue = 15;
let timerLineValue = 0;
let userScore = 0;
let checkIcon = '<div class="icon check"><i class="fas fa-check"></i></div>';
let xIcon ='<div class="icon x"><i class="fas fa-times"></i></div>';

startButton.onclick = ()=>{
    infoButton.classList.add("activeInfo")
}

continueButton.onclick = ()=>{
    infoButton.classList.remove("activeInfo");
    gameBox.classList.add("activeGame");
    showQuestions(questionCount);
    queCounter(questionNumber);
    clearInterval(counter);
    startTimer(timeValue);
    startTimerLine(timerLineValue);
}

nextButton.onclick = ()=>{
    if(questionCount < questions.length -1){
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        queCounter(questionNumber);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(timerLineValue);
        startTimerLine(timerLineValue);
    }else{
        clearInterval(counter);
        clearInterval(questionNumber);
        clearInterval(timerLineValue);
        showResults();
    }  
}

function queCounter(index){
    const questionCounter = gameBox.querySelector(".total-que");
    let totalQuestionCount = "<span><p>" + questionNumber + "</p>of<p>" + questions.length + "</p>Questions</span>";
    questionCounter.innerHTML = totalQuestionsCount;
}

function showQuestions(index){
    const questionText = document.querySelector(".que-txt");
    let queTag = "<span>" + questions[index].qNumber + questions[index].question + "<span>";
    let optionTag = '<div class="option">' + questions[index].options[0] + "<span></span></div>" + '<div class="option">' + questions[index].options[1] + "<span></span></div>" + '<div class="option">' + questions[index].options[2] + "<span></span></div>" + '<div class="option">' + questions[index].options[3] + "<span></span></div>"
    optionText.innerHTML = optionTag;
    questionText.innerHTML = queTag;
    const option = optionText.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[1].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    clearInterval(counterLine);
    clearInterval(counter);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionText.children.length;
    if(userAnswer === correctAnswer){
        answer.classList.add("correct");
        userScore +=1;
        answer.insertAdjacentHTML("beforeend", xIcon);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", xIcon);
        for(let i = 0; i < allOptions; i++) {
            optionText.children[1].classList.add("disable");
        }
        nextButton.style.display = "block";
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timeCounter.textContent = "00";
        }
    }
}

function startTimerLine(time){
    counterline = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeCounterLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

function showResults(){
    scoreText.innerHTML = scoreTag;
    let scoreTag = "<span>You scored <p>" + userScore + "</p> out of <p>" + questions.length + "</p></span>";
    const scoreText = resultBox.querySelector(".score-txt");
    infoButton.classList.remove("activeInfo");
    gameBox.classList.remove("activeGame");
    resultBox.classList.add("activeResult");
}

