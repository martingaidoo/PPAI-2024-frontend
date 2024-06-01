import React, { useState } from 'react';
import "../styles/styleInputFecha.css"

export const ComponentTomarFecha = ({ onFechaInicioChange, onFechaFinChange }) => {
  const [fechaInicioLocal, setFechaInicioLocal] = useState<Date>();
  const [fechaFinLocal, setFechaFinLocal] = useState<Date>();

  const handleFechaInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fecha = new Date(event.target.value);
    setFechaInicioLocal(fecha);
    onFechaInicioChange(fecha); // Pasamos la fecha seleccionada al componente padre
    console.log(fecha);
  };

  const handleFechaFinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fecha = new Date(event.target.value);
    setFechaFinLocal(fecha);
    onFechaFinChange(fecha); // Pasamos la fecha seleccionada al componente padre
    console.log(fecha);
  };

  return (
    <>
      <div className='container'> 
        <div className="row">
          <div className='col'>
            <h5 className="card-title">Fecha Inicio</h5>
            <input 
              className="form-control bg-black text-white" 
              type="date"
              value={fechaInicioLocal?.toISOString().substr(0, 10) || ''}
              onChange={handleFechaInicioChange}
            />
          </div>
          <div className='col'>
            <h5 className="card-title">Fecha Fin</h5>
            <input 
              className="form-control bg-black text-white" 
              type="date"
              value={fechaFinLocal?.toISOString().substr(0, 10) || ''}
              onChange={handleFechaFinChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
