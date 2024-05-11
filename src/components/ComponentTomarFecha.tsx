import React from 'react'
import "../styles/styleInputFecha.css"

export const ComponentTomarFecha = () => {
  return (
    <>
        <div className="card text-bg-dark text-center">
  <div className="card-header">
    <h4>Seleccione dos Fechas</h4>
  </div>
  <div className="card-body">
    <div className='container'> 
    <div className="row">
        
    <div className='col'>
        <h5 className="card-title">Fecha Inicio</h5>
        <input className="form-control bg-black text-white" type="date"/>
    </div>
    <div className='col'>
        <h5 className="card-title">Fecha Fin</h5>
        <input className="form-control bg-black text-white" type="date"/>
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
