"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuidadosController_1 = require("../controllers/cuidadosController");
class CuidadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCuidados/', cuidadosController_1.cuidadosController.mostrar_cuidados);
        this.router.get('/obtenerCuidado/:id', cuidadosController_1.cuidadosController.listOne);
        this.router.post('/agregarCuidado/', cuidadosController_1.cuidadosController.agregarCuidado);
    }
}
const ventasRoutes = new CuidadosRoutes();
exports.default = ventasRoutes.router;
