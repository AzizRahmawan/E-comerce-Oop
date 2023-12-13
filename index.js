import { Product } from "./product.js";
import { Category } from "./category.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";

//New Product
const milk = new Product('Milk',10000,'Milk is Drink');
const chocolate = new Product('Cocholate',10000,'Chocolate is Food');

//New Category
const foodCategory = new Category('Food');
const drinkCategory = new Category('Drink');

//New Cart
const cart1 = new Cart();
const cart2 = new Cart();

//New Order
const order = new Order();

//Add Category
milk.addCategory(foodCategory);
chocolate.addCategory(foodCategory);

//Update Product & Category
milk.updateProduct(20000,'Milk Is Drink');
foodCategory.updateCategory('Foods');

//Display Product & Category
milk.displayInfo();
foodCategory.displayInfo();
foodCategory.getProducts();

//Add to Cart
cart1.addItem(milk, 2);
cart1.addItem(chocolate, 5);
cart2.addItem(milk, 2);

//Remove Product In Cart
cart1.removeItem(chocolate.productId);

//Display Cart
cart1.displayCart();
cart2.displayCart();

//Add to Order
order.createOrder(cart1);

//Display Order Detail
order.displayOrderDetails();
