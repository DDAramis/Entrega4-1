"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTareas = exports.quitarTarea = exports.marcarTareaComoCompletada = exports.agregarTarea = void 0;
const tarea_1 = require("../domain/tarea");
const listaDeTareas = new tarea_1.ListaDeTareas();
const agregarTarea = (descripcion) => {
    listaDeTareas.agregarTarea(descripcion);
};
exports.agregarTarea = agregarTarea;
const marcarTareaComoCompletada = (descripcion) => {
    listaDeTareas.marcarTareaComoCompletada(descripcion);
};
exports.marcarTareaComoCompletada = marcarTareaComoCompletada;
const quitarTarea = (descripcion) => {
    listaDeTareas.quitarTarea(descripcion);
};
exports.quitarTarea = quitarTarea;
const obtenerTareas = () => {
    return listaDeTareas.obtenerTareas();
};
exports.obtenerTareas = obtenerTareas;
