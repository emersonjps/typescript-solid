import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9131));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));
shoppingCart.addItem(new Product('Calça', 56.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);

order.checkout();
console.log(order.orderStatus);
