import { readCart, updateCartCount } from "./utils/common.js";

updateCartCount();
const cart = readCart();
console.log(cart);
