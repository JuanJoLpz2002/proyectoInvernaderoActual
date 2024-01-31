"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoController_1 = require("../controllers/tipoController");
class TipoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosTipos/', tipoController_1.tipoController.mostrar_todos_tipos);
        this.router.get('/obtenerTipo/:id', tipoController_1.tipoController.listOne);
        this.router.post('/crearTipo/', tipoController_1.tipoController.createTipo);
        this.router.put('/actualizarTipo/:id', tipoController_1.tipoController.actualizarTipo);
        this.router.delete('/eliminarTipo/:id', tipoController_1.tipoController.eliminarTipo);
    }
}
const tipoRoutes = new TipoRoutes();
exports.default = tipoRoutes.router;
