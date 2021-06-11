import React, { Fragment, useState } from 'react'

const Formulario = () => {

  //crear State para citas

  const [cita, actualizarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  })

  const AcutalizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const {mascota, propietario, fecha, hora,sintomas} = cita;

  const submitCita = e => {
    e.preventDefault();

    // Validando

    //Asignar id

    //Crear la cita

    //reiniciar la cita

  }


  return (
    <Fragment>
      <h2>Crear Cita</h2>
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

export default Formulario;