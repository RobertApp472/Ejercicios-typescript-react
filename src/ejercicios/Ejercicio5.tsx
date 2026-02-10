import { useState } from "react";

const Ejercicio5 = () => {
  const [acumulador, setAcumulador] = useState<number>(0);

  return (
    <div>
      <h2>Acumulador de 5 usando useState</h2>
      <p>Valor actual: {acumulador}</p>

      <button onClick={() => setAcumulador(acumulador + 5)}>
        +5
      </button>

      <button onClick={() => setAcumulador(acumulador - 5)}>
        -5
      </button>
    </div>
  );
};

export default Ejercicio5;
