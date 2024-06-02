import React, { useState } from 'react';

type AlertOnScreenProps = {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const AlertOnScreen = ({ showAlert, setShowAlert }: AlertOnScreenProps) => { // Pasa setShowAlert como prop
  const handleClose = () => setShowAlert(false); // Usa setShowAlert para cerrar el toast

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          ></path>
        </symbol>
      </svg>
      {showAlert && ( // Muestra el toast solo si showAlert es true
        <div style={{
          position: 'fixed',
          top: '10%',
          left: '48%',
          transform: 'translate(-50%, -50%)',
          zIndex: '9999',
        }} className="alert alert-danger d-flex align-items-center" role="alert">
          <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:" style={{ height: '1em', width: '1em' }}>
            <use xlinkHref="#exclamation-triangle-fill"></use>
          </svg>
          <div>
            Las fechas ingresadas son incorrectas.
          </div>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
        </div>
      )}
    </div>
  );
};

export default AlertOnScreen;