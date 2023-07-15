import React from "react";
import PropTypes from "prop-types";

export const InvoiceClient = ({ client }) => {
  return (
    <>
      <h3>Datos del cliente</h3>
      <ul className="list-group">
        <li className="list-group-item active"> {client.name}</li>
        <li className="list-group-item"> {client.lastName}</li>
        <li className="list-group-item"> {client.address.country}</li>
        <li className="list-group-item"> {client.address.city}</li>
        <li className="list-group-item"> {client.address.street}</li>
      </ul>
    </>
  );
};

InvoiceClient.propTypes = {
  client: PropTypes.object.isRequired,
};
