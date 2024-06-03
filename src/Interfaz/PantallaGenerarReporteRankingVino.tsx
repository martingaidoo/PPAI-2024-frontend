import React, { useEffect, useState } from 'react';
import { ComponentTomarFecha } from '../components/ComponentTomarFecha';
import { ComponenteTomarFormaVisualizacionReporte } from '../components/ComponenteTomarFormaVisualizacionReporte';
import { ComponentTipoReporte } from '../components/ComponentTipoReporte';
import { ComponentBotonConfirmacion } from '../components/ComponentBotonConfirmacion';
import { Header } from '../components/Header';
//import { Main } from '../Controlador/Datos';
import {main} from '../Controlador/Main';
import { GestorGenerarReporteRankingVino } from '../Controlador/GestorGenerarReporteRankingVino'; // Importamos el gestor
import AlertOnScreen from '../components/ComponentToast';

export const PantallaGenerarReporteRankingVino: React.FC = () => {
  const [gestor, setGestor] = useState<GestorGenerarReporteRankingVino | null>(null); // Estado para el gestor
  const [pantalla, setPantalla] = useState<boolean>(false);
  const [habilitarTomarFechas, setHabilitarTomarFechas] = useState<boolean>(false);
  const [habilitarTipoReporte, setHabilitarTipoReporte] = useState<boolean>(false);
  const [habilitarFormaVisualizacion, setHabilitarFormaVisualizacion] = useState<boolean>(false);
  const [habilitarConfirmacion, setHabilitarConfirmacion] = useState<boolean>(false);
  const [fechaInicio, setFechaInicio] = useState<Date>();
  const [fechaFin, setFechaFin] = useState<Date>();
  const [tipoReporteSeleccionado, setTipoReporteSeleccionado] = useState<string>("sin seleccion");
  const [tipoVisualizacionSeleccionada, setFormaVisualizacionReporte] = useState<string>("sin seleccion");
  const [confirmacionReporte, setConfirmacionReporte] = useState<boolean>(false);
  let fechaValida: boolean = false;
  const [showAlert, setShowAlert] = useState(false); // Agrega este estado para mostrar la alerta de fecha invalida
  const [tiposReportes, setTiposReportes] = useState<any[]>([]);
  const [tipoVisualizacion, setTipoVisualizacion] = useState<any[]>([]);

  const opcionGenerarRankingDeVinos = () => { //1. opcionGenerarRankingDeVinos()
    
    const gestor = main.traerGestorConDatos(solicitarSeleccionFechasInicioFin, mostrarYSolicitarTipoReporte, mostrarYSolicitarFormaVisualizacionReporte, solicitarConfirmacionReporte, mostrarConfirmacionGeneracionReporte)
    useEffect(() => {
      setGestor(gestor);
  
      habilitarPantalla() // 2. habilitarPantalla()
  
      gestor.opcionGenerarRankingDeVinos(); // 3.opcionGenerarRankingDeVinos()
    }, []);
  }

  const habilitarPantalla = () => {//2. habilitarPantalla()
    setPantalla(true);
  }

  const  solicitarSeleccionFechasInicioFin = () => { //4. solicitarSeleccionFechaInicioFin()
    setHabilitarTomarFechas(true);
  }

  const tomarSeleccionFechaInicio = (fecha:Date) => {//5. tomarSeleccionFechaInicio()
    setFechaInicio(fecha);
    
    if (fecha && fechaFin && gestor)
      {
        fechaValida = gestor.tomarSeleccionFechasInicioFin(fecha, fechaFin) // 7.tomarSeleccionFechaInicioFin()
        if (!fechaValida) // Llamamos al método del gestor
        {
          setTipoReporteSeleccionado("sin seleccion")
          setFormaVisualizacionReporte("sin seleccion")
          setShowAlert(true); // Muestra la alerta de fecha inválida
        }
      }
  }
  
  const tomarSeleccionFechaFin = (fecha:Date) => { //6. tomarSeleccionFechaFin()
    setFechaFin(fecha);
    if (fechaInicio && fecha && gestor)
      {
        fechaValida = gestor.tomarSeleccionFechasInicioFin(fechaInicio, fecha) // 7.tomarSeleccionFechaInicioFin()
        if (!fechaValida) // Llamamos al método del gestor
        {
          setTipoReporteSeleccionado("sin seleccion")
          setFormaVisualizacionReporte("sin seleccion")
          setShowAlert(true); // Muestra la alerta de fecha inválida
        }
      }
  }

  const mostrarYSolicitarTipoReporte = (reportes:string[]) => {// 9. mostrarYSolicitarTipoReporte()
    setTiposReportes(reportes)
    setHabilitarTipoReporte(true);
  }

  const tomarSeleccionTipoReporte = (reseña:string) =>{ //10. tomarSeleccionTipoReporte()
    setTipoReporteSeleccionado(reseña);
    if (reseña !== "sin seleccion" && reseña!=="" && gestor) {
      gestor.tomarSeleccionTipoReporte(tipoReporteSeleccionado); // 11. tomarSeleccionTipoReporte()
    }
    else{
      setFormaVisualizacionReporte("sin seleccion")
    }
  }

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

  const tomarConfirmacionReporte = () => { //16. tomarConfirmacionReporte()
    setConfirmacionReporte(true);
    if (gestor) {
      gestor.tomarConfirmacionReporte(); // 17. tomarConfirmacionReporte()
    }
  }

  const mostrarConfirmacionGeneracionReporte = () => {//45. mostrarConfirmacionGeneracionReporte()
    alert('Reporte generado exitosamente');
    finCU();
  }

  const finCU = () => { // 46.finCU()
    window.location.href = '/'; // Redirige a la ruta raíz
  }
  
  opcionGenerarRankingDeVinos(); // 1. opcionGenerarRankingDeVinos(

  return (
    <>
      <Header />
      {pantalla && gestor && ( // Verificamos que el gestor esté definido
      
        <div className='container ms-lg-5 mt-5 '>

          <div className="row-4 ">
            <div className='col-md-9 col-sm-12 ' >
              <div className="card text-bg-dark text-center">
                <div className="card-header">
                  <h4>Formulario de Generacion De Ranking Vinos</h4>
                </div>
                <div className="card-body">
                  {habilitarTomarFechas && <ComponentTomarFecha onFechaInicioChange={tomarSeleccionFechaInicio} onFechaFinChange={tomarSeleccionFechaFin}/>} {/* Pasamos el método del gestor como prop */}
                  {habilitarTipoReporte && <ComponentTipoReporte tiposReportes={tiposReportes} onTipoReseñaChange={tomarSeleccionTipoReporte}/>} {/* Pasamos el método del gestor como prop */}
                  {habilitarFormaVisualizacion && <ComponenteTomarFormaVisualizacionReporte tipoVisualizacion={tipoVisualizacion} onFormaVisualizacionReporte={tomarFormaVisualizacionReporte}/> }{/* Pasamos el método del gestor como prop */}
                </div>
                <div className="card-footer text-body-secondary">
                  {habilitarConfirmacion && <ComponentBotonConfirmacion onConfirmacionReporte={tomarConfirmacionReporte}/>} {/* Pasamos el método del gestor como prop */}
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