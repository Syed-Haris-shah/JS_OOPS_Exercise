class Product{
    constructor(productID,productName,productPrice){
        this.productID = productID
        this.productName = productName
        this.productPrice = productPrice

    }

    calPrice(Qunatity){
        let totalPrice = this.productPrice*Qunatity
        console.log(`Total Price is ${totalPrice}`)
    }

}

class PersonalCareProduct extends Product{
    constructor(productID,productName,productPrice,productQuantity,warrentyPeriod){
        super(productID,productName,productPrice,productQuantity)
        this.warrentyPeriod = warrentyPeriod
    }
    calPrice(Qunatity){
        let totalPrice = ((this.productPrice*Qunatity)*2)
        console.log(`Total Price is ${totalPrice} and ${this.warrentyPeriod} month warrenty`)
    }

}

let p1 = new Product('1122','glass',150,15);

let p2 = new PersonalCareProduct('1122','glass',150,15,4);