const question = [{
        question: "Where do Rachel and Ross go on their first date?",
        answers: {
            option1: "The cinema",
            option2: "A planetarium",
            option3: "Central Park",
            option4: "The Empire State Building"
        },
        correctAnswer: "2"
    },

    {
        question: "Monica organizes her towels into several categories. But how many?",
        option1: "4",
        option2: "6",
        option3: "9",
        option4: "11",
        correctAnswer: "4",
    },

    {
        question: "What are Monica and Ross' parents called?",
        option1: "Jack and Judy",
        option2: "Jack and Jill",
        option3: "Peter and Margaret",
        option4: "Gerry and Mary",
        correctAnswer: "4",
    },

    {
        question: "Chandler and Joey had two pets. What were they called?",
        option1: "Don and Camilla",
        option2: "Brian and Larry",
        option3: "Walter and Sergio",
        option4: "Chick Jr. and Duck Jr.",
        correctAnswer: "4",
    },

    {
        question: "What is the name of Joey’s acting agent?",
        option1: "Andrea",
        option2: "Estelle",
        option3: "Martha",
        option4: "Carole",
        correctAnswer: "2",
    },


    {
        question: "Which job did Rachel’s fiancé Barry Farber do?",
        option1: "Lawyer",
        option2: "Plumber",
        option3: "Orthodontist",
        option4: "Journalist",
        correctAnswer: "3",
    },

    {
        question: "Ross is allergic to which kind of fruit?",
        option1: "Lemon",
        option2: "Apple",
        option3: "Kiwi",
        option4: "Pomegranate",
        correctAnswer: "3",
    },

    {
        question: "Phoebe dated a scientist called David. In which Belarus city did he work?",
        option1: "Minsk",
        option2: "Grodno",
        option3: "Mogilev",
        option4: "Pinsk",
        correctAnswer: "1",
    },

    {
        question: "Ross had a son called Ben. What was Ben's first word?",
        option1: "Dinosaur",
        option2: "Coffee",
        option3: "Daddy",
        option4: "Hi",
        correctAnswer: "4",
    },


    {
        question: "Monica dated a millionaire for a while. What was his name?",
        option1: "Paul Becker",
        option2: "Jake Becker",
        option3: "Pete Becker",
        option4: "Boris Becker",
        correctAnswer: "3",
    },

]

// Get elements from the DOM and store their values in variables 
document.addEventListener('DOMContentLoaded', () => {

    let score;
    let correctAnswer;
    let acceptAnswers;
    let maxQuestions = 10;
    let currentQuestionIndex = 0;
    const question = document.getElementsByClassName('question-bar');
    let choices = document.getElementsByClassName('choice-text');
    let questionCounter = document.getElementById('question-counter');
    let nextButton = document.getElementsByClassName('next-btn')[0];
    let submitButton = document.getElementsByClassName('submit-btn')[0];

    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);
})

/* Hamburger menu to toggle between showing and hiding the navigation menu with a click */

function myFunction() {
    var x = document.getElementById("header-right");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}