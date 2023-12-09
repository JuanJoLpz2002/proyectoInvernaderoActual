"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuidadosController_1 = require("../controllers/cuidadosController");
const auth_1 = require("../middleware/auth");
class CuidadosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCuidados/', auth_1.validarToken, cuidadosController_1.cuidadosController.mostrar_cuidados);
        this.router.get('/obtenerCuidado/:id', auth_1.validarToken, cuidadosController_1.cuidadosController.listOne);
        this.router.post('/agregarCuidado/', auth_1.validarToken, cuidadosController_1.cuidadosController.agregarCuidado);
    }
}
const ventasRoutes = new CuidadosRoutes();
exports.default = ventasRoutes.router;
