import React, { useState } from "react";

export const Counter = ({ initCounter }) => {
  const [counter, setCounter] = useState(initCounter);

  return (
    <>
      <h2>Mi contador</h2>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <p>El contador es: {counter}</p>
    </>
  );
};
