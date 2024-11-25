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
    fetchTiposReportes(); // Cargar tipos de reportes desde el backend
    fetchTipoVisualizaciones(); // Cargar formas de visualización desde el backend
  }, []);

  const habilitarPantalla = () => {
    setPantalla(true);
    // llama al metodo del gestor opcionGenerarRankingDeVinos()
    solicitarSeleccionFechasInicioFin(); // Primer paso: seleccionar fechas
  };

  const solicitarSeleccionFechasInicioFin = () => {
    setHabilitarTomarFechas(true);
  }

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
      mostrarYSolicitarTipoReporte()
      setShowAlert(false);
    }
  };
  const fetchTiposReportes = async () => {
    try {
      const response = await axios.get('/api/reportes/tipos');
      setTiposReportes(response.data);
    } catch (error) {
      console.error('Error al cargar los tipos de reportes:', error);
    }
  };

  const fetchTipoVisualizaciones = async () => {
    try {
      const response = await axios.get('https://3cwqnm3k-8080.brs./api/reportes/visualizaciones');
      setTipoVisualizacion(response.data);
    } catch (error) {
      console.error('Error al cargar las formas de visualización:', error);
    }
  };

  const mostrarYSolicitarTipoReporte = () => {// 9. mostrarYSolicitarTipoReporte()
    setHabilitarTipoReporte(true);
  }


  const tomarSeleccionTipoReporte = (tipo: string) => {
    setTipoReporteSeleccionado(tipo);
    if (tipo !== 'sin seleccion') {
      mostrarYSolicitarFormaVisualizacionReporte()
    }
  };

  const mostrarYSolicitarFormaVisualizacionReporte = () => {//12. mostrarYSolicitarFormaVisualizacionReporte()
    // setTipoVisualizacion(tiposVisualizacion)
    setHabilitarFormaVisualizacion(true);
  }

  const tomarFormaVisualizacionReporte = (formaVisualizacionReporte: string) => { //13. tomarFormaVisualizacionReporte()
    setFormaVisualizacionReporte(formaVisualizacionReporte);
    if (formaVisualizacionReporte !== "sin seleccion" && formaVisualizacionReporte!=="" && tipoReporteSeleccionado !== "sin seleccion" && tipoReporteSeleccionado!== "" ) {
      //gestor.tomarFormaVisualizacionReporte(formaVisualizacionReporte); // 14. tomarFormaVisualizacionReporte()
      solicitarConfirmacionReporte();
    }
  }

  const solicitarConfirmacionReporte = () => { //15. solicitarConfirmacionReporte()
    setHabilitarConfirmacion(true);
  }

  const tomarConfirmacionReporte = async () => {
    setConfirmacionReporte(true);

    //aca adentro
    try {
      const request = {
        fechaInicio: fechaInicio?.toISOString().split('T')[0],
        fechaFin: fechaFin?.toISOString().split('T')[0],
        tipoReporteSeleccionado: tipoReporteSeleccionado,
        confirmacionReporte : true,
        tipoVisualizacionSeleccionada: tipoVisualizacionSeleccionada,
      };

      // Validar datos antes de enviar
      if (!request.fechaInicio || !request.fechaFin || !request.tipoReporteSeleccionado || request.tipoReporteSeleccionado === 'sin seleccion') {
        setShowAlert(true); // Mostrar alerta si faltan datos
        return;
      }
      const response = await axios.post('https://3cwqnm3k-8080.brs.devtunnels.ms/api/generar-ranking-de-vinos', request, {
       responseType: 'blob', // Indicar que esperamos un archivo
      });

      console.log('Respuesta del backend:', response);
      // Procesar respuesta y descargar archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'reporte-ranking-vinos.xlsx'); // Nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.remove();

      mostrarConfirmacionGeneracionReporte();
    } catch (error) {
      console.error('Error al generar el reporte:', error);
      alert('Hubo un error al generar el reporte. Por favor, intenta nuevamente.');
    }
    };

  const mostrarConfirmacionGeneracionReporte = () => {//45. mostrarConfirmacionGeneracionReporte()
    alert('Reporte generado exitosamente');
    finCU();
  }

  const finCU = () => { // 46.finCU()
    window.location.href = '/'; // Redirige a la ruta raíz
  }


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
                      onFormaVisualizacionReporte={(formaVisualizacion) => {
                        console.log(formaVisualizacion);
                        tomarFormaVisualizacionReporte(formaVisualizacion);
                      }} // Aquí va la lógica de visualización
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