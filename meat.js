var yourSandwich = ( function (meat){
  var meatPrices = {
    "Ham": 3.00,
    "Turkey": 3.00,
    "Pepperoni": 2.50,
    "Bologne": 2.00,
    "Chick": 2.50,
    "None": 0,
  }

 var selectedMeats = [];

  meat.setMeat = function(choice){
    var index = selectedMeats.indexOf(choice);
    if (index === -1 && choice === "None") {
      selectedMeats = ["None"];
    } else if (index === -1) {
      selectedMeats.push(choice);
    } else {
        selectedMeats.splice(index, 1);
    }
  }

  meat.getTotalMeatPrice = function () {
    var meatAdder = 0;
    for (var i = 0; i < selectedMeats.length; i++) {
      meatAdder += meatPrices[selectedMeats[i]];
    }
    return meatAdder;
  }

  return meat;

})(yourSandwich || {});