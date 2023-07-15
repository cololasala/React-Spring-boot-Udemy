import { cartProductsReducer } from "../reducers/cartProductsReducer";
import { cartProductsActions } from "../reducers/cartProductsActions";
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialCartProducts =
  JSON.parse(sessionStorage.getItem("cartProducts")) || [];

export const useCartProducts = () => {
  const [cartProducts, dispatch] = useReducer(
    cartProductsReducer,
    initialCartProducts
  );

  const navigate = useNavigate();

  useEffect(() => {
    // cada vez que actualiza cartProducts, actualizo el sessionStorage
    sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addCartProduct = (product) => {
    const searchProduct = cartProducts.find((p) => p.product.id == product.id);
    if (searchProduct) {
      dispatch({
        type: cartProductsActions.UpdateQuantity,
        payload: searchProduct.product.id,
      });
      
    } else {
      dispatch({
        type: cartProductsActions.AddProduct,
        payload: product,
      });
    }
    navigate("/cart");
  };

  const dropProduct = (product) => {
    dispatch({
      type: cartProductsActions.RemoveProduct,
      payload: product.product.id,
    });
  };

  return {
    cartProducts,
    dropProduct,
    addCartProduct,
  };
};
