export class Reseña {
    comentario: string;
    esDeSommelier: boolean;
    fechaReseña: Date;
    puntaje: number;

    constructor(comentario: string, esDeSommelier: boolean, fechaReseña: Date, puntaje: number) {
        this.comentario = comentario;
        this.esDeSommelier = esDeSommelier;
        this.fechaReseña = fechaReseña;
        this.puntaje = puntaje;
    }

    getComentario(): string {
        return this.comentario;
    }

    getEsDeSommelier(): boolean {
        return this.esDeSommelier;
    }

    getFechaReseña(): Date{
        return this.fechaReseña;
    }

    getPuntaje(): number {
        return this.puntaje;
    }

    setComentario(comentario: string): void {
        this.comentario = comentario;
    }

    setEsDeSommelier(esDeSommelier: boolean): void {
        this.esDeSommelier = esDeSommelier;
    }

    setFechaResena(fechaReseña: Date): void {
        this.fechaReseña = fechaReseña;
    }

    setPuntaje(puntaje: number): void {
        this.puntaje = puntaje;
    }

    estaEnPeriodo(fechaInicio: Date, fechaFin: Date): boolean {
        return this.fechaReseña >= fechaInicio && this.fechaReseña <= fechaFin;
    }

    sosDeSommelier(): boolean {
        return this.esDeSommelier;
    }
}
