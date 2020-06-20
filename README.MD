* Word Quiz: Make a timed word quiz

When page loads viewer is shown:
* * 5:00 min timer
* * Display-box for questions
* * Start button   
* * Scoreboard for Intials/time/score

When start button is clicked:
* Quiz timer starts 
* Question is displayed to "question display box" 
* Questions out of 10 is displayed

When answer is selected:
*
* If correct user is alerted "correct!"
* If incorrect user is alerted "incorrect!" 
* If incorrect 5 secs is deducted from timer.

Quiz ends:
* If all questions completed Alert "Test Completed!"  
* If timer reaches 0:00  Alert "Time is Up!"

When quiz ends: 
* clear question display
* display results "time/score!"
* prompt user "add intials!"
* Save final score to Scoreboard 


Brainstorming functionality of questions:
// var questionStr = [ Question1, Question2, Question3, ect]
// var answerStr = [[answerarr1], [[answerarr2]], [[answerarr2]];


// func callQues(){
//  var quesArr = [{questStr: "the actual question"} ,{questStr: "the actual question"}, ]
//  quesArr[1].questStr
//

var object
 var quesObj = {
     questStr : "the actual question",
     questAns : ["the answer","the wrong"]
     correctAns : "the answer "
 }

 var quesObj2 = {
     questStr : "the actual question",
     questAns : ["the answer","the wrong"],
     correctAns : "the answer "
 }

//how to use object to append Key values of question/possible answers to cooresponding display/buttons
//you would then have to make a click event with an if/else if statement 
//where if the user picks the button that equals the value of correctAnswer 
//they are then alert with "correct"
// the correct answer is then ++ to the score tally 
// the questions display is cleared and a new set of question/answer buttons is displayed

//Next  make if statement that ends quiz:
// If (all questions completed) alert ("Test Completed!")  
// If (timer === 0) alert("Time is Up!) 
// after both statements make a function that runs the ended quiz functionality 
// e.g. display how many question are correct and how much time is left 
// then give user prompt to add intials and concat prompt value with 
// displayed score and remaining time
// append to leaderboard score and 
//save to local storage so user can reload page and still see there score

for var i = 0; i <questionData.length; i++){
    var answer = button click event([answerString[i]])
    if (buttion  click event = correctAnswer)
}
function displayQuestions() {
        var index = 0;
        //answerA.addEventListener()
        const element = testObj[index];
        questionDisplayBox.innerHTML = testObj[index].questionString
        console.log(element)
    }
}

testObj.questions[i] = {
    answerarr1  : correct ,
    answerarr2  : incorrect, 
    answerarr3  : incorrect
}

var answerA = document.querySelector("#answer-buttons-a");
var answerB = document.querySelector("#answer-buttons-b");
var answerC = document.querySelector("#answer-buttons-c");

answerarr1 = answerA
answerarr2 = answerB
answerarr3 = answerC


//  functionparseAns(){
//      if(answerchosen === correctAnswer[0]){
//          correctAnswerScore++
//      }
//     }


// Turn start button into "quit test" && "restart test button" 
