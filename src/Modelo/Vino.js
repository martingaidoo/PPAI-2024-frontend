"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vino = void 0;
var Vino = /** @class */ (function () {
    function Vino(nombre, varietal, anio, bodega, precio) {
        this.nombre = nombre;
        this.varietal = varietal;
        this.anio = anio;
        this.bodega = bodega;
        this.precio = precio;
        this.reseñas = [];
    }
    Vino.prototype.getNombre = function () {
        return this.nombre;
    };
    Vino.prototype.obtenerVarietal = function () {
        return this.varietal;
    };
    Vino.prototype.getAnio = function () {
        return this.anio;
    };
    Vino.prototype.obtenerBodega = function () {
        return this.bodega;
    };
    Vino.prototype.getPrecio = function () {
        return this.precio;
    };
    Vino.prototype.obtenerReseñas = function (fechaInicio, fechaFin) {
        return this.reseñas.filter(function (reseña) { return reseña.getFechaReseña() >= fechaInicio && reseña.getFechaReseña() <= fechaFin && reseña.getEsDeSommelier(); });
    };
    Vino.prototype.calcularRanking = function () {
        var totalPuntajes = this.reseñas.reduce(function (acc, reseña) { return acc + reseña.getPuntaje(); }, 0);
        return this.reseñas.length > 0 ? totalPuntajes / this.reseñas.length : 0;
    };
    Vino.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Vino.prototype.setVarietal = function (varietal) {
        this.varietal = varietal;
    };
    Vino.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vino.prototype.setBodega = function (bodega) {
        this.bodega = bodega;
    };
    Vino.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Vino.prototype.agregarReseña = function (reseña) {
        this.reseñas.push(reseña);
    };
    return Vino;
}());
exports.Vino = Vino;
