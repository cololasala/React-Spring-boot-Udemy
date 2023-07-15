import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelloWorld } from './components/HelloWorld.jsx';
import { Counter } from "./components/Counter.jsx";

//const h1 = React.createElement('h1', null, "Hola desde react dom");
//const ul = React.createElement('ul', null, React.createElement('li', null, "Elemento de lista"));
//const h2 = <h2>Este es h2</h2>;

ReactDOM.createRoot(document.getElementById("root")).render(
  //h1
  //ul
  //h2
  <React.StrictMode>
    {/* <HelloWorld name={'jose'} id={'1'} user={{name: 'manuel', age: 27}}/> */}
    <Counter initCounter={10}/>
  </React.StrictMode>
);
