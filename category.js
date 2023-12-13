import { faker, th } from "@faker-js/faker";

export class Category{
    constructor(categoryName){
        this.categoryId = faker.finance.accountNumber();
        this.categoryName = categoryName;
        this.products = [];
    }
    displayInfo(){
        console.log(`------------------------`);
        console.log(`Detail Category`);
        console.log(`Category ID: ${this.categoryId}`);
        console.log(`Category Name: ${this.categoryName}`);
    }
    updateCategory(newCategoryName){
        this.categoryName = newCategoryName;
        console.log('Category has been Update.');
    }
    getProducts(){
        console.log(`------------------------`);
        console.log(`List Product Category ${this.categoryName}`);
        console.log(`Products: ${this.products.map(product => product.productName).join(', ')}`);
    }
}