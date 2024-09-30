const questions = [
    {
        question: "What is the capital of France?",
        answers: { A: "Paris", B: "London", C: "Berlin" },
        correctAnswer: "A"
    },
    {
        question: "What is 2 + 2?",
        answers: { A: "3", B: "4", C: "5" },
        correctAnswer: "B"
    },
    {
        question: "What color is the sky?",
        answers: { A: "Blue", B: "Red", C: "Green" },
        correctAnswer: "A"
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: { A: "Charles Dickens", B: "J.K. Rowling", C: "William Shakespeare" },
        correctAnswer: "C"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: { A: "Earth", B: "Jupiter", C: "Mars" },
        correctAnswer: "B"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: { A: "Oxygen", B: "Gold", C: "Osmium" },
        correctAnswer: "A"
    },
    {
        question: "How many continents are there?",
        answers: { A: "6", B: "7", C: "8" },
        correctAnswer: "B"
    },
    {
        question: "What is the capital of Australia?",
        answers: { A: "Canberra", B: "Sydney", C: "Melbourne" },
        correctAnswer: "A"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: { A: "Vincent van Gogh", B: "Leonardo da Vinci", C: "Pablo Picasso" },
        correctAnswer: "B"
    },
    {
        question: "Which is the smallest country in the world?",
        answers: { A: "Monaco", B: "Vatican City", C: "Luxembourg" },
        correctAnswer: "B"
    }
];

let correctCount = 0;
let currentQuestionIndex = 0;
let totalQuestions = 5; // Default number of questions

// Function to shuffle questions and return a subset
function getRandomQuestions(questionsArray, number) {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

// Prompt user for the number of questions
const numQuestions = prompt("How many questions would you like? (Default is 5)", "5");
totalQuestions = Math.min(Math.max(parseInt(numQuestions), 1), questions.length) || 5;

// Select random questions
const quizQuestions = getRandomQuestions(questions, totalQuestions);

// Function to display questions
function displayQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const questionData = quizQuestions[currentQuestionIndex];
        const questionContainer = document.getElementById("quiz-container");

        const questionHTML = `
            <div class="question">
                <p>${currentQuestionIndex + 1}. ${questionData.question}</p>
                <p>A) ${questionData.answers.A}</p>
                <p>B) ${questionData.answers.B}</p>
                <p>C) ${questionData.answers.C}</p>
                <p>Enter your answer (A, B, or C): <input type="text" id="answer"></p>
                <button onclick="checkAnswer()">Submit</button>
            </div>
        `;

        questionContainer.innerHTML = questionHTML;
    } else {
        // All questions answered, show results
        showResults();
    }
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toUpperCase();
    const questionData = quizQuestions[currentQuestionIndex];
    const resultsDiv = document.getElementById("results");

    let resultText = `${currentQuestionIndex + 1}. ${questionData.question}<br>You guessed ${userAnswer}) ${questionData.answers[userAnswer]}<br>`;

    if (userAnswer === questionData.correctAnswer) {
        resultText += "CORRECT";
        correctCount++;
    } else {
        resultText += `INCORRECT: the correct answer is ${questionData.correctAnswer}) ${questionData.answers[questionData.correctAnswer]}`;
    }

    resultsDiv.innerHTML += resultText + "<br><br>";
    currentQuestionIndex++;
    displayQuestion();
}

// Function to show final results
function showResults() {
    const resultsDiv = document.getElementById("results");
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(2);

    resultsDiv.innerHTML += `<br>You answered ${correctCount} out of ${totalQuestions} questions correctly (${percentage}%).`;
}

// Display the first question
displayQuestion();
