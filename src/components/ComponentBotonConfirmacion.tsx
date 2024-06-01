import React from 'react';

interface ComponentBotonConfirmacionProps {
  onConfirmacionReporte: () => void;
}

export const ComponentBotonConfirmacion: React.FC<ComponentBotonConfirmacionProps> = ({ onConfirmacionReporte }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onConfirmacionReporte}>
        Confirmar
      </button>
    </div>
  );
};
