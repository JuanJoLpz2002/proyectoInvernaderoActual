"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarVentas/', ventasController_1.ventasController.mostrar_ventas);
        this.router.get('/obtenerVentasporUsuario/:id', ventasController_1.ventasController.vPorUsuario);
        this.router.post('/agregarVenta/', ventasController_1.ventasController.agregarVenta);
        ///////////////tabla usuarios ventas/////
        this.router.get('/UsuariosVentas/mostrarVentas/', ventasController_1.ventasController.mostrar_uv);
        this.router.get('/UsuariosVentas/mostrarProductosdeV/:id', ventasController_1.ventasController.productosdeV);
        this.router.post('/UsuariosVentas/agregarPlantaVenta/', ventasController_1.ventasController.agregarPlantaVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
