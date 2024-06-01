import React, { useState } from 'react';


export const ComponenteTomarFormaVisualizacionReporte = ({onFormaVisualizacionReporte}) => {
  const [formaVisualizacionReporte, setFormaVisualizacionReporte] = useState<string>();
  const opcioenVisualizacion = ["PDF", "Excel", "Pantalla"]

  const handleFormaVisualizacionReporte = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formaVisualizacion = event.target.value;
    setFormaVisualizacionReporte(formaVisualizacion);
    onFormaVisualizacionReporte(formaVisualizacion);
    console.log(formaVisualizacion);
  }

  return (
    <>
      <div className='container'> 
        <div className="row">
          <div className='col-md-6 mx-auto'>
            <h5>Seleccione la forma de visualizacion</h5>
            <select className="form-control bg-black text-white" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleFormaVisualizacionReporte(event)}>
                    <option value="">Selecciona una opción</option>
                    {opcioenVisualizacion.map((opcion,index)=>(
                      <option key={index} value={opcion}>{opcion}</option>
                  ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
