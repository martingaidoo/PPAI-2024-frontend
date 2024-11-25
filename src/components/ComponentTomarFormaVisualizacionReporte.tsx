import React, { useState } from 'react';

interface ComponentTomarFormaVisualizacionReporteProps {
  tipoVisualizacion: string[];
  onFormaVisualizacionReporte: (formaVisualizacion: string) => void;
}

export const ComponentTomarFormaVisualizacionReporte: React.FC<ComponentTomarFormaVisualizacionReporteProps> = ({ tipoVisualizacion, onFormaVisualizacionReporte }) => {
  const [formaVisualizacionReporte, setFormaVisualizacionReporte] = useState<string>();

  const tomarFormaVisualizacionReporte = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const formaVisualizacion = event.target.value;
    setFormaVisualizacionReporte(formaVisualizacion);
    onFormaVisualizacionReporte(formaVisualizacion);
  };

  return (
    <>
      <div className='container'> 
        <div className="row">
          <div className='col-md-6 mx-auto'>
            <h5>Seleccione la forma de visualizacion</h5>
            <select className="form-control bg-black text-white" onChange={tomarFormaVisualizacionReporte}>
              <option value="">Selecciona una opción</option>
              <option value="pdf">PDF</option>
              <option value="Excel">Excel</option>
              <option value="pantalla">En pantalla</option>
              {
              //tipoVisualizacion.map((opcion, index) => (
              //  <option key={index} value={opcion}>{opcion}</option>
              //))
              }
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
