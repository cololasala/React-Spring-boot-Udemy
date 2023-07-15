import { products } from "../data/products";

export const getProducts = () => products;

export const calcuateCartTotal = (cartProducts) => {
  return cartProducts
    .map((c) => c.product.price * c.quantity)
    .reduce((a, b) => a + b, 0);
};
