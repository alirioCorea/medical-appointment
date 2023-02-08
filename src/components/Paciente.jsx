export default function Paciente({ paciente, setPaciente }) {
  const { nombre, propietario, fecha, sintomas } = paciente;
  return (
    <div className="m-3 bg-custom-text shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-white uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-white uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-white uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold text-white uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-700 w-full mt-5 p-2 text-white uppercase font-bold rounded">
          Eliminar
        </button>
      </div>
    </div>
  );
}
