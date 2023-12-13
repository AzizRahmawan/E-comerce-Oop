import { faker } from "@faker-js/faker";

export class Cart {
    constructor(){
        this.cartId = faker.finance.accountNumber();
        this.items = [];
    }
    addItem(product, quantity){
        this.items.push({product, quantity});
        console.log(`Item Successfully Add To Cart`);
    }
    removeItem(productId){
        this.items = this.items.filter(item => item.product.productId !== productId);
        console.log(`Item SSuccessfully Remove From The Cart`);
    }
    displayCart(){
        console.log(`------------------------`);
        console.log(`Cart ID: ${this.cartId}`);
        console.log(`List Product in the Cart`);
        for (const item of this.items) {
            console.log(`${item.product.productName} x ${item.quantity}`);
        }
    }
}