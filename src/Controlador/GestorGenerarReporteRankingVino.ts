import { Vino } from '../Modelo/vino';
import {GeneradorArchivoExcel} from '../Interfaz/GeneradorArchivoExcel';

interface PantallaGenerarReporte {
    solicitarSeleccionFechasInicioFin: () => void;
    mostrarTipoReporte: () => void;
    solicitarFormaVisualizacionReporte: () => void;
    solicitarConfirmacionReporte: () => void;
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
    solicitarSeleccionFechasInicioFin: () => void;
    mostrarTipoReseña: () => void;
    solicitarFormaVisualizacionReporte: () => void;
    solicitarConfirmacionReporte: () => void;


    constructor(vinos: Vino[], solicitarSeleccionFechasInicioFin: () => void,mostrarTipoReseña: () => void,solicitarFormaVisualizacionReporte: () => void,solicitarConfirmacionReporte: () => void, pantalla: PantallaGenerarReporte | null = null) {
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
        this.solicitarSeleccionFechasInicioFin = solicitarSeleccionFechasInicioFin;
        this.mostrarTipoReseña = mostrarTipoReseña;
        this.solicitarFormaVisualizacionReporte = solicitarFormaVisualizacionReporte;
        this.solicitarConfirmacionReporte = solicitarConfirmacionReporte;
        this.pantalla = pantalla;
        
    }

    opcionGenerarRankingDeVinos(): void {//3. opcionGenerarRankingDeVinos()
        this.solicitarSeleccionFechasInicioFin();//4. solitarSeleccionFechasInicioFin()
    }

    tomarSeleccionFechaInicioFin(fechaInicio: Date, fechaFin: Date): boolean { // 7.tomarSeleccionFechasInicioFin()
        if (this.validarFechas(fechaInicio, fechaFin)){//8. validarFechas()
            this.setFechaInicio(fechaInicio)
            this.setFechaFin(fechaFin)
            this.mostrarTipoReseña(); //9. mostrarTipoReseña()
            return true;
        }
        return false;
    }

    tomarSeleccionTipoReporte(tipoReporte : string): void {//11. tomarSeleccionTipoReseña()
        this.setTipoReporteSeleccionado(tipoReporte);
        this.solicitarFormaVisualizacionReporte();//13.solicitarFormaVisualizacionReporte()
    }

    tomarFormaVisualizacionReporte(formaVisualizacionReporte: string): void {// 14. tomarFormaVisualizacionReporte()
        this.setTipoVisualizacionSeleccionada(formaVisualizacionReporte); 
        this.solicitarConfirmacionReporte(); //15. solicitarConfirmacionReporte()
    }

    tomarConfirmacionReporte(): void {//17. tomarConfirmacionReporte()
        const vinosFiltradosPorReseña = this.buscarVinosConReseñasPorTipoYEnFecha(this.fechaInicio, this.fechaFin, this.vinos);
        console.log("vinos filtrados por reseña:",vinosFiltradosPorReseña)
        const vinosFiltradosPorReseñaConPromedio = this.calcularCalificacionPromedio(vinosFiltradosPorReseña);
        console.log("vinos filtrados por reseña con promedio", vinosFiltradosPorReseñaConPromedio)
        const vinosRakeados = this.ordenarVinosPorRanking(vinosFiltradosPorReseñaConPromedio)
        console.log("vinos filtrados por reseña con promedio ordenados", vinosRakeados)
        const vinosRanking10 = this.tomar10PrimerosVinosCalificados(vinosRakeados);
        console.log("primeros 10 VinosCalificados", vinosRanking10)
        const datosVinosRankeados = this.buscarDatos10MejoresVinos(vinosRanking10);
        console.log("datos vinos rankeados",datosVinosRankeados);

        this.generarArchivoExcel(datosVinosRankeados);
    }

    validarFechas(fechaInicio: Date, fechaFin: Date): boolean {
        return fechaInicio < fechaFin;
    }

    buscarVinosConReseñasPorTipoYEnFecha(fechaInicio: Date, fechaFin: Date, vinos: Vino[]): Vino[] {
        const vinosFiltradosPorReseña: Vino[] = [];
        for (let vino of vinos) {
            const estaEnPeriodoYEsSomelier = vino.obtenerReseñas(fechaInicio, fechaFin);
            if (estaEnPeriodoYEsSomelier) {
                vinosFiltradosPorReseña.push(vino);
            }
        }
        return vinosFiltradosPorReseña;
    }

    calcularCalificacionPromedio(vinosFiltradosPorReseña: Vino[]): [Vino, number][] {
        const vinosFiltradosPorReseñaConPromedio: [Vino, number][] = [];
        for (let vino of vinosFiltradosPorReseña) {
            const puntaje = vino.calcularRanking();
            vinosFiltradosPorReseñaConPromedio.push([vino, puntaje]);
        }
        return vinosFiltradosPorReseñaConPromedio;
    }

    ordenarVinosPorRanking(vinosFiltradosPorReseñaConPromedio: [Vino, number][]): [Vino, number][] {
        return vinosFiltradosPorReseñaConPromedio.sort((a, b) => b[1] - a[1]);
    }

    tomar10PrimerosVinosCalificados(vinosFiltradosPorReseñaConPromedio: [Vino, number][]): [Vino, number][] {
        return vinosFiltradosPorReseñaConPromedio.slice(0, 10);
    }

    buscarDatos10MejoresVinos(vinosRankeados: [Vino, number][]){
        const datosVinosRankeados = vinosRankeados.map(([vino, number]) => ({
            nombreVino: vino.getNombre(),
            calificacionSomelier: number,
            calificacionGeneral: vino.getCalificacionGeneral(),
            varietales: vino.obtenerVarietal(),
            precioVino: vino.getPrecio(),
            bodega: vino.obtenerBodega(),
        }));
        return datosVinosRankeados;
    }

    generarArchivoExcel(datosVinosRankeados: any[]){
        const generadorArchivoExel = new GeneradorArchivoExcel();
        generadorArchivoExel.generarArchivo(datosVinosRankeados)
    }

    generarArchivo(): boolean {
        return true;
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
