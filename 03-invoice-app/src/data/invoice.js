export const invoice = {
  id: 10,
  name: "Component fc",
  client: {
    name: "Pepe",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "Los angeles",
      street: "Calle falsa",
      number: 12,
    },
  },
  company: {
    name: "new egg",
    fiscalNumber: 12312341,
  },
  items: [
    {
      id: 1,
      product: "Cpu intel",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      product: "Keyboard",
      price: 150,
      quantity: 1,
    },
    {
      id: 3,
      product: "Monitor asus",
      price: 350,
      quantity: 2,
    },
  ],
};
