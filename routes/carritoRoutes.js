"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarrito/', carritoController_1.carritoController.mostrar_carrito);
        this.router.post('/agregarACarrito/', carritoController_1.carritoController.agregarACarrito);
        this.router.delete('/eliminarDeCarrito/:id_usuario/:id_planta', carritoController_1.carritoController.eliminar_de_Carrito);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
