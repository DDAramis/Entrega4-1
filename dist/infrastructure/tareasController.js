"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTareasController = exports.quitarTareaController = exports.marcarTareaComoCompletadaController = exports.agregarTareaController = void 0;
const tareasServices_1 = require("../application/tareasServices");
const agregarTareaController = (req, res) => {
    const { descripcion } = req.body;
    (0, tareasServices_1.agregarTarea)(descripcion);
    res.status(201).json({ message: 'Tarea añadida correctamente' });
};
exports.agregarTareaController = agregarTareaController;
const marcarTareaComoCompletadaController = (req, res) => {
    const { descripcion } = req.params;
    (0, tareasServices_1.marcarTareaComoCompletada)(descripcion);
    res.json({ message: 'Tarea marcada como completada' });
};
exports.marcarTareaComoCompletadaController = marcarTareaComoCompletadaController;
const quitarTareaController = (req, res) => {
    const { descripcion } = req.params;
    (0, tareasServices_1.quitarTarea)(descripcion);
    res.json({ message: 'Tarea eliminada correctamente' });
};
exports.quitarTareaController = quitarTareaController;
const obtenerTareasController = (req, res) => {
    const tareas = (0, tareasServices_1.obtenerTareas)();
    res.json(tareas);
};
exports.obtenerTareasController = obtenerTareasController;
