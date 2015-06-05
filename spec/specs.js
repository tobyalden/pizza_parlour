describe('Pizza', function() {

  describe('new', function() {
    it("creates a new pizza", function() {
      var testPizza = new Pizza(13, []);
      expect(testPizza.size).to.equal(13);
      expect(testPizza.toppings).to.eql([]);
    });
  });

  describe("getCost", function() {
    it("calculates the cost of a pizza", function() {
      var testPizza = new Pizza(13, ["red peppers"]);
      expect(testPizza.getCost()).to.equal(14);
    });
  });

  describe("getDescription", function() {
    it("returns a description of a pizza", function() {
      var testPizza = new Pizza(13, ["red peppers", "pepperoni"]);
      expect(testPizza.getDescription()).to.equal('13" pizza with red peppers, pepperoni');
    });
  });

});
