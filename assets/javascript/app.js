const trivia = {
    questionOne: {
        question: "Which artist made this song called 'Jesus Walks'",
        rightAnswer: ["Kanye West"],
        wrongAnswer: ["The Beetles", "Kirk Franklin", "Jay-Z"],
    },
    questionTwo: {
        question: "Drake played the role of Jimmy in this show",
        rightAnswer: ["Degrasi"],
        wrongAnswer2: [],
    },
    questionThree: {
        question: "This pop icon debut his 'Thriller' song on MTV in 1983",
        rightAnswer: ["Michael Jackson"],
        wrongAnswer: [],
    }
    
};

const startButton = $("<button>").html("Start");
startButton.attr("id", "start-button");
startButton.attr("class", "m-3 p-2 px-4");
$("#trivQuestions").append(startButton);
console.log("start!");


$("#start-button").on("click", function(event) {
    console.log(event);

    event.preventDefault();
});

const questionWell = $("h2").html(trivia.questionOne.question);
const answerSel = $("h3");
answerSel.html(trivia.questionOne.wrongAnswer);
//answerSel.html(trivia.questionOne.rightAnswer);
console.log("jeeeezz");
$("h2").append(questionWell);
$(".answer-selections").append(answerSel);









