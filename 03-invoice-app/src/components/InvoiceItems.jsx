import React from "react";
import { RowItem } from './RowItem';

export const InvoiceItems = ({ items, dropItem }) => {
  return (
    <>
      <h3>Productos de la factura</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <RowItem key={item.id} item={item} dropItem={(id) => dropItem(id)}/>;
          })}
        </tbody>
      </table>
    </>
  );
};
