function moveNoButton() {
  const noButton = document.getElementById("noButton");

  noButton.style.position = "absolute";
  noButton.style.bottom = getPosition(10, 90);
  noButton.style.left = getPosition(10, 90);
}

function getPosition(min, max) {
  return Math.random() * (max - min) + min + "%";
}

function yes() {
  alert("Parabéns, você aceitou!");

  location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}
