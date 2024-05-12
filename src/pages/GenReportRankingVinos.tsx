import { ComponentTomarFecha } from '../components/ComponentTomarFecha'
import { ComponenteTomarFormaVisualizacionReporte } from '../components/ComponenteTomarFormaVisualizacionReporte'

export const GenReportRankingVinos = () => {
  const tomarFecha = true
  const tomarReseñaVisualizacion = false

  return (
    <>   
      <div className='container ms-lg-5 mt-5 '>
      <div className="row-4 ">
          <div className='col-md-9 col-sm-12 ' >
            {tomarFecha ? (
              <ComponentTomarFecha/>
            ) : null}
        {tomarReseñaVisualizacion ? (
          <ComponenteTomarFormaVisualizacionReporte/>
        ) : null}
      </div>
      </div>
      </div>
    </>
  )
}