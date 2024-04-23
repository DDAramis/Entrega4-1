import { Request, Response } from 'express';
import { agregarTarea, marcarTareaComoCompletada, quitarTarea, obtenerTareas } from '../application/tareasServices';

export const agregarTareaController = (req: Request, res: Response) => {
  const { descripcion } = req.body;
  agregarTarea(descripcion);
  res.status(201).json({ message: 'Tarea añadida correctamente' });
};

export const marcarTareaComoCompletadaController = (req: Request, res: Response) => {
  const { descripcion } = req.params;
  marcarTareaComoCompletada(descripcion);
  res.json({ message: 'Tarea marcada como completada' });
};

export const quitarTareaController = (req: Request, res: Response) => {
  const { descripcion } = req.params;
  quitarTarea(descripcion);
  res.json({ message: 'Tarea eliminada correctamente' });
};

export const obtenerTareasController = (req: Request, res: Response) => {
  const tareas = obtenerTareas();
  res.json(tareas);
};
