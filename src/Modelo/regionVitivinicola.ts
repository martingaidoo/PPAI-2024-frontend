import { Provincia } from './provincia';

export class RegionVitivinicola {
    private nombre: string;
    private descripcion: string;
    private provincia: Provincia;

    constructor(nombre: string, descripcion: string, provincia: Provincia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.provincia = provincia;
    }

    getNombre(): string { // 33. getNombre
        return this.nombre;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    obtenerProvincia(): string[] { //34. obtenerProvincia
        const nombreProvincia = this.provincia.getNombre();
        const nombrePais = this.provincia.obtenerPais().getNombre();
        return [nombreProvincia, nombrePais];
    }
    
}