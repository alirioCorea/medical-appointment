export default function Paciente() {
  return (
    <div className="m-3 bg-custom-text shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-white uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-white uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-white uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold text-white uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
    </div>
  );
}
