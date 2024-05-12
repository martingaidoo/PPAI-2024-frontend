import React from 'react'

export const ComponenteTomarFormaVisualizacionReporte = () => {
    const opcioenReseñas = ["Normal", "De amigos", "sommelier"]
    const opcioenVisualizacion = ["PDF", "Exel", "Pantalla"]

  return (
    <>
                <div className="card text-bg-dark text-center">
  <div className="card-header">
  <div className='container my-3'> 
  <div className="row">
        
        <div className='col-md-6 mx-auto'>
    <h4>Seleccione el tipo de Reseña</h4>

    <select className="form-control bg-black text-white">
                  <option value="">Selecciona una opción</option>
                  {opcioenReseñas.map((opcion,index)=>(
                    <option key={index} value={opcion}>{opcion}</option>
                ))}

    </select>
    </div>
    </div>
    </div>

  </div>
  <div className="card-body">
    <div className='container'> 
    <div className="row">
        
    <div className='col-md-6 mx-auto'>
    <h4>Seleccione la forma de visualizacion</h4>

    <select className="form-control bg-black text-white">
                  <option value="">Selecciona una opción</option>
                  <option value="">Selecciona una opción</option>
                  {opcioenVisualizacion.map((opcion,index)=>(
                    <option key={index} value={opcion}>{opcion}</option>
                ))}
    </select>

    </div>
    </div>
    </div>
    

  </div>
  <div className="card-footer text-body-secondary">
  <a href="#" className="btn btn-primary">Confirmar</a>
  </div>
</div>
    </>
  )
}
