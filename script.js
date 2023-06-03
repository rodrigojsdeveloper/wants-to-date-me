function moveNoButton() {
  var noButton = document.getElementById("noButton");
  var container = document.getElementById("buttonContainer");
  var randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  var randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
