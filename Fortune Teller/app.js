var blueRock = document.querySelector("#blueRock");
var bluePaper = document.querySelector("#bluePaper");
var blueScissors = document.querySelector("#blueScissors");
var redRock = document.querySelector("#redRock");
var redPaper = document.querySelector("#redPaper");
var redScissors = document.querySelector("#redScissors");
var vsText = document.querySelector("#vsText");
var choices = [];

fetch('https://api.myjson.com/bins/loki6')
  .then((response) => {
    return response.json();
})
  .then((myJson) => {
    console.log(myJson);
    choices = myJson;
});
console.log(choices);


blueRock.onclick = function () {
  var randomChoice = choices[Math.floor(Math.random()*choices.length)];
  blueRock.style.border = "1px solid blue";
  if ( randomChoice == 'rock' ) {
    redRock.style.border = "1px solid red";
    vsText.innerHTML = "You Tied";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else if ( randomChoice == 'paper' ) {
    redPaper.style.border = "1px solid red";
    vsText.innerHTML = "You LOSE!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else {
    redScissors.style.border = "1px solid red";
    vsText.innerHTML = "You WIN!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  }
};

bluePaper.onclick = function () {
  bluePaper.style.border = "1px solid blue";
  var randomChoice = choices[Math.floor(Math.random()*choices.length)];
  if ( randomChoice == 'rock' ) {
    redRock.style.border = "1px solid red";
    vsText.innerHTML = "You WIN!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else if ( randomChoice == 'paper' ) {
    redPaper.style.border = "1px solid red";
    vsText.innerHTML = "You Tied";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else {
    redScissors.style.border = "1px solid red";
    vsText.innerHTML = "You LOSE!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  }
};

blueScissors.onclick = function () {
  blueScissors.style.border = "1px solid blue";
  var randomChoice = choices[Math.floor(Math.random()*choices.length)];
  if ( randomChoice == 'rock' ) {
    redRock.style.border = "1px solid red";
    vsText.innerHTML = "You LOSE!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else if ( randomChoice == 'paper' ) {
    redPaper.style.border = "1px solid red";
    vsText.innerHTML = "You WIN!";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  } else {
    redScissors.style.border = "1px solid red";
    vsText.innerHTML = "You Tied";
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);
  }
};
