import React from "react";
import PropTypes from "prop-types";

export const RowItem = ({ item: {id, product, price, quantity }, dropItem }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button className="btn btn-danger" onClick={() => dropItem(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

RowItem.propTypes = {
  item: PropTypes.object.isRequired,
};
