var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document
  .querySelector(".dice .img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);
document
  .querySelector(".dice .img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "🚩Player1 Wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").textContent = "Draw!";
} else {
  document.querySelector(".container h1").textContent = "Player2 Wins!🚩";
}
