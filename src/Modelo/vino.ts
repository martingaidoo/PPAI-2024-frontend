import { Reseña } from './reseña';
import { Bodega } from './bodega';
import { Varietal } from './varietal';

export class Vino {
    nombre: string;
    varietal: Varietal[];
    añada: number;
    bodega: Bodega;
    precioARS: number;
    reseña: Reseña[];
    calificacionGeneral: number;

    constructor(nombre: string, varietal: Varietal[], año: number, bodega: Bodega, precio: number, reseñas: Reseña[], calificacionGeneral: number) {
        this.nombre = nombre;
        this.varietal = varietal;
        this.añada = año;
        this.bodega = bodega;
        this.precioARS = precio;
        this.reseña = reseñas;
        this.calificacionGeneral = calificacionGeneral;
    }

    obtenerReseñas(fechaInicio: Date, fechaFin: Date): boolean {// 19.obtenerReseñas()
        let bandera = false;
        for (let reseña of this.reseña) {
            if (reseña.estaEnPeriodo(fechaInicio, fechaFin) && reseña.sosDeSommelier()) { // 20.estaEnPeriodo() 21.sosDeSommelier()
                bandera = true;
            }
        }
        return bandera;
    }

    calcularRanking(fechaInicio:Date, fechaFin:Date): number { // 23.calcularRanking()
        let puntaje = 0;
        let reseñas = 0;
        for (let reseña of this.reseña) {
            if (reseña.estaEnPeriodo(fechaInicio, fechaFin) && reseña.sosDeSommelier() ){ //24.estaEnPeriodo()  25.sosDeSommelier() 26.getPuntaje()
                puntaje += reseña.getPuntaje();
                reseñas++;
            }
        }
        return reseñas > 0 ? parseFloat((puntaje / reseñas).toFixed(2)) : 0;
    }

    obtenerBodega(){ // 30.obtenerBodega()
        let bodega = {
            nombre: this.bodega.getNombre(), // 31.getNombre()
            ubicacion: this.bodega.obtenerUbicacion(), // 32.obtenerUbicacion()
        }
        return bodega;
    }

    obtenerVarietal(): Varietal[] { //38.obtenerVarietal()
        let varietales = [];
        for (let varietal of this.varietal) {
            varietales.push(varietal);
        }
        return varietales;
    }


    getPrecioARS(): number {//40. getPrecioARS()
        return this.precioARS;
    }


    getNombre(): string { // 41. getNombre()
        return this.nombre;
    }

    getCalificacionGeneral(): number{ //42. getCalificacionGeneral()
        return this.calificacionGeneral;
    }

 
    getAño(): number {
        return this.añada;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setVarietal(varietal: Varietal[]): void {
        this.varietal = varietal;
    }

    setAño(año: number): void {
        this.añada = año;
    }

    setBodega(bodega: Bodega): void {
        this.bodega = bodega;
    }

    setPrecioARS(precio: number): void {
        this.precioARS = precio;
    }

    agregarReseña(reseña: Reseña): void {
        this.reseña.push(reseña);
    }


}
