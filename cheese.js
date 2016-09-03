var yourSandwich = ( function (cheese){
  var cheesePrices = {
    "American": .50,
    "Mozzarella": .50,
    "Swiss": .50,
    "PepperJack": .50,
    "None": 0,
  }
 var selectedCheeses = [];

  cheese.setCheese = function(choice){
    var index = selectedCheeses.indexOf(choice);
    if (index === -1 && choice === "None") {
      selectedCheeses = ["None"];
    } else if (index === -1) {
      selectedCheeses.push(choice);
    } else {
        selectedCheeses.splice(index, 1);
    }
  }

  cheese.getTotalCheesePrice = function () {
    var cheeseAdder = 0;
    for (var i = 0; i < selectedCheeses.length; i++) {
      cheeseAdder += cheesePrices[selectedCheeses[i]];
    }
    return cheeseAdder;
  }

  return cheese;

})(yourSandwich || {});

