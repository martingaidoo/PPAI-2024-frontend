"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodega = void 0;
var Bodega = /** @class */ (function () {
    function Bodega(nombre, descripcion, historia, coordenadasUbicacion, periodoActualizacion, regionVitivinicola) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.historia = historia;
        this.coordenadasUbicacion = coordenadasUbicacion;
        this.periodoActualizacion = periodoActualizacion;
        this.regionVitivinicola = regionVitivinicola;
    }
    Bodega.prototype.getNombre = function () {
        return this.nombre;
    };
    Bodega.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Bodega.prototype.getHistoria = function () {
        return this.historia;
    };
    Bodega.prototype.obtenerUbicacion = function () {
        var nombreRegionVitivinicola = this.regionVitivinicola.getNombre();
        var _a = this.regionVitivinicola.obtenerProvincia(), provincia = _a[0], pais = _a[1];
        return [nombreRegionVitivinicola, provincia, pais];
    };
    Bodega.prototype.getPeriodoActualizacion = function () {
        return this.periodoActualizacion;
    };
    Bodega.prototype.getRegionVitivinicola = function () {
        return this.regionVitivinicola;
    };
    Bodega.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Bodega.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Bodega.prototype.setHistoria = function (historia) {
        this.historia = historia;
    };
    Bodega.prototype.setUbicacion = function (coordenadasUbicacion) {
        this.coordenadasUbicacion = coordenadasUbicacion;
    };
    Bodega.prototype.setPeriodoActualizacion = function (periodoActualizacion) {
        this.periodoActualizacion = periodoActualizacion;
    };
    Bodega.prototype.setRegionVitivinicola = function (regionVitivinicola) {
        this.regionVitivinicola = regionVitivinicola;
    };
    return Bodega;
}());
exports.Bodega = Bodega;
