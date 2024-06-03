"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionVitivinicola = void 0;
var RegionVitivinicola = /** @class */ (function () {
    function RegionVitivinicola(nombre, descripcion, provincia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.provincia = provincia;
    }
    RegionVitivinicola.prototype.getNombre = function () {
        return this.nombre;
    };
    RegionVitivinicola.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    RegionVitivinicola.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    RegionVitivinicola.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    RegionVitivinicola.prototype.obtenerProvincia = function () {
        var nombreProvincia = this.provincia.getNombre();
        var nombrePais = this.provincia.obtenerPais().getNombre();
        return [nombreProvincia, nombrePais];
    };
    return RegionVitivinicola;
}());
exports.RegionVitivinicola = RegionVitivinicola;
