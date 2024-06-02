import React, { useEffect, useState } from 'react';
import { ComponentTomarFecha } from '../components/ComponentTomarFecha';
import { ComponenteTomarFormaVisualizacionReporte } from '../components/ComponenteTomarFormaVisualizacionReporte';
import { ComponentTipoReseña } from '../components/ComponentTipoReseña';
import { ComponentBotonConfirmacion } from '../components/ComponentBotonConfirmacion';
import { Header } from '../components/Header';
import { Main } from '../Controlador/Main';
import { GestorGenerarReporteRankingVino } from '../Controlador/GestorGenerarReporteRankingVino'; // Importamos el gestor
import AlertOnScreen from '../components/ComponentToast';
import { List } from 'reactstrap';



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
  const [formaVisualizacionReporte, setFormaVisualizacionReporte] = useState<string>("sin seleccion");
  const [confirmacionReporte, setConfirmacionReporte] = useState<boolean>(false);
  let fechaValida: boolean = false;
  const [showAlert, setShowAlert] = useState(false); // Agrega este estado para mostrar la alerta de fecha invalida

  //const [tipoReporte, setTipoReporte] = useState<List>();

  
  const tomarSeleccionFechaInicio = (fecha:Date) => {//5. tomarSeleccionFechaInicio()
    setFechaInicio(fecha);
  }

  const tomarSeleccionFechaFin = (fecha:Date) => { //6. tomarSeleccionFechaFin()
    setFechaFin(fecha);
  }

  const habilitarPantalla = () => {
    setPantalla(true);
  }

  const  solicitarSeleccionFechasInicioFin = () => { //4. solicitarSeleccionFechaInicioFin()
    setHabilitarTomarFechas(true);
  }

  const mostrarYSolicitarTipoReporte = () => {// 9. mostrarYSeleccionarTipoReporte()
    setHabilitarTipoReporte(true);
  }

  const tomarSeleccionTipoReporte = (reseña:string) =>{ //10. tomarSeleccionTipoReporte()
    setTipoReporteSeleccionado(reseña);
  }

  const solicitarFormaVisualizacionReporte = () => {//12. solicitarFormaVisualizacionReporte()
    setHabilitarFormaVisualizacion(true);
  }

  const tomarFormaVisualizacionReporte = (formaVisualizacionReporte: string) => { //13. tomarFormaVisualizacionReporte()
    setFormaVisualizacionReporte(formaVisualizacionReporte);
  }

  const solicitarConfirmacionReporte = () => { //14. solicitarConfirmacionReporte()
    setHabilitarConfirmacion(true);
  }

  const tomarConfirmacionReporte = () => { //16. tomarConfirmacionReporte()
    setConfirmacionReporte(true);
  }

 // main.ts

// Función para mostrar la alerta de confirmación y generar el archivo
const mostrarConfirmacionGeneracionReporte = () => {
  alert('Reporte generado exitosamente');
  finCU();
  
}

const finCU = () => {

  // Cambia la ruta a la que quieras, por ejemplo '/nueva-ruta'
  window.location.href = '/'; // Redirige a la ruta raíz

}
  
  useEffect(() => {
    // Creamos una instancia del gestor cuando se monta el componente
    const main = new Main();
    const gestor = new GestorGenerarReporteRankingVino(main.getVinos(), solicitarSeleccionFechasInicioFin, mostrarYSolicitarTipoReporte, solicitarFormaVisualizacionReporte, solicitarConfirmacionReporte, mostrarConfirmacionGeneracionReporte); // Pasamos los vinos al gestor
    setGestor(gestor);

    habilitarPantalla() // 2. habilitarPantalla()
    
    gestor.opcionGenerarRankingDeVinos(); // 3.opcionGenerarRankingDeVinos()

    //tomarFechasInicioFin();
    if (fechaInicio && fechaFin)
      {
        fechaValida = gestor.tomarSeleccionFechaInicioFin(fechaInicio, fechaFin) // 7.tomarSeleccionFechaInicioFin()
        if (!fechaValida) // Llamamos al método del gestor
        {
          setHabilitarTipoReporte(false)
          setHabilitarFormaVisualizacion(false)
          setHabilitarConfirmacion(false)
          setTipoReporteSeleccionado("sin seleccion")
          setFormaVisualizacionReporte("sin seleccion")
          setShowAlert(true); // Muestra la alerta de fecha inválida
          
        }
      }

      //tomarTipoReseña();
        if (tipoReporteSeleccionado !== "sin seleccion" && tipoReporteSeleccionado!=="" && fechaValida) {
          gestor.tomarSeleccionTipoReporte(tipoReporteSeleccionado); // 11. tomarSeleccionTipoReseña()
        }
        else{
          setHabilitarFormaVisualizacion(false)
          setHabilitarConfirmacion(false)
          setFormaVisualizacionReporte("sin seleccion")
        }

        if (formaVisualizacionReporte !== "sin seleccion" && formaVisualizacionReporte!=="" && tipoReporteSeleccionado !== "sin seleccion" && tipoReporteSeleccionado!== ""&& fechaValida) {
          gestor.tomarFormaVisualizacionReporte(formaVisualizacionReporte); // 
        }
        else{
          setHabilitarConfirmacion(false)
        }

        if (confirmacionReporte && formaVisualizacionReporte !== "sin seleccion" && tipoReporteSeleccionado !== "sin seleccion" && fechaValida) {
          console.log("se confirmo el reporte");
          gestor.tomarConfirmacionReporte(); // 17. tomarConfirmacionReporte()
        }


  }, [fechaInicio, fechaFin, tipoReporteSeleccionado,formaVisualizacionReporte, confirmacionReporte]);


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
                  {habilitarTipoReporte && <ComponentTipoReseña onTipoReseñaChange={tomarSeleccionTipoReporte}/>} {/* Pasamos el método del gestor como prop */}
                  {habilitarFormaVisualizacion && <ComponenteTomarFormaVisualizacionReporte onFormaVisualizacionReporte={tomarFormaVisualizacionReporte}/> }{/* Pasamos el método del gestor como prop */}
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