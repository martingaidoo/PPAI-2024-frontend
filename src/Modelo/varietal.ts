export class Varietal {
    private descripcion: string;
    private porcentajeComposicion: number;

    constructor(descripcion: string, porcentajeComposicion: number) {
        this.descripcion = descripcion;
        this.porcentajeComposicion = porcentajeComposicion;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    getPorcentajeComposicion(): number {
        return this.porcentajeComposicion;
    }

    setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    setPorcentajeComposicion(porcentajeComposicion: number): void {
        this.porcentajeComposicion = porcentajeComposicion;
    }
}
