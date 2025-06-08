function rollDice() {
  var randomCount = Math.floor(Math.random() * 6) + 1;
  var randomCount2 = Math.floor(Math.random() * 6) + 1;
  var srcImg = `./images/dice${randomCount}.png`;
  var srcImg2 = `./images/dice${randomCount2}.png`;

  document.querySelector(".img1").src = srcImg;
  document.querySelector(".img2").src = srcImg2;

  if (randomCount > randomCount2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 wins!";
  } else if (randomCount < randomCount2) {
    document.querySelector(".container h1").innerHTML = "Player 2 wins!🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
}

document.querySelector(".reloadbtn").addEventListener("click", function() {
  rollDice();
});
