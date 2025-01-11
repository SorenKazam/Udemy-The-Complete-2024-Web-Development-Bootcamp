function HouseKeeper(yearsOfExp, name, CleaningPref) {
  this.yearsOfExp = yearsOfExp;
  this.name = name;
  this.cleaningPref = CleaningPref;

  this.clean = function () {
    console.log("Cleanning..");
  };
}

var houseKeeper1 = new HouseKeeper(10, "Angela", ["bathroom", "living Room"]);

console.log(houseKeeper1.name);
houseKeeper1.clean();
