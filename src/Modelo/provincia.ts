import { Pais } from './pais';
import { RegionVitivinicola } from './regionVitivinicola';

export class Provincia {
    nombre: string;
    pais: Pais;
    region: RegionVitivinicola[];

    constructor(nombre: string, pais: Pais) {
        this.nombre = nombre;
        this.pais = pais;
        this.region = [];
    }

    getNombre(): string {
        return this.nombre;
    }

    obtenerPais(): Pais {
        return this.pais;
    }

    getRegiones(): RegionVitivinicola[] {
        return this.region;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setPais(pais: Pais): void {
        this.pais = pais;
    }

    setRegiones(regiones: RegionVitivinicola[]): void {
        this.region = regiones;
    }

    agregarRegion(region: RegionVitivinicola): void {
        this.region.push(region);
    }
}
