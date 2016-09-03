// create a function that clears out none when people begin selecting options

// create a function that won't allow mulitple choices to include none and true options

// create a function that dynamically builds the price as people make choices

// only show the sandwich order div when the user clicks place order ... when this happens, add the word "TOTAL" to the price div

// write the sandwich ingredient list to the dom when they say place order

// click event on the Place Order Button

var selectedBread = document.getElementById("bread-choices");
var meatChooser = document.getElementById("meat-choices");
var cheeseSelector = document.getElementById("cheese-choices");
var veggieChooser = document.getElementById("veggie-choices");
var extrasChooser = document.getElementById("extra-choices");
var finalSandwichName = "";

selectedBread.addEventListener('click', breadMaker);
cheeseSelector.addEventListener('click', cheeseMaker);
extrasChooser.addEventListener('click', extraMaker);
veggieChooser.addEventListener('click', veggieMaker);
meatChooser.addEventListener('click', meatMaker);

function domWriterShow () {
  document.getElementById("bill").innerHTML = "<p>$" + yourSandwich.getTotalSandwichPrice() +"</p>";
}

function domWriterShowLater () {
  document.getElementById("sandwich").innerHTML = "<p>" + finalSandwichName +"</p>";
}

function breadMaker (b) {
  var breadChoice = b.target.attributes.value;
  if (breadChoice){
    yourSandwich.setBread(breadChoice.value);

    domWriterShow();
  }
}

function cheeseMaker (c) {
  var cheeseChoice = c.target.attributes.value;
  if (cheeseChoice){
    yourSandwich.setCheese(cheeseChoice.value);

    if (cheeseChoice.value === "None" && c.target.checked) {
      noneChecked(c.currentTarget.id);
    } else {
      somethingChecked(c.currentTarget.id);
    }
    domWriterShow();
  }
}

function extraMaker (c) {
  var extraChoice = c.target.attributes.value;
  if (extraChoice){
    yourSandwich.setExtra(extraChoice.value);

    if (extraChoice.value === "None" && c.target.checked) {
      noneChecked(c.currentTarget.id);
    } else {
      somethingChecked(c.currentTarget.id);
    }
    domWriterShow();
  }
}

function veggieMaker (c) {
  var veggieChoice = c.target.attributes.value;
  if (veggieChoice){
    yourSandwich.setVeggie(veggieChoice.value);

    if (veggieChoice.value === "None" && c.target.checked) {
      noneChecked(c.currentTarget.id);
    } else {
      somethingChecked(c.currentTarget.id);
    }
    domWriterShow();
  }
}

function meatMaker (c) {
  var meatChoice = c.target.attributes.value;
  if (meatChoice){
    yourSandwich.setMeat(meatChoice.value);

    if (meatChoice.value === "None" && c.target.checked) {
      noneChecked(c.currentTarget.id);
    } else {
      somethingChecked(c.currentTarget.id);
    }
    domWriterShow();
  }
}

function noneChecked (containerId) {
var checks = document.querySelectorAll('#' + containerId + ' input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled && check.getAttribute("value") != "None"){
            check.checked = false;
        }
    }
}

function somethingChecked (containerId) {
var checks = document.querySelectorAll('#' + containerId + ' input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled && check.getAttribute("value") == "None"){
            check.checked = false;
        }
    }
}