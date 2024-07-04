class Grocery {
    name: string;
    quantity: number;
    priceInDollars: number;

    constructor(name: string, quantity: number, priceInDollars: number) {
        this.name = name;
        this.quantity = quantity;
        this.priceInDollars = priceInDollars;
    }

    getTotalCost(): number {
        return this.quantity * this.priceInDollars;
    }

    display(): string {
        return `Item: ${this.name}, Quantity: ${this.quantity}, Cost: $${this.priceInDollars.toFixed(2)}, Total Cost: $${this.getTotalCost().toFixed(2)}`;
    }
}

const groceries = [
    new Grocery("milk", 2, 4.99),
    new Grocery("eggs", 1, 3.99),
    new Grocery("bread", 1, 3.24),
    new Grocery("coffee", 1, 12.99),
    new Grocery("apple", 12, 1.29)
];

const outputDiv = document.getElementById('output');

if (outputDiv) {
    groceries.forEach(grocery => {
        const p = document.createElement('p');
        p.textContent = grocery.display();
        outputDiv.appendChild(p);
    });
}

