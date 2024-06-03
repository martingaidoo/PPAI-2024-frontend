import { Provincia } from './provincia';

export class Pais {
    nombre: string;
    provincia: Provincia[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.provincia = [];
    }

    getNombre(): string { //37. getNombre()
        return this.nombre;
    }

    getProvincias(): Provincia[] {
        return this.provincia;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setProvincias(provincias: Provincia[]): void {
        this.provincia = provincias;
    }

    agregarProvincia(provincia: Provincia): void {
        this.provincia.push(provincia);
    }
}
