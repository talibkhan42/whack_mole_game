var rat1 = document.getElementById("rat1");
var rat2 = document.getElementById("rat2");
var rat3 = document.getElementById("rat3");
var rat4 = document.getElementById("rat4");
var rat5 = document.getElementById("rat5");
var rat6 = document.getElementById("rat6");
var score = document.getElementById("score");
//this count for increase score
var count = 0;
//this count for  count the rat up down hona
var count2 = 0;

var game = document.getElementById("game");
var youwin = document.getElementById("youwin");
var youlost = document.getElementById("youlost");
//this for sound
var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var sound3 = document.getElementById("sound3");
var sound4 = document.getElementById("sound4");
var sound5= document.getElementById("sound5");


alert("do you want to play");


setInterval(function () {
  // ye random number genrate krega any 1 to 6
  var random = Math.floor(Math.random() * 6) + 1;
  count2++;

  //rat= rat1 rat2, rat3 ......jo bhi no ayega to rat ke sath lag jayega
  var rat = "rat" + random;
  //eval string to funtion main convert krta hai
  var ra = eval(rat);
  //background sound play
  sound1.play();
  ra.classList.add("animate");
  setTimeout(function () {
    ra.classList.remove("animate");
  }, 1000);
  ra.onmouseover = function () {
    count++;
    //for click sound play
    sound4.play();
    score.innerHTML = count;
  };
}, 1000);
// ye hai youwin display karwana
setInterval(function () {
  if (count > 5) {
    youwin.style.display = "block";
    game.style.display = "none";
    //background sound off
    sound1.pause();
    //win sound play
    sound5.play();
  }
  //ye game over ke liye
  else  if (count2 > 10) {
    youlost.style.display = "block";
    game.style.display = "none";
    //background sound off
    sound1.pause();
    //lost sound play
    sound3.play();
  }
}, 10);
