var yourSandwich = ( function (extra){
  var extraPrices = {
    "Ketchup": 0,
    "Mustard": 0,
    "Mayo": 0,
    "Relish": .25,
    "Cilantro": .25,
    "None": 0,
  }
 var selectedExtras = [];

  extra.setExtra = function(choice){
    var index = selectedExtras.indexOf(choice);
    if (index === -1 && choice === "None") {
      selectedExtras = ["None"];
    } else if (index === -1) {
      selectedExtras.push(choice);
    } else {
        selectedExtras.splice(index, 1);
    }
  }

  extra.getTotalExtraPrice = function () {
    var extraAdder = 0;
    for (var i = 0; i < selectedExtras.length; i++) {
      extraAdder += extraPrices[selectedExtras[i]];
    }
    return extraAdder;
  }

  return extra;

})(yourSandwich || {});
