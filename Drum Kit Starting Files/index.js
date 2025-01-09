var numberOfButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      alert("clicked");
    });
}
