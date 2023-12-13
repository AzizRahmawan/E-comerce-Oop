import { faker } from "@faker-js/faker";

export class Order{
    constructor(){
        this.orderId = faker.finance.accountNumber();
        this.items = [];
        this.totalAmount = 0;
    }
    createOrder(cart){
        this.items = cart.items.map(cartItem => ({
            product: cartItem.product,
            quantity: cartItem.quantity,
        }));

        this.calculateTotalAmount();
        console.log(`Order Has Been Successfully Created`);
    }
    calculateTotalAmount(){
        this.totalAmount = this.items.reduce((total,item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }
    displayOrderDetails() {
        console.log(`------------------------`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Order Detail:`);

        for (const item of this.items) {
            console.log(`${item.product.productName} x ${item.quantity}`);
        }

        console.log(`Total Amount: ${this.totalAmount}`);
    }
}