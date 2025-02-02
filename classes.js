//introduction to classes
//writing a product class

class Product{
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
