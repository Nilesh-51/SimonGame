gamePattern=[];
var count=0;
var level=0;
userClickedPattern=[];
buttonColours=["red","blue","green","yellow"];
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    level++;
    $("#level-title").text("Level "+level);
});
function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    checkAnswer(randomNumber);
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
    if(count<1){
        $("#level-title").text("Level "+level);
        nextSequence();
        count++;
    }
});
function checkAnswer(currentLevel){

}