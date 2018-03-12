function checkOnline(user) {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + user
  var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
  xhr.onload = function handleRequest() {
    var twtv = JSON.parse(xhr.responseText);
    if (twtv.stream !== null){
      displayStatus(user, twtv.stream.channel.status);
    } else {
      displayStatus(user, "offline");
    }
  }
}


function displayStatus(user, status){
  var element = document.getElementById(user);
  if(status === "offline"){
    element.textContent += " - " + status;
    element.setAttribute("class", "offline");
  } else {
    element.textContent += " - " + status;
    element.setAttribute("class", "online");
  }
}

function online(user){

}

function offline(user){
  var element = document.getElementById(user);

}

function addUser(user){
 var element = document.createElement("li");
 element.setAttribute("id", user);
 element.innerHTML = user;
 document.getElementById("userlist").appendChild(element);
}

var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
 "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

function displayUsers(userNames){
  for (var i = 0; i < userNames.length; i++){
    addUser(userNames[i]);
    checkOnline(userNames[i]);
  }
}

displayUsers(userNames);
