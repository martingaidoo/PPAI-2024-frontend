import { Vino } from '../Modelo/vino';

interface PantallaGenerarReporte {
    solicitarSeleccionFechasInicioFin: () => void;
    mostrarTipoReseña: () => boolean;
    solicitarFormaVisualizacionReporte: () => void;
  }

export class GestorGenerarReporteRankingVino {
    pantalla: any;
    fechaInicio: Date;
    fechaFin: Date;
    tiposReportes: string[];
    tipoReseñaSeleccionada: string;
    tipoVisualizacion: string[];
    tipoVisualizacionSeleccionada: string;
    confirmacionReporte: boolean;
    vinosFiltradosPorReseña: Vino[];
    vinosFiltradosPorReseñaConPromedio: any[];
    vinosRankeados: any[];
    datosVinosRankeados: any;
    vinos: Vino[];
    solicitarSeleccionFechasInicioFin: () => void;
    mostrarTipoReseña: () => boolean;
    solicitarFormaVisualizacionReporte: () => void;


    constructor(vinos: Vino[], solicitarSeleccionFechasInicioFin: () => void,mostrarTipoReseña: () => boolean,solicitarFormaVisualizacionReporte: () => void, pantalla: PantallaGenerarReporte | null = null) {
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.tiposReportes = ["Reseñas normales", "Reseñas de Sommelier", "Reseñas de Amigos"];
        this.tipoReseñaSeleccionada = "";
        this.tipoVisualizacion = ["Excel", "PDF", "Pantalla"];
        this.tipoVisualizacionSeleccionada = "";
        this.confirmacionReporte = false;
        this.vinosFiltradosPorReseña = [];
        this.vinosFiltradosPorReseñaConPromedio = [];
        this.vinosRankeados = [];
        this.datosVinosRankeados = {};
        this.vinos = vinos;
        this.solicitarSeleccionFechasInicioFin = solicitarSeleccionFechasInicioFin;
        this.mostrarTipoReseña = mostrarTipoReseña;
        this.solicitarFormaVisualizacionReporte = solicitarFormaVisualizacionReporte;
        this.pantalla = pantalla;
        
    }

    opcionGenerarRankingDeVinos(): void {
        this.solicitarSeleccionFechasInicioFin();
    }

    tomarSeleccionFechaInicioFin(fechaInicio: Date, fechaFin: Date): boolean {
        if (this.validarFechas(fechaInicio, fechaFin)){
            console.log("Fechas seleccionadas correctamente");
            this.mostrarTipoReseña(); //llama a la funcion mostrarTipoReseña de la pantalla
            return true;
        }
        console.log("Fechas seleccionadas incorrectamente");
        return false;
    }

    tomarSeleccionTipoReseña(tipoReseña : string): void {
        this.setTipoReseñaSeleccionada(tipoReseña);
        this.solicitarFormaVisualizacionReporte();
    }

    tomarFormaVisualizacionReporte(): void {
        console.log("Forma de visualización seleccionada");
    }

    tomarConfirmacionReporte(): void {
        console.log("Reporte confirmado.");
    }

    validarFechas(fechaInicio: Date, fechaFin: Date): boolean {
        return fechaInicio < fechaFin;
    }

    buscarVinosConReseñasPorTipoYFecha(fechaInicio: Date, fechaFin: Date, vinos: Vino[]): Vino[] {
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
        const datosVinosRankeados = vinosRankeados.map(([vino]) => ({
            nombreVino: vino.getNombre(),
            varietales: vino.obtenerVarietal(),
            precioVino: vino.getPrecio(),
            bodega: vino.obtenerBodega(),
        }));
        return datosVinosRankeados;
    }

    generarArchivo(): boolean {
        return true;
    }

    getTiposReportes(): string[] {
        return this.tiposReportes;
    }

    setTipoReseñaSeleccionada(tipoReseña: string): void {
        this.tipoReseñaSeleccionada = tipoReseña;
    }
}
