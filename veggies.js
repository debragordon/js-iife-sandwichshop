var yourSandwich = ( function (veggie){
  var veggiePrices = {
    "Lettuce": .25,
    "Tomato": .25,
    "Cucumber": .25,
    "Spinach": .50,
    "Sprouts": .25,
    "Onion": .25,
    "None": 0,
  }

 var selectedVeggies = [];

  veggie.setVeggie = function(choice){
    var index = selectedVeggies.indexOf(choice);
    if (index === -1 && choice === "None") {
      selectedVeggies = ["None"];
    } else if (index === -1) {
      selectedVeggies.push(choice);
    } else {
        selectedVeggies.splice(index, 1);
    }
  }

  veggie.getTotalVeggiePrice = function () {
    var veggieAdder = 0;
    for (var i = 0; i < selectedVeggies.length; i++) {
      veggieAdder += veggiePrices[selectedVeggies[i]];
    }
    return veggieAdder;
  }

  return veggie;

})(yourSandwich || {});