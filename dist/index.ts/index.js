"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tareasController_1 = require("../infrastructure/tareasController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/tareas', tareasController_1.agregarTareaController);
app.put('/tareas/:descripcion', tareasController_1.marcarTareaComoCompletadaController);
app.delete('/tareas/:descripcion', tareasController_1.quitarTareaController);
app.get('/tareas', tareasController_1.obtenerTareasController);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
