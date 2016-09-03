var yourSandwich = ( function (bread){
  var breadPrices = {
    "White": .75,
    "Wheat": .75,
    "Rye": 1.00,
    "Hoagie": 1.25,
    "Flatbread": 1.25,
    "Lettuce": .50,
    "None": 0,
  }
  var selectedBread = "None";

  bread.setBread = function(choice){
    selectedBread = choice;
  }

  bread.getTotalBreadPrice = function () {
    return breadPrices[selectedBread];
  }
  return bread;

})(yourSandwich || {});