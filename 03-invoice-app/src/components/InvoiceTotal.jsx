import React from "react";

export const InvoiceTotal = ({ total }) => {
  return (
    <>
      <div className="text-end">
        <span className="badge rounded-pill bg-success">{total}</span>
      </div>
    </>
  );
};
