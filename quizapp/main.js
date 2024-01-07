const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    }
];

let question= document.querySelector(".question")
let option1= document.querySelector("#option1")
let option2= document.querySelector("#option2")
let option3= document.querySelector("#option3")
let option4= document.querySelector("#option4")
let submit=document.querySelector("#submit")
let answers=document.querySelectorAll(".answer")
let scores=document.querySelector("#showScore")

count=0;
score=0;
let changeque=()=>{
    let demo=quizDB[count]
    question.innerHTML= demo.question;
    option1.innerHTML=demo.a;
    option2.innerHTML=demo.b;
    option3.innerHTML=demo.c;
    option4.innerHTML=demo.d;
}

changeque();
let getAnswer=()=>{
    let answer;
    answers.forEach((answ)=>{
        if(answ.checked){
            answer=answ.id;
        }
    })
    return answer;
}

submit.addEventListener('click',()=>{
    let checkedans;
    checkedans= getAnswer();
    if(checkedans==quizDB[count].ans)
    {
        score++;
    }
    count++;

    if(count<quizDB.length){
        changeque();
    }else{
        scores.style.display='block';
        scores.innerHTML=`
        <h2>your score is ${score}/${quizDB.length} !! </h2>
        `;
         
    }

})



