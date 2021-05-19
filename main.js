//PLAYER 1 DICE var

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 to 6

var randomImageName1 = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var randomImagePath1 = "images/" + randomImageName1; //images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //FIRST img 0

image1.setAttribute("src", randomImagePath1);

//PLAYER 2 DICE var

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagePath2); //TWO STEPS IN ONE LINE, SECOND img 1


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
//If draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}