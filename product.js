import { faker } from '@faker-js/faker';

export class Product{
    products = [];
    constructor (productName, price, description){
        this.productId = faker.finance.accountNumber();
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.categories = [];
    }
    displayInfo(){
        console.log(`------------------------`);
        console.log(`Detail Product`);
        console.log(`Product ID: ${this.productId}`);
        console.log(`Product Name: ${this.productName}`);
        console.log(`Price: $${this.price}`);
        console.log(`Description: ${this.description}`);
        console.log(`Categories:  ${this.categories.map(category => category.categoryName).join(', ')}`);
    }
    updateProduct(newPrice, newDescription) {
        //this.newProductName = newProductName;
        this.price = newPrice;
        this.newDescription = newDescription;
        console.log(`Product ${this.productName} has been update.`);
    }
    addCategory(category){
        this.categories.push(category);
        category.products.push(this);
    }
}
