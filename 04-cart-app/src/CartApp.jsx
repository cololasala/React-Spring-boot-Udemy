import { React, useEffect, useState } from "react";
import { getProducts } from "./service/productsService";

import { useCartProducts } from "./hooks/useCartProducts";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./components/CartRoutes";

export const CartApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const { cartProducts, addCartProduct, dropProduct } = useCartProducts();

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <CartRoutes
          products={products}
          cartProducts={cartProducts}
          addCartProduct={addCartProduct}
          dropProduct={dropProduct}
        />
      </div>
    </>
  );
};
