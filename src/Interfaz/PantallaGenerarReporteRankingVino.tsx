import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ComponentTomarFecha } from '../components/ComponentTomarFecha';
import { ComponentTomarFormaVisualizacionReporte } from '../components/ComponentTomarFormaVisualizacionReporte';
import { ComponentTipoReporte } from '../components/ComponentTipoReporte';
import { ComponentBotonConfirmacion } from '../components/ComponentBotonConfirmacion';
import { Header } from '../components/Header';
import AlertOnScreen from '../components/ComponentToast';

export const PantallaGenerarReporteRankingVino: React.FC = () => {
  const [pantalla, setPantalla] = useState<boolean>(false);
  const [habilitarTomarFechas, setHabilitarTomarFechas] = useState<boolean>(false);
  const [habilitarTipoReporte, setHabilitarTipoReporte] = useState<boolean>(false);
  const [habilitarFormaVisualizacion, setHabilitarFormaVisualizacion] = useState<boolean>(false);
  const [habilitarConfirmacion, setHabilitarConfirmacion] = useState<boolean>(false);
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const [tipoReporteSeleccionado, setTipoReporteSeleccionado] = useState<string>("sin seleccion");
  const [tipoVisualizacionSeleccionada, setFormaVisualizacionReporte] = useState<string>("sin seleccion");
  const [confirmacionReporte, setConfirmacionReporte] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false); // Agrega este estado para mostrar la alerta de fecha invalida
  const [tiposReportes, setTiposReportes] = useState<any[]>([]);
  const [tipoVisualizacion, setTipoVisualizacion] = useState<any[]>([]);

  useEffect(() => {
    habilitarPantalla(); // Habilitar la pantalla inicial
  }, []);

  const habilitarPantalla = () => {
    setPantalla(true);
    setHabilitarTomarFechas(true); // Primer paso: seleccionar fechas
  };

  const tomarSeleccionFechaInicio = (fecha: Date) => {
    setFechaInicio(fecha);
    validarFechas(fecha, fechaFin);
  };
  
  const tomarSeleccionFechaFin = (fecha: Date) => {
    setFechaFin(fecha);
    validarFechas(fechaInicio, fecha);
  };

  const validarFechas = (inicio: Date | null, fin: Date | null) => {
    if (inicio && fin && inicio > fin) {
      setShowAlert(true); // Mostrar alerta si las fechas son inválidas
    } else if (inicio && fin) {
      setHabilitarTipoReporte(true); // Habilitar el siguiente paso
      setShowAlert(false);
    }
  };

  const mostrarYSolicitarTipoReporte = (reportes:string[]) => {// 9. mostrarYSolicitarTipoReporte()
    setTiposReportes(reportes)
    setHabilitarTipoReporte(true);
  }

  const tomarSeleccionTipoReporte = (tipo: string) => {
    setTipoReporteSeleccionado(tipo);
    if (tipo !== 'sin seleccion') {
      setHabilitarFormaVisualizacion(true); // Habilitar selección de forma de visualización
    }
  };

  const mostrarYSolicitarFormaVisualizacionReporte = (tiposVisualizacion:string[]) => {//12. mostrarYSolicitarFormaVisualizacionReporte()
    setTipoVisualizacion(tiposVisualizacion)
    setHabilitarFormaVisualizacion(true);
  }

  const tomarFormaVisualizacionReporte = (formaVisualizacionReporte: string) => { //13. tomarFormaVisualizacionReporte()
    setFormaVisualizacionReporte(formaVisualizacionReporte);
    if (formaVisualizacionReporte !== "sin seleccion" && formaVisualizacionReporte!=="" && tipoReporteSeleccionado !== "sin seleccion" && tipoReporteSeleccionado!== "" && gestor) {
      gestor.tomarFormaVisualizacionReporte(formaVisualizacionReporte); // 14. tomarFormaVisualizacionReporte()
    }
  }

  const solicitarConfirmacionReporte = () => { //15. solicitarConfirmacionReporte()
    setHabilitarConfirmacion(true);
  }

  const tomarConfirmacionReporte = () => {
    setConfirmacionReporte(true);
    opcionGenerarRankingDeVinos(); // Llamar al backend
  };

  const mostrarConfirmacionGeneracionReporte = () => {//45. mostrarConfirmacionGeneracionReporte()
    alert('Reporte generado exitosamente');
    finCU();
  }

  const finCU = () => { // 46.finCU()
    window.location.href = '/'; // Redirige a la ruta raíz
  }

  const opcionGenerarRankingDeVinos = async () => {
    try {
      const request = {
        fechaInicio: fechaInicio?.toISOString().split('T')[0],
        fechaFin: fechaFin?.toISOString().split('T')[0],
        tipoReporteSeleccionado,
        confirmacionReporte,
      };

      // Validar datos antes de enviar
      if (!request.fechaInicio || !request.fechaFin || !request.tipoReporteSeleccionado || request.tipoReporteSeleccionado === 'sin seleccion') {
        setShowAlert(true); // Mostrar alerta si faltan datos
        return;
      }
      const response = await axios.post('/api/reportes/generar-ranking-de-vinos', request, {
        responseType: 'blob', // Indicar que esperamos un archivo
      });

      // Procesar respuesta y descargar archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte-ranking-vinos.xlsx'); // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.remove();

      alert('¡Reporte generado exitosamente!');
    } catch (error) {
      console.error('Error al generar el reporte:', error);
      alert('Hubo un error al generar el reporte. Por favor, intenta nuevamente.');
    }
  };


  return (
    <>
      <Header />
      {pantalla && (
        <div className="container ms-lg-5 mt-5">
          <div className="row-4">
            <div className="col-md-9 col-sm-12">
              <div className="card text-bg-dark text-center">
                <div className="card-header">
                  <h4>Formulario de Generación de Ranking de Vinos</h4>
                </div>
                <div className="card-body">
                  {habilitarTomarFechas && (
                    <ComponentTomarFecha
                      onFechaInicioChange={tomarSeleccionFechaInicio}
                      onFechaFinChange={tomarSeleccionFechaFin}
                    />
                  )}
                  {habilitarTipoReporte && (
                    <ComponentTipoReporte
                      tiposReportes={tiposReportes}
                      onTipoReseñaChange={tomarSeleccionTipoReporte}
                    />
                  )}
                  {habilitarFormaVisualizacion && (
                    <ComponentTomarFormaVisualizacionReporte
                      tipoVisualizacion={tipoVisualizacion}
                      onFormaVisualizacionReporte={() => {}} // Aquí va la lógica de visualización
                    />
                  )}
                </div>
                <div className="card-footer text-body-secondary">
                  {habilitarConfirmacion && (
                    <ComponentBotonConfirmacion onConfirmacionReporte={tomarConfirmacionReporte} />
                  )}
                </div>
              </div>
              {showAlert && <AlertOnScreen showAlert={showAlert} setShowAlert={setShowAlert} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};