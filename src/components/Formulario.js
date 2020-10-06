import React, { useState } from 'react'
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const initialState = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

export const Formulario = ({crearCita}) => {

    //Crear State de citas
    const [cita, setCita] = useState(initialState);
    const [error, setError] = useState(false);

    const handleChange = ({target})=>{
        const { name, value } = target;
        setCita({
            ...cita,
            [name] : value
        });
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const handleSubmit = (e)=>{
        e.preventDefault();
        if( mascota.trim() === ''       || 
            propietario.trim() === ''   ||
            fecha.trim() === ''         ||
            hora.trim() === ''          ||
            sintomas.trim() === ''
        ){
            setError(true);
            return;
        }
        setError(false);
        cita.id = uuid();
        crearCita(cita);
        setCita(initialState);
    }

    return (
        <>
            <h2>Crear Cita</h2>
            {   error && 
                <p className="alerta-error">
                    Todos los campos son obligatorios
                </p> 
            }
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}

                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}