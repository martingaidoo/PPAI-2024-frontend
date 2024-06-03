"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pais = void 0;
var Pais = /** @class */ (function () {
    function Pais(nombre) {
        this.nombre = nombre;
        this.provincia = [];
    }
    Pais.prototype.getNombre = function () {
        return this.nombre;
    };
    Pais.prototype.getProvincias = function () {
        return this.provincia;
    };
    Pais.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Pais.prototype.setProvincias = function (provincias) {
        this.provincia = provincias;
    };
    Pais.prototype.agregarProvincia = function (provincia) {
        this.provincia.push(provincia);
    };
    return Pais;
}());
exports.Pais = Pais;
