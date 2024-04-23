"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosList = require('../infrastructure/expressServer2');
const app = (0, express_1.default)();
const port = 3000;
app.get('/tareas', todosList.list);
app.post('/tareas', todosList.create);
app.put('/tareas/:description', todosList.update);
app.delete('/tareas/:descripcion', todosList.delete);
app.get('/tareas', todosList.get);
app.listen(port, () => {
    console.log('Arrancando Aplicacion');
});
