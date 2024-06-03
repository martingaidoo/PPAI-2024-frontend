import { Vino } from '../Modelo/vino';
import {GeneradorArchivoExcel} from '../Interfaz/GeneradorArchivoExcel';
import {generadorArchivoExcel} from '../Interfaz/GeneradorArchivoExcel';

interface PantallaGenerarReporte {
    solicitarSeleccionFechasInicioFin: () => void; //son motodos de la pantalla
    mostrarYSolicitarTipoReporte: () => void; //son motodos de la pantalla
    mostrarYSolicitarFormaVisualizacionReporte: () => void; //son motodos de la pantalla
    solicitarConfirmacionReporte: () => void; //son motodos de la pantalla
    mostrarConfirmacionGeneracionReporte: () => void; //son motodos de la pantalla
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
    mostrarYSolicitarTipoReporte: () => void; //son metodos de la pantalla
    mostrarYSolicitarFormaVisualizacionReporte: () => void; //son metodos de la pantalla
    solicitarConfirmacionReporte: () => void; //son metodos de la pantalla
    mostrarConfirmacionGeneracionReporte: () => void;//son metodos de la pantalla


    constructor(vinos: Vino[], solicitarSeleccionFechasInicioFin: () => void,mostrarYSolicitarTipoReporte: () => void,mostrarYSolicitarFormaVisualizacionReporte: () => void,solicitarConfirmacionReporte: () => void,mostrarConfirmacionGeneracionReporte: () =>void, pantalla: PantallaGenerarReporte | null = null) {
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
        this.mostrarYSolicitarTipoReporte = mostrarYSolicitarTipoReporte;
        this.mostrarYSolicitarFormaVisualizacionReporte = mostrarYSolicitarFormaVisualizacionReporte;
        this.solicitarConfirmacionReporte = solicitarConfirmacionReporte;
        this.mostrarConfirmacionGeneracionReporte = mostrarConfirmacionGeneracionReporte;
        this.pantalla = pantalla;
        
    }

    opcionGenerarRankingDeVinos(): void {//3. opcionGenerarRankingDeVinos()
        this.solicitarSeleccionFechasInicioFin();//4. solitarSeleccionFechasInicioFin()
    }

    tomarSeleccionFechaInicioFin(fechaInicio: Date, fechaFin: Date): boolean { // 7.tomarSeleccionFechasInicioFin()
        if (this.validarFechas(fechaInicio, fechaFin)){//8. validarFechas()
            this.setFechaInicio(fechaInicio)
            this.setFechaFin(fechaFin)
            console.log("fechas",this.fechaInicio, this.fechaFin)
            this.mostrarYSolicitarTipoReporte(); //9. mostrarTipoReseña()
            return true;
        }
        return false;
    }

    tomarSeleccionTipoReporte(tipoReporte : string): void {//11. tomarSeleccionTipoReseña()
        this.setTipoReporteSeleccionado(tipoReporte);
        this.mostrarYSolicitarFormaVisualizacionReporte();//13.solicitarFormaVisualizacionReporte()
    }

    tomarFormaVisualizacionReporte(formaVisualizacionReporte: string): void {// 14. tomarFormaVisualizacionReporte()
        this.setTipoVisualizacionSeleccionada(formaVisualizacionReporte); 
        this.solicitarConfirmacionReporte(); //15. solicitarConfirmacionReporte()
    }

    tomarConfirmacionReporte(): void {//17. tomarConfirmacionReporte()
        console.log(this.fechaInicio, this.fechaFin, this.vinos)
        
        const vinosFiltradosPorReseña = this.buscarVinosConReseñasPorTipoYEnFecha(this.fechaInicio, this.fechaFin, this.vinos);
        console.log("vinos",vinosFiltradosPorReseña)
        console.log("vinos filtrados por reseña:",vinosFiltradosPorReseña)
        const vinosFiltradosPorReseñaConPromedio = this.calcularCalificacionPromedio(vinosFiltradosPorReseña);
        console.log("vinos filtrados por reseña con promedio", vinosFiltradosPorReseñaConPromedio)
        const vinosRakeados = this.ordenarVinosPorRanking(vinosFiltradosPorReseñaConPromedio)
        console.log("vinos filtrados por reseña con promedio ordenados", vinosRakeados)
        const vinosRanking10 = this.tomar10PrimerosVinosCalificados(vinosRakeados);
        console.log("primeros 10 VinosCalificados", vinosRanking10)
        const datosVinosRankeados = this.buscarDatos10MejoresVinos(vinosRanking10);
        console.log("datos vinos rankeados",datosVinosRankeados);

        console.log(datosVinosRankeados)
        this.generarArchivoExcel(datosVinosRankeados);
        this.mostrarConfirmacionGeneracionReporte();
    }

    validarFechas(fechaInicio: Date, fechaFin: Date): boolean {
        return fechaInicio < fechaFin;
    }

    buscarVinosConReseñasPorTipoYEnFecha(fechaInicio: Date, fechaFin: Date, vinos: Vino[]): Vino[] {
        const vinosFiltradosPorReseña: Vino[] = [];
        for (let vino of vinos) {
            console.log("vino",vino)
            const estaEnPeriodoYEsSomelier = vino.obtenerReseñas(fechaInicio, fechaFin);
            console.log("esta en periodo y es somelier",estaEnPeriodoYEsSomelier)
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
