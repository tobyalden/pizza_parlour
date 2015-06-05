// JS

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.getCost = function() {
  return this.size + this.toppings.length;
}

Pizza.prototype.getDescription = function() {
  var description = this.size + '" pizza with ';
  for(var i = 0; i < this.toppings.length; i++) {
    description += this.toppings[i];
    if(i + 1 != this.toppings.length) {
      description += ", ";
    }
  }
  return description;
}

// jQuery
$(document).ready(function() {

  var pizzas = []
  var selectedToppings = []

  $("button#add-topping").click(function() {
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
    $("ul#pizza-list").empty();
    for(var i = 0; i < pizzas.length; i++) {
      debugger;
      $("ol#pizza-list").append("<li>" + pizzas[i].getDescription() + "</li>");
    }
  }

});
