//function constructor

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function() {
    console.log("Name:", this.name, "Price", this.price, "description:",
    this.description);
    }
}

let iphone = new Product("Iphone 11", 900, "Apple iphone 11");
