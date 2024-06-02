import React, { useState } from 'react';

interface ComponentTipoReseñaProps {
    onTipoReseñaChange: (reseña: string) => void;
}

export const ComponentTipoReseña: React.FC<ComponentTipoReseñaProps> = ({ onTipoReseñaChange }) => {
    const [tipoReseña, setTipoReseña] = useState<string>();
    const opcionesReseñas = ["Normal", "De amigos", "sommelier"];

    const TipoReseñaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const reseña = event.target.value;
        setTipoReseña(reseña);
        onTipoReseñaChange(reseña);
    };

    return (
        <>
            <div className='container my-3'>
                <div className="row">
                    <div className='col-md-6 mx-auto'>
                        <h5>Seleccione el tipo de Reseña</h5>
                        <select className="form-control bg-black text-white" onChange={TipoReseñaChange}>
                            <option value="">Selecciona una opción</option>
                            {opcionesReseñas.map((opcion, index) => (
                                <option key={index} value={opcion}>{opcion}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};
