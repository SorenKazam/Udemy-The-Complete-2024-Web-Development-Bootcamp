const img1 = document.querySelector("img.img1");
const img2 = document.querySelector("img.img2");
const title = document.querySelector("h1");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

if (randomNumber1 == 1) {
  img1.setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 == 2) {
  img1.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 == 3) {
  img1.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 == 4) {
  img1.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 == 5) {
  img1.setAttribute("src", "./images/dice5.png");
} else {
  img1.setAttribute("src", "./images/dice6.png");
}

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

if (randomNumber2 == 1) {
  img2.setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 == 2) {
  img2.setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 == 3) {
  img2.setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 == 4) {
  img2.setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 == 5) {
  img2.setAttribute("src", "./images/dice5.png");
} else {
  img2.setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  title.textContent = "🚩Player 1 Won";
} else if (randomNumber2 > randomNumber1) {
  title.textContent = "Player 2 Won🚩";
} else if (randomNumber1 == randomNumber2) {
  title.textContent = "Draw";
} else {
  title.textContent = "Something went wrong";
}

console.log("dice1: " + dice1 + "\ndice2: " + dice2);
