import React, { useState } from "react";

export const AddItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormData((oldValue) => ({ ...oldValue, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData((oldValue) => ({ ...oldValue }));
    addItem(formData);
    setFormData({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <h3>Agregar producto</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control m-3 w-25"
          name="product"
          placeholder="Producto"
          value={formData.product}
          onChange={changeInput}
          required
        />
        <input
          type="number"
          className="form-control m-3  w-25"
          name="price"
          min="1"
          placeholder="Precio"
          value={formData.price}
          onChange={changeInput}
          required
        />
        <input
          type="number"
          className="form-control m-3  w-25"
          name="quantity"
          min="1"
          placeholder="Cantidad"
          value={formData.quantity}
          onChange={changeInput}
          required
        />
        <button className="btn btn-primary ms-3" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
