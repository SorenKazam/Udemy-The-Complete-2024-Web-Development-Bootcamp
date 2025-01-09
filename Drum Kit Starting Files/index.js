var numberOfButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      this.style.color = "white";
    });
}

/* 
var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();

*/
