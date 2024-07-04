var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, priceInDollars) {
        this.name = name;
        this.quantity = quantity;
        this.priceInDollars = priceInDollars;
    }
    Grocery.prototype.getTotalCost = function () {
        return this.quantity * this.priceInDollars;
    };
    Grocery.prototype.display = function () {
        return "Item: ".concat(this.name, ", Quantity: ").concat(this.quantity, ", Cost: $").concat(this.priceInDollars.toFixed(2), ", Total Cost: $").concat(this.getTotalCost().toFixed(2));
    };
    return Grocery;
}());
var groceries = [
    new Grocery("milk", 2, 4.99),
    new Grocery("eggs", 1, 3.99),
    new Grocery("bread", 1, 3.24),
    new Grocery("coffee", 1, 12.99),
    new Grocery("apple", 12, 1.29)
];
var outputDiv = document.getElementById('output');
if (outputDiv) {
    groceries.forEach(function (grocery) {
        var p = document.createElement('p');
        p.textContent = grocery.display();
        outputDiv.appendChild(p);
    });
}
