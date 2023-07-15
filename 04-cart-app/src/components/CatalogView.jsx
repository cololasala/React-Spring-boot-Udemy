import React from "react";
import { ProductCard } from "./ProductCard";

export const CatalogView = ({ products, addProduct }) => {
  return (
    <div className="row">
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} addProduct={() => addProduct(p) }/>;
      })}
    </div>
  );
};
