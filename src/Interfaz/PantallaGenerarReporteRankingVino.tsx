import React, { useEffect, useState } from 'react';
import { ComponentTomarFecha } from '../components/ComponentTomarFecha';
import { ComponenteTomarFormaVisualizacionReporte } from '../components/ComponenteTomarFormaVisualizacionReporte';
import { ComponentTipoReseña } from '../components/ComponentTipoReseña';
import { ComponentBotonConfirmacion } from '../components/ComponentBotonConfirmacion';
import { Header } from '../components/Header';
import { Main } from '../Controlador/Main';
import { GestorGenerarReporteRankingVino } from '../Controlador/GestorGenerarReporteRankingVino'; // Importamos el gestor
import { useNavigate } from 'react-router-dom';


export const PantallaGenerarReporteRankingVino: React.FC = () => {
  const [gestor, setGestor] = useState<GestorGenerarReporteRankingVino | null>(null); // Estado para el gestor
  const [pantalla, setPantalla] = useState<boolean>(false);
  const [habilitarTomarFechas, setHabilitarTomarFechas] = useState<boolean>(false);
  const [habilitarTipoReseña, setHabilitarTipoReseña] = useState<boolean>(false);
  const [habilitarFormaVisualizacion, setHabilitarFormaVisualizacion] = useState<boolean>(false);
  const [habilitarConfirmacion, setHabilitarConfirmacion] = useState<boolean>(false);
  const [fechaInicio, setFechaInicio] = useState<Date>();
  const [fechaFin, setFechaFin] = useState<Date>();
  const [tipoReseña, setTipoReseña] = useState<string>("sin seleccion");
  const [formaVisualizacionReporte, setFormaVisualizacionReporte] = useState<string>("sin seleccion");
  const [confirmacionReporte, setConfirmacionReporte] = useState<boolean>(false);
  let fechaValida: boolean = false;

 
  const tomarSeleccionFechaInicio = (fecha:Date) => {
    setFechaInicio(fecha);
  }

  const tomarSeleccionFechaFin = (fecha:Date) => {
    setFechaFin(fecha);
  }


  const habilitarPantalla = () => {
    setPantalla(true);
  }

  const  solicitarSeleccionFechasInicioFin = () => {
    setHabilitarTomarFechas(true);
  }

  const mostrarTipoReseña = () => {
    setHabilitarTipoReseña(true);
  }

  const tomarSeleccionTipoReseña = (reseña:string) =>{
    setTipoReseña(reseña);
    console.log(reseña);
  }

  const solicitarFormaVisualizacionReporte = () => {
    setHabilitarFormaVisualizacion(true);
  }

  const tomarFormaVisualizacionReporte = (formaVisualizacionReporte: string) => {
    setFormaVisualizacionReporte(formaVisualizacionReporte);
  }

  const solicitarConfirmacionReporte = () => {
    setHabilitarConfirmacion(true);
  }

  const tomarConfirmacionReporte = () => {
    setConfirmacionReporte(true);
  }

  useEffect(() => {
    // Creamos una instancia del gestor cuando se monta el componente
    const main = new Main();
    const gestor = new GestorGenerarReporteRankingVino(main.getVinos(), solicitarSeleccionFechasInicioFin, mostrarTipoReseña, solicitarFormaVisualizacionReporte, solicitarConfirmacionReporte); // Pasamos los vinos al gestor
    setGestor(gestor);

    habilitarPantalla() // Llamamos al método para habilitar la pantalla
    
    gestor.opcionGenerarRankingDeVinos(); // Llamamos al método del gestor

    //tomarFechasInicioFin();
    if (fechaInicio && fechaFin)
      {
        fechaValida = gestor.tomarSeleccionFechaInicioFin(fechaInicio, fechaFin)
        if (!fechaValida) // Llamamos al método del gestor
        {
          setHabilitarTipoReseña(false)
          setHabilitarFormaVisualizacion(false)
          setHabilitarConfirmacion(false)
          setTipoReseña("sin seleccion")
          setFormaVisualizacionReporte("sin seleccion")
        }
      }

      //tomarTipoReseña();
        if (tipoReseña !== "sin seleccion" && tipoReseña!=="" && fechaValida) {
          gestor.tomarSeleccionTipoReseña(tipoReseña); // Llamamos al método del gestor
        }
        else{
          setHabilitarFormaVisualizacion(false)
          setHabilitarConfirmacion(false)
          setFormaVisualizacionReporte("sin seleccion")
        }

        if (formaVisualizacionReporte !== "sin seleccion" && formaVisualizacionReporte!=="" && tipoReseña !== "sin seleccion" && tipoReseña!== ""&& fechaValida) {
          gestor.tomarFormaVisualizacionReporte(formaVisualizacionReporte); // Llamamos al método del gestor
        }
        else{
          setHabilitarConfirmacion(false)
        }

        if (confirmacionReporte && formaVisualizacionReporte !== "sin seleccion" && tipoReseña !== "sin seleccion" && fechaValida) {
          console.log("se confirmo el reporte");
          gestor.tomarConfirmacionReporte(); // Llamamos al método del gestor
        }


  }, [fechaInicio, fechaFin, tipoReseña,formaVisualizacionReporte, confirmacionReporte]);


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
                  {habilitarTipoReseña && <ComponentTipoReseña onTipoReseñaChange={tomarSeleccionTipoReseña}/>} {/* Pasamos el método del gestor como prop */}
                  {habilitarFormaVisualizacion && <ComponenteTomarFormaVisualizacionReporte onFormaVisualizacionReporte={tomarFormaVisualizacionReporte}/> }{/* Pasamos el método del gestor como prop */}
                </div>
                <div className="card-footer text-body-secondary">
                  {habilitarConfirmacion && <ComponentBotonConfirmacion onConfirmacionReporte={tomarConfirmacionReporte}/>} {/* Pasamos el método del gestor como prop */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};