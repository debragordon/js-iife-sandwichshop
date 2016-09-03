var yourSandwich = ( function (sandwich){
  sandwich.getTotalSandwichPrice = function () {
    return sandwich.getTotalBreadPrice() + sandwich.getTotalCheesePrice() + sandwich.getTotalVeggiePrice() + sandwich.getTotalExtraPrice() + sandwich.getTotalMeatPrice();
  }
  return sandwich;
})(yourSandwich || {});




















// sandwich names {
//   ham: "Piggy",
//   turkey: "Gobbler",
//   pepperoni: "Little Italy",
//   bologne: "Joker",
//   chicken: "Road Crosser",
//   none: "Green Machine",
//   twomeat: "Hefty",
//   threemeat: "Trucker",
//   fourmeat: "Lumber Jack",
//   fivemeat: "Glutton"
// }

