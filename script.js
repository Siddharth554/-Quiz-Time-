const quizDB = [
{
    question:"Q1: What is the full form of html?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language ",
    d:"Hyper Text Markup Language",
    ans4: "ans4"
},

{
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Come Sequence Select",
    c: "Cascading Style Sheeps",
    d: "Cascading Super Sheets",
    ans: "ans1"
},

{
    question: "Q3: What is full form of HTTP?",
    a: "Hypertext Test Product",
    b: "Hey Transfer Protocol",
    c:"gogogogogogogogogo",
    d: "Hypertext Transfer Protocol",
    ans: "ans4"

},

{
    question: "Q4: What is full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JondenShoes",
    ans: "ans1"
}

]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit  = document.querySelector('#submit');
const answers= document.querySelectorAll('.answer')

const showScore=document.querySelector('#showScore');

let questionsCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionsCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion(); 

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
        answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionsCount].ans){
        score++;
    }

    questionsCount++;

    if( questionsCount < quizDB.length){
        loadQuestion(); 
    }else{

       showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} ✌️  </h3>       
        <button class = "btn" onclick="location.reload()">PLAY AGAIN</button>
       
            `;

            showScore.classList.remove('scoreArea');

}
});