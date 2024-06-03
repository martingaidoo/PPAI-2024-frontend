import { Vino } from '../Modelo/vino';
import {GeneradorArchivoExcel} from '../Interfaz/GeneradorArchivoExcel';
import {generadorArchivoExcel} from '../Interfaz/GeneradorArchivoExcel';
import { PantallaGenerarReporteRankingVino } from '../Interfaz/PantallaGenerarReporteRankingVino';

interface PantallaGenerarReporte {
    solicitarSeleccionFechasInicioFin: () => void; //son metodos de la pantalla
    mostrarYSolicitarTipoReporte: (reportes:string[]) => void; //son metodos de la pantalla
    mostrarYSolicitarFormaVisualizacionReporte: (tiposVisualizacion: string[]) => void; //son metodos de la pantalla
    solicitarConfirmacionReporte: () => void; //son metodos de la pantalla
    mostrarConfirmacionGeneracionReporte: () => void; //son metodos de la pantalla
}

export class GestorGenerarReporteRankingVino {
    pantalla: any;
    fechaInicio: Date;
    fechaFin: Date;
    tiposReportes: string[];
    tipoReporteSeleccionado: string;
    tipoVisualizacion: string[];
    tipoVisualizacionSeleccionada: string;
    confirmacionReporte: boolean;
    vinosFiltradosPorReseña: any[];
    vinosFiltradosPorReseñaConPromedio: any[];
    vinosRankeados: any[];
    vinosRanking10: any[];
    datosVinosRankeados: any;
    vinos: Vino[];
    
    solicitarSeleccionFechasInicioFin: () => void; //son metodos de la pantalla
    mostrarYSolicitarTipoReporte: (reportes: string[]) => void; //son metodos de la pantalla
    mostrarYSolicitarFormaVisualizacionReporte: (tiposVisualizacion: string[]) => void; //son metodos de la pantalla
    solicitarConfirmacionReporte: () => void; //son metodos de la pantalla
    mostrarConfirmacionGeneracionReporte: () => void;//son metodos de la pantalla


    constructor(vinos: Vino[], solicitarSeleccionFechasInicioFin: () => void,mostrarYSolicitarTipoReporte: (reportes: string[]) => void,mostrarYSolicitarFormaVisualizacionReporte: (tiposVisualizacion: string[]) => void,solicitarConfirmacionReporte: () => void,mostrarConfirmacionGeneracionReporte: () =>void, pantalla: PantallaGenerarReporte | null = null) {
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.tiposReportes = ["Reseñas normales", "Reseñas de Sommelier", "Reseñas de Amigos"];
        this.tipoReporteSeleccionado = "";
        this.tipoVisualizacion = ["Excel", "PDF", "Pantalla"];
        this.tipoVisualizacionSeleccionada = "";
        this.confirmacionReporte = false;
        this.vinosFiltradosPorReseña = [];
        this.vinosFiltradosPorReseñaConPromedio = [];
        this.vinosRankeados = [];
        this.vinosRanking10 = [];
        this.datosVinosRankeados = {};
        this.vinos = vinos;
        //Metodos de la pantalla
        this.solicitarSeleccionFechasInicioFin = solicitarSeleccionFechasInicioFin;
        this.mostrarYSolicitarTipoReporte = mostrarYSolicitarTipoReporte;
        this.mostrarYSolicitarFormaVisualizacionReporte = mostrarYSolicitarFormaVisualizacionReporte;
        this.solicitarConfirmacionReporte = solicitarConfirmacionReporte;
        this.mostrarConfirmacionGeneracionReporte = mostrarConfirmacionGeneracionReporte;
        this.pantalla = pantalla;
        
    }

    opcionGenerarRankingDeVinos(): void {//3. opcionGenerarRankingDeVinos()
        this.solicitarSeleccionFechasInicioFin();//4. solitarSeleccionFechasInicioFin() metodo de la pantalla
        this.mostrarYSolicitarTipoReporte(this.tiposReportes); //9. mostrarTipoReseña() metodo de la pantalla
        this.mostrarYSolicitarFormaVisualizacionReporte(this.tipoVisualizacion);//12.mostrarYSolicitarFormaVisualizacionReporte() metodo de la pantalla
        this.solicitarConfirmacionReporte(); //15. solicitarConfirmacionReporte() metodo de la pantalla
    }

    tomarSeleccionFechasInicioFin(fechaInicio: Date, fechaFin: Date): boolean { // 7.tomarSeleccionFechasInicioFin()
        if (this.validarFechas(fechaInicio, fechaFin)){//8. validarFechas()
            this.setFechaInicio(fechaInicio)
            this.setFechaFin(fechaFin)
            return true;
        }
        return false;
    }

    tomarSeleccionTipoReporte(tipoReporte : string): void {//11. tomarSeleccionTipoReseña()
        this.setTipoReporteSeleccionado(tipoReporte);
    }

    tomarFormaVisualizacionReporte(formaVisualizacionReporte: string): void {// 14. tomarFormaVisualizacionReporte()
        this.setTipoVisualizacionSeleccionada(formaVisualizacionReporte); 
    }

    tomarConfirmacionReporte(): void {//17. tomarConfirmacionReporte()
        const vinosFiltradosPorReseña = this.buscarVinosConReseñasPorTipoYEnFecha(this.fechaInicio, this.fechaFin, this.vinos);//18.buscarVinosConReseñasPorTipoYEnFecha()
        const vinosFiltradosPorReseñaConPromedio = this.calcularCalificacionPromedio(vinosFiltradosPorReseña, this.fechaInicio, this.fechaFin); //22.calcularCalificacionPromedio()
        const vinosRakeados = this.ordenarVinosPorRanking(vinosFiltradosPorReseñaConPromedio) //27.ordenarVinosPorRanking()
        const vinosRanking10 = this.tomar10PrimerosVinosCalificados(vinosRakeados);// 28.tomar10PrimerosVinosCalificados()
        const datosVinosRankeados = this.buscarDatos10MejoresVinos(vinosRanking10); //29.buscarDatos10MejoresVinos()

        this.generarArchivoExcel(datosVinosRankeados); //43.generarArchivoExcel()
        this.mostrarConfirmacionGeneracionReporte();//45.mostrarConfirmacionGeneracionReporte() metodo de la pantalla
    }

    validarFechas(fechaInicio: Date, fechaFin: Date): boolean { //8. validarFechas()
        return fechaInicio < fechaFin;
    }

    buscarVinosConReseñasPorTipoYEnFecha(fechaInicio: Date, fechaFin: Date, vinos: Vino[]): Vino[] { // 18. buscarVinosConReseñasPorTipoYEnFecha  
        const vinosFiltradosPorReseña: Vino[] = [];
        for (let vino of vinos) {
            const estaEnPeriodoYEsSomelier = vino.obtenerReseñas(fechaInicio, fechaFin); // 19.obtenerReseñas()
            if (estaEnPeriodoYEsSomelier) {
                vinosFiltradosPorReseña.push(vino);
            }
        }
        return vinosFiltradosPorReseña;
    }

    calcularCalificacionPromedio(vinosFiltradosPorReseña: Vino[], fechaInicio:Date,fechaFin:Date ): [Vino, number][] { //22.calcularCalificacionPromedio()
        const vinosFiltradosPorReseñaConPromedio: [Vino, number][] = [];
        for (let vino of vinosFiltradosPorReseña) {
            const puntaje = vino.calcularRanking(fechaInicio, fechaFin); // 23. calcularRanking()
            vinosFiltradosPorReseñaConPromedio.push([vino, puntaje]);
        }
        return vinosFiltradosPorReseñaConPromedio;
    }

    ordenarVinosPorRanking(vinosFiltradosPorReseñaConPromedio: [Vino, number][]): [Vino, number][] { // 27.ordenarVinosPorRanking()
        return vinosFiltradosPorReseñaConPromedio.sort((a, b) => b[1] - a[1]);
    }

    tomar10PrimerosVinosCalificados(vinosRakeados: [Vino, number][]): [Vino, number][] { //28.tomar10PrimerosVinosCalificados()
        return vinosRakeados.slice(0, 10);
    }

    buscarDatos10MejoresVinos(vinosRanking10: [Vino, number][]){ //29.buscarDatos10MejoresVinos()
        const datosVinosRankeados = vinosRanking10.map(([vino, number]) => ({
            nombreVino: vino.getNombre(),
            calificacionSomelier: number,
            calificacionGeneral: vino.getCalificacionGeneral(),
            varietales: vino.obtenerVarietal(),
            precioVino: vino.getPrecioARS(),
            bodega: vino.obtenerBodega(),
        }));
        return datosVinosRankeados;
    }

    generarArchivoExcel(datosVinosRankeados: any[]){ //43.generarArchivoExcel()
        generadorArchivoExcel.generarArchivo(datosVinosRankeados)
    }

    getTiposReportes(): string[] {
        return this.tiposReportes;
    }

    setTipoReporteSeleccionado(tipoReseña: string): void {
        this.tipoReporteSeleccionado = tipoReseña;
    }

    setTipoVisualizacionSeleccionada(tipoVisualizacionSeleccionada: string){
        this.tipoVisualizacionSeleccionada = tipoVisualizacionSeleccionada;
    }
    setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }
    setFechaFin(fechaFin: Date): void {
        this.fechaFin = fechaFin;
    }
}
