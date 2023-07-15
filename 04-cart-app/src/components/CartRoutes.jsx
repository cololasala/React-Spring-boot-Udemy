import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CatalogView } from "./CatalogView";
import { CartView } from "./CartView";

export const CartRoutes = ({products, cartProducts, addCartProduct, dropProduct }) => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="catalog"
        element={
          <CatalogView
            products={products}
            addProduct={addCartProduct} // si tenemos "(product) => addCartProduct(product)" es igual a solo "addCartProduct", ya que se repite el parametro "product"
          />
        }
      />
      <Route
        path="cart"
        element={
          cartProducts?.length > 0 ? (
            <CartView
              cartProducts={cartProducts}
              dropProduct={(product) => dropProduct(product)} // tengo el parametro product que se me manda desde el hijo y luego llamo a dropProduct con ese parametro
            />
          ) : (
            <>
              <button
                className="btn btn-info mb-2"
                onClick={() => navigate("/catalog")}
              >
                Ir a comprar
              </button>
              <div className="alert alert-warning">
                No hay productos en el carro de compras
              </div>
            </>
          )
        }
      />

      <Route path="/" element={<Navigate to={"catalog"} />} />
    </Routes>
  );
};
