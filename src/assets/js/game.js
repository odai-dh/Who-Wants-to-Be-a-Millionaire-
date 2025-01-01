import { getQuestions } from "./api.js";
import "../styles/style.css";
import "../styles/reset.css";
import "../js/splash.js";

let currentQuestion = 0;
let questions = [];
let money = 0;


async function startGame() {
    const gameElement = document.getElementById("game");
    gameElement.innerHTML = `
        <div id="question" class="question"></div>
        <div id="answers" class="answers"></div>
    `;
    try{
    questions = await getQuestions();
    if (questions.length > 0) {
        showQuestion();
    }
    } catch (error) {
        console.error("Failed to fetch questions:", error);
        document.getElementById("game").innerHTML = "<p>Couldn't load the questions. Please try again later.</p>";
    }
}

function showQuestion() {
    const questionPart = document.getElementById("question");
    const answersPart = document.getElementById("answers");

    const question = questions[currentQuestion];
    // To make the answers randomly showing and not in the same place
    const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

    questionPart.innerHTML = question.question;
    answersPart.innerHTML = "";
    // Showing the multiple-choice answers 
    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.className = "answer-btn";
        button.onclick = () => checkAnswer(answer === question.correct_answer, question.correct_answer);
        answersPart.appendChild(button);
    });
}

function checkAnswer(isCorrect, correctAnswer) {
    const answersPart = document.getElementById("answers");

    // Find the button that was clicked
    const selectedButton = Array.from(answersPart.children).find(
        (button) => button.innerHTML === correctAnswer
    );
    if (isCorrect) {
        money += 100000; // Increment money by 100 if the answer is correct
        if (selectedButton) selectedButton.classList.add("correct-answer");
    } else {
        // Show correct answer if the selected one is wrong
        const correctButton = Array.from(answersPart.children).find(
            (button) => button.innerHTML === correctAnswer
        );
        if (correctButton) correctButton.classList.add("correct-answer");
    }

    // Disable all buttons after answering
    Array.from(answersPart.children).forEach((button) => {
        button.disabled = true;
        if (!isCorrect && button.innerHTML !== correctAnswer) {
            button.classList.add("wrong-answer");
        }
    });

    // Show the next question button
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "Next Question";
    nextButton.className = "next-question-button";
    nextButton.onclick = nextQuestion;
    document.getElementById("next-question-container").appendChild(nextButton);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
    // Remove the next question button
    const nextButton = document.querySelector(".next-question-button");
    if (nextButton) nextButton.remove();
}

function showFinalScore() {
    const gameElement = document.getElementById("game");
    gameElement.innerHTML = `
    <div id="final-score" class="final-score">
        <h2>Well Done!</h2>
        <p>Okay. You going home with $${money}. Have it your way! Good bye! Good night! Good luck!</p>
        <button id="restart-btn">Restart Quiz</button>
    </div>
    `;

    const restartButton = document.getElementById("restart-btn");
    restartButton.onclick = restartQuiz;
}

function restartQuiz() {
    currentQuestion = 0;
    money = 0;
    startGame();
}

// Start the quiz after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", startGame);