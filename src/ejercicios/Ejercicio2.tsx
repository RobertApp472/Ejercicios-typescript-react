const Ejercicio2 = () => {
  const numeros: number[] = [10, 20, 30, 40, 50];

  const suma: number = numeros.reduce(
    (acumulador: number, valor: number) => acumulador + valor,
    0
  );

  return (
    <div>
      <h2>Suma de un arreglo usando reduce</h2>
      <p>Elementos del arreglo: 10, 20, 30, 40, 50 </p>
      <p>La suma es: {suma}</p>
    </div>
  );
};

export default Ejercicio2;
