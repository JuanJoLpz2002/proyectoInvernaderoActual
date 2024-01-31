"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventarioController_1 = require("../controllers/inventarioController");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarInventario/', inventarioController_1.inventarioController.mostrar_Inventario);
        this.router.get('/obtenerCantidad/:id', inventarioController_1.inventarioController.listOne);
        this.router.post('/agregarTInventario/', inventarioController_1.inventarioController.agregarTuplaInv);
        this.router.put('/actualizarCantidad/:id', inventarioController_1.inventarioController.actualizarInv);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
