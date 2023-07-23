import { React, useEffect, useState } from "react";
import { getProducts } from "./service/productsService";

import { useCartProducts } from "./hooks/useCartProducts";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./components/CartRoutes";

export const CartApp = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoding] = useState([]);

  const findAllProducts = async () => {
    setIsLoding(true);
    const products = await getProducts();
    setProducts(products);
    setIsLoding(false);
  };

  useEffect(() => {
    findAllProducts(); //no hacemos la llamada directo aca ya que en el useEffect no deben llamarse funciones async
  }, []);

  const { cartProducts, addCartProduct, dropProduct } = useCartProducts();

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <CartRoutes
            products={products}
            cartProducts={cartProducts}
            addCartProduct={addCartProduct}
            dropProduct={dropProduct}
          />
        )}
      </div>
    </>
  );
};
