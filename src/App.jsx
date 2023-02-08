import { useState,useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { getItems, setItems } from "./utils/localStorage";

function App() {
  const [pacientes, setPacientes] = useState(getItems('pacientes') || []);
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesFiltrados= pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesFiltrados);
  }

  useEffect(() => {
    setItems('pacientes', pacientes);
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          eliminarPaciente={eliminarPaciente}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />  
      </div>  
    </div>
  )
}

export default App
