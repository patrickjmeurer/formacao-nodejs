import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import * as whishlistService from "./services/whishlist.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);


// Adicionei dois itens ao WhishList
await whishlistService.addItem(myWhishList, item1);
await whishlistService.addItem(myWhishList, item2);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await whishlistService.showList(myWhishList);
await cartService.calculateTotal(myCart);
