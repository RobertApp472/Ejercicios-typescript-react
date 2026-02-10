interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const Ejercicio4 = () => {
  const alumnos: Alumno[] = [
    { name: "Viviana", edad: 19, calificacion: 10 },
    { name: "Wendy", edad: 20, calificacion: 8 },
    { name: "Gerson", edad: 18, calificacion: 9 },
  ];

  const promedio: number =
    alumnos.reduce(
      (total, alumno) => total + alumno.calificacion,
      0
    ) / alumnos.length;

  return (
    <div>
      <h2>Promedio de calificaciones de alumnos</h2>
      <p>Promedio de calificaciones: {promedio}</p>
    </div>
  );
};

export default Ejercicio4;
