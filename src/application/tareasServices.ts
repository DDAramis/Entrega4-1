import { ListaDeTareas } from "../domain/tarea";

const listaDeTareas = new ListaDeTareas();

export const agregarTarea = (descripcion: string): void => {
  listaDeTareas.agregarTarea(descripcion);
};

export const marcarTareaComoCompletada = (descripcion: string): void => {
  listaDeTareas.marcarTareaComoCompletada(descripcion);
};

export const quitarTarea = (descripcion: string): void => {
  listaDeTareas.quitarTarea(descripcion);
};

export const obtenerTareas = (): { descripcion: string; completada: boolean }[] => {
  return listaDeTareas.obtenerTareas();
};


  