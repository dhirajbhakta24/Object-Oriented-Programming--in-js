class Product {
    constructor(builder){
        this.name = builder.name;
        this.price = builder.price;
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }

    displayProduct(){
        console.log("Product dislayed", this.name, this.price,this.description,this.category,this.rating);
    }

    static get Builder() {
         class Builder{
            constructor(){
                this.name ="";
                this.price = 0;
                this.description ="";
            }
            setName(incomingName){
                this.name = incomingName;
                return this;
            }
            setPrice(incomingPrice){
                this.price = incomingPrice;
                return this;
            }
            setDescription(incomingDescription){
                this.description = incomingDescription;
                return this;
            }
            build(){
              return new Product(this);  
            }
         }
         return Builder;
    }
}

//
// Product.Builder() calls the Builder getter
//

const p = new Product.Builder()
                .setName("Iphone")
                .setPrice(150000)
                .setDescription("apple iphone ")
                .build();

p.displayProduct();                