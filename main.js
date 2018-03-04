console.log("Why, hello there.");
function writeToDOM(domString,domId){
  var myBody = document.getElementById("writeHere");
  myBody.innerHTML = "<h1 id='" + domId + "'></h1>";
  var myElement = document.getElementById(domId);
  myElement.innerHTML = "" + domString + "";
};