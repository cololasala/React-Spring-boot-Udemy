import React from "react";
import PropTypes from "prop-types";

export const InvoiceCompany = ({ company }) => {
  return (
    <>
      <h3>Datos de la empresa</h3>
      <ul className="list-group">
        <li className="list-group-item active">Nombre: {company.name}</li>
        <li className="list-group-item">
          Numero fiscal: {company.fiscalNumber}
        </li>
      </ul>
    </>
  );
};

InvoiceCompany.propTypes = {
  company: PropTypes.object.isRequired,
};