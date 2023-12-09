"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventarioController_1 = require("../controllers/inventarioController");
const auth_1 = require("../middleware/auth");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarInventario/', auth_1.validarToken, inventarioController_1.inventarioController.mostrar_Inventario);
        this.router.get('/obtenerCantidad/:id', auth_1.validarToken, inventarioController_1.inventarioController.listOne);
        this.router.post('/agregarTInventario/', auth_1.validarToken, inventarioController_1.inventarioController.agregarTuplaInv);
        this.router.put('/actualizarCantidad/:id', auth_1.validarToken, inventarioController_1.inventarioController.actualizarInv);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
