import React, { useState } from 'react';

interface ComponentTipoReporteProps {
    tiposReportes: string[];
    onTipoReseñaChange: (reseña: string) => void;
}

export const ComponentTipoReporte: React.FC<ComponentTipoReporteProps> = ({ tiposReportes, onTipoReseñaChange }) => {
    const [tipoReporteSeleccionado, setTipoReporteSeleccionado] = useState<string>("");

    const handleTipoReseñaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const reporte = event.target.value;
        setTipoReporteSeleccionado(reporte);
        onTipoReseñaChange(reporte);
    };

    return (
        <div className='container my-3'>
            <div className="row">
                <div className='col-md-6 mx-auto'>
                    <h5>Seleccione el tipo de Reseña</h5>
                    <select className="form-control bg-black text-white" value={tipoReporteSeleccionado} onChange={handleTipoReseñaChange}>
                        <option value="">Selecciona una opción</option>
                        <option value="Resena de amigos">Reseña de amigo</option>
                        <option value="Resena de sommelier">Reseña de sommelier</option>
                        <option value="Resena normal">Reseña normal</option>

                        {//tiposReportes.map((opcion, index) => (
                         //   <option key={index} value={opcion}>{opcion}</option>
                        //))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};
