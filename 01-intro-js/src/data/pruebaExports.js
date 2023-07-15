/* En javascript solo puedo exportar por defecto 1 sola cosa */

export function myFunction() {
  return "Mi funcion exportable";
}

export default function myFunctionTwo() {
  return "Funcion exportable por defecto";
}

const constante1 = 1;

export {constante1} //otra manera de exportar todo 

/* export {     //otra manera de exportar por defecto
    myFunctionTwo as default
} */
