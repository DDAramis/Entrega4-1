"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tareasServices_1 = require("../application/tareasServices");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/tareas', (req, res) => {
    const { descripcion } = req.body;
    (0, tareasServices_1.agregarTarea)(descripcion);
    res.status(201).json({ message: 'Tarea añadida correctamente' });
});
app.put('/tareas/:descripcion', (req, res) => {
    const { descripcion } = req.params;
    (0, tareasServices_1.marcarTareaComoCompletada)(descripcion);
    res.json({ message: 'Tarea marcada como completada' });
});
app.delete('/tareas/:descripcion', (req, res) => {
    const { descripcion } = req.params;
    (0, tareasServices_1.quitarTarea)(descripcion);
    res.json({ message: 'Tarea eliminada correctamente' });
});
app.get('/tareas', (req, res) => {
    const tareas = (0, tareasServices_1.obtenerTareas)();
    res.json(tareas);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
