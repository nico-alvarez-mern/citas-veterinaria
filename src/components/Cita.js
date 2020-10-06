import React from 'react'
import PropTypes from 'prop-types';
export const Cita = ({cita,handleDelete}) => (
   <div className="cita">
       <p>Mascota: <span>{cita.mascota}</span></p>
       <p>Dueño: <span>{cita.propietario}</span></p>
       <p>Fecha: <span>{cita.fecha}</span></p>
       <p>Hora: <span>{cita.hora}</span></p>
       <p>Sintomas: <span>{cita.sintomas}</span></p>

       <button
            className="button eliminar u-full-width"
            onClick={ ()=> handleDelete(cita.id) }
        >
            Eliminar &times;
        </button>
   </div> 
)

Cita.prototype = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
