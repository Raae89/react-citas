import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

  //crear State para citas

  const [cita, actualizarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  })

  // state para errores en formularioasdasd

  const [error, actualizarError] = useState(false)

  const AcutalizarState = e => {
    actualizarCita({
      ...cita, 
      [e.target.name]: e.target.value
    })
  }

  const {mascota, propietario, fecha, hora,sintomas} = cita;

  const submitCita = e => {
    e.preventDefault();
   // Validando saddasd 
    if(mascota.trim() ==='' || propietario.trim() ==='' ||  fecha.trim() ==='' ||  hora.trim() ==='' ||  sintomas.trim() ===''){
      actualizarError(true);
      return;
    }

    //Eliminar mensaje previo
    actualizarError(false);

    //Asignar id

    cita.id = uuid();

  

    //Crear la cita
    crearCita(cita);


    //reiniciar la cita
    actualizarCita({
      mascota:'',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
    });

  }


  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange= {AcutalizarState}
          value= {mascota}
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueno Mascota"
          onChange= {AcutalizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange= {AcutalizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange= {AcutalizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange= {AcutalizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}


Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
export default Formulario;