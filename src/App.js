import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // citas en localstorage
let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if(!citasIniciales){
  citasIniciales = [];
}


  //Arreglo de citas

  const [citas, guardaCitas] = useState(citasIniciales);

  const crearCita = cita =>{
    guardaCitas([
      ...citas,
      cita
    ])
  }

//UseEffect para realizar operaciones cuando el state cambia: BUENO BUENO....

useEffect(()=> {
  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas));
  }else{
    localStorage.setItem('citas', JSON.stringify([]));
  }
}, [citas, citasIniciales])


  // eliminar una cita por su id

  const titulo = citas.length ===0 ? "No Hay Citas":"Administra tus citas";


  const eliminarCita = id =>{
   const nuevasCitas  = citas.filter(cita => cita.id !== id);
   guardaCitas(nuevasCitas);
  }

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
          crearCita = {crearCita}
          />
            
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita 
            key={cita.id}
            cita={cita}
            eliminarCita = {eliminarCita}
            />
          ))}
        </div>

      </div>
    </div>
    </Fragment>
  );
}

export default App;
