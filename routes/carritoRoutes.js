"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarrito/', auth_1.validarToken, carritoController_1.carritoController.mostrar_carrito);
        this.router.post('/agregarACarrito/', auth_1.validarToken, carritoController_1.carritoController.agregarACarrito);
        this.router.delete('/eliminarDeCarrito/:id_usuario/:id_planta', auth_1.validarToken, carritoController_1.carritoController.eliminar_de_Carrito);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
