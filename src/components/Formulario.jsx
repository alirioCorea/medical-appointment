import { useState,useEffect } from "react";
import Alert from "./Alert";

export default function Formulario( {setPacientes,pacientes,paciente,setPaciente} ) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [email, setEmail] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    const errorMessage = "Todos los campos son obligatorios";

    useEffect(() => {
        if(paciente){
            const { nombre, propietario, fecha, email, sintomas } = paciente;
            setNombre(nombre);
            setPropietario(propietario);
            setFecha(fecha);
            setEmail(email);
            setSintomas(sintomas);
        }
    }, [paciente])

    const createNewId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, propietario, fecha, email, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        const nuvoPaciente = {
            nombre,
            propietario,
            fecha,
            email,
            sintomas,
        }

        if(paciente.id){
            nuvoPaciente.id = paciente.id;
            const newPacientes = pacientes.map(pacienteState => pacienteState.id === paciente.id ? nuvoPaciente : pacienteState);
            setPacientes(newPacientes);
            setPaciente({});
        }else{
            nuvoPaciente.id = createNewId();
            setPacientes([...pacientes, nuvoPaciente]);
        }

        setNombre("");
        setPropietario("");
        setFecha("");
        setEmail("");
        setSintomas("");
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-5">Añade los pacientes en esta sección y <span className="font-bold">administra sus citas</span></p>
        <form className="bg-custom-secondary shadow-md rounded-lg py-8 px-5 mb-10 ml-3" onSubmit={handleSubmit}>
            {
                error && <Alert mensaje={errorMessage}/> 
            }
           <div className="mb-5">
                <label htmlFor="nombre" className="block font-bold text-custom-text uppercase">Nombre</label>
                <input 
                    type="text" 
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    required
                    onInvalid={e => {
                        e.preventDefault();
                        setError(true);
                     }}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block font-bold text-custom-text uppercase">Propietario</label>
                <input 
                    type="text" 
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="propietario"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                    required
                    onInvalid={e => {
                        e.preventDefault();
                        setError(true);
                     }}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block font-bold text-custom-text uppercase">Correo</label>
                <input 
                    type="email" 
                    placeholder="Correo del propietario"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    onInvalid={e => {
                        e.preventDefault();
                        setError(true);
                     }}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block font-bold text-custom-text uppercase">Alta</label>
                <input 
                    type="date" 
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="alta"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                    required
                    onInvalid={e => {
                        e.preventDefault();
                        setError(true);
                     }}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block font-bold text-custom-text uppercase">Sintomas</label>
                <textarea 
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    placeholder="Describe los sintomas"
                    id="sintomas"
                    value={sintomas || ""}
                    onChange={e => setSintomas(e.target.value)}
                    required
                    onInvalid={e => {
                        e.preventDefault();
                        setError(true);
                     }}
                />
            </div>
            <input 
                type="submit"
                className="bg-custom-text text-custom-background font-bold w-full p-3 uppercase hover:shadow-2xl cursor-pointer"
                value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            />
        </form>
    </div>
  );
}
