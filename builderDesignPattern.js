class Product{
    
    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.#name = productName;
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }
    
    
    //data members
    #name;
    #price;
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
    displayProduct(){
        console.log(this.#name,this.#price,this.category,this.description,this.rating); 
    }
    setPrice(p){
        if(p>0){
            this.#price = p;
        }
        else{
            console.log("Invalid Price");
        }
    }
    getPrice(){
        return this.#price;
    }
}

let iphone = new Product("iPhone 12", 80000, "Mobile", "Apple iPhone 12", 4.5);

iphone.setPrice(1000);
iphone.displayProduct();