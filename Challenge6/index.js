var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
  var person = Math.floor(Math.random() * names.length);
  return names[person] + " is going to buy lunch today!";
}

whosPaying(names);
