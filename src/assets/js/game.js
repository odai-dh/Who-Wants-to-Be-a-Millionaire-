import { getQuestions } from "./api.js"
import "../styles/style.css"
import "../styles/reset.css"
import "../js/splash.js"

let currentQuestion = 0;
let questions = [];
let money = 0;


async function startGame() {
    const gameElement = document.getElementById("game");
    gameElement.innerHTML = `
        <div id="question" class="question"></div>
        <div id="answers" class="answers"></div>
    `;
    try {
        questions = await getQuestions()
        if (questions.length > 0) {
            showQuestion()
        };
    } catch (error) {
        console.error("Failed to fetch questions:", error)
        gameElement.innerHTML =
            "<p>Couldn't load the questions. Please try again later.</p>";
    };
};
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const questionPart = document.getElementById("question");
    const answersPart = document.getElementById("answers");
    const answerLabels = ["A", "B", "C", "D"];
    const question = questions[currentQuestion];


    const answers = shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
    ]);


    questionPart.textContent = question.question;
    answersPart.textContent = "";
    // Showing the multiple-choice answers 
    answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `<span class="answer-lable">${answerLabels[index]}:</span> ${answer}`;
        button.className = "answer-btn";
        button.setAttribute("data-answer", answer);
        button.onclick = () =>
            checkAnswer(answer === question.correct_answer, answer);
        answersPart.appendChild(button);
    });
}

function checkAnswer(isCorrect, selectedAnswer) {
    const answersPart = document.getElementById("answers");

    if (isCorrect) {
        money += 100000 
    };

    Array.from(answersPart.children).forEach((button) => {
        const answer = button.getAttribute("data-answer");
        if (answer === selectedAnswer) {
            button.classList.add(isCorrect ? "correct-answer" : "wrong-answer")
        };
        if (answer === questions[currentQuestion].correct_answer) {
            button.classList.add("correct-answer")
        };
        button.disabled = true;
    });

    // Show the next question button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    nextButton.className = "next-question-button";
    nextButton.onclick = nextQuestion;
    document.getElementById("next-question-container").appendChild(nextButton);
};

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
    const nextButton = document.querySelector(".next-question-button");
    if (nextButton) nextButton.remove();
};

function showFinalScore() {
    const gameElement = document.getElementById("game")
    gameElement.innerHTML = `
    <div id="final-score" class="final-score">
        <h2>Well Done!</h2>
        <p>Okay. You going home with $${money}. Have it your way! Good bye! Good night! Good luck!</p>
        <button id="restart-btn">Restart Quiz</button>
    </div>
    `;

    const restartButton = document.getElementById("restart-btn");
    restartButton.onclick = restartQuiz;
};

function restartQuiz() {
    currentQuestion = 0;
    money = 0;
    startGame();
};

document.addEventListener("DOMContentLoaded", startGame);