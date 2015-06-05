// JS

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
  return this.size + this.toppings.length;
}

Pizza.prototype.getDescription = function() {
  var description = this.size + '" pizza';
  if(this.toppings.length > 0) {
    description += " with ";
  }
  for(var i = 0; i < this.toppings.length; i++) {
    description += this.toppings[i];
    if(i + 1 != this.toppings.length) {
      description += ", ";
    }
  }
  description += " ($" + this.getCost() + ")";
  return description;
}

// jQuery
$(document).ready(function() {

  var pizzas = [];
  var selectedToppings = [];

  $("button#add-topping").click(function() {
    event.preventDefault();
    var topping = $("#toppings-dropdown").val();
    selectedToppings.push(topping);
    refreshPage();
  });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var size = parseInt($("#size-dropdown").val());
    var pizza = new Pizza(size, selectedToppings);
    pizzas.push(pizza);
    selectedToppings = [];
    refreshPage();
  });

  function refreshPage() {
    $("ul#toppings-list").empty();
    for(var i = 0; i < selectedToppings.length; i++) {
      $("ul#toppings-list").append("<li>" + selectedToppings[i] + "</li>");
    }
    $("ol#pizza-list").empty();
    var totalCost = 0;
    for(var i = 0; i < pizzas.length; i++) {
      $("ol#pizza-list").append("<li>" + pizzas[i].getDescription() + "</li>");
      totalCost += pizzas[i].getCost();
    }
    $("h3#total-cost").text("Total Cost: $" + totalCost);
  }

});
