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
  element.innerHTML +="<span class='status'>"  + status + "</span>";
  if(status === "offline"){
    element.setAttribute("class", "tw offline");
  } else {
    element.setAttribute("class", "tw online");
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
 element.innerHTML = "<a href=https://www.twitch.tv/" + user + " target='_blank'>" + user + "</a>"
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
function show(status){
  var lis = document.querySelectorAll("li")
  for (var i = 0; i < lis.length; i++){
    if (lis[i].classList.contains(status)){
      lis[i].style.display = "block";
    } else {
      lis[i].style.display = "none";
    }
  }
}

document.querySelector("#onlineB").addEventListener("click", function(){
  show("online");
});
document.querySelector("#offlineB").addEventListener("click", function(){
  show("offline");
});
document.querySelector("#allB").addEventListener("click", function(){
  show("tw");
});


displayUsers(userNames);
