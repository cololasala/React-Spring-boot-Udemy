import myFunctionTwo, { myFunction, constante1 } from "./data/pruebaExports";

const invoce = {
  name: "Pepe",
  greeting: function () {
    return `El nombre es ${this.name}`; // this hace referencia al propio objeto
  },
  items: [
    {
      name: "mouse",
      price: 100,
      quantity: 2,
    },
    {
      name: "keyboard",
      price: 150,
      quantity: 1,
    },
  ],
  totalItemsPrice: function () {
    return this.items.reduce(
      (a, b) => a.price * a.quantity + b.price * b.quantity
    );
  },
};

console.log(invoce.greeting());
console.log(invoce.totalItemsPrice());
const invoceRerefencia = invoce; // igual referencia, si modifico invoceRerefencia tambien modifica invoce

const invoceClone = { ...invoce };
invoceClone.name = "Juan";
const { name } = invoce;
console.log(invoceClone, name);

const arrayOne = ["uno", "dos", "tres"];
const arrayTwo = [...arrayOne, "cuatro"];
arrayTwo.push("cinco");
console.log(arrayOne, arrayTwo);

const { a, b } = arrayOne; //obtengo el primer y segundo elemento

const filterOne = arrayOne.filter((e) => e === "tres"); //no es necesario parentesis en el "e"
console.log(filterOne);

/* ********************** */

console.log(myFunction()); // llamada a funciones de otro archivo
console.log(myFunctionTwo());

const promise = new Promise((resolve, reject) => {
  const nro = 2;
  setTimeout(() => {
    if (nro === 1) {
      resolve(console.log("El nro es 1"));
    } else {
      reject("Error el nro no es 1");
    }
  }, 2000);
});

const resultPromise = await promise
  .then(() => {})
  .catch((err) => console.log(err));

const httpClient = fetch("https://jsonplaceholder.typicode.com/todos"); // uso de fetch

/* httpClient.then((response) => {    // una manera de hacerlo
  response.json().then((data) => console.log(data));
});
 */

httpClient // usando then anidados
  .then((response) => response.json())
  .then((data) => console.log(data));

const findOne = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const responseJson = await response.json();

  const el = document.createElement('p');
  el.innerHTML = responseJson.title;
  document.getElementById('root').append(el);

  return responseJson;
};

/* findOne().then((response) => console.log(response)); */
const oneUser = await findOne(); // con el await espero a que se procese la promise para obtener los datos
console.log(oneUser);
