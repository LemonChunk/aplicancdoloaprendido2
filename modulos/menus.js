import * as h from './herramientas.js';
import { mostrarTarea, editarTarea, listaTareas } from './ListaTareas.js';
export function menuPrincipal() {
    console.log("¡Hola Olivia!\t\n ¿Qué deseas hacer?");
    console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir.");
    let opcion = h.teclado("Su opción: ");
    return opcion;
}
export function menuVerTareas() {
    console.log("¿Qué tareas desea ver?\n[1] Todas.\n[2] Pendientes.\n[3] En Curso\n[4] Terminadas.\n[0] Volver");
    let opcion = String(h.teclado("Su opción: "));
    return opcion;
}
export function menuAgregarTarea(tarea) {
    console.log("Está creando una nueva tarea.\n\nPara ingresar datos, seleccione una opción");
    console.log(`[1] Ingresar titulo(Actual: ${tarea.titulo})`);
    console.log(`[2] Ingresar Descripción(Actual: ${tarea.descripcion})`);
    console.log(`[3] Ingresar estado(Actual: ${tarea.estado})`);
    console.log(`[4] Ingresar dificultad(Actual: ${tarea.dificultad})`);
    console.log(`[5] Ingresar fecha de Vencimiento(Actual: ${tarea.fechaVencimiento})`);
    console.log("Presione 0 para terminar de crearla y guardar los datos.\nPresione X para cancelar la ");
    let opcion = h.teclado("Su opción: ");
    return opcion;
}
function estaIndice(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (index === array[i]) {
            return true;
        }
    }
    return false;
}
export function verDetalles(indices) {
    let index, editar;
    console.log("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver.");
    index = Number(h.teclado("Su opción: "));
    if (index != 0) {
        while (isNaN(index) || !estaIndice(indices, index - 1)) {
            index = Number(h.teclado("Opción inválida, ingrese nuevamente: "));
        }
    }
    h.limpiarPantalla();
    if (index === 0) {
        console.log("Volviendo al menú anterior.");
    }
    else {
        console.log("Esta es la tarea que elegiste.");
        mostrarTarea(index - 1);
        console.log("\nSi deseas editarla, presione E, o 0 para volver.");
        editar = h.teclado("Su opción: ");
        while (editar != "E" && editar != "0") {
            editar = h.teclado("opción inválida, ingrese nuevamente: ");
        }
        if (editar === "0") {
            h.limpiarPantalla();
            console.log("Volviendo al menú anterior.");
        }
        else {
            editarTarea(index - 1);
        }
    }
}
export function mostrarCoincidencias(array, b) {
    console.log(`Hubieron ${b} coincidencias en la búsqueda: `);
    for (let i = 0; i < array.length; i++) {
        console.log(`[${array[i] + 1}] ${listaTareas[array[i]].titulo} `);
    }
    verDetalles(array);
}
