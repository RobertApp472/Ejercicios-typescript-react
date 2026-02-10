const Ejercicio3 = () => {
  const arreglo: number[] = [5,10,15,20,25,30,35,40,45,50];

  const nuevoArreglo: number[] = arreglo.map(
    (valor) => valor / 5
  );

  return (
    <div>
      <h2>Transformación de arreglo usando map</h2>
      <p>Original: {arreglo.join(", ")}</p>
      <p>Dividido para 5: {nuevoArreglo.join(", ")}</p>
    </div>
  );
};

export default Ejercicio3;
