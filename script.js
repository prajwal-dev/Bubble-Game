var timer =60;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){


var clutter="";

for(var i=1;i<199;i++){
  var rn = Math.floor(Math.random()*10)
  clutter +=  `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;

}
function runTimer(){
     var timerInt = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>😎 Your Score ${score}</h1>`
        }
        
     }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets) {
 var clickedNum=Number(dets.target.textContent);
 if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit(); 
 }
});
makeBubble();
runTimer();
getNewHit();

