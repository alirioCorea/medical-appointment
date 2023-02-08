import Paciente from "./Paciente";

export default function ListadoPacientes({ pacientes,setPaciente,eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administra{" "}
            <span className="font-bold">las citas de tus pacientes</span> en
            esta sección
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-5 text-center">
            Administra{" "}
            <span className="font-bold">las citas de tus pacientes</span> en
            esta sección
          </p>
        </>
      )}
    </div>
  );
}
