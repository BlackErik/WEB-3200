var messagesGLOBAL = [];
var displayText = document.querySelector("#display-quote");

function loadMessages(){
  fetch("http://localhost:8080/messages").then(
    function( response ){
      response.json().then(function( messagesFromServer ){
        messages = messagesFromServer;
        var messagesList = document.querySelector("#messages-list");
        messages.forEach(function(message){
          if( messagesGLOBAL.includes(message) == false ){
            console.log("one message:", message);
            var listItem = document.createElement("li");
            listItem.innerHTML = message;
            messagesList.appendChild(listItem);
            messagesGLOBAL.push(message);
          }
        });
      });
    });
  }

var generateButton = document.querySelector("#generate-button");

generateButton.onclick = function() {
  var randomMessage = messagesGLOBAL[Math.floor(Math.random()*messagesGLOBAL.length)];
  console.log(randomMessage);
  displayText.innerHTML = randomMessage;

};

var button = document.querySelector("#add-button");

button.onclick = function() {
  var messageNameInput = document.querySelector("#message-name")
  var messageName = messageNameInput.value;
  console.log( "You entered: ", messageName );
  var data = "name= " + encodeURIComponent( messageName );

  fetch( "http://localhost:8080/messages", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type":"application/x-www-form-urlencoded"
    }
  }).then( function( response ) {
    loadMessages();
  });
};


loadMessages()
console.log(messagesGLOBAL)
