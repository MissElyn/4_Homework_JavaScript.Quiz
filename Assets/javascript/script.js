


//var ids

var startTimer = document.getElementById("start");

var quizContainer = document.getElementById("quiz");

var score = document.getElementById("score");

var submitButton = document.getElementById("submit");

var resetQuiz = document.getElementById("reset")


//Timer-Start Quiz

startTimer.addEventListener("click", function() {

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

});

//Reset Everything

resetQuiz.addEventListener("click", function 
refreshPage(){
window.location.reload();
});


//QUESTIONS: scoring
//questions



var myQuestions = [a,b,c,d
    
  ];
  
  for (i = 0; i < myQuestions.length; i++) {
    text = myQuestions[i];
  }
  


var score="";

for (i = 0; i==true; i++) {
    score++
};

score.value=score

console.log(score)