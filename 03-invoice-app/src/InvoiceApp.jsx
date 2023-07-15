import { calculateTotal, getInvoice } from "./services/getInvoice";
import { InvoiceClient } from "./components/InvoiceClient";
import { InvoiceCompany } from "./components/InvoiceCompany";
import { InvoiceItems } from "./components/InvoiceItems";
import { InvoiceView } from "./components/InvoiceView";
import { InvoiceTotal } from "./components/InvoiceTotal";
import { AddItemForm } from "./components/AddItemForm";
import { useEffect, useState } from "react";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};
export const InvoiceApp = () => {
  const [invoice, setInvoice] = useState(invoiceInitial);
  const [activeForm, setActiveForm] = useState(false);
  const { id, name: invoiceName, client, company } = invoice;
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [counterId, setCounterId] = useState();

  const addItem = (item) => {
    const newItem = { ...item, id: counterId };
    setItems((oldItems) => [...oldItems, newItem]);
    setTotal((t) => t + item.price * item.quantity);
    setCounterId(counterId + 1);
  };

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
    setTotal(data.total);
    setCounterId(data.items.map((i) => i.id).sort((a, b) => b - a)[0] + 1);
  }, []);

  useEffect(() => {
    if (items.length) {
      setTotal(calculateTotal(items));
    }
  }, [items]);

  const dropItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  return (
    <>
      <h1>Factura</h1>
      <div className="container mb-2">
        <div className="card">
          <div className="card-body my-3 mx-3">
            <InvoiceView id={id} name={invoiceName} />
            <div className="row mt-2 mb-2">
              <div className="col">
                <InvoiceClient client={client} />
              </div>
              <div className="col">
                <InvoiceCompany company={company} />
              </div>
            </div>
            <InvoiceItems items={items} dropItem={(id) => dropItem(id)} />
            <InvoiceTotal total={total} />

            <button
              className="btn btn-secondary text-light"
              onClick={() => setActiveForm((oldValue) => !oldValue)}
            >
              Agregar item
            </button>
            {activeForm && <AddItemForm addItem={(item) => addItem(item)} />}
          </div>
        </div>
      </div>
    </>
  );
};
