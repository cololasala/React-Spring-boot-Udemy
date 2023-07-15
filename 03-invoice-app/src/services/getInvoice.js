import { invoice } from "../data/invoice";

export const getInvoice = () => {
  const total = calculateTotal(invoice.items);
  return { ...invoice, total }; // retornamos la factura y agregamos el total
};

export const calculateTotal = (items) => {
  return items
    .map((i) => i.price * i.quantity) // retornamos los enteros precio * cantidad de cada item
    .reduce((a, b) => {
      return a + b; // hacemos suma de cada numero
    });
};
