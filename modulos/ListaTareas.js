import * as h from './herramientas.js';
import * as t from './Tarea.js';
import { verDetalles, mostrarCoincidencias } from './menus.js';
export const listaTareas = [];
export function verTodas() {
    const arrayIndices = [];
    console.log("Estas son todas tus tareas:");
    for (let i = 0; i < listaTareas.length; i++) {
        arrayIndices.push(i);
        console.log(`[${i + 1}] ${listaTareas[i].titulo}.`);
    }
    verDetalles(arrayIndices);
}
export function verConCondicion(s) {
    let band = 0;
    const arrayIndices = [];
    console.log("Estas son tus tareas con el estado seleccionado:");
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].estado === s) {
            band = 1;
            arrayIndices.push(i);
            console.log(`[${i + 1}] ${listaTareas[i].titulo}.`);
        }
    }
    if (band == 0) {
        console.log("No tienes tareas con este estado.");
        h.esperarTeclaParaContinuar();
    }
    else {
        verDetalles(arrayIndices);
    }
}
export function mostrarTarea(i) {
    console.log("-----------------------------------");
    console.log(`Título: ${listaTareas[i].titulo}.`);
    console.log(`Descripción: ${listaTareas[i].descripcion}.`);
    console.log(`Estado: ${listaTareas[i].estado}`);
    console.log(`Dificultad: ${listaTareas[i].dificultad}`);
    console.log(`Fecha de creación: ${listaTareas[i].fechaCreacion}.`);
    console.log(`Fecha de última modificación: ${listaTareas[i].fechaUltimoCambio}.`);
    console.log(`Fecha de vencimiento: ${listaTareas[i].fechaVencimiento}.`);
    console.log("-----------------------------------");
}
export function editarTarea(i) {
    let editar, fecha, tareaAux;
    tareaAux = listaTareas[i];
    let fechaAhora = new Date();
    do {
        h.limpiarPantalla();
        console.log(`Estás editando la tarea ${tareaAux.titulo}`);
        console.log(`[1] editar titulo(Actual: ${tareaAux.titulo})`);
        console.log(`[2] editar Descripción(Actual: ${tareaAux.descripcion})`);
        console.log(`[3] editar estado(Actual: ${tareaAux.estado}, oprima [C] para marcarla como cancelada)`);
        console.log(`[4] editar dificultad(Actual: ${tareaAux.dificultad})`);
        console.log(`[5] editar fecha de Vencimiento(Actual: ${tareaAux.fechaVencimiento}\n)`);
        console.log("Presione 0 para terminar de editarla y guardar los datos.");
        editar = h.teclado("Su opción: ");
        tareaAux.fechaUltimoCambio = fechaAhora;
        h.limpiarPantalla();
        switch (editar) {
            case "1":
                tareaAux.titulo = t.ingresarTitulo();
                break;
            case "2":
                tareaAux.descripcion = t.ingresarDescripcion();
                break;
            case "3":
                t.ingresarEstado(tareaAux);
                break;
            case "4":
                t.ingresarDificultad(tareaAux);
                break;
            case "5":
                console.log("Desea...\n[0]Dejar en blanco fecha de vencimiento\n[1]Modificarla fecha de vencimiento\n Cualquier otro valor permite volver atrás.");
                fecha = h.teclado("Su opción: ");
                if (fecha === "0") {
                    tareaAux.fechaVencimiento = 'Sin fecha de vencimiento';
                }
                else {
                    if (fecha === "1") {
                        tareaAux.fechaVencimiento = t.ingresarFechaVencimiento();
                    }
                }
                break;
            case "C":
                console.log("Usted ha marcado a la tarea como cancelada.");
                h.esperarTeclaParaContinuar();
                tareaAux.estado = 'CANCELADA';
                break;
            case "0":
                ordenarTareas();
                console.log("Datos guardados con éxito.\n Volviendo al menú anterior.");
                h.esperarTeclaParaContinuar();
                break;
            default:
                console.log("Opción inválida.");
                h.esperarTeclaParaContinuar();
                break;
        }
    } while (editar != "0");
}
export function ordenarTareas() {
    let tareaAux;
    for (let i = 0; i < listaTareas.length; i++) {
        for (let j = 0; j < listaTareas.length - 1; j++) {
            if (listaTareas[j].titulo > listaTareas[j + 1].titulo) {
                tareaAux = listaTareas[j];
                listaTareas[j] = listaTareas[j + 1];
                listaTareas[j + 1] = tareaAux;
            }
        }
    }
}
export function buscarTarea(cadena) {
    let arrayIndices = [], band = 0;
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].titulo.toLowerCase().includes(cadena.toLowerCase())) {
            arrayIndices.push(i);
            band++;
        }
    }
    if (band === 0) {
        console.log("No hay tareas relacionadas con la búsqueda.");
        h.esperarTeclaParaContinuar();
    }
    else {
        mostrarCoincidencias(arrayIndices, band);
    }
}
