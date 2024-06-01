"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provincia = void 0;
var Provincia = /** @class */ (function () {
    function Provincia(nombre, pais) {
        this.nombre = nombre;
        this.pais = pais;
        this.region = [];
    }
    Provincia.prototype.getNombre = function () {
        return this.nombre;
    };
    Provincia.prototype.obtenerPais = function () {
        return this.pais;
    };
    Provincia.prototype.getRegiones = function () {
        return this.region;
    };
    Provincia.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Provincia.prototype.setPais = function (pais) {
        this.pais = pais;
    };
    Provincia.prototype.setRegiones = function (regiones) {
        this.region = regiones;
    };
    Provincia.prototype.agregarRegion = function (region) {
        this.region.push(region);
    };
    return Provincia;
}());
exports.Provincia = Provincia;
