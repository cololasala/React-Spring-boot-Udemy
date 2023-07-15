import React from "react";

export const ProductCard = ({ product, addProduct }) => {
  return (
    <div className="col-sm-4 my-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.price}</p>
          <button className="btn btn-primary" onClick={() => addProduct()}>Agregar</button>
        </div>
      </div>
    </div>
  );
};
