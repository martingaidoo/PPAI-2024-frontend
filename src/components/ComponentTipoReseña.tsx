import React, { useState } from 'react';

export const ComponentTipoReseña = ({onTipoReseñaChange}) => {
    const [tipoReseña, setTipoReseña] = useState<string>();
    const opcioenReseñas = ["Normal", "De amigos", "sommelier"]

    const handleTipoReseñaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    <select className="form-control bg-black text-white" onChange={handleTipoReseñaChange}>
                        <option value="">Selecciona una opción</option>
                        {opcioenReseñas.map((opcion,index)=>(
                            <option key={index} value={opcion}>{opcion}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    </>
)
}
