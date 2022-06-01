const quizQuestions = [{
        question: "Where do Rachel and Ross go on their first date?",

        a: "The cinema",
        b: "A planetarium",
        c: "Central Park",
        d: "The Empire State Building",
        correctAnswer: "2",
    },

    {
        question: "Monica organizes her towels into several categories. But how many?",
        a: "4",
        b: "6",
        c: "9",
        d: "11",
        correctAnswer: "4",
    },

    {
        question: "What are Monica and Ross' parents called?",
        a: "Jack and Judy",
        b: "Jack and Jill",
        c: "Peter and Margaret",
        d: "Gerry and Mary",
        correctAnswer: "4",
    },

    {
        question: "Chandler and Joey had two pets. What were they called?",
        a: "Don and Camilla",
        b: "Brian and Larry",
        c: "Walter and Sergio",
        d: "Chick Jr. and Duck Jr.",
        correctAnswer: "4",
    },

    {
        question: "What is the name of Joey’s acting agent?",
        a: "Andrea",
        c: "Estelle",
        c: "Martha",
        d: "Carole",
        correctAnswer: "2",
    },


    {
        question: "Which job did Rachel’s fiancé Barry Farber do?",
        a: "Lawyer",
        b: "Plumber",
        c: "Orthodontist",
        d: "Journalist",
        correctAnswer: "3",
    },

    {
        question: "Ross is allergic to which kind of fruit?",
        a: "Lemon",
        b: "Apple",
        c: "Kiwi",
        d: "Pomegranate",
        correctAnswer: "3",
    },

    {
        question: "Phoebe dated a scientist called David. In which Belarus city did he work?",
        a: "Minsk",
        b: "Grodno",
        c: "Mogilev",
        d: "Pinsk",
        correctAnswer: "1",
    },

    {
        question: "Ross had a son called Ben. What was Ben's first word?",
        a: "Dinosaur",
        b: "Coffee",
        c: "Daddy",
        d: "Hi",
        correctAnswer: "4",
    },


    {
        question: "Monica dated a millionaire for a while. What was his name?",
        a: "Paul Becker",
        b: "Jake Becker",
        c: "Pete Becker",
        d: "Boris Becker",
        correctAnswer: "3",
    },

]

// Get elements from the DOM and store their values in variables 


let score;
let questionEl = document.getElementsByClassName('question-bar');
let choicesEl = document.getElementsByClassName('choice-text');
let answerA = document.getElementById('answer-a');
let answerB = document.getElementById('answer-b');
let answerC = document.getElementById('answer-c');
let answerD = document.getElementById('answer-d');
let questionCounter = document.getElementById('question-counter');
let nextButtonEl = document.getElementById('next-btn');
let submitButtonEl = document.getElementById('submit-btn');

let questionIndex = 0;
let currentQuestion = quizQuestions[questionIndex];

/* Hamburger menu to toggle between showing and hiding the navigation menu with a click */

function myFunction() {
    var x = document.getElementById("header-right");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function loadQuestions() {
    let question = currentQuestion.question
    let answerA = currentQuestion.a
    let answerB = currentQuestion.b
    let answerC = currentQuestion.c
    let answerD = currentQuestion.d


    console.log(question);
}

loadQuestions()