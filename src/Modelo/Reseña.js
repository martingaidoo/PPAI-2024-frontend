"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reseña = void 0;
var Reseña = /** @class */ (function () {
    function Reseña(comentario, esDeSommelier, fechaReseña, puntaje) {
        this.comentario = comentario;
        this.esDeSommelier = esDeSommelier;
        this.fechaReseña = fechaReseña;
        this.puntaje = puntaje;
    }
    Reseña.prototype.getComentario = function () {
        return this.comentario;
    };
    Reseña.prototype.getEsDeSommelier = function () {
        return this.esDeSommelier;
    };
    Reseña.prototype.getFechaReseña = function () {
        return this.fechaReseña;
    };
    Reseña.prototype.getPuntaje = function () {
        return this.puntaje;
    };
    Reseña.prototype.setComentario = function (comentario) {
        this.comentario = comentario;
    };
    Reseña.prototype.setEsDeSommelier = function (esDeSommelier) {
        this.esDeSommelier = esDeSommelier;
    };
    Reseña.prototype.setFechaResena = function (fechaReseña) {
        this.fechaReseña = fechaReseña;
    };
    Reseña.prototype.setPuntaje = function (puntaje) {
        this.puntaje = puntaje;
    };
    return Reseña;
}());
exports.Reseña = Reseña;
