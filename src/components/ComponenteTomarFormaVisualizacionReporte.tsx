import React from 'react'

export const ComponenteTomarFormaVisualizacionReporte = () => {
    const opcioenVisualizacion = ["PDF", "Excel", "Pantalla"]

  return (
    <>
      <div className='container'> 
        <div className="row">
          
          <div className='col-md-6 mx-auto'>
            <h5>Seleccione la forma de visualizacion</h5>
            <select className="form-control bg-black text-white">
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
