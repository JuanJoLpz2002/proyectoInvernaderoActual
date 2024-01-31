"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plantasController_1 = require("../controllers/plantasController");
class PlantasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasPlantas/', plantasController_1.plantasController.mostrar_todas_plantas);
        this.router.get('/obtenerPlanta/:id', plantasController_1.plantasController.listOne);
        this.router.post('/agregarPlanta/', plantasController_1.plantasController.agregarPlanta);
        this.router.put('/actualizarPlanta/:id', plantasController_1.plantasController.actualizarPlanta);
        this.router.delete('/eliminarPlanta/:id', plantasController_1.plantasController.eliminarPlanta);
        this.router.get('/listarPlantasTipo/:id', plantasController_1.plantasController.listarPlantasTipo);
    }
}
const plantasRoutes = new PlantasRoutes();
exports.default = plantasRoutes.router;
