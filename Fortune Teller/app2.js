var blueRock = document.querySelector("#blueRock");
var bluePaper = document.querySelector("#bluePaper");
var blueScissors = document.querySelector("#blueScissors");
var redRock = document.querySelector("#redRock");
var redPaper = document.querySelector("#redPaper");
var redScissors = document.querySelector("#redScissors");
var vsText = document.querySelector("#vsText");
var historyList = document.querySelector("#historyList");
var choices = [];
var bank = 5000;
vsText.innerHTML = bank;

fetch('https://api.myjson.com/bins/loki6')
  .then((response) => {
    return response.json();
})
  .then((myJson) => {
    console.log(myJson);
    choices = myJson;
});
console.log(choices);

blueSide.onclick = function () {
  var amount = parseInt(window.prompt("How much do you wish to bet?"));
  var randomChoiceBlue = choices[Math.floor(Math.random()*choices.length)];
  var randomChoiceRed = choices[Math.floor(Math.random()*choices.length)];
  if ( randomChoiceBlue == 'rock' ){
    blueRock.style.border = "1px solid blue";
  } else if ( randomChoiceBlue == 'paper') {
    bluePaper.style.border = "1px solid blue";
  } else{
    blueScissors.style.border = "1px solid blue";
  }
  if ( randomChoiceRed == 'rock' ){
    redRock.style.border = "1px solid red";
  } else if ( randomChoiceRed == 'paper') {
    redPaper.style.border = "1px solid red";
  } else{
    redScissors.style.border = "1px solid red";
  }

  if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'rock' ){
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      blueRock.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'paper' ) {
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;
    setTimeout(function() {
      blueRock.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Lost as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'scissors' ){
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      blueRock.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'rock' ) {
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'paper' ) {
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'scissors' ) {
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You LOST as BLUE:" + bank;

  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'rock' ) {
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You LOST as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'paper' ) {
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as BLUE: " + bank;

  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'scissors' ) {
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as BLUE: " + bank;
  }
}

redSide.onclick = function () {
  var amount = parseInt(window.prompt("How much do you wish to bet?"));
  var randomChoiceBlue = choices[Math.floor(Math.random()*choices.length)];
  var randomChoiceRed = choices[Math.floor(Math.random()*choices.length)];
  if ( randomChoiceBlue == 'rock' ){
    blueRock.style.border = "1px solid blue";
  } else if ( randomChoiceBlue == 'paper') {
    bluePaper.style.border = "1px solid blue";
  } else{
    blueScissors.style.border = "1px solid blue";
  }
  if ( randomChoiceRed == 'rock' ){
    redRock.style.border = "1px solid red";
  } else if ( randomChoiceRed == 'paper') {
    redPaper.style.border = "1px solid red";
  } else{
    redScissors.style.border = "1px solid red";
  }

  if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'rock' ){
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      blueRock.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as RED: " + bank;

  } else if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'paper' ) {
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      blueRock.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as RED: " + bank;

  } else if ( randomChoiceBlue == 'rock' && randomChoiceRed == 'scissors' ){
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;setTimeout(function() {
      blueRock.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You LOST as RED: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'rock' ) {
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You LOST as RED: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'paper' ) {
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as RED: " + bank;

  } else if ( randomChoiceBlue == 'paper' && randomChoiceRed == 'scissors' ) {
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      bluePaper.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as RED: " + bank;

  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'rock' ) {
    bank = bank + amount;
    vsText.innerHTML = "You WON, bank is now " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redRock.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You WON as RED: " + bank;

  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'paper' ) {
    bank = bank - amount;
    vsText.innerHTML = "You LOST, bank is now " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redPaper.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You LOST as RED: " + bank;
    
  } else if ( randomChoiceBlue == 'scissors' && randomChoiceRed == 'scissors' ) {
    vsText.innerHTML = "You Tied " + bank;
    setTimeout(function() {
      blueScissors.style.border = 'none';
      redScissors.style.border = 'none';
    }, 2000);
    var newListItem = document.createElement("li");
    historyList.appendChild(newListItem);
    newListItem.innerHTML="You Tied as RED " + bank;
  }
}
