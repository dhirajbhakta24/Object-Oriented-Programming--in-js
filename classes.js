//introduction to classes
//writing a product class

class Product{
    
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    
    
    //data members
    name;
    price;
    rating;
    company_name;
    description;

    //member functions

    addToCart(){
        console.log('product added to cart');
    }
    removeFromCart(){
        console.log('product removed from cart');
    }
    productDetails(){
        console.log('these are the details of the rpoject');
    }
    addToWishlist(){
        console.log('product added to wishlist');
    }
}

let iphone = new Product("iPhone 12", 80000, "Mobile", "Apple iPhone 12", 4.5);

console.log(iphone);


let obj = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x,this.y);
    }
}

let obj1 = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x + this.y);
    }
}
let obj2 = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x + this.y);
    }
}

let obj3 = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x / this.y);
    }
}
let obj4 = {
    x:10,
    y:20,
    fn: function(){
        console.log(this.x * this.y);
    }
}
obj.fn();
obj1.fn();
obj2.fn();
obj3.fn();
obj4.fn();


