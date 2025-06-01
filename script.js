const questions = [
    {
        question: "Qual o animal com o maior comprimento na Terra ?",
        answers: [
            {text: "Tubarrão", correct: false},
            {text: "Baleia Azul", correct: true},
            {text: "Elefante", correct: false},
            {text: "Girrafa", correct: false},
        ]
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho?",
        answers: [
            {text: "Vênus", correct: false},
            {text: "Marte", correct: true},
            {text: "Júpiter", correct: false},
            {text: "Saturno", correct: false},
        ]
    },
    {
        question: "Quem escreveu a peça 'Romeu e Julieta'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Machado de Assis", correct: false},
            {text: "Carlos Drummond de Andrade", correct: false},
            {text: "Fernando Pessoa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentquestionIndex = 0;
let score = 0; 

function startQuiz(){
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();