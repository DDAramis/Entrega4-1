import express, { Request, Response } from 'express';
import { agregarTareaController, marcarTareaComoCompletadaController, quitarTareaController, obtenerTareasController } from '../infrastructure/tareasController';

const app = express();
app.use(express.json());


app.post('/tareas', agregarTareaController);
app.put('/tareas/:descripcion', marcarTareaComoCompletadaController);
app.delete('/tareas/:descripcion', quitarTareaController);
app.get('/tareas', obtenerTareasController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

