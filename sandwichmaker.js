var yourSandwich = ( function (sandwich){
  var sandwichNames = {
  "Ham": "Piggy",
  "Turkey": "Gobbler",
  "Pepperoni": "Little Italy",
  "Bologne": "Joker",
  "Chicken": "Road Crosser",
  "None": "Green Machine",
  "TwoMeat": "Hefty",
  "ThreeMeat": "Trucker",
  "FourMeat": "Lumber Jack",
  "FiveMeat": "Glutton"
  }

  sandwich.getTotalSandwichPrice = function () {
    return sandwich.getTotalBreadPrice() + sandwich.getTotalCheesePrice() + sandwich.getTotalVeggiePrice() + sandwich.getTotalExtraPrice() + sandwich.getTotalMeatPrice();
  }
  sandwich.getSandwichName = function () {
    var meats = sandwich.getSelectedMeats();
    if (meats.length === 5) {
      return sandwichNames.FiveMeat;
    }
    if (meats.length === 4) {
      return sandwichNames.FourMeat;
    }
    if (meats.length === 3) {
      return sandwichNames.ThreeMeat;
    }
    if (meats.length === 2) {
      return sandwichNames.TwoMeat;
    }
    if (meats.length === 1) {
      return sandwichNames[meats[0]]
    }
  }
  return sandwich;
})(yourSandwich || {});








