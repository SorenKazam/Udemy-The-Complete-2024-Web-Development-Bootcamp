var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  // generate a random number
  var randomNumber = Math.floor(Math.random() * 4);

  // associate the random number to the color on the array
  var randomChosenColour = buttonColours[randomNumber];

  // push the chosen color into the array of game pattern
  gamePattern.push(randomChosenColour);

  // make the selected button flash
  $("div#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // detect button click
  $("div.btn").click("click", function () {
    var userChosenColor = this.id;
    console.log(userChosenColor);

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);
  });
}

function playSound(name) {
  // play audio
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence();
