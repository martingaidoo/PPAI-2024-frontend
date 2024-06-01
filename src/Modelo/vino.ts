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

    constructor(nombre: string, varietal: Varietal[], año: number, bodega: Bodega, precio: number, reseñas: Reseña[]) {
        this.nombre = nombre;
        this.varietal = varietal;
        this.año = año;
        this.bodega = bodega;
        this.precio = precio;
        this.reseñas = reseñas;
    }

    getNombre(): string {
        return this.nombre;
    }

    obtenerVarietal(): Varietal[] {
        let varietales = [];
        for (let varietal of this.varietal) {
            varietales.push(varietal);
        }
        return varietales;
    }

    getAño(): number {
        return this.año;
    }

    obtenerBodega(){
        let bodega = {
            nombre: this.bodega.getNombre(),
            ubicacion: this.bodega.obtenerUbicacion(),
        }

        return bodega;
    }

    getPrecio(): number {
        return this.precio;
    }

    obtenerReseñas(fechaInicio: Date, fechaFin: Date): boolean {
        let bandera = false;
        for (let reseña of this.reseñas) {
            if (reseña.estaEnPeriodo(fechaInicio, fechaFin) && reseña.sosDeSommelier()) {
                bandera = true;
            }
        }
        console.log("de las reseña sale: "+ bandera)
        return bandera;
    }

    calcularRanking(): number {
        const totalPuntajes = this.reseñas.reduce((acc, reseña) => acc + reseña.getPuntaje(), 0);
        return this.reseñas.length > 0 ? totalPuntajes / this.reseñas.length : 0;
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
