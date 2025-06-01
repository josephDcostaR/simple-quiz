import { questions } from "./questions";

// const questions = [
//     {
//         question: "Qual o animal com o maior comprimento na Terra ?",
//         answers: [
//             {text: "Tubarrão", correct: false},
//             {text: "Baleia Azul", correct: true},
//             {text: "Elefante", correct: false},
//             {text: "Girrafa", correct: false},
//         ]
//     },
//     {
//         question: "Qual planeta é conhecido como o Planeta Vermelho?",
//         answers: [
//             {text: "Vênus", correct: false},
//             {text: "Marte", correct: true},
//             {text: "Júpiter", correct: false},
//             {text: "Saturno", correct: false},
//         ]
//     },
//     {
//         question: "Quem escreveu a peça 'Romeu e Julieta'?",
//         answers: [
//             {text: "William Shakespeare", correct: true},
//             {text: "Machado de Assis", correct: false},
//             {text: "Carlos Drummond de Andrade", correct: false},
//             {text: "Fernando Pessoa", correct: false},
//         ]
//     },
//     {
//         question: "Qual desses itens abaixo não é considerada uma linguagem de programação?",
//         answers: [
//             {text: "Python", correct: false},
//             {text: "Cshap", correct: false},
//             {text: "Java", correct: false},
//             {text: "HTML", correct: true},
//         ]
//     }
    
// ];

const questionElement = document.getElementById("question");
const  answerButtons= document.getElementById("answer-buttons");
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
    resetState();
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você pontuou ${score} em ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente"
    nextButton.style.display = "block";
}

function  handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();