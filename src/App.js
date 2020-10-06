import React, { useState, useEffect } from 'react';
import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, setCitas] = useState([]);

  useEffect(() => {
      let citasIniciales = JSON.parse(localStorage.getItem('citas'));
      if(citasIniciales){
        localStorage.setItem('citas',JSON.stringify(citas));
      }else{
        localStorage.setItem('citas',JSON.stringify([]));
      }
  }, [citas]);

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  const handleDelete = id => {
    const nuevasCitas = citas.filter( cita => cita.id != id );
    setCitas( nuevasCitas );
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map( cita =>(
                <Cita 
                    cita={cita}
                    key={cita.id}
                    handleDelete={handleDelete}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
