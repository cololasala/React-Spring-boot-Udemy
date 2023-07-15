import React, { useState, useEffect } from "react";
import { calcuateCartTotal } from "../service/productsService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ cartProducts, dropProduct }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calcuateCartTotal(cartProducts));
  }, [cartProducts]);

  return (
    <>
      <h3>Cart view</h3>
      <button
        className="btn btn-info text-light"
        onClick={() => navigate("/catalog")}
      >
        Seguir comprando
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((c) => {
            return (
              <tr key={c.product.id}>
                <td>{c.product.name}</td>
                <td>{c.product.price}</td>
                <td>{c.quantity}</td>
                <td>{c.quantity * c.product.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dropProduct(c)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-end fw-bold">
              $ {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
