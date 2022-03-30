function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
    }
    function showResults(questions, quizContainer, resultsContainer) {
    }
    showQuestions(questions, quizContainer);
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        questions: "Var stands for variable",
        answer: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "What folder does the css file go in?",
        answer: {
            a: "html",
            b: "Readme",
            c: "assets",
        },
        correctAnswer: "c"
    },
    {
        question: "Are the Minnesota Wild going to win the Stanley Cup this year?",
        answer: {
            a: "Yes",
            b: "No",
        },
        correctAnswer: "a"
    },
];

function showQuestions(questions, quizContainer) {
    var output = [];
    var answer;

    for(var i=0; i<questions.length; i++) {
        answer = [];
        for(letter in question[i].answer) {
            answer.push(
                "<label>"
                   + "<input type='radio' name='question'"+i+" value="+letter+">"
                   + letter + ":"
                   +questions[i].answer[letter]
                +  "</label>"
            );
        }
        outpush.push(
            '<div class="questions">' + questions[i].question + '</div>'
            + '<div class="answers">' + answer.join("") + '</div>'
        );
    }
    quizContainer.innerHTML = output.join("");
}
showQuestions(question, quizContainer);

function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var userAnswer = "";
    var numCorrect = 0;
    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector("input[name=question"+i+"]:checked")||{}).value;
        if(userAnswer === questions[i].correctAnswer) {
            numCorrect++;
            answerContainers[i].style.color = "purple";
        }
        else {
            answerContainers[i].style.color = "red";
        }
    }
    resultsContainer.innerHTML = numCorrect + "out of" + questions.length;
}
submitButton.onclick = function() {
    showResults(question, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);