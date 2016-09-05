var selectedBread = document.getElementById("bread-choices");
var meatChooser = document.getElementById("meat-choices");
var cheeseSelector = document.getElementById("cheese-choices");
var veggieChooser = document.getElementById("veggie-choices");
var extrasChooser = document.getElementById("extra-choices");
var orderName = document.getElementById("order");

selectedBread.addEventListener('click', breadMaker);
cheeseSelector.addEventListener('click', cheeseMaker);
extrasChooser.addEventListener('click', extraMaker);
veggieChooser.addEventListener('click', veggieMaker);
meatChooser.addEventListener('click', meatMaker);
orderName.addEventListener('click', domWriterShowLater)

function domWriterShow () {
  document.getElementById("bill").innerHTML = "<p>$" + yourSandwich.getTotalSandwichPrice() +"</p>";
}

function domWriterShowLater () {
  document.getElementById("sandwich").innerHTML = "<p>You Ordered: " + yourSandwich.getSandwichName() +"</p>";
  document.getElementById("bill").innerHTML = "<p>Total $" + yourSandwich.getTotalSandwichPrice() +"</p>";
  toggle_visibility("sandwich");
}

function toggle_visibility(id) {
     document.getElementById(id).classList.remove("hidden");
     document.getElementById(id).classList.add("show");
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