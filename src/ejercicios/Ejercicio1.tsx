const Ejercicio1 = () => {
  const lado: number = 4;
  const area: number = lado * lado;

  return (
    <div>
      <h2>Cálculo del área de un cuadrado</h2>
      <p>Lado: {lado}</p>
      <p>Área del cuadrado: {area}</p>
    </div>
  );
};

export default Ejercicio1;
