import { RegionVitivinicola } from './regionVitivinicola';

export class Bodega {
    nombre: string;
    descripcion: string;
    historia: string;
    coordenadasUbicacion: string[];
    periodoActualizacion: string;
    regionVitivinicola: RegionVitivinicola;

    constructor(nombre: string, descripcion: string, historia: string, coordenadasUbicacion: string[], periodoActualizacion: string, regionVitivinicola: RegionVitivinicola) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.historia = historia;
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.periodoActualizacion = periodoActualizacion;
        this.regionVitivinicola = regionVitivinicola;
    }

    getNombre(): string { // 31. getNombre()
        return this.nombre;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    getHistoria(): string {
        return this.historia;
    }

    obtenerUbicacion(): string[] { // 32. obtenerUbicacion()
        const nombreRegionVitivinicola = this.regionVitivinicola.getNombre();
        const [provincia, pais] = this.regionVitivinicola.obtenerProvincia();
        return [nombreRegionVitivinicola, provincia, pais];
    }

    getPeriodoActualizacion(): string {
        return this.periodoActualizacion;
    }

    getRegionVitivinicola(): RegionVitivinicola {
        return this.regionVitivinicola;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    setHistoria(historia: string): void {
        this.historia = historia;
    }

    setUbicacion(coordenadasUbicacion: string[]): void {
        this.coordenadasUbicacion = coordenadasUbicacion;
    }

    setPeriodoActualizacion(periodoActualizacion: string): void {
        this.periodoActualizacion = periodoActualizacion;
    }

    setRegionVitivinicola(regionVitivinicola: RegionVitivinicola): void {
        this.regionVitivinicola = regionVitivinicola;
    }
}
