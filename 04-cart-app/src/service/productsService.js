// import { products } from "../data/products";

export const getProducts = async () => {
  const response = await fetch('http://localhost:8080/api/v1/products');
  const products = await response.json();
  return products;
};

export const calcuateCartTotal = (cartProducts) => {
  return cartProducts
    .map((c) => c.product.price * c.quantity)
    .reduce((a, b) => a + b, 0);
};
