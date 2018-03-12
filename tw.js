function checkOnline(user) {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + user
  var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
  xhr.onload = function handleRequest() {
    var twtv = JSON.parse(xhr.responseText);
    if ( twtv.stream !== null){
      console.log("online");
    } else {
      console.log("offline");
    }
  }
}
