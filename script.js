var timerEl = document.getElementById("timer");
var questionDisplayBox = document.querySelector("#question-display-box")
var index = 0;;
//var btnButtons  = document.getElementById("#answer-buttons");
var btnAll = document.querySelector("#btnAll");
var btnA = document.querySelector("#btnA");
var btnB = document.querySelector("#btnB");
var btnC = document.querySelector("#btnC");
var goButton = document.querySelector("#goBtn"); 
var leaderScores = document.getElementById("#leaderscores");
var correctAnswerScore = 0;
var testObj = [
    {
        questionString: "What is it called when you hit your opponents balls first?",
        ansArr: ["Cue ball scratch", "Cat scratch fever", "Table scratch"],
        correctAnswer: "Table scratch"
    },
    {
        questionString: "What is the shot called where you hit a wall before your intended ball?",
        ansArr: ["Bouncy fun fun angle time!?", "Bank shot", "Angle bank"],
        correctAnswer: "Bank shot"
    },
    {
        questionString: "What happens when you make the 8-ball before making your other balls first?",
        ansArr: ["You lose", "Everybody has a sexy party!", "It’s a Tie!"],
        correctAnswer: "You lose"
    },
    {
        questionString: "What game can you play with only balls 1-9?",
        ansArr: ["9-ball", "Snookers", "Half a game of eight ball"],
        correctAnswer: "9-ball"
    },
    {
        questionString: "What is the special technique called where you curve the cue balls?",
        ansArr: ["McAvoying", "Damn Boi!", "Massé"],
        correctAnswer: "Massé"
    }
]

 function startTest() {
    displayQuestions()

    timerEl.innerHTML = "00:15";

    var timerInterval = setInterval(function () {

        var displayedTime = timerEl.innerHTML;
        var timeArray = displayedTime.split(/[:]+/);

        var minutes = timeArray[0];
        var seconds = makeSeconds(--timeArray[1]);

        if (seconds == 59) { minutes-- }
        timerEl.innerHTML = minutes + ":" + seconds;

        if (seconds == 0) {
            clearInterval(timerInterval);
            questionDisplayBox.innerHTML = "Time is over!"
        }

        function makeSeconds(sec) {
            if (sec < 10 && sec >= 0) { sec = "0" + sec };
            if (sec < 0) { sec = "59" };
            if (sec == 0) { sec = "00" }
            return sec;
        }

    }, 1000);
}

function displayQuestions() {
    displayAnswers()
    
    questionDisplayBox.innerHTML = testObj[index].questionString;
    index++

    function displayAnswers() {
        var index = 0;
        btnA.textContent = testObj[index].ansArr[index];
        btnA.addEventListener("click", function () {
            if (btnA === testObj[index].correctAnswer) {
                questionDisplayBox.innerHTML= "Correct";
            } else {
                questionDisplayBox.innerHTML= "Incorrect";
            }
        });

        console.log(testObj[index].correctAnswer)
        var index2 = 1;
        btnB.textContent = testObj[index].ansArr[index2];
        btnB.addEventListener("click", function () {
            if (btnB === testObj[index].correctAnswer) {
                questionDisplayBox.innerHTML= "Correct";
            } else {
                questionDisplayBox.innerHTML= "Incorrect";
            }
        });

        var index3 = 2;
        btnC.textContent = testObj[index].ansArr[index3];
        btnC.addEventListener("click", function () {
            if (btnC = testObj[index].correctAnswer) {
                questionDisplayBox.innerHTML= "Correct";
            } else {
                questionDisplayBox.innerHTML= "Incorrect";
            }          
        });
    } 
}
testObj[0].ansArr.forEach(function(element) {
    console.log(element)
});
//console.log(testObj[0].ansArr[0]);

//  testObj is the object that holds the question/answers/correct  objects holds que


goButton.addEventListener("click", function () {
    startTest();
});


