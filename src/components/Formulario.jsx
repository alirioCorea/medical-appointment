export default function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-5">Añade los pacientes en esta sección y <span className="font-bold">administra sus citas</span></p>
        <form className="bg-custom-secondary shadow-md rounded-lg py-8 px-5 mb-10">
           <div className="mb-5">
                <label htmlFor="nombre" className="block font-bold text-custom-text uppercase">Nombre</label>
                <input 
                    type="text" 
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="nombre"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block font-bold text-custom-text uppercase">Propietario</label>
                <input 
                    type="text" 
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="propietario"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block font-bold text-custom-text uppercase">Propietario</label>
                <input 
                    type="email" 
                    placeholder="Correo del propietario"
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="email"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block font-bold text-custom-text uppercase">Alta</label>
                <input 
                    type="date" 
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    id="alta"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block font-bold text-custom-text uppercase">Alta</label>
                <textarea 
                    className="border-2 w-full p-2 mt-2 border-custom-text placeholder-custom-text rounded-md"
                    placeholder="Describe los sintomas"
                    id="sintomas"
                />
            </div>
            <input 
                type="submit"
                className="bg-custom-text text-custom-background font-bold w-full p-3 uppercase hover:shadow-2xl cursor-pointer"
                value="Agregar Paciente"
            />
        </form>
    </div>
  );
}
