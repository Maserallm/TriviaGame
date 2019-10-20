var trivia = [
    {question: "Which artist made this song called 'Jesus Walks'",
        choiceAnswer: ["The Beetles", "Kanye West", "Kirk Franklin", "Jay-Z"],
        rightAnswer: 1,
    },
    {question: "Drake played the role of Jimmy in this show",
        choiceAnswer: ["Lizzie McGuire", "Even Stevens", "Degrassi", "The Famous Jet Jackson"],
        rightAnswer: 2,
    },
    {question: "This pop icon debut their 'Thriller' song on MTV in 1983",
        choiceAnswer: ["Prince", "Madonna", "Phil Collins", "Michael Jackson"],
        rightAnswer: 3,
    }
]; 

console.log(trivia[0].choiceAnswer[0])

$(document).ready(function () {

    let gameStart = false;
    let playTime;
    let gameResponse;    
    let counter = 10;
    let correct = 0;
    let questionBank = 0;
    let wrong = 0;
    let noAnswer = 0;
    
    const startButton = $("<button>").html("Start");
    startButton.attr("id", "start-button");
    startButton.attr("class", "m-3 p-2 px-4");
    $("#trivQuestions").append(startButton);
    console.log("start!");
    
   

    $("#start-button").on("click", function(event) {

        event.preventDefault();

        gameStart = true;
        gamePlay();
        timePlay();

        console.log(event);
    });

    $("body").on("click", ".choices", function(event) {
        
        const userChoice = parseInt($(this).attr("data-num"));

        if (userChoice === trivia[questionBank].rightAnswer) {
            clearInterval(playTime);
            userCorrect()
        }
    })
    
    //timer
    function timePlay() {
        let playTime = setInterval(countSet, 1000);
        function countSet() {
            if (counter === 0) {
                clearInterval(playTime);
                noAnswer++;

                $("game-response").html("<img src='https://media.giphy.com/media/7S6K3cc58aTzq/source.gif'>");
                questionBank++;
                setTimeout(gamePlay, 3000);
            }
            if (counter > 0) {
                counter--;
                
            }
            $("#timer").html(`Time Remaining: ${counter}`);
        }
    }
        
    console.log("word")
    
    function gamePlay() {

        remainQuestions();
         
        if (gameStart) {

            showText();
            $("p").hide();

            $("#start-button").hide();

            $("#questions-bank").html(trivia[questionBank].question);

            $("#answer-selection-one").show().html(trivia[questionBank].choiceAnswer[0]);

            $("#answer-selection-two").html(trivia[questionBank].choiceAnswer[1]);
            
            $("#answer-selection-three").html(trivia[questionBank].choiceAnswer[2]);

            $("#answer-selection-four").html(trivia[questionBank].choiceAnswer[3]);
            }
        
    }
    
    function userCorrect() {
        correct ++;
        gameResponse = $("<img>");
        gameResponse.attr("src", "https://media.giphy.com/media/5xaOcLDE64VMF4LqqrK/source.gif");
        $("#game-response").html(gameResponse);

        $("#timer").hide();
        $("#questions-bank").hide();
        $(".choices").hide();

        questionBank++;

        setTimeout(gamePlay, 3000);
        counter = 10;
        clearInterval(playTime);
        timePlay();
    }
    //console.log(trivia[questionBank].choiceAnswer[2])
    
    // console.log("jeeeezz");
    // $("h2").append(questionWell);
    // $("#answer-selections").append(questionSel);

    function showText() {
        $("#timer").show();
        $(".choices").show();
        $("#questions-bank").show();
        $("#answer-selections-one").show();
    }

    function remainQuestions () {
        if (questionBank === trivia.length) {
            gameStart = false;
            questionBank = 0;
            
            $(".results").show()
            clearInterval(playTime);

            $("#correct").text("Correct: " + correct);
            $("#wrong").text("Wrong: " + wrong);
            $("#ni-answer").text("No Answers: " + noAnswer);

            setTimeout(resetGame, 10000);
        }
    }
    
    function resetGame() {
        let counter = 10;
        const questionBank = 0;
        const correct = 0;
        const wrong = 0;
        const noAnswer = 0;
        playTime();
        gamePlay();
    }
    
})








