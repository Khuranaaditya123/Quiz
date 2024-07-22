const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which html element does javascript is written? ",
        choice1: "<script>",
        choice2: "<html>",
        choice3: "<js>",
        choice4: "<javascript>",
        answer: 1
    },
    {
        question: "Inside which html element does css is written? ",
        choice1: "<script>",
        choice2: "<html>",
        choice3: "<style>",
        choice4: "<css>",
        answer: 3
    },
    {
        question: "Which backend language is similar as Javascript? ",
        choice1: "node js",
        choice2: "python",
        choice3: "js",
        choice4: "express",
        answer: 1
    },
    {
        question: "To fetch all the records from database which command is run? ",
        choice1: "select",
        choice2: "fetch",
        choice3: "update",
        choice4: "insert",
        answer: 1
    },
    {
        question: "To insert the records in the database which command is run? ",
        choice1: "select",
        choice2: "fetch",
        choice3: "update",
        choice4: "insert",
        answer: 4
    },
    {
        question: "To update the records in the database which command is run? ",
        choice1: "select",
        choice2: "fetch",
        choice3: "update",
        choice4: "insert",
        answer: 3
    },
    {
        question: "Which css is most preferable by developers? ",
        choice1: "inline",
        choice2: "internal",
        choice3: "external",
        choice4: "style",
        answer: 3
    },
    {
        question: "To fetch the records in the database which command is run? ",
        choice1: "select",
        choice2: "fetch",
        choice3: "update",
        choice4: "insert",
        answer: 2
    },
    {
        question: "To delete the records in the database which command is run? ",
        choice1: "select",
        choice2: "delete",
        choice3: "update",
        choice4: "insert",
        answer: 2
    },
    {
        question: "To fetch all the records in the database which command is run? ",
        choice1: "select",
        choice2: "fetch",
        choice3: "update",
        choice4: "insert",
        answer: 1   
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length ==0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex,1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if(classToApply=='correct'){
            incrementScore(CORRECT_BONUS)
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        // console.log(selectedAnswer);
    })
})
incrementScore = num => {
    score+=num;
    scoreText.innerText = score;
}
startGame();