var trivia = [
  {
    question: "Which artist made this song called 'Jesus Walks'",
    choiceAnswer: ["The Beetles", "Kanye West", "Kirk Franklin", "Jay-Z"],
    rightAnswer: 1
  },
  {
    question: "Drake played the role of Jimmy in this show",
    choiceAnswer: [
      "Lizzie McGuire",
      "Even Stevens",
      "Degrassi",
      "The Famous Jet Jackson"
    ],
    rightAnswer: 2
  },
  {
    question: "This pop icon debut their 'Thriller' song on MTV in 1983",
    choiceAnswer: ["Prince", "Madonna", "Phil Collins", "Michael Jackson"],
    rightAnswer: 3
  },
  {
    question:
      "Lil Wayne was apart of this music group when starting his rap career",
    choiceAnswer: ["Young Money", "Wu-Tang Clan", "Hot Boyz", "Coldplay"],
    rightAnswer: 2
  },
  {
    question:
      "This album won Kendrick Lamar his first Grammy for Rap Album of The Year",
    choiceAnswer: [
      "Good Kid, m.A.A.d City",
      "DAMN",
      "Black Hippy",
      "To Pimp a Butterfly"
    ],
    rightAnswer: 3
  }
];

console.log(trivia[0].choiceAnswer[0]);
$(document).ready(function() {
  let gameStart = false;
  let playTime;
  let gameResponse;
  let counter = 10;
  let correct = 0;
  let questionBank = 0;
  let wrong = 0;
  let noAnswer = false;

  $("#restart").hide();

  // Creating Start Button and Append to DOM
  const startButton = $("<button>").html("Start");
  startButton.attr("id", "start-button");
  startButton.attr("class", "m-3 p-2 px-4");
  $("#trivQuestions").append(startButton);
  console.log("start!");

  // Start button to start trivia
  $("#start-button").on("click", async function(event) {
    event.preventDefault();

    gameStart = true;
    gamePlay();
    await timePlay();
  });

  // Capture User Choice
  $("body").on("click", ".choices", function(event) {
    const userChoice = parseInt($(this).attr("data-num"));
    console.log(userChoice);
    console.log(trivia[questionBank].rightAnswer);
    const rightChoice = trivia[questionBank].rightAnswer;
    if (userChoice === rightChoice) {
      userCorrect();
      // clearInterval();
    } else {
      userWrong();
    }
  });

  //timer
  function timePlay() {
    playTime = setInterval(countSet, 1000);
    function countSet() {
      if (counter === 0 && noAnswer === true) {
        wrong++;
        gameResponse = $("game-response").html(
          "<img src='https://media.giphy.com/media/7S6K3cc58aTzq/source.gif'>"
        );
        // clearInterval(playTime);
        questionBank++;
        gameResponse.hide();
        setTimeout(gamePlay, 3000);
      }
      if (counter > 0 || counter === 10) {
        counter--;
        $("#timer").html(`Time Remaining: ${counter}`);
        $("game-response").hide();
      }
    }
  }

  function gamePlay() {
    remainQuestions();

    if (gameStart) {
      showText();
      $("p").hide();
      $("#start-button").hide();
      $("#restart").hide();

      $("#questions-bank").html(trivia[questionBank].question);
      $("#answer-selection-one").html(trivia[questionBank].choiceAnswer[0]);
      $("#answer-selection-two").html(trivia[questionBank].choiceAnswer[1]);
      $("#answer-selection-three").html(trivia[questionBank].choiceAnswer[2]);
      $("#answer-selection-four").html(trivia[questionBank].choiceAnswer[3]);
    }
  }

  function userCorrect() {
    noAnswer = false;
    correct++;
    gameResponse = $("<img>");
    gameResponse.attr(
      "src",
      "https://media.giphy.com/media/5xaOcLDE64VMF4LqqrK/source.gif"
    );
    $("#game-response").html(gameResponse);

    $("#timer").hide();
    $("#questions-bank").hide();
    $(".choices").hide();

    questionBank++;

    counter = 10;
    setTimeout(gamePlay, 3000);

    console.log(setTimeout(gamePlay, 3000));
    clearInterval(playTime);
    timePlay();
  }

  function userWrong() {
    wrong++;
    gameResponse = $("<img>");
    gameResponse.attr(
      "src",
      "https://media.giphy.com/media/7S6K3cc58aTzq/source.gif"
    );
    $("#game-response").html(gameResponse);

    $("#timer").hide();
    $("#questions-bank").hide();
    $(".choices").hide();

    questionBank++;

    setTimeout(gamePlay, 3000);
    counter = 10;
    // clearInterval(playTime);
    // timePlay();
  }
  //console.log(trivia[questionBank].choiceAnswer[2])

  // console.log("jeeeezz");
  // $("h2").append(questionWell);
  // $("#answer-selections").append(questionSel);

  function showText() {
    $("#timer").show();
    $(".choices").show();
    $("#questions-bank").show();
    $("#answer-selection-one").show();
  }

  function remainQuestions() {
    if (questionBank === trivia.length) {
      gameStart = false;
      questionBank = 0;
      gameResponse = $("<img>");
      gameResponse.attr(
        "src",
        "https://media.giphy.com/media/xT9Igz8SnyR3J4bq0g/giphy.gif"
      );
      $("#game-response").html(gameResponse);
      $(".results").show();
      clearInterval(timePlay);

      $("#correct").text("Correct: " + correct);
      $("#wrong").text("Wrong: " + wrong);
      $("#restart").text("Play Again?");

      setTimeout(resetGame, 3000);
    }
  }

  function resetGame() {
    counter = 10;
    questionBank = 0;
    correct = 0;
    wrong = 0;
    noAnswer = 0;
    gamePlay();
  }
});
