import { Reseña } from './reseña';
import { Bodega } from './bodega';
import { Varietal } from './varietal';

export class Vino {
    nombre: string;
    varietal: Varietal[];
    año: number;
    bodega: Bodega;
    precio: number;
    reseñas: Reseña[];
    calificacionGeneral: number;

    constructor(nombre: string, varietal: Varietal[], año: number, bodega: Bodega, precio: number, reseñas: Reseña[], calificacionGeneral: number) {
        this.nombre = nombre;
        this.varietal = varietal;
        this.año = año;
        this.bodega = bodega;
        this.precio = precio;
        this.reseñas = reseñas;
        this.calificacionGeneral = calificacionGeneral;
    }

    obtenerReseñas(fechaInicio: Date, fechaFin: Date): boolean {// 19.obtenerReseñas()
        let bandera = false;
        for (let reseña of this.reseñas) {
            if (reseña.estaEnPeriodo(fechaInicio, fechaFin) && reseña.sosDeSommelier()) { // 20.estaEnPeriodo() 21.sosDeSommelier()
                bandera = true;
            }
        }
        return bandera;
    }

    calcularRanking(fechaInicio:Date, fechaFin:Date): number { // 23.calcularRanking()
        let puntaje = 0;
        let reseñas = 0;
        for (let reseña of this.reseñas) {
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


    getPrecio(): number {//40.getPrecioVino()
        return this.precio;
    }


    getNombre(): string { // 41.getNombre()
        return this.nombre;
    }

    getCalificacionGeneral(): number{ //42.getCalificacionGeneral()
        return this.calificacionGeneral;
    }




    
    getAño(): number {
        return this.año;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setVarietal(varietal: Varietal[]): void {
        this.varietal = varietal;
    }

    setAño(año: number): void {
        this.año = año;
    }

    setBodega(bodega: Bodega): void {
        this.bodega = bodega;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    agregarReseña(reseña: Reseña): void {
        this.reseñas.push(reseña);
    }


}
