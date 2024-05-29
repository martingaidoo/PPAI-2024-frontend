import { ComponentTomarFecha } from '../components/ComponentTomarFecha'
import { ComponenteTomarFormaVisualizacionReporte } from '../components/ComponenteTomarFormaVisualizacionReporte'
import { getGenerarReporteRankingVinos } from "../../services/API"
import React, { useEffect } from 'react';


export const GenReportRankingVinos = () => {
  const tomarFecha = true
  const tomarReseñaVisualizacion = false
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGenerarReporteRankingVinos();
        console.log('Datos del ranking de vinos:', data);
      } catch (error) {
        console.error('Error al obtener los datos del ranking de vinos:', error);
      }
    };
    fetchData();
  }, []);


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