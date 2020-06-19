var timerEl = document.getElementById("timer");
var questionDisplayBox = document.querySelector("#question-display-box");
var answerButtons  = document.getElementById("#answer-buttons");
var answerA = document.querySelector("#answer-buttons-a");
var answerB = document.querySelector("#answer-buttons-b");
var answerC = document.querySelector("#answer-buttons-c");
var startButton = document.querySelector("#start-button");
var leaderScores = document.getElementById("#leader-scores");
var correctAnswerScore = 0;

//gotta figure out how to make on click event:
// display questions in card body
// display answers in each individual button 
// Turn start button into "quit test" && "restart test button" 


  
function startTest() { 
    
    timerEl.innerHTML = "00:05";
    //displayQuestions()
    var timerInterval = setInterval(function(){
    
    var displayedTime = timerEl.innerHTML;
    var timeArray = displayedTime.split(/[:]+/);
    //console.log(timeArray)
    var minutes = timeArray[0];
    var seconds = makeSeconds(--timeArray[1]);
    
    if(seconds==59){minutes--}
    timerEl.innerHTML = minutes + ":" + seconds;
    
    if (seconds == 0) {
        clearInterval(timerInterval); 
        questionDisplayBox.innerHTML = "Time is over!"
     }

    function makeSeconds(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec};
        if (sec < 0) {sec = "59"};
        if (sec == 0) { sec = "00"}
        return sec;
      }
     
  }, 1000);
}

//  testObj is the object that holds the question/answers/correct  objects holds que
var testObj =[
         {
            questionString : "What is it called when you hit your opponents balls first?",
            answerString : ["Cue ball scratch", "Cat scratch fever", "Table scratch"],
            correctAnswer : "Table scratch"
        },
        {
            questionString : "What is the shot called where you hit a wall before your intended ball?",
            answerString : ["Bouncy fun fun angle time!?",  "Bank shot", "Angle bank" ],
            correctAnswer : "Bank shot"
        },
        {
            questionString : "What happens when you make the 8-ball before making your other balls first?",
            answerString : ["You lose", "Everybody has a sexy party!", "It’s a Tie!"],
            correctAnswer : "You lose"
        },
        {
            questionString : "What game can you play with only balls 1-9?",
            answerString : ["9-ball", "Snookers", "Half a game of eight ball"],
            correctAnswer : "9-ball"
        },
        {
            questionString : "What is the special technique called where you curve the cue balls?",
            answerString : ["McAvoying", "Damn Boi!", "Massé"],
            correctAnswer : "Massé"
        }
    ]
    
   console.log(testObj)
startButton.addEventListener("click", function(){
    startTest();
});

