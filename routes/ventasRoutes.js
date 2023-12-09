"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
const auth_1 = require("../middleware/auth");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarVentas/', auth_1.validarToken, ventasController_1.ventasController.mostrar_ventas);
        this.router.get('/obtenerVentasporUsuario/:id', auth_1.validarToken, ventasController_1.ventasController.vPorUsuario);
        this.router.post('/agregarVenta/', auth_1.validarToken, ventasController_1.ventasController.agregarVenta);
        ///////////////tabla usuarios ventas/////
        this.router.get('/UsuariosVentas/mostrarVentas/', auth_1.validarToken, ventasController_1.ventasController.mostrar_uv);
        this.router.get('/UsuariosVentas/mostrarProductosdeV/:id', auth_1.validarToken, ventasController_1.ventasController.productosdeV);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
